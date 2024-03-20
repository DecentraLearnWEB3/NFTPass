// Catalog.js
import React from 'react';
import Event from '../components/Event';
import './Catalog.css';

const events = [
  {
    "nome": "Bootcamp de Desenvolvimento em Blockchain",
    "descricao": "Aprenda a desenvolver aplicativos descentralizados (DApps) e contratos inteligentes na blockchain Ethereum. Este bootcamp é adequado para desenvolvedores iniciantes e avançados.",
    "dataInicio": "10/04/2024",
    "dataFim": "20/04/2024",
    "horaInicio": "09:00",
    "horaFim": "19:00",
    "autor": "Ada Lovelace",
    "local": "Online",
    "instrucoes": "Traga seu próprio laptop e instale o ambiente de desenvolvimento Ethereum antes do bootcamp.",
    "imagem": null,
    "preco": "0.55",
    "link": "www.youtube.com/bootcampblockchain1",
    "tipo": "normal"
  },
  {
    "nome": "Hackathon de Finanças Descentralizadas (DeFi)",
    "descricao": "Participe do hackathon de DeFi e colabore com outros desenvolvedores para criar soluções inovadoras para problemas financeiros utilizando contratos inteligentes e blockchain.",
    "dataInicio": "15/04/2024",
    "dataFim": "25/04/2024",
    "horaInicio": "13:30",
    "horaFim": "23:00",
    "autor": "Alan Turing",
    "local": "Centro de Convenções da Cidade",
    "instrucoes": "Equipes de até 4 pessoas. Inscrições individuais também são bem-vindas.",
    "imagem": null,
    "preco": "0.20",
    "link": "www.exemplo.com.br/linkcurso",
    "tipo": "vip"
  },
  {
    "nome": "Webinar: Introdução ao Metaverso",
    "descricao": "Junte-se a nós para uma introdução ao conceito emergente do metaverso, suas aplicações potenciais e seu impacto na tecnologia e na sociedade.",
    "dataInicio": "20/04/2024",
    "dataFim": "20/04/2024",
    "horaInicio": "11:00",
    "horaFim": "13:00",
    "autor": "Grace Hopper",
    "local": "Online",
    "instrucoes": "O webinar será transmitido ao vivo no YouTube. Inscreva-se com antecedência para receber o link de acesso.",
    "imagem": null,
    "preco": "0.17",
    "link": "www.youtube.com/webnarmetaverso",
    "tipo": "normal"
  },
  {
    "nome": "Workshop: Construindo Aplicações Descentralizadas (DApps) com React e Solidity",
    "descricao": "Aprenda a desenvolver DApps usando React para o front-end e Solidity para o back-end na blockchain Ethereum. Este workshop é adequado para desenvolvedores web interessados em blockchain.",
    "dataInicio": "25/04/2024",
    "dataFim": "25/04/2024",
    "horaInicio": "16:00",
    "horaFim": "20:00",
    "autor": "Linus Torvalds",
    "local": "Universidade Técnica Local",
    "instrucoes": "Conhecimento básico de React é recomendado. Traga seu laptop com Node.js e truffle instalados.",
    "imagem": null,
    "preco": "0.12",
    "link": "www.exemplo.com",
    "tipo": "master"
  },
  {
    "nome": "Meetup de NFTs: Explorando o Mundo dos Tokens Não Fungíveis",
    "descricao": "Junte-se a outros entusiastas de blockchain e NFTs para discutir tendências, projetos recentes e o futuro dos tokens não fungíveis.",
    "dataInicio": "30/04/2024",
    "dataFim": "30/04/2024",
    "horaInicio": "18:30",
    "horaFim": "19:30",
    "autor": "Margaret Hamilton",
    "local": "Coworking Space X",
    "instrucoes": "O evento será realizado em um espaço de coworking. Confirme sua presença com antecedência.",
    "imagem": null,
    "preco": "0.22",
    "link": "www.meetup.com",
    "tipo": "vip"
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
