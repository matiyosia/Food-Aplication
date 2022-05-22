import React, { useEffect, useState } from 'react'
import {Link , useNavigate}from "react-router-dom"
import {useDispatch,}  from "react-redux"
import { postCreate, types } from '../../redux/action'
import s from '../Create/Create.module.css'
const Create = () => {


// Validates 

const validate = () =>{
    let errors = {};

    if(input.name === ""){
        errors.name = "Name required!";   

    } else if(input.name.length < 3) {
        errors.name = 'Minimum 3 letters'

    } else if(input.summary === ""){
        errors.summary= "summary must be complete";

    } else if(input.summary.length < 20){
        errors.summary = 'Minimum 20 letters';

    } else if(input.score < 0 || input.score > 100){
        errors.score = 'Maximum up to 100'

    }else if(input.healthyScore < 0 || input.healthyScore> 100 ){
        errors.healthyScore = 'Maximum up to 100'

    }else if(input.dishTypes === ""){
        errors.dishTypes = "required field"

    }else if(!input.type){
        errors.type = "required field"

    }else if(!input.score){
        errors.score = "required field"
    }else if(!input.healthyScore){
        errors.healthyScore ="required field"
    }
   
    if (!input.image) {
        errors.image = 'Please insert an image type URL'
    } 

   
    
   
    return errors;
}





// Validates 

    const dispatch = useDispatch()
    // const diet = useSelector(state=> state.typeDiets)
    let navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [input,setInput]=useState({
        name: '',
        summary: '',
        score: '',
        healthyScore: '',
        steps: '',
        image:'',
        dishTypes:'',
        type: [],
    })

    const handleChange = (e)=>{

        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.value]:e.target.value
        }))
         console.log(input)
    }

    const handleSelect = (e)=>{
        setInput({
            ...input,
            type:[...input.type,e.target.value]
        })
         console.log(input)
    }


    const handleDelete= (el)=>{
        setInput({
            ...input,
            type: input.type.filter(e => e !== el)
        })
    } 

    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validate(input));
        const errorSave = validate(input);
        if(Object.values(errorSave).length !== 0){
          alert('The recipe is not created, fill in the required fields!')
        }else{
            dispatch(postCreate(input))
            navigate('/home')
            alert("recipe created successfully")
            setInput({
                name: '',
                summary: '',
                score: '',
                healthyScore: '',
                steps: '',
                image:'',
                dishTypes:'',
                type: [],
            })
        }
          
       
                
            
            
              
            
        
      
    }

    useEffect(() => {
      dispatch(types())
    }, [dispatch])
    

  return (
    <div className={s.formulario}>
        <Link to="/home" className={s.linkB}>
            <span>back</span>        
        </Link>

        <form action="" onSubmit={(e)=> handleSubmit (e)} className={s.fondoform}>

                <label htmlFor="">URL Img</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.image}
                    name='image'
                    onChange={handleChange}
                    />
                    {
                        errors.image && (
                            <p className={s.error}>{errors.image}</p>
                        )
                    }
                    
            </div>

                <label htmlFor="">name</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                    {
                        errors.name && (
                            <p className={s.error}>{errors.name}</p>
                        )
                    }
            </div>

                <label htmlFor="">summary</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.summary}
                    name="summary"
                    onChange={handleChange}
                    />
                    {
                        errors.summary && (
                            <p className={s.error}>{errors.summary}</p>
                        )
                    }
            </div>

                  <label htmlFor="">dishTypes</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.dishTypes}
                    name="dishTypes"
                    onChange={handleChange}
                    />
                     {
                        errors.dishTypes && (
                            <p className={s.error}>{errors.dishTypes}</p>
                        )
                    } 
             </div> 

                <label htmlFor="">Score</label>
            <div>
                    <input className={s.inputs}
                    type="number"
                    value={input.score}
                    name="score"
                    placeholder='0-100'
                    min="1"
                    max="100"
                    onChange={handleChange}
                    />
                     {
                        errors.score && (
                            <p className={s.error}>{errors.score}</p>
                        )
                    }
            </div>

                <label htmlFor="">HealthyScore</label>
            <div>
               
                    <input className={s.inputs}
                    type="number"
                    value={input.healthyScore}
                    name="healthyScore"
                    placeholder='0-100'
                    min="1"
                    max="100"
                    onChange={handleChange}
                    />
                      {
                        errors.healthyScore && (
                            <p className={s.error}>{errors.healthyScore}</p>
                        )
                    }
            </div>

                <label htmlFor="">Step by Step</label>
            <div>
                <textarea  onChange={handleChange} type="text" name="steps" id="" cols="30" rows="10" value={input.steps}>

                </textarea>
                    
                     {
                        errors.steps && (
                            <p className={s.error}>{errors.steps}</p>
                        )
                    }

            </div>

            <div className={s.op}>


                <select  onChange={handleSelect} className={s.selet}>
                    <option value="All">Diets</option>
                    <option name="gluten free"  value="gluten free">Gluten Free</option>
                    <option name="dairy free" value="dairy free">Dairy Free</option>
                    <option name="vegan" value="vegan">Vegan</option>
                    <option name="lacto ovo vegetarian" value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option name="fodmap friendly" value="fodmap friendly">Formap Friendly</option>
                    <option name="pescatarian" value="pescatarian">Pescatarian</option>
                    <option name="paleolithic" value="paleolithic">Paleolithic</option>
                    <option name="primal" value="primal">Primal</option>
                    <option name="whole 30" value="whole 30">Whole 30</option>
                </select>  
            
                    
                    {
                        errors.type && (
                            <p className={s.error}>{errors.type}</p>
                        )
                    }
                  
                   

            </div>
                    
            

           <button type='submit' className={s.bto} onSubmit={handleSubmit}>Crear</button>
           
        </form>

        {input.type.map((el) => (
        <div key={el}>
          <span >{el}</span>
          <button className={s.bt} onClick={() => handleDelete(el)}> x </button>
        </div>
      ))}

    </div>
  )
}

export default Create