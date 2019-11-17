const cluster = require('cluster');

if(cluster.isMaster){
    console.log("master worker");
    cluster.fork();
}
else{
    console.log("slave worker");
}