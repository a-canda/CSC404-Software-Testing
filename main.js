const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose");
    dbController = require("./controllers/dbController");


mongoose.connect(
    "mongodb://localhost:27017/csc404_db",
    {useNewUrlParser: true}
);

const db = mongoose.connection;

app.set("port", process.env.PORT || 3000);

// Enable EJS layout rendering
app.use(layouts);
app.set('layout', './layouts/full-width')
app.set("view engine", "ejs");

/*
Tell the Express.js app to use body-parser for processing
URL-encoded and JSON parameters.
 */
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

//Static views
//app.use(express.static("public"));

// Route for the homepage
app.get("/", (req, res) => {
   res.render('index', {
       title: 'Home Page'
   });
});

// Route to add test, display test pages
app.get('/displayTests', homeController.showTestCases);
app.post('/addTest', homeController.addTestForm, homeController.showTestCases);
app.get('/addTest', homeController.getNewTestCase);

// Error controller routes
// MUST BE PLACED AFTER ALL GET/POST
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);



// Set application to listen at port 3000
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`)
});
