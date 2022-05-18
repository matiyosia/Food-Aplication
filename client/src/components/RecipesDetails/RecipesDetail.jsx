import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useParams } from 'react-router-dom'
import { getDetail } from '../../redux/action'
import s from '../RecipesDetails/RecipesDetails.module.css'

const RecipesDetail = () => {
   const {id}=useParams()
    const dispatch = useDispatch()
    const details = useSelector((state)=> state.detail)

    useEffect(() => {
      dispatch(getDetail(id))
      
    }, [dispatch,id])
    
  return (
    <div>
    
    <div key={details.id} className={s.detailContainer}>
        <Link to="/home"><span className={s.backButton}>Go back to recipes</span></Link>
        <h1 className={s.text}>{details.name}</h1>
        <div className={s.details}>            
            <div className={s.divimg}>
                <img className={s.detailImg} src={details.image ? details.image : 
                'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Pic not found"/>
            </div>


            <div className={s.dietcontainer}>
                { <div className={s.ddsh}>
                    <h3 className={s.textsss}><span>Diet Type: </span></h3> 
                    { details.Diets ? details.Diets.map(e => <h2 className={s.dishesanddiets} key={e.name}>{e.name}</h2>)
                    : <p className={s.dishesanddiets}>{details.type}</p>
                   
                    }
                </div> }

                        {/* <h5 >Diet Types: 
                          
                          {details.Diets?.map(c => console.log(c))}
                            </h5> */}
                <br/>










                <div className={s.ddsh}>
                    <h3 className={s.texts}>Summary: </h3>
                    <p className={s.summary}>{details.summary?.replace(/<[^>]*>/g, '')}</p>
                </div>
                <br />
                <div className={s.ddshh}>
                    <h3><span>dish Types:</span>{details.dishTypes}</h3>
                    <br />
                    <h3 className={s.scoress}><span>Score:</span> {details.score} ✔</h3> 
                    <br/>
                    <h3 className={s.scores}><span>Healthiness points:</span>{details.healhyScore} ✔</h3>
                </div>   
            </div>
        </div>

        <div className={s.stepContainer}>
            <h3><span>Steps:</span> </h3>
            <ul className={s.steps}>
                { Array.isArray(details.steps) ? details.steps.map(e => <li key={e.number}>{e.step}</li>)
                    : <li>{details.steps}</li>
                }
            </ul>
            <div>
                
            </div>
        </div>
        
    </div>
</div>
  )
}

export default RecipesDetail