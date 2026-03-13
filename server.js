const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const MONGO_URL = "mongodb://root:mini_project@localhost:27017";
const client = new MongoClient(MONGO_URL);

let db;

// Connect to Mongo once when server starts
async function startServer() {

    await client.connect();
    console.log("Connected successfully to MongoDB");

    db = client.db("apnacollege-db");

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });

}

startServer();


// GET all users
app.get("/getUsers", async (req, res) => {

    const data = await db.collection("users").find({}).toArray();

    res.send(data);

});


// POST new user
app.post("/addUser", async (req, res) => {

    const userObj = req.body;
    console.log(userObj);

    const result = await db.collection("users").insertOne(userObj);

    res.send({
        message: "User added successfully",
        id: result.insertedId
    });

});
