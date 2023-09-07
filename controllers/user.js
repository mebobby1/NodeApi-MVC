import { user } from "../models/user.js";


export const getAllusers = async (req,res)=>{

    const userData =  await user.find({})
   
   console.log(req.query)
   
   const keyword = req.query.keyword;
   console.log(keyword)
   
       res.json({
           success: true,
           users: userData
       });
}

export const getAllnewUsers = async (req,res)=>{

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
}

export const specialFunc = (req,res)=>{

    res.json({
        success: true,
        message: "Just Reach me Out"
    })
}

export const userById =  async(req,res)=>{

    // const {id} = req.body

    // const { id } = req.query; 
    const { id } = req.params; 

   const userData =  await user.findById(id)

    console.log(req.params);

   res.json({

    success: true,
    users: userData

   })

}
export const updateUser =  async(req,res)=>{


    const { id } = req.params; 

   const userData =  await user.findById(id)

    console.log(req.params);

   res.json({

    success: true,
    message: "User Updated"

   })

}
export const DeleteUser =  async (req,res)=>{


    const { id } = req.params; 

    try {
        
   const userData =  await user.findById(id);

   await userData.remove();

    console.log(req.params);

   res.json({

    success: true,
    message: "User Deleted"

   })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
          });
    }

}