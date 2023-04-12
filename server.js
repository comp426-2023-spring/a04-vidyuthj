import {rpsls } from './lib/rpsls.js';
import {rps} from './lib/rpsls.js';
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
app.get('/app/rps', function(req, res) {
    res.status(200).send(rps(null));
});

app.get('/app/rpsls', function(req, res) {
    res.status(200).send(rpsls(null));
});

app.get('/app/rps/play/', function(req, res) {
    res.status(200).send(rps(req.query.shot));
});

app.get('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpsls(req.query.shot));
});

app.post('/app/rps/play', function(req, res) {
    res.status(200).send(rps(req.body.shot));
});

app.post('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpsls(req.body.shot));
});

app.get('/app/rps/play/:shot', function(req, res) {
    res.status(200).send(rps(req.params.shot));
});
app.get('/app/rpsls/play/:shot', function(req, res) {
    res.status(200).send(rpsls(req.params.shot));
});

app.get('*',(req, res) => {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port);













