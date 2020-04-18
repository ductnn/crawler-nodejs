const port = 3000;
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');
const fs = require('fs');

const app = new express();
const siteUrl = "https://coders-x.com/blog/";

// Middleware
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", (req, res) => {
    request(siteUrl, (err, response, body) => {
        if (err) {
            console.log(err);
            res.render("index", { html: "Loading wrong!!!" });
        } else {
            // fs.writeFile('./logs/input.txt', body, (err) => {
            //     if (err) {
            //         console.log(err);
            //     };
            //     console.log("write success");
            // });

            $ = cheerio.load(body);
            var list = $(body).find("article#post");
            res.render("index", {
                html: list
            });
        };
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));