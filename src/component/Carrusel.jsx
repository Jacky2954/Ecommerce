import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: './allimg/promouno.jpg',
  },
  {
    src: './allimg/promojoyeria.jpg',
  },
  {
    src: './allimg/promotienda.jpg',
  }
];

const Carrusel = () => <UncontrolledCarousel items={items} />;

export default Carrusel;