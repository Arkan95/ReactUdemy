import React from "react";

const Componente = () => {
  return (
    <section>
      <Saluto/>
      <Saluto/>
      <Saluto/>
    </section>
  );
};

const Persona = () => {
  return <h2>Mi chiamo Giorgio</h2>;
};

const Messaggio = () => {
  return <h4>Sono un Messaggio</h4>;
};

const Saluto = () => {
  return (
    <div>
      <Persona />
      <Messaggio />
    </div>
  );
};

export default Componente;
