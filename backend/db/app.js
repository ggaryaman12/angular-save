const express = require('express')
const cors = require('cors');

const route =require('../src/routes/compoundRoutes.js')

const {sequelize, nuvertos_compounds} = require('./models')

const app = express();
app.use(cors());

app.use(express.json());

 app.use('/api',route);


// app.post('/nuvertos_compounds', async(req, res) => {
//     const {name, image, desc} =req.body

//     try{
//         const user=await nuvertos_compounds.create({name, image, desc})
//         return res.json(user)
//     }catch(err){
//         console.log(err)
//         return res.status(500).json(err)
//     }
// })

app.listen({port:5000}, async()=>{
    console.log('Server running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected');  
})
