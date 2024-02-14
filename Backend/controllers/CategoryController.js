const mysql = require("mysql2");
// const connection = require('../config/db');

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost", // Replace with your MySQL host
  user: "root", // Replace with your MySQL user
  password: "Bala@2703", // Replace with your MySQL password
  database: "crud", // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to handle MySQL query errors
const handleQueryError = (res, err) => {
  console.error("Error executing query:", err);
  return res.status(500).json({ message: "Internal server error" });
};

// Controller functions
exports.createcategory = (req, res) => {
  const { category } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO category (category) VALUES (?)",
      [category],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, category });
      }
    );
  });
};

exports.getcategory = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM category", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSinglecategory = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM category WHERE Category_id = ?",
      [taskId],
      (err, results) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (results.length === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json(results[0]);
      }
    );
  });
};

exports.updatecategory = async (req, res) => {
  const taskId = req.params.id;
  const { category } = req.body;

  console.log("Updating category:", taskId, category);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Connection error:", err);
      return handleQueryError(res, err);
    }

    connection.query(
      "UPDATE category SET category = ? WHERE Category_id = ?",
      [category, taskId],
      (err, result) => {
        connection.release();
        if (err) {
          console.error("Update error:", err);
          return handleQueryError(res, err);
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Category not found" });
        }

        console.log("Category updated successfully:", result);
        return res.json({ id: taskId, category });
      }
    );
  });
};


exports.deletecategory = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM category WHERE Category_id = ?",
      [taskId],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json({ message: "Task deleted successfully" });
      }
    );
  });
};
