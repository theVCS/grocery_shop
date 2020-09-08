const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
mongoose.connect('mongodb://localhost:27017/grocery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const port = 80;

// it provides us all the things in static folder in url /static
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// now we can render html in ejs
app.set('view engine', 'ejs');

// set the view directory
app.set('views', path.join(__dirname, 'views'));


//home page
app.get('/', (req, res) => {

    params = {
        "title": "home",
    }
    res.status(200).render("home", params);
})

app.post("/search", (req, res)=>{
    res.status(200).send("search");
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));