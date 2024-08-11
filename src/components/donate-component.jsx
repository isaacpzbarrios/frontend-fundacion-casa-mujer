import Layout from "../layouts/layout-component";
import { FaCheck } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";

const Card = ({ text }) => {
  return (
    <div className="card w-full shadow-xl mb-4 last:mb-0 sm:mb-0">
      <div className="card-body p-4">
        <p className="flex items-center gap-4">
          <FaCheck className="text-2xl flex-shrink-0" />
          <span className="text-sm sm:text-base">{text}</span>
        </p>
      </div>
    </div>
  );
};

function Donate() {
  const [amount, setAmount] = useState("");

  const predefinedAmounts = [25, 50, 100, 250];

  const handleDonation = async (donationAmount) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          amount: donationAmount,
        }
      );
      const { redirectUrl } = response.data;
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Error al procesar la donación:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        <div className="flex w-full py-4 flex-col">
          <h2 className="text-4xl font-bold">
            Dona para empoderar a las mujeres
          </h2>
          <p className="text-2xl font-bold pt-8">
            Tu donación podría ayudarnos a...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card text={"proporciona materiales educativos para una mujer"} />
          <Card text={"cubre una sesión de capacitación en liderazgo"} />
          <Card text={"financia un microcrédito para iniciar un negocio"} />
          <Card text={"patrocina un programa de alfabetización"} />
        </div>

        <section className="contents">
          <div className="flex w-full py-4 flex-col max-sm:items-center">
            <p className="text-2xl font-bold pt-8">
              Elige el importe de la donación
            </p>
            <div className="flex gap-3 py-4 flex-wrap max-sm:grid max-sm:grid-cols-2">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  className="btn rounded-[20px] bg-[#FF6B6B] hover:bg-[#FF9B9B] border-none text-white"
                  onClick={() => handleDonation(amount*1000)}
                >
                  ${amount}K COP
                </button>
              ))}
              <div className="flex flex-row gap-2 max-sm:col-span-2">
                <label className="input input-bordered flex items-center gap-2  rounded-[20px] shadow-md bg-white border-none text-black">
                  <span>$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="grow"
                    placeholder="Otro monto"
                  />
                </label>
                <button
                  className="btn rounded-[20px] bg-[#FF6B6B] hover:bg-[#FF9B9B] disabled:bg-[#FF9B9B] disabled:text-white border-none text-white"
                  onClick={() => handleDonation(amount)}
                  disabled={!amount}
                >
                  Donar
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://www.paypal.com/co/home"
                target="_blank"
                className="flex items-center justify-center w-16 h-16 max-sm:w-16 max-sm:h-12 bg-white rounded-lg border border-gray-300 shadow-md"
              >
                <BsPaypal className="text-2xl max-sm:text-1xl" />
              </a>
              <div>
                <h3 className="text-2xl max-sm:text-xl">Dona ahora</h3>
                <p className="text-xl max-sm:text-sm max-sm:w-[90%]">
                  También puedes donar directamente a través de PayPal
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://www.paypal.com/co/home"
                target="_blank"
                className="btn rounded-[20px] bg-[#FF6B6B] hover:bg-[#FF9B9B] border-none text-white"
              >
                $10+{" USD"}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white shadow-md py-2 my-8 rounded-lg">
            <div className="p-10">
              <h3 className="text-2xl pb-1">
                Donativos mediante transferencia bancaria
              </h3>
              <p>Caixa: ES40 0133 6895 0142 0000 xxxx</p>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center border-[#FF6B6B] border-[2px] bg-white shadow-md py-2 my-8 rounded-lg">
          <div className="p-10">
            <h3 className="text-6xl text-[#E64A4A] pb-1 text-center font-bold">
              Donativo Bizum
            </h3>
            <h5 className="text-4xl text-center font-light">Código: ES40</h5>
            <p className="text-center text-xl mt-10">
              Si quieres recibir el certificado de donación tendrás que
              enviarnos tus datos personales (Nombre, DNI o documento de
              identidad, y dirección) a email@email.com
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white shadow-md py-2 my-8 rounded-lg">
          <div className="p-10">
            <h3 className="text-4xl pb-1 font-bold">Ventajas fiscales</h3>
            <h5 className="text-xl mt-6 font-semibold">
              Deducciones por donativos de personas físicas en el IRPF
            </h5>
            <p className="text-1xl mt-4">
              La deducción de los donativos realizados por personas físicas es
              del 80% de la cuota íntegra de los primeros 250 € donados.Del
              exceso, podrá deducirse el 40 %.
            </p>
            <p className="text-1xl mt-6">
              Donativo recurrente. Si la persona donante, durante tres o más
              años ha donado igual o más cantidad a la Fundación Casa de la
              Mujer, la deducción del donativo será el 45%.
            </p>
            <h5 className="text-xl mt-6 font-semibold">
              Deducciones por donativos de personas jurídicas en el Impuesto
              Sociedades
            </h5>
            <p className="text-1xl mt-4">
              La deducción de los donativos realizados por personas jurídicas es
              del 40% de la cuota íntegra, pero si durante tres o más años han
              donado igual o más cantidad a la Fundación Casa de la Mujer, será
              el 50%.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Donate;
