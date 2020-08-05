import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/35317401?s=400&u=53f0a76fbf41bafa9f776c73d87ba73aefe0ff62&v=4"
          alt="Michael Nascimento"
        />
        <div>
          <strong>Michael Nascimento</strong>
          <span>Bateria e percussão</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla.
      </p>
      <footer>
        <p>
          Preço por hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
