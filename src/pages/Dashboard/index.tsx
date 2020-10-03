import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/11269735?s=460&v=4"
            alt="Stharley Maxwell"
          />
          <div>
            <strong>Desafio</strong>
            <p>testando </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/11269735?s=460&v=4"
            alt="Stharley Maxwell"
          />
          <div>
            <strong>Desafio</strong>
            <p>testando </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/11269735?s=460&v=4"
            alt="Stharley Maxwell"
          />
          <div>
            <strong>Desafio</strong>
            <p>testando </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
