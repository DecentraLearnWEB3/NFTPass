import React from 'react'
import "./Home.css";
import MetaMaskService from '../services/MetaMaskService';
import heroImage from '../assets/img/hero-image.png';

function Home() {

  return (
    <div>
      <section className='hero'>
        <div className='subhero'>
          <h1>Acesso descentralizado ao conhecimento.</h1>
          <p>Com o NFT PASS você pode ter acesso exclusivo a conteúdos valiosos e experiências únicas, tudo de forma descentralizada e transparente.</p>
          <button>
            <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" focusable="false"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
            Começar gratuitamente
          </button>
        </div>
        <div className='subhero'>
          <img src={heroImage} alt="" />
        </div>
      </section>

      <section className='feature'>
        <div className='feature-content'>
          <h2>Recursos Incríveis</h2>
          <p>Descubra recursos incríveis que ajudarão você a maximizar seu aprendizado.</p>
          <button>Descobrir mais</button>
        </div>
        <div className='feature-image'>
          <img src="" alt="" />
        </div>
      </section>

    </div>
  )
}

export default Home