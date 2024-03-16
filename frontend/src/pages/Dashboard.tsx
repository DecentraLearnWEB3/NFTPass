import React, { useEffect, useState } from 'react';
import Curso from '../components/Curso';
import "./Dashboard.css";
import { Alchemy, Network } from "alchemy-sdk";
import MetaMaskService from '../services/MetaMaskService';

const Dashboard: React.FC = () => {

  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const fetchNFTs = async () => {
      try {
        const alchemy = new Alchemy({
          apiKey: "ARbgMAZSfIQRR9iNa5bnE1tBoyNk74se",
          network: Network.ETH_MAINNET,
        });

        const address: string | null = await MetaMaskService.connectToMetaMask();
          
          const nftsData = await alchemy.nft.getNftsForOwner(address);
          
          setNfts(nftsData.ownedNfts);

          for (const nft of nftsData.ownedNfts) {
            console.log("===");
            console.log("contract address:", nft.contract.address);
            console.log("token ID:", nft.tokenId);
          }

          console.log("===");

          // Fetch metadata for a particular NFT:
            console.log("fetching metadata for a Crypto Coven NFT...");
            const response = await alchemy.nft.getNftMetadata(
              "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b",
              "5832"
            );

            console.log(response);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar NFTs:", error);
      }
    };

    fetchNFTs();
    
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h2>Meus NFTs</h2>
      <div className="nft-list">
        {nfts.map((nft, index) => (
          <div key={index} className="nft">
            <h3>{nft.title}</h3>
            <p>{nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
