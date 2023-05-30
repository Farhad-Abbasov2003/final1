const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const UserSchema = new Schema(
  
  {
    image: {
      type: String,
      required: true,
    },
    
    episode: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    lorem: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", UserSchema);



app.get("/users", async (req, res) => {

    const users = await Users.find({});
    res.send(users);
});


app.get("/users/:id", async (req, res) => {

    const userId = req.params.id;
    const user = await Users.findById(userId);
    res.send(user);
});


app.post("/users", async (req, res) => {
    const updatesUser = req.body
    let user = new Users(updatesUser);

    user.save();
    res.send(user);
});


app.delete("/users/:id", async (req, res) => {

    const userId = req.params.id;
    const user = await Users.findByIdAndDelete(userId);
    res.send({ message: "Deleted Successfully" });
});


app.put("/users/:id", async (req, res) => {

    const userId = req.params.id;
    const updatedUser = req.body
    const result = await Users.findByIdAndUpdate(userId, updatedUser, { new: true });
    res.send(result);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is up on Port: ${PORT}`);
});