const connection = require('../config/db');

module.exports = {
  getCourses: (callback) => {
    const query = "SELECT * FROM courses;";
    connection.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  getCourseById: (c_id, callback) => {
    const query = "SELECT * FROM courses WHERE c_id = ?;";
    connection.query(query, [c_id], (err, results) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  },

  createCourse: (courseData, callback) => {
    const query = "INSERT INTO courses (c_title, c_desc, imageurl, duration, category) VALUES (?, ?, ?, ?, ?);";
    connection.query(query, [courseData.c_title, courseData.c_desc, courseData.imageurl, courseData.duration, courseData.category], (err, result) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      callback(null, result.insertId);
    });
  },

  updateCourse: (c_id, courseData, callback) => {
    const query = "UPDATE courses SET c_title = ?, c_desc = ?, imageurl = ?, duration = ?, category = ? WHERE c_id = ?;";
    connection.query(
      query,
      [
        courseData.c_title,
        courseData.c_desc,
        courseData.imageurl,
        courseData.duration,
        courseData.category,
        c_id
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          return callback(err, null);
        }
        callback(null, result.affectedRows);
      }
    );
  },

  deleteCourse: (c_id, callback) => {
    const query = "DELETE FROM courses WHERE c_id = ?;";
    connection.query(query, [c_id], (err, result) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      callback(null, result.affectedRows);
    });
  },
};