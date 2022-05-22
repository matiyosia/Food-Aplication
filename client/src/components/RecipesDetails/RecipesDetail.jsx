import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useParams } from 'react-router-dom'
import { getDetail } from '../../redux/action'
import s from '../RecipesDetails/RecipesDetails.module.css'

const RecipesDetail = () => {
   const {id}=useParams()
    const dispatch = useDispatch()
    const details = useSelector((state)=> state.detail)
    // console.log(details)
    useEffect(() => {
      dispatch(getDetail(id))
      
    }, [dispatch,id])

    
    // function createMarkup() {
    //     return {
    //        __html: details.summary  };
    //  }; 
    
  return (
    <div className={s.contenedor}>
        
    <div className={s.carto}>
        
    <Link to="/home"><span className={s.backButton}>Go back to recipes</span></Link>
        
        <div className={s.titlee}>
            {details.name ? <h1>{details.name}</h1> : <h1>Recipe not Found</h1>}
        </div>

        

        <div className={s.flexi}>

                <div>
                    <img className={s.im} src={details.image ? details.image : 
                    'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Pic not found"/>
                </div>

                <div className={s.diet}>
                    <h3 className={s.textsss}>Diet Type:</h3> 
                    { details.Diets ? details.Diets.map((e,i) => <h2 key={i} className={s.dishesanddiets}>{e.name}</h2>)
                    : <h4 className={s.dishesanddiets}>{details.type}</h4>
                    
                    }
                </div>

                <div className={s.dish}>
                    <h3 className={s.disty}>dish Types:</h3>
                    <h3 className={s.h}>{details.dishTypes}</h3>
                </div>
        </div>


        <div className={s.score}>
            <h3 className={s.t}>Score:{details.score}</h3>
            <h3 className={s.t}><span>Healthiness points:</span>{details.healthyScore || details.healhyScore} ✔</h3>
        </div>

        <div className={s.sum}>
           
           <div className={s.sumar}>
            <h4 >Summary</h4>
            <p className={s.sm}>{details.summary ? details.summary.replace(/<[^>]*>/g, '') : "not found"}</p>

           </div>
            <div className={s.stepp}>
                <h4>Steps:</h4>
                { Array.isArray(details.steps) ? details.steps.map(e => <li className={s.are} key={e.number}>{e.step}</li>)
                        : <li className={s.ares}>{details.steps}</li>
                    }
            </div>
        </div>
    </div>

    
</div>
  )
}

export default RecipesDetail





// <h1 className={s.text}>{details.name}</h1>
//         <div className={s.details}>            
//             <div className={s.divimg}>
//                 <img className={s.detailImg} src={details.image ? details.image : 
//                 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Pic not found"/>
//             </div>


//             <div className={s.dietcontainer}>
//                 { <div className={s.ddsh}>
//                     <h3 className={s.textsss}><span>Diet Type: </span></h3> 
//                     { details.Diets ? details.Diets.map(e => <h2 className={s.dishesanddiets} key={e.id}>{e.name}</h2>)
//                     : <h4 className={s.dishesanddiets}>{details.type}</h4>
                   
//                     }
//                 </div> }
// {/* 
//                 <div>
//                     {details.Diets ? details.Diets.map(c=> c.name + (' ')) : <span>{details.type}</span>}
//                 </div>
//                  */}
                                
                            
//                 <br/>










//                 <div className={s.ddsh}>
//                     <h3 className={s.texts}>Summary: </h3>
//                     <p className={s.summary}>{details.summary?.replace(/<[^>]*>/g, '')}</p>
//                 </div>
//                 <br />
//                 <div className={s.ddshh}>
//                     <h3><span>dish Types:</span>{details.dishTypes}</h3>
//                     <br />
//                     <h3 className={s.scoress}><span>Score:</span> {details.score} ✔</h3> 
//                     <br/>
//                     <h3 className={s.scores}><span>Healthiness points:</span>{details.healhyScore} ✔</h3>
//                 </div>   
//             </div>
//         </div>

//         <div className={s.stepContainer}>
//             <h3><span>Steps:</span> </h3>
//             <ul className={s.steps}>
//                 { Array.isArray(details.steps) ? details.steps.map(e => <li key={e.number}>{e.step}</li>)
//                     : <li>{details.steps}</li>
//                 }
//             </ul>
//         </div>
        
//     </div> 