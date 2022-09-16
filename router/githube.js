const {Router} = require("express");
const Githubes = require("../model/git.model");
const gitRouter = Router()


/* search logic*/
gitRouter.get('/username/:name',async(req,res)=>{

    try {
        const githube = await Githubes.find({name:req.params.name});
    
        return res.status(200).send(githube)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
});

gitRouter.get("/location/:location", async(req,res)=>{
    
    try {
         const githube = await Githubes.find({locatioin:req.params.location}).lean().exec();
         return res.status(200).send(githube)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
/* softdelete logic*/
gitRouter.delete('delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const githube = await Githubes.updateOne({'_id':id},{$set:{'deleted':true}});

    
        return res.status(200).send(JSON.stringify(githube))
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
/* update logic*/
gitRouter.patch("/update/:id" , async(req,res)=>{
    try {
        const githube = await Githubes.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean().exec();

        return res.status(200).send(githube)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
/* sort logic*/
gitRouter.get("/sort/:created_at", async(req,res)=>{
    
    try {
        const githube = await Githubes.find().sort({created_at:1})
    
        return res.status(200).send(githube)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
module.exports = gitRouter