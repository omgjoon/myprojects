import  express  from "express";
import morgan from "morgan";

const server = express ();

server.use(morgan("tiny"));

server.use(express.json());

server.get('/',(req, res) => {
    res.send('hello world');
});

server.get('/ola',(req, res) => {
    res.send('olá mundo');
});

server.get('/',(req, res) => {
    res.send('hello world');
});

server.listen(3000); 
