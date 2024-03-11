import { useState, useEffect } from 'react';
import  styles from './NavBar.module.css';
import BrainLogo from '../assets/img/brain-logo.png';
import MetaMaskService from '../services/MetaMaskService';


function Navbar() {
  // MENU
   // adding the states 
   const [isActive, setIsActive] = useState(false);
   //add the active class
   const toggleActiveClass = () => {
     setIsActive(!isActive);
   };
   //clean up function to remove the active class
   const removeActive = () => {
     setIsActive(false)
   }

   // METAMASK
    const [walletAddress, setWalletAddress] = useState('');

    const handleConnectToMetaMask = async () => {
      try {
        const address: string = await MetaMaskService.connectToMetaMask();
        setWalletAddress(address);
      } catch (error) {
        console.log(error);
      }
    };

    const maskAddress = (address: string): string => {
      if (address.length < 9) return address;
      return `${address.substr(0, 4)}...${address.substr(-4)}`;
  };

    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='/' className={`${styles.logo}`}>
                <img src={BrainLogo} alt="" />Web3Educ
            </a>

            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='/' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='/catalogo' className={`${styles.navLink}`}>Catálogo</a>
              </li>
              <li onClick={removeActive}>
                <a href='/afiliados' className={`${styles.navLink}`}>Afiliados</a>
              </li>
              <li onClick={removeActive}>
                <a href='dashboard' className={`${styles.navLink}`}>Meus cursos</a>
              </li>
              <li onClick={removeActive}>
                <a onClick={handleConnectToMetaMask} className={`${styles.connectWalletButton}`}>
                {walletAddress ? maskAddress(walletAddress) : 'Connect'}
                </a>
              </li>
              
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;