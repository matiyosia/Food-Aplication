const axios = require("axios");
const { Diet, Recipe } = require("../db");
   const { YOUR_API_KEY5 } = process.env; 
  //  const respuesta =  require("../../respuesta.json") 

const getDiets = async (req, res) => { 
  try { 
    const dietas = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY5
    }&addRecipeInformation=true&number=100`
    );
      // let dietas = respuesta;
    const types = await dietas.data.results.map((t) => t.diets);  
    const diets = types.flat();
    const typeDiets = [...new Set(diets),"vegetarian"]; 
    typeDiets.forEach(async (d) => {
      await Diet.findOrCreate({ 
        where: { name: d }, 
      });
    });
    const allDiets = await Diet.findAll();
    return allDiets;
  } catch (error) {
    console.log(error); 
  }
};

const dietas = async (req, res) => {
  try {
    const d = await Diet.findAll();
    res.send(d);
  } catch (e) {
    res.status(404).send({msg:"error"})
  }
}; 
module.exports = {
  getDiets,
  dietas,
};
