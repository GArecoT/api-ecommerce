const mariadb = require("mariadb");
const setConn = async () => {
  let conn;

  try {
    conn = await mariadb.createConnection({
      host: "localhost",
      user: "areco",
      password: "senha1234",
      database: "teste",
      connectionLimit: 5,
    });
  } finally {
    return conn;
  }
};
const getProdutos = async () => {
  const conn = await setConn();

  // Use Connection to get contacts data
  var rows = await conn.query("SELECT * FROM ecommerce.produtos;");

  //Print list of contacts
  if (conn) conn.close();
  return rows;
};

module.exports = { getProdutos };
