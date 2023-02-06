import restau from "./restaurant.jpg";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="presentation">
        <div className="boite-img">
          <img src={restau}></img>
        </div>
        <div className="boite-txt">
          <p>
            Le restaurant "MiamMiam Co" est un endroit idéal pour les gourmets qui aiment explorer de nouveaux horizons culinaires. Il propose une cuisine diverse, allant des plats traditionnels aux saveurs exotiques les plus audacieuses. Le menu change régulièrement pour suivre les saisons et les tendances culinaires, offrant toujours de nouvelles options pour les clients réguliers. Les ingrédients frais et de qualité supérieure sont utilisés pour créer des plats délicieux qui raviront les papilles. Le personnel accueillant et professionnel assure une expérience culinaire inoubliable. Visitez "MiamMiam Co" pour découvrir de nouvelles saveurs et des plats délicieux à chaque visite.
          </p>
        </div>
      </div>
    </>
  );
};
