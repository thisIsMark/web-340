// Creating a Mongoose Connection
// Author: Mark Palmer
// Date: 09/17/2021

// Requirements 

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const logger = require('morgan');

// Create app variable
let app = express();


const { MongoClient } = require('mongodb');

// Main function to connect to mongodb
async function main() {

    const uri =  "mongodb+srv://thisIsMark:L9uMD3TqPYGuNUoX@cluster0.ga461.mongodb.net/ems?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {

    await client.connect();
    await listDatabases(client);
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
    
}
main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}


app.use(logger('dev'));

http.createServer(app).listen(3000, function() {
    console.log("Application started and running on port 3000.");
});