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
exports.createcontact = (req, res) => {
  const { con_name, con_email,con_phone,con_message } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO contact (con_name, con_email,con_phone,con_message) VALUES (?,?,?,?)",
      [con_name, con_email,con_phone,con_message],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, con_name, con_email,con_phone,con_message });
      }
    );
  });
};

exports.getcontact = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM contact", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSinglecontact = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM contact WHERE con_id = ?",
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

// exports.updateEnquiry = async (req, res) => {
//   const taskId = req.params.id;
//   const { enq_name, enq_email,enq_mobile,area_interest,enq_message } = req.body;

//   pool.getConnection((err, connection) => {
//     if (err) return handleQueryError(res, err);

//     connection.query(
//       "UPDATE enquiry SET enq_name = ?, enq_email = ? ,enq_mobile=?,area_interest=?,enq_message=? WHERE enq_id = ?",
//       [enq_name, enq_email,enq_mobile,area_interest,enq_message, taskId],
//       (err, result) => {
//         connection.release();
//         if (err) return handleQueryError(res, err);

//         if (result.affectedRows === 0) {
//           return res.status(404).json({ message: "Task not found" });
//         }

//         return res.json({ id: taskId,enq_name, enq_email,enq_mobile,area_interest,enq_message});
//       }
//     );
//   });
// };

exports.deletecontact = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM contact WHERE con_id = ?",
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
