import React from 'react';

const About = () => {

  const cambiarColorFondo = () => {
    const aboutComponent = document.getElementById('acercaDeNosotrosComponent');
    if (aboutComponent) {
      aboutComponent.style.backgroundColor = '#ffc107'; //
    }
  };

  return (
    <div id="acercaDeNosotrosComponent" className="container mt-4 p-4 bg-light rounded">
      <h1 className="mb-4">Acerca de Nosotros</h1>
      <p>Bienvenido a "La Deliciosa", la pizzería que nació de la pasión de una familia italiana que cruzó océanos para llevar el auténtico sabor de Italia a Chile.</p>
      <p>En el año 2022, durante tiempos desafiantes, los dueños, Antonio y Sofia, decidieron dejar su amada Italia y establecerse en Chile. Llevando consigo recetas familiares que han resistido el paso del tiempo, decidieron compartir la auténtica tradición italiana a través de sus deliciosas pizzas.</p>
      <p>La pandemia no fue un obstáculo, sino un catalizador para su sueño. Después de superar los desafíos, se propusieron crear algo especial. Así nació "La Deliciosa", la pizzería que no solo ofrece pizzas excepcionales, sino que también celebra la perseverancia, la comunidad y, por supuesto, el amor por la buena comida.</p>

    
      <button onClick={cambiarColorFondo} className="btn btn-success">¡Cambia el Color!</button>
    </div>
  );
};

export default About;
