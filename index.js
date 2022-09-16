const express = require("express");
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8080")
})
