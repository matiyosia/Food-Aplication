import React, { useEffect, useState } from 'react'
import {Link , useNavigate}from "react-router-dom"
import {useDispatch, useSelector}  from "react-redux"
import { postCreate, types } from '../../redux/action'
import s from '../Create/Create.module.css'
const Create = () => {

    const dispatch = useDispatch()
    const diet = useSelector(state=> state.typeDiets)
    let navigate = useNavigate();
    const [input,setInput]=useState({
        name: '',
        summary: '',
        score: '',
        healthyScore: '',
        steps: '',
        image:'',
        type: [],
    })

    const handleChange = (e)=>{

        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        console.log(input)
    }

    const handleSelect = (e)=>{
        setInput({
            ...input,
            type:[...input.type,e.target.value]
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(postCreate(input))
        alert("recipe created successfully")
        setInput({
            name: '',
            summary: '',
            score: '',
            healthyScore: '',
            steps: '',
            image:'',
            type: [],
        })
        navigate.push("/home")
    }
    useEffect(() => {
      dispatch(types())
    }, [dispatch])
    

  return (
    <div className={s.formulario}>
        <Link to="/home">
            <span>back</span>        
        </Link>

        <form action="">

                <label htmlFor="">URL Img</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.image}
                    name='image'
                    onChange={handleChange}
                    />
            </div>

                <label htmlFor="">name</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
            </div>

                <label htmlFor="">summary</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.summary}
                    name="summary"
                    onChange={handleChange}
                    />
            </div>

                <label htmlFor="">Score</label>
            <div>
                    <input className={s.inputt}
                    type="text"
                    value={input.score}
                    name="score"
                    placeholder='0-100'
                    onChange={handleChange}
                    />
            </div>

                <label htmlFor="">HealthyScore</label>
            <div>
               
                    <input className={s.inputt}
                    type="text"
                    value={input.healthyScore}
                    name="healthyScore"
                    placeholder='0-100'
                    onChange={handleChange}
                    />
            </div>

                <label htmlFor="">Instructions</label>
            <div>
                
                    <input className={s.inputt}
                    type="text"
                    value={input.steps}
                    name="steps"
                    onChange={handleChange}
                    />
            </div>

            <div className={s.op}>
                    <select name="" id="" onChange={handleSelect}>
                        {
                            diet.map(c=> {console.log(c)})
                            // diet.map(c=>{
                            //    return(
                            //      <option key={c.id} value={c.name}>{c.name}</option>
                            //    )
                            // })
                        }
                    </select>
            
            </div>

            <button type='submit' >Crear</button>
        </form>

    </div>
  )
}

export default Create