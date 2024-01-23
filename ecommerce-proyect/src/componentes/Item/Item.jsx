import { Link } from "react-router-dom";
import '../Item/Item.css'

const Item = ({ id, name, stock,  price, img }) => {
    return (
        <div className="parent-card">
            <div className='cardProduct'>
                <div className="div-imagen">
                <img src={img} alt={name} />
                </div>
                <h3>{name}</h3>
                <p className="price">$ {price} USD</p>
                <p>ID: {id}</p>
                <p>Stock: {stock}</p>

                <div className="parent-red-button">
                <Link className='btn' to={`/item/${id}`}> View Product </Link>
                </div>
            </div>
        </div>


    )
}

export default Item