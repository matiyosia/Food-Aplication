import React, { useEffect, useState,} from 'react'
import { getRecipes } from '../../redux/action'
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux";   
import s from '../Home/Home.module.css'
import Paginacion from '../Paginacion/Paginacion';
import Search from '../Search/Search';
import Options from '../Options/Options';
 import Loading from '../Loading/Loading'


const Home = () => {

 
    const dispatch = useDispatch()

    const recipes = useSelector((state)=> state.recipe)

    
    //  console.log(recipes)

    //paginacion
    const [currentPage, setCurrentPage] = useState(1);
	const [couPerPage] = useState(9);
	const indexlast = currentPage * couPerPage;
	const indexFirst = indexlast - couPerPage;
	const allpages = recipes.slice(indexFirst, indexlast);
  

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};





    useEffect(() => {
           dispatch(getRecipes())
    }, [dispatch])

    

    const refres=(e)=>{
        e.preventDefault()
        dispatch(getRecipes())
      }

  

  return (
    <>
        
       
   
        <div className={s.options}> 
        <Options/>
        
        </div>
       <div className={s.refres}>
            <button className={s.btn}  onClick={refres}> <p className={s.na}>refresh</p>🍽</button>
            <Search/>
            
        </div>
        
        <div className={s.flex}>
        
        { allpages.length > 0 ? (
        
             allpages?.map((r)=>{
                return(
                    
                    <Card  key={r.id}
                    id={r.id}
                    name={r.name}
                    image={r.image}
                    diets={ r.type || r.Diets.map(e => e.name)}
                    score={r.score}
                    /> 
                    
                 
                )
            })
        ): <Loading/>} 

            
        </div> 
    
        <Paginacion recipes={recipes.length}
				couPerPage={couPerPage}
				paginado={paginado} />
        </>
        
  )
}

export default Home