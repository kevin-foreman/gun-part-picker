'use strict';

// import dotenv from 'dotenv/config';
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
app.get('/api/pews', (req, res) => {
    pool.query('SELECT * FROM pews', (err, result) => {
        if (err) {
            return (err);
        }
        const rows = result.rows;
        res.send(rows);
    });
});

// app.get(one, by ID)

// app.post
app.post('/api/pews/', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send('Error: missing values')
    } else {

        pool.query('INSERT INTO pews (upper_reciever, lower_reciever, barrel, trigger, stock, charging_handle, optic, bolt_carrier_group, pistol_grip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;', [upper_reciever, lower_reciever, barrel, trigger, stock, charging_handle, optic, bolt_carrier_group, pistol_grip], (err, result) => {
            if (err) {
                return(err);
            };
            let pewInfo = result.rows[0];
            console.log('Added: ' + pewInfo);
            res.status(200).send(pewInfo);
        });
    };
});

// app.delete

app.use(cors({ origin: '*' }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    // console.log('Connecting to postgres pool: ', pool);
});