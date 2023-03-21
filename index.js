const express = require('express');
const cors = require('cors');
app = express(); //Initializing the express
app.use(cors());
app.use(express.static("todo"));

let count =0;
const increment =() =>{
    count +=1;
}

// app.get(('/date'), (req, res) =>{
//     //res.send("Today is Holi");
//     increment();
//     res.json(count);
// });

app.get(('/where'), (req,res) =>{
    //res.send("Rosary HHall");
    increment();
    res.json(count);
});
app.get(('*'), (req,res) =>{
    res.status(404).send("Sorry, Page not found");
});
app.listen(3000);