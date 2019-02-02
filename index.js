const app = require('express');

app.get('/',(req,res)=>{
    res.send("42")
})
const port = process.env.PORT||4000
app.listen(port ,()=>{
    console.log("server running at",port)
})