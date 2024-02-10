const express = require("express");
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
  let rows = await conn.query("SELECT * FROM ecommerce.produtos;");

  //Print list of contacts
  if (conn) conn.close();
  return rows;
};

const postProduto = async (req) => {
  const conn = await setConn();
  await conn.query("use ecommerce");
  await conn.query(
    `insert into produtos(product_name, product_price, product_description, stock, image_dir) values('` +
      req.body.product_name + "'," + req.body.product_price + ",'" +
      req.body.product_description + "'," + req.body.stock + ",'" +
      req.body.image_dir +
      "')",
  );
  let post = await conn.query(`SELECT * FROM ecommerce.produtos;`);
  return post;
};

module.exports = { getProdutos, postProduto };
