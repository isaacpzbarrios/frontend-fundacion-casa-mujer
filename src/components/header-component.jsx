import { useState } from "react";
import { Link } from "react-router-dom";
import logoCasaMujer from "../assets/logo-casa-de-la-mujer.png";
import { FaHandHoldingHeart, FaAddressCard, FaHandshake } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isColaboraOpen, setIsColaboraOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toggleColabora = () => {
    setIsColaboraOpen(!isColaboraOpen);
  };

  const [isActive, setIsActive] = useState(false);
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar bg-white h-36 uppercase font-medium">
          <div className="navbar-start max-lg:w-[calc(50%-60px)]">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div className="hidden lg:flex ">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/" className="text-black">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-black">
                    Conócenos
                  </Link>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="text-black">
                      Colabora
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] translate-y-[88px] menu p-2 shadow bg-white rounded-box w-52"
                    >
                      <li>
                        <Link to="/" className="text-black">
                          <FaAddressCard className="text-[#E64A4A]" /> Haz
                          socio/a
                        </Link>
                      </li>
                      <li>
                        <Link to="/collaborate/donate" className="text-black">
                          <FaHandHoldingHeart className="text-[#E64A4A]" />{" "}
                          Donar
                        </Link>
                      </li>
                      <li>
                        <Link to="/collaborate/volunteer" className="text-black">
                          <FaHandshake className="text-[#E64A4A]" /> Haz
                          voluntariado
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/collaborate/donate" className="text-white bg-[#E64A4A] hover:bg-[#FF6B6B] hover:text-white">
                    Donar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center ">
            <Link to="/" className="btn bg-white border-none hover:bg-white normal-case text-xl">
              <img
                src={logoCasaMujer}
                alt="Logo de la Fundación Casa de la Mujer"
                className="h-14 lg:h-24 lg:-translate-y-6"
              />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/help" className="text-black">
                  ¿Necesitas ayuda?
                </Link>
              </li>
              <li>
                <Link to="/exhibition" className="text-black">
                  Talleres y conferencia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-sm float-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="menu p-4">
          <li>
            <Link to="/" className="text-black" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/" className="text-black" onClick={toggleMenu}>
              Conócenos
            </Link>
          </li>
          <li>
            <span className="text-black" onClick={toggleColabora}>
              Colabora
            </span>
            {isColaboraOpen && (
              <ul className="menu">
                <li>
                  <Link to="/" className="text-black">
                    <FaAddressCard className="text-[#E64A4A]" /> Haz socio/a
                  </Link>
                </li>
                <li>
                  <Link to="/collaborate/donate" className="text-black">
                    <FaHandHoldingHeart className="text-[#E64A4A]" /> Donar
                  </Link>
                </li>
                <li>
                  <Link to="/collaborate/volunteer" className="text-black">
                    <FaHandshake className="text-[#E64A4A]" /> Haz voluntariado
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/collaborate/donate" className="text-black" onClick={toggleMenu}>
              Donar
            </Link>
          </li>
          <li>
            <Link to="/" className="text-black" onClick={toggleMenu}>
              ¿Necesitas ayuda?
            </Link>
          </li>
          <li>
            <Link to="/" className="text-black" onClick={toggleMenu}>
              Talleres y conferencia
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
