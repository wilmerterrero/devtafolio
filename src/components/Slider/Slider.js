import React from "react";
import Slickder from "react-slick";
import "./Slider.css";
import { Image } from "cloudinary-react";

const Slider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 3,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <h4 className="s-titulo-principal center align">
          Estoy listo para ayudarte con
        </h4>
        <div className="col s12 l12 m12">
          <Slickder {...settings}>
            <div className="sliderick">
              <Image
                cloudName="wterrerocloud"
                publicId="myportfolio/Browser_ch7njb.png"
                alt="digital transformation"
              />
              <h5 className="s-titulo">Transformación digital</h5>
              <p>
                En plena crisis, puedo ayudar a su negocio a que tenga esa tan
                deseada transformación digital que tanto necesita.
              </p>
            </div>
            <div className="sliderick">
              <Image
                cloudName="wterrerocloud"
                publicId="myportfolio/mobile_acoap4.png"
                alt="responsive"
              />
              <h5 className="s-titulo">Diseño Adaptable</h5>
              <p>
                Un diseño adaptable hace que su sitio web sea accesible para
                todos los usuarios, independientemente de su dispositivo.
              </p>
            </div>
            <div className="sliderick">
              <Image
                cloudName="wterrerocloud"
                publicId="myportfolio/Code_ppxqr3.png"
                alt="programming"
              />
              <h5 className="s-titulo">Programación</h5>
              <p>
                De las cosas que más me apasionan es enseñar, estoy dispuesto a
                enseñarte lo necesario para que inicies en el mundo de la
                programación.
              </p>
            </div>
            <div className="sliderick">
              <Image
                cloudName="wterrerocloud"
                publicId="myportfolio/Delivery_gsnnhk.png"
                alt="fastest"
              />
              <h5 className="s-titulo">Rapidez</h5>
              <p>
                En poco tiempo te brindo los resultados esperados, me enfoco en
                la eficiencia y en la rápida solución de errores.
              </p>
            </div>
            <div className="sliderick">
              <Image
                cloudName="wterrerocloud"
                publicId="myportfolio/Custom_z4kf7e.png"
                alt="support"
              />
              <h5 className="s-titulo">Mantenimiento y soporte</h5>
              <p>
                Olvídate del mantenimiento, seguridad, así como de los problemas
                técnicos que tengas. Yo me encargaré de velar por ella.
              </p>
            </div>
          </Slickder>
        </div>
      </div>
    </div>
  );
};

export default Slider;
