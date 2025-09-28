import bodyParser from "body-parser";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/check",(req,res)=>{
    const password= req.body["password"];
    if (password === "ILoveProgramming") {
    res.sendFile(path.join(__dirname, "public", "secret.html"));
  } 
  
  else {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});


app.listen(port,(req,res)=>{
    console.log("Server is runing on port no:",port);
});
