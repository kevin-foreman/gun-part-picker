'use strict';

import dotenv from 'dotenv/config';
import cors from 'cors';
import express, { json } from 'express';
const app = express();
import next from 'process';
const port = process.env.port || 8001;
import { getPool } from './dbConn.js';
// import pkg from 'jquery';
// const { data } = pkg;
const pool = getPool();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS'); // include OPTIONS method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // respond OK to OPTIONS requests
    }
    next(); 
});

app.use(json());

// app.get(all)

// app.get(one, by ID)

// app.post

// app.delete

app.use(cors({ origin: '*' }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    // console.log('Connecting to postgres pool: ', pool);
});