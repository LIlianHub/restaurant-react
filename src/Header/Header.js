import logo from "./logo.png"

export const Header = () => {
  const menus = [
    {
      name: "Accueil",
      url: "/home",
    },
    {
      name: "Carte",
      url: "/food",
    },
    {
      name: "Menus",
      url: "/menu",
    },
    {
      name: "Commande",
      url: "/order",
    },
  ];

  const navItems = menus.map((menu) => {
    return (
      <li className="nav-item mx-3" key={menu.url}>
        <a className="nav-link active" aria-current="page" href={menu.url}>
          {menu.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <nav className="navbar navbar-light bg-light w-100 d-flex walign-items-center">
        <img
          src={logo}
          alt="logo"
          width="120"
          className="navbar-brand mx-5"
          href="#"
        />
        <ul className="navbar-nav flex-grow-1 d-flex flex-row justify-content-end mx-5 mb-2">
          {navItems}
        </ul>
      </nav>
    </>
  );
};
