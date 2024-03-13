// Curso.tsx

import React from 'react';
import './Curso.css';
import NftCourseImg from '../assets/img/nft-course.jpg';

interface CursoProps {
  titulo: string;
  descricao: string;
  instrutor: string;
}

const Curso: React.FC<CursoProps> = ({ titulo, descricao, instrutor }) => {
  return (
    <div className="curso">
      <img src={NftCourseImg} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>Instrutor: {instrutor}</p>
      <a href="">
        <button>
          Acessar
        </button>
      </a>
    </div>
  );
}

export default Curso;
