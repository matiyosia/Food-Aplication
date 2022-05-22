const  axios  = require('axios');
const { Diet ,Recipe} = require('../db');
// const {YOUR_API_KEY4}=process.env;
const respuesta =  require("../../respuesta.json")

const getDiets = async (req, res) => {
    try {
        // await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY4}&addRecipeInformation=true&number=100`)
        const dietas = respuesta
     
        const pedido= dietas.results.map(c=>c.diets)
        

        const diet2 = []
        pedido.map(d2 => {
            for (var i = 0; i < d2.length; i++) {
                diet2.push(d2[i]);
            }
        })
     
       
        diet2.flat()

        diet2.forEach(async(element)=>{
            if(element){ 
                await Diet.findOrCreate({ 
                    where:{
                        name:element
                    }
                })
            }
        }) 
         
        const allDiet = await Diet.findAll();
        return allDiet

    } catch (error) { 
        console.log(error)
    }
}
  
  
const dietas = async(req,res)=>{

    try { 
        const d = await Diet.findAll()
        res.send(d)
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getDiets,
    dietas
    
}