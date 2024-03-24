const express = require('express');
const blogRouter = express.Router();



blogRouter.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
  });

  blogRouter.get("/blogs", (req, res) => {
    const sql = "SELECT * FROM blogovi";
    req.db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
      }
      const blogs = data;
      res.render("blogs", { title: "All blogs", blogs });
    });
  });
  module.exports = blogRouter;