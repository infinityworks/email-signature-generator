# Simple Email Generator

Simple app to generate an Infinity Works email signature. 
Tested on Gmail

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing and running

The app is built using Node.js. So you will need to have Node installed

I recommend using NVM to install Node. https://github.com/creationix/nvm

Once Node is installed, run

```
npm install
```

Then update the config.json with your details

If you don't have one of the pieces of information (eg. Office Number) just leave the string blank.

Then to generate your email signature, run


```
npm start
```

This should output a file called 


```
generated.html
```

Open this in your web browser, then copy and paste what is displayed into Gmail's email signature box

All done