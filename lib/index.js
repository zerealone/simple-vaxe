"use strict";
exports.__esModule = true;
exports.Setup = void 0;
var Setup = /** @class */ (function () {
    function Setup(data, port) {
        this.port = port | 8080;
        this.data = data;
        var express = require("express");
        var app = express();
        this.all = app;
        Object.entries(this.data).forEach(function (_a, index) {
            var key = _a[0], value = _a[1];
            var pathh = key;
            var contentt = value['content'];
            var consolee = value['console'];
            app.get(pathh, function (req, res) {
                res.send(contentt);
                if (consolee === "")
                    return;
                console.log(consolee);
            });
        });
    }
    Setup.prototype.start = function () {
        this.all.listen(this.port);
        console.log("The server is opened on port ".concat(this.port, "\nLink: http://localhost:").concat(this.port));
    };
    return Setup;
}());
exports.Setup = Setup;
