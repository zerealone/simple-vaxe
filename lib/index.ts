const express = require("express"); //Imports the express package
const app = express(); // Create a new express app that will be used here next
const requestIp = require('request-ip'); //Imports the package to get the valid IP of the user
app.use(requestIp.mw()); //Uses its config

class Setup {
    public port: number; //The port in the class
    public data: object; //The data
    public all: any; //All of the express app that we created
    /**
     * 
     * @param data : The data that will be sent in an object to the manager of the data.
     * @param port : The port that will be used. (Optional - Deafult is 8080)
     */
    public constructor(data: object, port?: any){
        this.port = port | 8080; //The port value
        this.data = data; //The data value
        this.all = app; //The app value
        Object.entries(this.data).forEach(([key, value], index) => { //The manager of the data
            let pathh: string = key; //Get the path from the key of the object
            let contentt: any = value['content']; //Get the content of every path
            let consolee: any = value['console']; //Get the console for every path (if there is)
            let status: number = value['status'] | 200; //Get the status of the page from the object

            app.get(pathh, (req, res) => { //Create a path for it on the server
                res.send(contentt) //Sends the content
                res.status(status) //Sends the status of the page
                if(consolee==="") {
                    //Nothing happens
                } else { //If the user typed something in the console part
                    let after: string = consolee.replaceAll("$ip", req.clientIp).replaceAll("$path", req.baseUrl + req.path); //Replaces the $ function(s) in their values
                    console.log(after) //Logs it
                }
            });
        });
    }

    public start(): void { //The function to start the server
        this.all.listen(this.port); //Make the server to listen to this port
        console.log(`The server is opened on port ${this.port}\nLink: http://localhost:${this.port}`); //Logs the info
    }


}

export { Setup } //Exports the Setup class