const express=require('express')
// const cors=require('cors')

const app=express()
// app.use(cors)
app.get('/searchbus',(req,res)=>{
    res.send('hello world')
    console.log('submit')
})
app.listen(3001,()=>{
    console.log('server is running')
})