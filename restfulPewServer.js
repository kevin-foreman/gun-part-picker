'use strict';

// import dotenv from 'dotenv/config';
import cors from 'cors';
import express, { json } from 'express';
const app = express();

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// import next from 'process';
const port = process.env.port || 8001;
import { getPool } from './dbConn.js';
// import pkg from 'jquery';
// const { data } = pkg;
const pool = getPool();

// Configure CORS middleware
const corsOptions = {
    origin: ['http://localhost:8001', 'http://127.0.0.1:8001', 'http://localhost:5173', 'http://127.0.0.1:5173'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
    console.log('POST request to /api/pews/ received');
    console.log('Request received:', req.body);

    // Destructure the submittedBuild array into individual parts
    const {
        upper_reciever,
        lower_reciever,
        barrel,
        trigger,
        stock,
        charging_handle,
        optic,
        bolt_carrier_group,
        pistol_grip,
    } = req.body;

    console.log({
        upper_reciever,
        lower_reciever,
        barrel,
        trigger,
        stock,
        charging_handle,
        optic,
        bolt_carrier_group,
        pistol_grip,
    });

    if (!upper_reciever || !lower_reciever || !barrel || !trigger || !stock || !charging_handle || !optic || !bolt_carrier_group || !pistol_grip) {
        return res.status(400).send('Error: missing values');
    } else {
        pool.query(
            'INSERT INTO pews (upper_reciever, lower_reciever, barrel, trigger, stock, charging_handle, optic, bolt_carrier_group, pistol_grip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
            [upper_reciever, lower_reciever, barrel, trigger, stock, charging_handle, optic, bolt_carrier_group, pistol_grip],
            (err, result) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return res.status(500).send('Error inserting data')
                };
                let pewInfo = result.rows[0];
                console.log(`Added: ${JSON.stringify(pewInfo)}`);
                res.status(200).send(pewInfo);
            }
        );
    }
});

// app.delete

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}`);
    // console.log('Connecting to postgres pool: ', pool);
});