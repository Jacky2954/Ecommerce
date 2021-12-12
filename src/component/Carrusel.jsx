import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import promouno from "./allimg2/promouno.jpg";
import promotienda from "./allimg2/promotienda.jpg";
import promojoyeria from "./allimg2/promojoyeria.jpg";

const items = [
  {
    src: promouno,
  },
  {
    src: promotienda,
  },
  {
    src: promojoyeria,
  }
];

const Carrusel = () => <UncontrolledCarousel items={items} />;

export default Carrusel;