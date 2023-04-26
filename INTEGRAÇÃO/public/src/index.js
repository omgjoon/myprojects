import express from 'express';
import morgan from 'morgan';

const server = express();

server.use(morgan('tiny'));

server.use(express.static('public'));

server.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});