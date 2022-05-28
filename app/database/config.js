module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1111",
  DB: "test",
  dialect: "mysql",
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};