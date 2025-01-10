const express = require("express");
const cors= require("cors");
const app = express();
const options={orgin:"*"}
app.use(cors(options));
app.use(express.json());
let studentdata=[
    {

        name:"elakiya",
        age:52,
        rollnumber:234,
    }]
app.post('/',(req,res)=>{
    studentdata.push(req.body);
    console.log(req.body)
    res.send("Done")
})
const data =['hello',121,{"key": "value"}];
app.get('/',(req,res)=>{
    res.send(data)
})
   
    app.get('/student',(req,res)=>{
        res.send(studentdata);
    })


app.listen(3333,()=>{
    console.log("started");
})