"use strict";
exports.__esModule = true;
exports.Setup = void 0;
var express = require("express"); //Imports the express package
var app = express(); // Create a new express app that will be used here next
var requestIp = require('request-ip'); //Imports the package to get the valid IP of the user
app.use(requestIp.mw()); //Uses its config
var Setup = /** @class */ (function () {
    /**
     *
     * @param data : The data that will be sent in an object to the manager of the data.
     * @param port : The port that will be used. (Optional - Deafult is 8080)
     */
    function Setup(data, port) {
        this.port = port | 8080; //The port value
        this.data = data; //The data value
        this.all = app; //The app value
        Object.entries(this.data).forEach(function (_a, index) {
            var key = _a[0], value = _a[1];
            var pathh = key; //Get the path from the key of the object
            var contentt = value['content']; //Get the content of every path
            var consolee = value['console']; //Get the console for every path (if there is)
            var status = value['status'] | 200; //Get the status of the page from the object
            app.get(pathh, function (req, res) {
                res.send(contentt); //Sends the content
                res.status(status); //Sends the status of the page
                if (consolee === "") {
                    //Nothing happens
                }
                else { //If the user typed something in the console part
                    var after = consolee.replaceAll("$ip", req.clientIp).replaceAll("$path", req.baseUrl + req.path); //Replaces the $ function(s) in their values
                    console.log(after); //Logs it
                }
            });
        });
    }
    Setup.prototype.start = function () {
        this.all.listen(this.port); //Make the server to listen to this port
        console.log("The server is opened on port ".concat(this.port, "\nLink: http://localhost:").concat(this.port)); //Logs the info
    };
    return Setup;
}());
exports.Setup = Setup;
