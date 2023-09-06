import express from "express";
import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017", { 
    dbName: "backendapi",
}).then(()=>console.log("Database Connected")).catch((e)=> console.log(e));


 const schema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
 });

 const user = mongoose.model("user", schema)


const app = express();


// Using Middlewares
app.use(express.json());

app.get("/", (req,res)=>{

    res.send("Hello World")
})

app.get("/users/all", async (req,res)=>{

 const userData =  await user.find({})

console.log(req.query)

const keyword = req.query.keyword;
console.log(keyword)

    res.json({
        success: true,
        users: userData
    });
})

app.get("/usersId/special",(req,res)=>{

    res.json({
        success: true,
        message: "Just Reach me Out"
    })
})


// /userId/asad
// /userId/abhishek

app.get("/usersId/:id", async(req,res)=>{

    // const {id} = req.body

    // const { id } = req.query; 
    const { id } = req.params; 

   const userData =  await user.findById(id)

    console.log(req.params);

   res.json({

    success: true,
    users: userData

   })

})

app.post("/users/new", async (req,res)=>{

    const { name, email, password } = req.body;
 await user.create({
    name,
    email,
    password,
 });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully",
    });
})
app.listen(4000, ()=>{
    console.log("Server is working")
})