import express from "express";
import con from "../models/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  // console.log(req.body)

  const sql = "SELECT * from users Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });



    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email },
        process.env.JWT_SECRET_KEY, 
        //this key is generating error 
      //  ' jwt_secret_key',
        {
          expiresIn: "1d",
        }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:'Strict'
      });
      return res.json({
        loginStatus: true,
        message: "welcome admin",
      });
      //   here we can change our secret key
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

export { router as adminRouter };
