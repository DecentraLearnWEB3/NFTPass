import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Alchemy, Network } from "alchemy-sdk";
import MetaMaskService from '../services/MetaMaskService';

import ABINFTPassFactory from '../assets/ABI/ABINFTPASSFactory.json';
import ABINFTPass from '../assets/ABI/ABINFTPASS.json';

import { ethers } from 'ethers';

const Dashboard: React.FC = () => {

  const NFT_PASS_FACTORY_CONTRACT_ADDRESS = "0x55aDA3c97518673B2E9db327f4E2d9D220Ec23B1";
  const NFT_PASS_CONTRACT_ADDRESS = "0x64dd5794f7ed60d28E457Dd90fe79a886120f350";

  async function getProvider() {
    if (!(window as any).ethereum) {
      throw new Error("No wallet found!");
    }

    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);

    if (!accounts || !accounts.length) {
      throw new Error("Wallet not authorized!");
    }

    return provider;
  }

  useEffect(() => {

    async function connectToContract() {
      
      try {
        const provider = await getProvider();
        const contract = new ethers.Contract(NFT_PASS_FACTORY_CONTRACT_ADDRESS, ABINFTPassFactory, provider);

        const openEvents = await contract.getOpenEvents();

        console.log(openEvents);

      } catch (error) {
        console.log(error);
      }
    }
    connectToContract();
    connectToNFTPass();
  }, []);


  async function connectToNFTPass() {
      try {
        const provider = await getProvider();
        const contract = new ethers.Contract(NFT_PASS_CONTRACT_ADDRESS, ABINFTPass, provider);

        const symbol = await contract.symbol();
        const name = await contract.name();
        console.log("Symbol: ", symbol);
        console.log("Name: ", name);

        const contractURI = await contract.contractURI();
        console.log("Contract URI: ", contractURI);

      } catch (error) {
        console.log(error);
      }
  }

  async function createNFTPassFactory() {
    try {
        const provider = await getProvider();
        const signer = await provider.getSigner();

        console.log((await signer).address);

        const contract = new ethers.Contract(NFT_PASS_FACTORY_CONTRACT_ADDRESS, ABINFTPassFactory, signer);

        const tx = contract.createNFTPass('TESTE CREATE NFT PASS','TESTE');
        
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="dashboard">
      <h2>Meus NFTs</h2>
      <button onClick={createNFTPassFactory}>Create NFT Factory</button>
      <div className="nft-list">
        
      </div>
    </div>
  );
} 

export default Dashboard;
