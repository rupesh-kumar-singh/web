const express = require("express");
let PORT = 8000;
const nav = express();

nav.get("/",(req,res)=>{
    res.send("<h1>you are on home page</h1>")
})

nav.get("/about",(req,res)=>{
    res.write("<h1>yuo are on about page</h1>")
    res.write("<h1>yuo are on about 2 page</h1>")
    res.send();
})
nav.get("/contact",(req,res)=>{
    res.send("<h1>you are contact page</h1>")
})

nav.get("/temp",(req,res)=>{
    res.send([
        {
        id:1,
        name:"rupesh",
        collage:"tit"
    },
        {
        id:1,
        name:"rupesh",
        collage:null
    },
])
})


nav.listen(PORT,()=>{
    console.log(`hi i am rupesh calling ${PORT}`)
})
