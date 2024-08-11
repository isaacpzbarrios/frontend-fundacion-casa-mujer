import Layout from "../layouts/layout-component";
import Spline from "@splinetool/react-spline";
import { BsChatLeftTextFill, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/volunteer.css";
const phonePrefix = [
  { country: "Colombia", code: "+57" },
  { country: "Estados Unidos", code: "+1" },
  { country: "España", code: "+34" },
  { country: "México", code: "+52" },
  { country: "Argentina", code: "+54" },
  { country: "Brasil", code: "+55" },
  { country: "Chile", code: "+56" },
  { country: "Perú", code: "+51" },
  { country: "Venezuela", code: "+58" },
  { country: "Ecuador", code: "+593" },
];

function Volunteer() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          name: country.name.common,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error al obtener los países:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 max-sm:px-2 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full py-0">
          <h2 className="text-5xl my-6 text-center font-semibold max-sm:text-4xl text-secondary">
            Haz voluntariados
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lado izquierdo */}
          <div className="p-6 max-sm:p-0">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                Información sobre Voluntariado
              </h2>
              <p>
                En la Fundación Casa de la Mujer ofrecemos varios tipos de
                voluntariado según tu disposición, tus inquietudes y tu tiempo
                libre.
              </p>
            </div>
            <div className="lg:h-[60%] md:h-[80%] max-sm:h-[70%]">
              <Spline scene="https://prod.spline.design/v4Sp0EMeUiPrcO9o/scene.splinecode" />
            </div>
          </div>

          {/* Lado derecho */}
          <div className="p-6 max-sm:p-0">
            <h2 className="text-2xl font-bold mb-4">
              Formulario de Voluntariado
            </h2>
            <form className="grid gap-4">
              {/* Campos del formulario */}
              <div className="mb-4">
                <label className="input input-bordered bg-white shadow-sm flex items-center gap-2">
                  <BsChatLeftTextFill />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Nombre completo"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="input input-bordered bg-white shadow-sm flex items-center gap-2">
                  <MdEmail />
                  <input type="email" className="grow" placeholder="Correo" />
                </label>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row gap-3">
                <select className="select w-full sm:max-w-xs bg-white">
                  <option value="">Seleccione un prefijo</option>
                  {phonePrefix.map((prefix) => (
                    <option key={prefix.code} value={prefix.code}>
                      {prefix.code} ({prefix.country})
                    </option>
                  ))}
                </select>
                <label className="input input-bordered bg-white w-full shadow-sm flex items-center gap-2">
                  <FaPhoneAlt />
                  <input type="number" className="grow" placeholder="Celular" />
                </label>
              </div>
              <div className="mb-4">
                <label className="label text-xl">Sexo</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                      defaultChecked
                    />
                    <span className="text-black">Femenino</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                    />
                    <span className="text-black">Masculino</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="input input-bordered bg-white shadow-sm flex items-center gap-2">
                  <BsFillCreditCard2FrontFill />
                  <input
                    type="number"
                    className="grow"
                    placeholder="Documento Nacional de Identidad"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="input input-bordered bg-white shadow-sm flex items-center gap-2">
                  <FaMapMarkedAlt />
                  <input type="text" className="grow" placeholder="Dirección" />
                  <span className="badge badge-info">Opcional</span>
                </label>
              </div>
              <div className="mb-4 gap-4 flex flex-col sm:flex-row">
                <div className="flex flex-col max-sm:flex-row gap-2 w-full">
                  <label className="input input-bordered bg-white shadow-sm flex items-center gap-2 flex-1">
                    <FaMapMarkerAlt />
                    <input type="text" className="grow" placeholder="Ciudad" />
                    <span className="badge badge-info">Opcional</span>
                  </label>
                </div>
                <div className="flex flex-col w-full">
                  <select className="select w-full bg-white">
                    <option value="">Selecciona tu país</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4 flex flex-col">
                <label className="items-center">
                  ¿Tienes algún proyecto en específico o alguna colaboración que
                  quieras proponer? Cuéntame
                </label>
                <textarea
                  className="textarea bg-white shadow-sm textarea-bordered textarea__form"
                  placeholder="Si simplemente quieres ayudar, no rellenes este casillero."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="label text-xl">
                  ¿Cuánto tiempo dispones para ayudar?
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                    />
                    <span className="text-black">
                      Entre 1 y 2 horas a la semana
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                    />
                    <span className=" text-black">
                      Entre 3 y 4 horas a la semana
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                    />
                    <span className=" text-black">
                      Entre 4 y 6 horas a la semana
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#FF6B6B] bg-white"
                    />
                    <span className=" text-black">
                      Más de 6 horas a la semana
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm  bg-white"
                  />
                  <span className="text-black text-1xl">
                    Estoy de acuerdo con la{" "}
                    <a href="/" className="text-[#E64A4A] italic">
                      política de privacidad
                    </a>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-[#E64A4A] border-none hover:bg-[#FF6B6B] mt-5 text-white w-32"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Volunteer;
