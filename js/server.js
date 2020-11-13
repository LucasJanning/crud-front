var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('crud-front')).listen(8000, function(){
console.log('Servidor lindão rodando!');
});