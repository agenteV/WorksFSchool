import React from "react";
import {Carrossel} from 'react-bootstrap';

function Carrossel(){
    return(
        <>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?image=1005"
          alt="Imagem 1"
        />
        <Carousel.Caption>
          <h5>Título da Imagem 1</h5>
          <p>Descrição da Imagem 1</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?image=1006"
          alt="Imagem 2"
        />
        <Carousel.Caption>
          <h5>Título da Imagem 2</h5>
          <p>Descrição da Imagem 2</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?image=1007"
          alt="Imagem 3"
        />
        <Carousel.Caption>
          <h5>Título da Imagem 3</h5>
          <p>Descrição da Imagem 3</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?image=1008"
          alt="Imagem 4"
        />
        <Carousel.Caption>
          <h5>Título da Imagem 4</h5>
          <p>Descrição da Imagem 4</p>
        </Carousel.Caption>
      </Carousel.Item>




</Carousel>

        </>
    );
};

export default Carrossel