import { useContext, useDebugValue, createRef } from "react";
import { CartContext } from "../../context/cart-context";
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const Commande = () => {

    const [cart, setCart, addMenuToCart, addFoodToCart] = useContext(CartContext);
    const [showResults, setShowResults] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: ""
    });


    var disableButton;

    var errorMessage = <div className="alert alert-danger" role="alert">
        Un des champs est mal remplis !
    </div>;

    var successMessage = <div className="toast show">
        <div className="toast-header">
            <strong className="me-auto">Succes !</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div className="toast-body">
            <p>Votre commande à bien était prise en compte !</p>
        </div>
    </div>;

    const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const sendCommand = (data) => {
        fetch('http://cabe0232.odns.fr/webdev-api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                //console.log('Success:', data);
                setShowSuccess(true);
                clearCard();
            })
            .catch((error) => {
                //console.error('Error:', error);
            });
    }

    const clearForm = () => {
        setFormData({
            nom: "",
            prenom: "",
            telephone: ""
        });
    }

    const clearCard = () => {
        setCart({ selectedFoods: [], selectedMenus: [] });
    }


    const builderRequest = () => {
        let desc = "";
        let price = 0;
        desc += "Les nourritures:\n"
        cart.selectedFoods.forEach(food => {
            desc += food.title + "\n";
            price += food.price;

        });
        desc += "Les Menus:\n"
        cart.selectedMenus.forEach(menu => {
            desc += menu.meal.title + " " + menu.dessert.title + "\n";
            price += menu.price;
        });

        let ladate = new Date();
        price.toFixed(2);
        return { "desc": desc, "price": price, "date": ladate.toISOString() };
    }

    const handleCLick = (event) => {

        event.preventDefault();
        clearForm();
        if (formData.nom !== "" && formData.prenom !== "" && formData.telephone !== "") {
            setShowResults(false);
            let data = builderRequest();
            let dataRequest = {
                "id": uuid(),
                "description": data.desc,
                "client": formData.nom + "\n" + formData.prenom + "\n" + formData.telephone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1.$2.$3.$4.$5'),
                "price": data.price,
                "date": data.date
            }
            sendCommand(dataRequest);
        }
        else {
            setShowResults(true);
        }
    }


    const verifForCommand = () => {
        if (cart.selectedFoods.length == 0 && cart.selectedMenus.length == 0) {
            disableButton = true;
        }
        else {
            disableButton = false;
        }
    }

    verifForCommand();

    return (
        <>
            {showSuccess ? successMessage : null}
            <h2>Vos informations</h2>
            <form onSubmit={handleCLick} className="form-group">
                {showResults ? errorMessage : null}
                <div>
                    <label htmlFor="nom">Nom (3 à 16 char)</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="form-control"
                        pattern="\w{3,16}"
                        key="inputName"
                    />
                </div>
                <div>
                    <label htmlFor="prenom">Prénom (3 à 16 char)</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="form-control"
                        pattern="\w{3,16}"
                        key="inputSurname"
                    />
                </div>
                <div>
                    <label htmlFor="telephone">Téléphone (Valid synthaxe)</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="form-control"
                        pattern="^0[0-9]{9}$"
                        key="inputPhone"
                    />
                </div>
                <button disabled={disableButton} type="submit" className="btn btn-primary mt-1">Envoyer</button>
            </form>
        </>
    );
};
