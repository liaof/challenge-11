const express = require ('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

//const {} = require(server end notes script);
const {notes} = require('./db/db.json');

//JSON parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/api/index',(req,res)=>{
    res.send(notes);
    console.log(notes);
});
//app.use('/api', apiRoutes);
app.get('/api/notes', (req,res) =>{
    res.send(notes);
    console.log("HELLO");
    console.log(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});//sdf