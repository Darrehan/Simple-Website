const path =require("path");
const express =require("express");
const router=express.Router();
router.get("/Buy",(req,res,next)=>{
 res.sendFile(path.join(__dirname,"../","views","Buy.html"));
});
module.exports=router;