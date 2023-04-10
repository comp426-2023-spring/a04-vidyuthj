import {rpsls_function } from './lib/rpsls.js';
import {rps_function} from './lib/rpsls.js';
import express from 'express';
import minimist from "minimist";


const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/app', function(req, res) {
    res.status(200).send("200 OK");
});
app.get('/app/rps_function', function(req, res) {
    res.status(200).send(rps_function());
});

app.get('/app/rpsls_function', function(req, res) {
    res.status(200).send(rpsls_function());
});

app.get('/app/rps_function/play', function(req, res) {
    res.status(200).send(rps_function(req.query.shot));
});

app.get('/app/rpsls_function/play', function(req, res) {
    res.status(200).send(rpsls_function(req.query.shot));
});

app.get('/app/rps_function/play', function(req, res) {
    res.status(200).send(rps_function(req.body.shot));
});

app.get('/app/rpsls_function/play', function(req, res) {
    res.status(200).send(rpsls_function(req.body.shot));
});

app.get('/app/rps_function/play/:shot', function(req, res) {
    res.status(200).send(rps_function(req.params.shot));
});
app.get('/app/rpsls_function/play/:shot', function(req, res) {
    res.status(200).send(rpsls_function(req.params.shot));
});

app.get('*',(req, res) => {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port);













