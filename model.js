const db =  require('./db');
const database = "track-manager";

const find = async function(doc, query){
    try{
        const connect = await db.connect();
        const mydb = connect.db(database);
        return mydb.collection(doc).find(query).toArray();
    }
    catch(ex){
        throw ex;
    }
    
};

module.exports = {
    find,
}