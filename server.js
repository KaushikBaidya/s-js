const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dbUser:F*6ucZhkx3YwU7b@cluster0.obba8.mongodb.net/noteDB", { useNewUrlParser: true }, { useUnifiedTopology: true })

//create Schema
const noteSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", noteSchema);
//post
app.post("/checkout", function(req, res){
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save();
    res.redirect("/checkout");
})
//routes
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/a.html", function(req, res){
    res.sendFile(__dirname + "/a.html");
})
app.get("/b.html", function(req, res){
    res.sendFile(__dirname + "/b.html");
})
app.get("/c.html", function(req, res){
    res.sendFile(__dirname + "/c.html");
})

app.get("/checkout.html", function(req, res){
    res.sendFile(__dirname + "/checkout.html");
})



app.listen(3000, function(){
    console.log("server worked");
})