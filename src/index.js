const express = require("express")
const app = express();
const path = require("path")
let PORT = 8000;
const hbs = require("hbs")
// build mi
 const templete = path.join(__dirname,"../templete/views")
 const partialpath = path.join(__dirname,"../templete/partials")
// const staticpath = path.join(__dirname,"../public")

app.set('view engine',"hbs");
app.set("views",templete)

hbs.registerPartials(partialpath)
// app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.render("index",{
        place:" rupesh singh"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        place:" rupesh singh"
    })
})

app.get("/",(req,res)=>{
    res.send("hello fron this server")
})

app.get("*",(req,res)=>{
      res.render("404",{
        errorcomment : "<h1> oops page not fount but already you put wrong text</h>"
      })
})


app.listen(PORT,()=>{
    console.log("PORT IS RUNNING IN 8000")
})