import React from 'react';
import Curso from '../components/Curso';
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  // Simulando uma lista de cursos
  const cursos = [
    { 
      id: 1,
      titulo: 'Curso de React',
      descricao: 'Aprenda React.js',
      instrutor: 'John Doe'
    },
    { 
      id: 2,
      titulo: 'Curso de JavaScript',
      descricao: 'Aprenda JavaScript',
      instrutor: 'Jane Doe'
    },
    { 
      id: 3,
      titulo: 'Curso de TypeScript',
      descricao: 'Aprenda TypeScript',
      instrutor: 'Doe Doe'
    },
    { 
      id: 4,
      titulo: 'Curso de HTML',
      descricao: 'Aprenda HTML',
      instrutor: 'Eduardo Silva'
    },
    { 
      id: 5,
      titulo: 'Curso de CSS',
      descricao: 'Aprenda CSS',
      instrutor: 'Maria Souza'
    },
    { 
      id: 6,
      titulo: 'Curso de Python',
      descricao: 'Aprenda Python',
      instrutor: 'Pedro Santos'
    },
    { 
      id: 7,
      titulo: 'Curso de Node.js',
      descricao: 'Aprenda Node.js',
      instrutor: 'Ana Oliveira'
    },
    { 
      id: 8,
      titulo: 'Curso de Angular',
      descricao: 'Aprenda Angular',
      instrutor: 'Roberto Lima'
    },
    { 
      id: 9,
      titulo: 'Curso de Vue.js',
      descricao: 'Aprenda Vue.js',
      instrutor: 'Juliana Silva'
    },
    { 
      id: 10,
      titulo: 'Curso de Java',
      descricao: 'Aprenda Java',
      instrutor: 'Carlos Ferreira'
    }
  ];

  return (
    <div className="dashboard">
      <h2>Meus Cursos</h2>
      <div className="curso-list">
        {cursos.map(curso => (
          <Curso
            key={curso.id}
            titulo={curso.titulo}
            descricao={curso.descricao}
            instrutor={curso.instrutor}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
