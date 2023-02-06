import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const Card = ({ element }) => {
    const [, , , addFoodToCart] = useContext(CartContext);


    return (
        <div key={element.id} className="card w-25 mx-3 mb-4">
            <img src={element.photo} className="card-img-top" alt={element.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">{element.title}</h5>
                <p className="card-text flex-grow-1">{element.description}</p>
                <div className="d-flex">
                    <span className="fw-bold">{element.price}€</span>
                    <button onClick={data => addFoodToCart(element)} className="btn btn-primary mx-3">
                        Ajouter à ma commande
                    </button>
                </div>
            </div>
        </div>
    );
};


