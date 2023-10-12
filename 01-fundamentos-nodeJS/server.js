import http, { get } from 'node:http';


const server = http.createServer((req, res) => {
    const {method, url} = req;
    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuários')
    }
    if(method === 'POST' && url === '/users'){
        return res.end('Criacao de usuários')
    }

return res.end('Hello World')
  
})

server.listen(3333)
