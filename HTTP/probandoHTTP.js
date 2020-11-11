let http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    switch(req.url){
        case '/' :
            res.end("Bienvenido a la HOMEPAGE");
            break;
        case '/productos' :
            res.end("Estos son nuestro productos");
            break;
        default :
            res.end("Intente de nuevo");   
            break;     
    }
    
}).listen(3030, 'localhost');

//para abrir el servidor hay que dejarlo funcionando aca y en chrome buscar localhost:3030