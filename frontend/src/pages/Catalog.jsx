// Catalog.js
import React from 'react';
import Event from '../components/Event';
import './Catalog.css';

const events = [
    {
      nome: 'Bootcamp de Desenvolvimento em Blockchain',
      descricao: 'Aprenda a desenvolver aplicativos descentralizados (DApps) e contratos inteligentes na blockchain Ethereum. Este bootcamp é adequado para desenvolvedores iniciantes e avançados.',
      data: '10/04/2024',
      hora: '09:00',
      instrucoes: 'Traga seu próprio laptop e instale o ambiente de desenvolvimento Ethereum antes do bootcamp.',
      autor: 'Ada Lovelace',
      local: 'Online',
      preco: '10'
    },
    {
      nome: 'Hackathon de Finanças Descentralizadas (DeFi)',
      descricao: 'Participe do hackathon de DeFi e colabore com outros desenvolvedores para criar soluções inovadoras para problemas financeiros utilizando contratos inteligentes e blockchain.',
      data: '15/04/2024',
      hora: '13:30',
      instrucoes: 'Equipes de até 4 pessoas. Inscrições individuais também são bem-vindas.',
      autor: 'Alan Turing',
      local: 'Centro de Convenções da Cidade',
      preco: '20'
    },
    {
      nome: 'Webinar: Introdução ao Metaverso',
      descricao: 'Junte-se a nós para uma introdução ao conceito emergente do metaverso, suas aplicações potenciais e seu impacto na tecnologia e na sociedade.',
      data: '20/04/2024',
      hora: '11:00',
      instrucoes: 'O webinar será transmitido ao vivo no YouTube. Inscreva-se com antecedência para receber o link de acesso.',
      autor: 'Grace Hopper',
      local: 'Online',
      preco: '17'
    },
    {
      nome: 'Workshop: Construindo Aplicações Descentralizadas (DApps) com React e Solidity',
      descricao: 'Aprenda a desenvolver DApps usando React para o front-end e Solidity para o back-end na blockchain Ethereum. Este workshop é adequado para desenvolvedores web interessados em blockchain.',
      data: '25/04/2024',
      hora: '16:00',
      instrucoes: 'Conhecimento básico de React é recomendado. Traga seu laptop com Node.js e truffle instalados.',
      autor: 'Linus Torvalds',
      local: 'Universidade Técnica Local',
      preco: '12'
    },
    {
      nome: 'Meetup de NFTs: Explorando o Mundo dos Tokens Não Fungíveis',
      descricao: 'Junte-se a outros entusiastas de blockchain e NFTs para discutir tendências, projetos recentes e o futuro dos tokens não fungíveis.',
      data: '30/04/2024',
      hora: '18:30',
      instrucoes: 'O evento será realizado em um espaço de coworking. Confirme sua presença com antecedência.',
      autor: 'Margaret Hamilton',
      local: 'Coworking Space X',
      preco: '22'
    },
    {
      nome: 'Hackathon de Blockchain para Soluções Ambientais',
      descricao: 'Participe do hackathon focado em encontrar soluções sustentáveis utilizando tecnologia blockchain. Desenvolva projetos que possam ter um impacto positivo no meio ambiente.',
      data: '05/05/2024',
      hora: '14:00',
      instrucoes: 'Aberto para desenvolvedores, designers e entusiastas da sustentabilidade.',
      autor: 'John McCarthy',
      local: 'Parque Ambiental da Cidade',
      preco: '42'
    },
    {
      nome: 'Curso Avançado de Contratos Inteligentes',
      descricao: 'Aprofunde seus conhecimentos em contratos inteligentes com este curso avançado. Aprenda técnicas avançadas de programação e boas práticas para desenvolvimento de contratos inteligentes.',
      data: '10/05/2024',
      hora: '10:00',
      instrucoes: 'Requisitos: conhecimento básico de Solidity e experiência em desenvolvimento de DApps.',
      autor: 'Guido van Rossum',
      local: 'Faculdade de Tecnologia Y',
      preco: '16'
    },
    {
      nome: 'Webinar: O Futuro da Web Descentralizada (Web3)',
      descricao: 'Participe deste webinar para discutir o futuro da web descentralizada, incluindo tendências, desafios e oportunidades. Conheça os principais projetos e tecnologias emergentes.',
      data: '15/05/2024',
      hora: '19:00',
      instrucoes: 'Aberto para todos. Inscreva-se para garantir sua vaga.',
      autor: 'Yukihiro Matsumoto',
      local: 'Online',
      preco: '10'
    },
    {
      nome: 'Meetup de Desenvolvedores Ethereum',
      descricao: 'Encontre-se com outros desenvolvedores Ethereum para compartilhar ideias, projetos e experiências. Faça networking e conheça as últimas novidades da comunidade.',
      data: '20/05/2024',
      hora: '17:30',
      instrucoes: 'O meetup será realizado em um café. Venha preparado para discutir suas experiências e desafios.',
      autor: 'Bjarne Stroustrup',
      local: 'Café da Esquina',
      preco: '25'
    },
    {
      nome: 'Bootcamp de Desenvolvimento de DApps em Polkadot',
      descricao: 'Aprenda a construir aplicativos descentralizados na plataforma Polkadot. Este bootcamp aborda conceitos fundamentais e práticos de desenvolvimento na blockchain Polkadot.',
      data: '25/05/2024',
      hora: '10:00',
      instrucoes: 'Requisitos: conhecimento básico de JavaScript e familiaridade com conceitos de blockchain.',
      autor: 'Anders Hejlsberg',
      local: 'Centro de Convenções Polkadot',
      preco: '33'
    }
  ];
  

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Próximos Eventos</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
