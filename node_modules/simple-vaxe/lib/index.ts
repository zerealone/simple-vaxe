class Setup {
    public port: number;
    public data: object;
    public all: any;

    public constructor(data: object, port?: any){
        this.port = port | 8080;
        this.data = data;
        const express = require("express");
        const app = express();
        this.all = app;
        Object.entries(this.data).forEach(([key, value], index) => {
            let pathh: string = key;
            let contentt: any = value['content'];
            let console: any = value['console'];
            app.get(pathh, (req, res) => {
                res.send(contentt)
                if(console==="") return;

                console.log(console)
            });

        });
    }

    public start(): void{
        this.all.listen(this.port);
        console.log(`The server is opened on port ${this.port}\nLink: http://localhost:${this.port}`);
    }


}

export { Setup }