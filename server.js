const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
const MONGO_URL = "mongodb://admin:password@mongodb:27017/mydb?authSource=admin";
const client = new MongoClient(MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let db;

// Connect ONCE when the server starts
async function connectDB() {
    try {
        await client.connect();
        db = client.db("mydb");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

app.get("/getUsers", async (req, res) => {
    // Reuse the existing connection (very fast)
    const data = await db.collection('users').find({}).toArray();
    res.send(data);
});

app.post("/addUser", async (req, res) => {
    await db.collection('users').insertOne(req.body);
    res.status(201).send("User added");
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
