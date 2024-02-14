const mysql = require("mysql2");

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
exports.createEnquiry = (req, res) => {
  const { enq_name, enq_email, enq_mobile, area_interest, enq_message } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    // Check if the user with the same email and area of interest already exists
    connection.query(
      "SELECT * FROM enquiry WHERE enq_email = ? AND area_interest = ?",
      [enq_email, area_interest],
      (err, results) => {
        if (err) {
          connection.release();
          return handleQueryError(res, err);
        }

        if (results.length > 0) {
          // Matching record found, send an error response
          connection.release();
          return res.status(400).json({ message: "Data already exists for this email and area of interest" });
        }

        // No matching record found, insert the new data
        connection.query(
          "INSERT INTO enquiry (enq_name, enq_email, enq_mobile, area_interest, enq_message) VALUES (?,?,?,?,?)",
          [enq_name, enq_email, enq_mobile, area_interest, enq_message],
          (err, result) => {
            connection.release();
            if (err) return handleQueryError(res, err);

            return res.json({ id: result.insertId, enq_name, enq_email, enq_mobile, area_interest, enq_message });
          }
        );
      }
    );
  });
};


exports.getEnquiry = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM enquiry", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSingleEnquiry = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM enquiry WHERE enq_id = ?",
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

exports.updateEnquiry = async (req, res) => {
  const taskId = req.params.id;
  const { enq_name, enq_email,enq_mobile,area_interest,enq_message } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "UPDATE enquiry SET enq_name = ?, enq_email = ? ,enq_mobile=?,area_interest=?,enq_message=? WHERE enq_id = ?",
      [enq_name, enq_email,enq_mobile,area_interest,enq_message, taskId],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json({ id: taskId,enq_name, enq_email,enq_mobile,area_interest,enq_message});
      }
    );
  });
};

exports.deleteEnquiry = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM enquiry WHERE enq_id = ?",
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
