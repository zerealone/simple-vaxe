const { Setup } = require("./lib/index");

var data = 
{
    "/":{
        content: "Hello World!",
        console: ""
    }, 
    "/hi": {
        content: "hi there ;)"
    }
};

var client = new Setup(data);

client.start();
