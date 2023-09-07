import express from "express";

import { DeleteUser, getAllnewUsers, getAllusers, specialFunc, updateUser, userById } from "../controllers/user.js";

 const router = express.Router();

router.get("/all", getAllusers)
   
router.post("/new", getAllnewUsers)

router.get("/usersId/special", specialFunc)

router.route("/usersId/:id").get(userById).put(updateUser).delete(DeleteUser);

// router.get("/usersId/:id", userById)

// router.put("/usersId/:id", updateUser)

// router.delete("/usersId/:id", DeleteUser)

export default router; 