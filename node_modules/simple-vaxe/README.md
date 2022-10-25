# simple-vaxe
A simpler version of [Vaxe](https://www.npmjs.com/package/vaxe), made with TypeScript instead of NodeJS, and Open-Sourced.

## Getting started
Install the package with the following command:
```shell
npm i simple-vaxe
```
If you want to install the github version, run this command:
```shell
npm i https://github.com/zerealone/simple-vaxe.git
```

## Using the package
Example code:
```js
const { Setup } = require("simple-vaxe");

var data = 
{
    "/":{
        content: "Hello World!",
        console: "Hello World (here too)!"
    }, 
    "/hi": {
        content: "hi there ;)"
    }
};

var client = new Setup(data);

client.start();

```

The `data` is an object that contains two parts, the `content` and the `console`.

The `content` as you may thought is the content of the page that will be shown.

The `console` is something that you can make the package to send to the console whenever a user enters the specifed path, like `'Hello World'` or anything you want.

#### ⚠ The package is still not completed , so some parts of the original Vaxe package are still not here, but they soon will be here too.

If you want to, you can read more about this package in the [`Wiki`](github.com/zerealone/simple-vaxe/wiki) tab in the [github repo](https://github.com/zerealone/simple-vaxe).

Or you can just [go to the official Vaxe package](https://www.npmjs.com/package/vaxe) and read more about the usage of this package and the original package.

## Issues
Have an issue with the package? Want some help or to understand more about something that you didn't got clearly in the [Wiki](github.com/zerealone/simple-vaxe/wiki)? No problem, go to `Issues` tab and report it there. <b>Please notice that it can take some time for me to reply, so please be patient.</b>

## How it works
Ok, well, this part is sounds easy but it's harder then it sounds.

This package works on the Express package, that can create a local server and serve in it some content, like HTML code with some CSS or JS.

Every object you are making inside of the main object (sounds a little weird, I know) is being read by the package and render it by the Express package.

If you open the main TypeScript file (and not the weird converted from ts to js file) you can see that the whole code is not a lot. 

Please follow the license if you would like to use parts of this code or the whole code in your next repo or project.

## License
This package is under the [MIT license](https://choosealicense.com/licenses/mit/).
The package is inspired by the [original Vaxe package](https://www.npmjs.com/package/vaxe), by [@orielhaim](https://www.npmjs.com/~orielhaim).