import React from "react";
import Slickder from "react-slick";
import "./Slider.css";
import code from "../../img/Code.png";
import browser from "../../img/Browser.png";
import mobile from "../../img/mobile.png";
import custom from "../../img/Custom.png";
import delivery from "../../img/Delivery.png";

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
          autoplaySpeed: 3000
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          autoplaySpeed: 3000
        },
      },
    ],
  };

  return (
    <div className="row">
      <h4 className="s-titulo-principal center align">Estoy listo para ayudarte con</h4>
      <div className="col s8 offset-s2 hide-on-small-only hide-on-med-and-down">
        <Slickder {...settings}>
          <div className="sliderick">
            <img src={browser} alt="code" />
            <p className="s-titulo">Transformación digital</p>
            <p>
              En plena crisis, puedo ayudar a su negocio a que tenga esa tan
              deseada transformación digital que tanto necesita.
            </p>
          </div>
          <div className="sliderick">
            <img src={mobile} alt="code" />
            <p className="s-titulo">Diseño Adaptable</p>
            <p> Un diseño adaptable hace que su sitio web sea accesible 
                para todos los usuarios, independientemente de su dispositivo. </p>
          </div>
          <div className="sliderick">
            <img src={code} alt="code" />
            <p className="s-titulo">Programación</p>
            <p>De las cosas que más me apasionan es enseñar, estoy dispuesto
                a enseñarte lo necesario para que inicies en el mundo de la programación.
            </p>
          </div>
          <div className="sliderick">
            <img src={delivery} alt="code" />
            <p className="s-titulo">Rapidez</p>
            <p>En poco tiempo te brindo los resultados esperados, me enfoco en
                la eficiencia y en la rápida solución de errores.
            </p>
          </div>
          <div className="sliderick">
            <img src={custom} alt="code" />
            <p className="s-titulo">Mantenimiento y soporte</p>
            <p> Olvídate del mantenimiento, seguridad, 
                así como de los problemas técnicos que tengas. 
                Yo me encargaré de velar por ella. </p>
          </div>
        </Slickder>
      </div>

      <div className="col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
        <Slickder {...settings}>
          <div className="sliderick">
            <img src={browser} alt="code" />
            <p className="s-titulo">Transformación digital</p>
            <p>
              En plena crisis, puedo ayudar a su negocio a que tenga esa tan
              deseada transformación digital que tanto necesita.
            </p>
          </div>
          <div className="sliderick">
            <img src={mobile} alt="code" />
            <p className="s-titulo">Diseño Adaptable</p>
            <p> Un diseño adaptable hace que su sitio web sea accesible 
                para todos los usuarios, independientemente de su dispositivo. </p>
          </div>
          <div className="sliderick">
            <img src={code} alt="code" />
            <p className="s-titulo">Programación</p>
            <p>De las cosas que más me apasionan es enseñar, estoy dispuesto
                a enseñarte lo necesario para que inicies en el mundo de la programación.
            </p>
          </div>
          <div className="sliderick">
            <img src={delivery} alt="code" />
            <p className="s-titulo">Rapidez</p>
            <p>En poco tiempo te brindo los resultados esperados, me enfoco en
                la eficiencia y en la rápida solución de errores.
            </p>
          </div>
          <div className="sliderick">
            <img src={custom} alt="code" />
            <p className="s-titulo">Mantenimiento y soporte</p>
            <p> Olvídate del mantenimiento, seguridad, 
                así como de los problemas técnicos que tengas. 
                Yo me encargaré de velar por ella. </p>
          </div>
        </Slickder>
      </div>
    </div>
  );
};

export default Slider;
