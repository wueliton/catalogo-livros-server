var banco = require("mongoose");
var options = {
  useNewUrlParser: true,
};

connect = async () => {
    await banco.connect(process.env.MONGO_DB_URL, options);
    console.log('Conectado');

    const dbConnection = banco.connection;
    dbConnection.once("open", () => {
        console.log(`Database connected`);
    })
};

module.exports = {banco, connect};
