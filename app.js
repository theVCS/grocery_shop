const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
mongoose.connect('mongodb://localhost:27017/grocery_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const port = 80;

// schema for products
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    keyword: String,
    description: String,
    price: String,
    orders: String,
    img: String,
});

const Grocery = mongoose.model('groceries', productSchema);

// it provides us all the things in static folder in url /static
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// now we can render html in ejs
app.set('view engine', 'ejs');

// set the view directory
app.set('views', path.join(__dirname, 'views'));


//home page
app.get('/', (req, res) => {
    Grocery.find().sort({
        'orders': -1
    }).limit(8).exec(function (err, results) {

        params = {
            title: "home",
            top_products: results,
        };
        res.status(200).render("home", params);
    });
})

app.get("/product_view", (req, res) => {

    //gettting product id
    let product_id = req.query.product_id;

    Grocery.find({
        id: product_id
    }).exec(function (err, result){

        params = {
            "title": "Product View",
            "product": result[0],
        }
        res.status(200).render("product_view", params);
    })
})

app.get("/buy", (req, res) => {

    //gettting product id
    let product_id = req.query.product_id;

    params = {
        "title": "Product View",
    }

    res.status(200).render("buy", params);
})

app.get("/wishlist", (req, res) => {

    //gettting product id
    let product_id = req.query.product_id;

    params = {
        "title": "Product View",
    }

    res.status(200).render("wishlist", params);
})

app.get("/product_type", (req, res) => {

    //gettting product id
    let product_type = req.query["type"];

    Grocery.find({
        type: product_type
    }).exec(function (err, result){

        params = {
            "title": product_type,
            "product": result,
        }
        console.log(result)
        res.status(200).render("product_type", params);
    })
})

app.get("/signup", (req, res) => {

    //gettting product id

    params = {
        "title": "SignUp",
    }

    res.status(200).render("signup", params);
})

app.get("/login", (req, res) => {

    //gettting product id

    params = {
        "title": "Login",
    }

    res.status(200).render("login", params);
})

app.get("/contact", (req, res) => {

    //gettting product id

    params = {
        "title": "Contact Us",
    }

    res.status(200).render("contact", params);
})

app.post("/search", (req, res) => {

    params = {
        "title": "home",
    }
    res.status(200).render("product_view", params);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));