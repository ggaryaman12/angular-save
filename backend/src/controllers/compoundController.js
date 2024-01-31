const { nuvertos_compounds }= require('../../db/models');
//const { compoundJoi } = require("../joi/compound.joi");


const getAllCompounds=async(req,res)=>{
  try{
      const limit=6;
      const page=req.query.pg ? parseInt(req.query.pg) : 1;
      const offset=(page-1)*(limit);
      const response=await nuvertos_compounds.findAndCountAll({
        offset,
        limit,
        order:[['id','ASC']],
        
    });
      return res.status(200).send(response);
  }
  catch(e){
      return res.status(400).send(e.message);
  }
}

// const getAllCompounds = async(req, res) => {
    
//     try{
//         const page=req.query.pg ? parseInt(req.query.pg) : 1;
//         const limit= 4;
//         const offset=(page-1) * limit;
//         const nuvertos_Compounds = await nuvertos_compounds.findAndCountAll({
//             offset,
//             limit,
//             order:[['id','ASC']],
//         });

//         //error in this line 
//         //if(nuvertos_Compounds.row.length ===0) return res.status(404).json({message : 'No compound found'});
//         return res.status(200).json(nuvertos_Compounds)
//         // res.status(200).json(nuvertos_Compounds, {message : 'Compounds fetched successfully'});
//     }catch(err){
//         res.status(500).json(err);
//     }
// };
// const addCompound= async(req,res)=>{
//     const {name, image, desc} = req.body
//     try{
//         const Compound = await compounds.create({name, image, desc})

//         return res.json(Compound)
//     }catch(err){    
//         console.log(err);
//         return res.status(500).json(err);
//     }
// };
  const addCompound = async (req, res) => {
    try{
      //const result = compoundJoi.validateAsync(req.body);

      const nuvertos_Compounds= await nuvertos_compounds.create(req.body)
    //   if (result.error) {
    //     return res.json(res, joiError.error.details[0].message);
    //   }

      return res.json(nuvertos_Compounds)
      
      
    }
    catch(err){
        console.log(err)
      if(err.isJoi) err.status=422
    }
  };

  const deleteCompound = async (req, res) => {
    try{
      const nuvertos_Compounds = await nuvertos_compounds.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.json({message :'Compound deleted successfully'})
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  };

  const updateCompound= async(req,res)=>{
    const {name, image, desc} = req.body
    try{
        const nuvertos_Compounds = await nuvertos_compounds.findOne({
            where:{
                id: req.params.id
            }
        })
        nuvertos_Compounds.name = name
        nuvertos_Compounds.image = image
        nuvertos_Compounds.desc = desc 
        await nuvertos_Compounds.save()   
        console.log(nuvertos_Compounds);
        return res.json(nuvertos_Compounds)

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

  

  const getCompoundById= async(req,res)=>{
    const id=req.params.id
    try{
        const nuvertos_Compounds = await nuvertos_compounds.findOne({
            where:{id}
        });
        if(!nuvertos_Compounds){
          return res.status(404).json({message:"not found"});
        }
        return res.json(nuvertos_Compounds)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

//   const getCompoundById = async (req, res) => {
//     try{
//       const nuvertos_Compounds = await nuvertos_compounds.findOne({
//         where: {
//           id: req.params.id
//         }
//       });
//       return res.json(nuvertos_Compounds, {message : "Compound fetched successfully" });
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
//   };

  module.exports = {
    getAllCompounds,
    addCompound,
    getCompoundById,
    updateCompound,
    deleteCompound,
  };