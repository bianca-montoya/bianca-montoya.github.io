/*jslint esversion: 6, browser: true*/
// Dependencies
const express = require('express');
// Require collection models
const Note = require('../models/Note.js');
const Article = require('../models/Article.js');
// Require request and cheerio to make scraping possible
const request = require('request');
const cheerio = require('cheerio');

// Create `router` for app and export `router` at end of file.
const router = express.Router();

// Function to check if object has any empty values
let hasEmpty = result => {
    for (let key in result) {
        if (result[key].length === 0)
            return true;
    }
    return false;
};


/* ROUTES */
// ========================================================================


// Route to load unsaved articles when site first loads
router.get('/', (req, res, next) => {
    Article.find({
            saved: false
        })
        .sort({
            date: -1
        })
        .exec((err, data) => {
            if (err) throw err;
            res.render('index', {
                content: {
                    saved: false,
                    data: data
                }
            });
        });
});

// At this route, server will scrape data from site and save it to mongoDB.
router.get("/scrape", (req, res) => {
    // Array to hold scraped data
    let result = [];
    // Send request for website
    request("https://www.nytimes.com/", function (error, response, html) {
        // Load html into cheerio and save to $ variable to serve as a shorthand for cheerio's selector commands (similar to the way jQuery works)
        let $ = cheerio.load(html);
        // Iterate over each story-link block to retrieve article information
        $("article.story.theme-summary").each(function (i, element) {
            result.push({
                title: $(this).children(".story-heading").children("a").text(),
                link: $(this).children(".story-heading").children("a").attr("href"),
                summary: $(this).children(".summary").text()
            });
        });
        res.json(result);
    });
});


// Save a new article
router.post("/articles/", function (req, res) {

    var result = {};
    // Add the title, body and href of every link, and save them as properties of the result object
    result.title = req.body.title;
    result.link = req.body.link;
    result.summary = req.body.summary;
    // Using our Article model, create a new entry
    // This effectively passes the result object to the entry (and the title and link)
    var entry = new Article(result);
    // Now, save that entry to the db
    entry.save(function (err, doc) {
        // Log any errors
        if (err) {
            res.json(err);
        }
        // Or log the doc
        else {
            res.json(doc);
        }
    });
});

// Delete a saved article
router.get("/delete/:id", function (req, res) {
    // Find just one result in the notes collection
    Article.remove({
        // Using the id in the url
        "_id": req.params.id
    }, function (error, found) {
        // log any errors
        if (error) {
            //  console.log(error);
            res.send(error);
        }
        // Otherwise, send the note to the browser
        // This will fire off the success function of the ajax request
        else {
            //  console.log(found);
            res.send(found);
        }
    });
});

// Create a new note or update an existing note
router.post("/notes/", function (req, res) {

    Note.findOneAndUpdate({
        noteid: req.body.noteid
    }, {
        $set: {
            noteid: req.body.noteid,
            body: req.body.body
        }
    }, {
        upsert: true
    }, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });


});

// Get a particular note
router.get("/notes/:id", function (req, res) {
    Note.findOne({
        noteid: req.params.id
    }, function (err, found) {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

// Delect a note
router.get("/deletenote/:id", function (req, res) {

    // Find just one result in the notes collection
    Note.remove({
        // Using the id in the url
        "noteid": req.params.id
    }, function (error, found) {
        // log any errors
        if (error) {
            //  console.log(error);
            res.json(error);
        }
        // Otherwise, send the note to the browser
        // This will fire off the success function of the ajax request
        else {
            //  console.log(found);
            res.json(found);
        }
    });
});


// This will get the articles we scraped from mongoDB
router.get("/articles", function (req, res) {
    // Grab every doc in the Articles array
    Article.find({}, function (error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            // console.log(doc);
            res.json(doc);
        }
    });
});



// Export routes for server.js to use
module.exports = router;