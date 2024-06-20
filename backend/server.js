const express = require('express')
const session = require('express-session')
const app = express()
const cors = require('cors')
const { createServer } = require('http')
const { Server } = require('socket.io')
const port = 3001
app.use(express.json())
app.use(session({
  secret: 'hello',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3000000 }
}));
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ["GET", "POST"],
  credentials: true
}))


const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin:['http://localhost:5173'],
    methods: ["GET", "POST"],
    credentials:true
  }
});
var sw;



io.on("connection", (socket) => {
  socket.join(socket.id)
  socket.on("email", async (s) => {

    const result = await doctor.findOneAndUpdate({ email: s.messages }, { $set: { socket: socket.id } })
  })

});




let a;
const { MongoClient, ObjectId } = require("mongodb");
const { log } = require('console')
const { fail } = require('assert')
const uri = "mongodb+srv://spp23102003:@cluster0.vhincym.mongodb.net/";
const client = new MongoClient(uri);

const database = client.db("Healthcare");
const doctor = database.collection("doctor");
const Users = database.collection("users");
const lab = database.collection("lab");
const booktest = database.collection("booktest");
const bookdoctor = database.collection("bookdoctor");




const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { SpacesServiceClient } = require('@google-apps/meet').v2;
const { auth } = require('google-auth-library');
const { url } = require('inspector');
var link;



const SCOPES = ['https://www.googleapis.com/auth/meetings.space.created'];

const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return auth.fromJSON(credentials);
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Creates a new meeting space.
 * @param {OAuth2Client} authClient An authorized OAuth2 client.
 */
async function createSpace(authClient) {
  const meetClient = new SpacesServiceClient({
    authClient: authClient
  });
  // Construct request
  const request = {
  };

  // Run request
  const response = await meetClient.createSpace(request);
  link = response[0].meetingUri;
  let a = await response[0].meetingCode
  let meetingcode = await 'https://meet.google.com/' + a;
  console.log(`Meet URL: ${response[0].meetingUri}`);
  return meetingcode
}

async function rddoctor(a, meetingCode) {
  const oid = new ObjectId(a.id);
  const result = await doctor.findOne({ _id: oid });
  io.to(result.socket).emit("meet", { a, meetingCode })


}

// app.get('/docdesh/:key',(req,res)=>{
//   const b = req.params.key;
//   res.send(b)
// })

app.post('/meeting', async (req, res) => {
  a = req.body
  const meetingCode = await authorize().then(createSpace).catch(console.error);
  rddoctor(a, meetingCode);
  res.send(meetingCode);
})









//login
app.post('/login', async (req, res) => {
  a = req.body
  if (a.type == "doctor") {
    const result = await doctor.findOne({ email: a.email })
    if (result != null && result.password == a.password) {
      req.session.name = result.name;
      req.session.email = a.email;
      req.session.doctor = true;
      console.log("succes doctor login");
      res.status(202, "sucsess");
      res.json("doctor login success");
    }
    else {
      console.log("fail doctor login");
      res.status(200, 'invalid');
      res.json("invalid doctor-login info");
    }
  }
  if (a.type == "user") {
      const result = await Users.findOne({ email: a.email })
      if (result != null && result.password == a.password) {
        req.session.name = result.name;
        req.session.email = a.email;
        res.status(202, "sucsess");
        res.json("user login success")
      }
      else {
        res.status(200, 'invalid');
        res.json("invalid user-login info")
      }
    
  }
});

//register
app.post('/register', async (req, res) => {
  a = req.body;
  if (a.type == "doctor") {
    const result = await doctor.findOne({ email: a.email })
    if (result != null) {

      console.log("fail doctor register-email already taken");
      res.status(200).json("invalid doctor-email already taken")
    }
    else {
      req.session.name = a.name;
      req.session.email = a.email;
      req.session.doctor = true;

      const result = await doctor.insertOne(a);
      console.log("success-doctor");
      res.status(202).send("ok");
    }
  }
  else {
    {
      const result = await Users.findOne({ email: a.email })
      if (result != null) {
        console.log("fail user register-email already taken");
        res.status(200).send("invalid user-email already taken")
      }
      else {
        req.session.name = a.name;
        req.session.email = a.email;
        const result = await Users.insertOne(a);
        console.log("success-user");
        res.status(202).send(a);
      }
    }
  }
});
// session-info
app.get('/', (req, res) => {
  if (req.session.name) {
    if (req.session.doctor) {

      res.json({ valid: true, name: req.session.name, doctor: true, email: req.session.email })
    }
    else {
      res.json({ valid: true, name: req.session.name, doctor: false, email: req.session.email })

    }
  }
  else {
    res.json({ valid: false })
  }
})

// clear-session
app.post('/', (req, res) => {
  req.session.name = "";
  req.session.doctor = "";
  res.json({ valid: false, name: req.session.name, doctor: false })

})

//doc-info
app.get('/doctor', async (req, res) => {
  let result = await doctor.find({ type: 'doctor' }).toArray()
  res.send(result);
})




//user's booked leb-test
app.post('/booktest', async (req, res) => {
  a = req.body;
  console.log(a);
  let result = await booktest.find({ "email": a.email }).toArray();
  console.log(result);
  res.json(result);

});
app.post('/booked', async (req, res) => {
  a = req.body;
  console.log(a);
  let result = await booktest.insertOne(a);
  res.send("susses")

});


//leb test
app.get('/test', async (req, res) => {

  const data = await lab.find().toArray();
  res.send(data);

});

//lebtest inserting for admin use only
app.post('/test', async (req, res) => {
  a = req.body;
  const result = await lab.insertOne(a);
  console.log("success insert  lab-test");
  res.send(a)
});

//book doctor's appointment
// app.get('/bookdoctor', async (req, res) => {
//   a = req.body;
//   const result = await bookdoctor.insertOne(a);
//   const link ='http://localhost:3000/meeting/:'+a.docemail
//   res.redirect(link)


// });






httpServer.listen(port, () => {
  console.log("app is listening on port");
});
