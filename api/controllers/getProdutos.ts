module.exports = () => {
  const listCustomerWallets = async (req, res) => {
    const mariadb = require("mariadb");
    const pool = mariadb.createPool({
      host: "localhost",
      user: "areco",
      password: "senha1234",
      database: "teste",
      connectionLimit: 5,
    });
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query("use ecommerce");
      const rows = await conn.query("select * from produtos;");
      res.status(200).json(rows);
      console.log(rows); //[ {val: 1}, meta: ... ]
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  };
  return listCustomerWallets;
};
