const path = require("path");


module.exports = (app) => {
    app.get("/", (req, res) => {

        res.render("index", {

        });

    });

    app.get("/addTask", (req, res) => {
        

        res.render("addTask", {
            
                    });
    });

};