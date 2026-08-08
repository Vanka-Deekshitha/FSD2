const express=require('express');

const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send('<h1>Welcome SVECW!</h1><p>You have reached the home page.</p>');
});

app.get('/about',(req,res)=>{
    res.send('This server was built as a learning excercise for Express.js by SVECW AI Dept.');
});

app.get('/api/status',(req,res)=>{
    res.json({
        active:true,
        version:"10.0.0",
        message:"The server is Healthy!"
    });
});

app.listen(PORT,()=>{
    console.log(`Success! Server is running at http://localhost:${PORT}`);
});