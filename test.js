const { Setup } = require("./lib/index");

var data = 
{
    "/":{
        content: "Hello World!",
        console: "The IP is : $ip (ipv6) \nThe path is: $path"
    }
};

var client = new Setup(data);

client.start();
