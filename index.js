const express = require("express");
const app = express();
const { connection } = require("./configs/db")
const gitRouter = require("./router/githube");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/githube",gitRouter)
app.listen(8000,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8000")
})
