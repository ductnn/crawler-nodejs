const port = 3000;
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');

const app = new express();

// Middleware
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    request("https://laptrinhcuocsong.com", (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            res.render("index", {
                html: body
            });
        };
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));