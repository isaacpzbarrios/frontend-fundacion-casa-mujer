import { useState } from "react";
import "./../styles/header.css";
import logoCasaMujer from "../assets/logo-casa-de-la-mujer.png";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  return (
    <>
      <header className="header">
        <div className="header__container">
          <nav className={`left__menu ${isOpen ? "active" : ""}`}>
            <ul>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  Mirar{" "}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  Comprometer{" "}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  Crear{" "}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  Donar{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__logo">
            <Link to="/">
              <img
                src={logoCasaMujer}
                alt="Logo de la Fundación Casa de la Mujer"
              />
            </Link>
          </div>

          <nav className={`right__menu ${isOpen ? "active" : ""}`}>
            <ul>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  ¿Necesitas ayuda?{" "}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  {" "}
                  Talleres y conferencia{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={`header__hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect className="line top" width="100" height="10"></rect>
              <rect
                className="line middle"
                y="30"
                width="100"
                height="10"
              ></rect>
              <rect
                className="line bottom"
                y="60"
                width="100"
                height="10"
              ></rect>
            </svg>
          </button>
        </div>
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      </header>
    </>
  );
}

export default Header;
