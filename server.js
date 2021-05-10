const express = require ('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//const {} = require(server end notes script);
const {notes} = require('./db/db.json');

//JSON parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/api/index',(req,res)=>{
    res.json(notes);
    console.log(notes);
});
//app.use('/api', apiRoutes);
app.get('/api/notes', (req,res) =>{
    res.json(notes);
    console.log("HELLO");
    console.log(notes);
});



app.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length.toString();
    console.log(notes);
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// HTML serve routes
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));//opens notes.html when our endpoint is URL/notes
});
app.get('*', (req, res) => {//catch unspecified endpoints
    res.sendFile(path.join(__dirname, './public/index.html'));
});

function createNewNote( body,notesArr){
    console.log(body);
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname,'./db/db.json'),
        JSON.stringify({notes: notesArr }, null, 2)
    );
    return note;
};



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});//sdf