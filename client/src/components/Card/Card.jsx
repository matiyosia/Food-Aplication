
import { Link } from 'react-router-dom'
 import s from '../Card/Card.module.css'

const Card = ({id,name,diets,image,score}) => {


    

  return (
    <div className={s.grid}>
     
        <div className={s.conteiner}>
          
        <Link  to={`/recipe/${id}`}>
            <p className={s.name}>{name}</p>
        </Link>
            <img width={240} className={s.image} height={240} src={image} alt="" />
            <p className={s.score}>Score: {score}</p>
            <p className={s.dietas}>{diets}</p>
        </div>
  
    </div>
  )
}

export default Card