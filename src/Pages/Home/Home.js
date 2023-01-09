import restau from "./restaurant.jpg";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <div class="presentation">
        <div class="boite-img">
          <img src={restau}></img>
        </div>
        <div class="boite-txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            cursus vel urna semper vulputate. Curabitur justo diam, feugiat in
            nulla sit amet, bibendum pellentesque enim. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae; In
            in cursus mi. Donec rutrum hendrerit purus, et porta augue ultricies
            eget. Nunc feugiat volutpat leo ut venenatis. Morbi pellentesque
            convallis luctus. Praesent at hendrerit magna. Sed mollis ornare
            nisi, in malesuada felis aliquet vitae. In vulputate rutrum enim,
            nec ornare purus fermentum non. Sed interdum ultricies metus
            fringilla pellentesque. Donec eget velit iaculis, sodales metus
            quis, tristique dui. Aenean euismod maximus arcu nec gravida. Proin
            euismod nibh non libero porta, in pretium nibh auctor. Nullam nec
            vehicula nisi, eu porta metus.
          </p>
        </div>
      </div>
    </>
  );
};
