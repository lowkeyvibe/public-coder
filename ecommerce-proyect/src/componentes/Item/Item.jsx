import { Link } from "react-router-dom";
import '../Item/Item.css'

const Item = ({ id, name, price, img }) => {
    return (
        <div className='cardProduct'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p className="price">$ {price} USD</p>
            <p>ID: {id}</p>
            <Link className='btn' to={`/item/${id}`}> See Product </Link>
        </div>
    )
}

export default Item