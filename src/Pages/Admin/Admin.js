import { useContext, useDebugValue } from "react";
import { CartContext } from "../../context/cart-context";
import { useState, useEffect } from "react";

export const Admin = () => {



    const [cart, setCart, addMenuToCart, addFoodToCart] = useContext(CartContext);

    var disableButton;


    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: ""
    });

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
                console.log('Success:', data);
                document.getElementById("formCommand").reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById("formCommand").reset();
            });
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
        return { "desc": desc, "price": price, "date": ladate.toISOString() };
    }

    const handleCLick = (event) => {

        event.preventDefault();
        if (formData.nom != "" && formData.prenom != "" && formData.telephone != "") {
            let data = builderRequest();
            let dataRequest = {
                "id": Math.floor((Math.random() * 100000000000)),
                "description": data.desc,
                "client": formData.nom + " " + formData.prenom + " " + formData.telephone,
                "price": data.price,
                "date": data.date
            }
            sendCommand(dataRequest);

            //console.log(dataRequest);
        }
    }

    const verifForCommand = () => {
        if (cart.selectedFoods.length == 0 && cart.selectedMenus.length == 0) {
            disableButton = true;
            console.log("test");
        }
        else {
            disableButton = false;
        }
    }

    verifForCommand();

    return (
        <>
            <h2>Vos informations</h2>
            <form onSubmit={handleCLick} className="form-group" id="formCommand">
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
                        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    />
                </div>
                <button disabled={disableButton} type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </>
    );
};
