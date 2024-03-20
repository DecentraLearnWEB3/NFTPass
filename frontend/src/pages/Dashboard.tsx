import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Alchemy, Network } from "alchemy-sdk";
import MetaMaskService from '../services/MetaMaskService';

const Dashboard: React.FC = () => {

  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  let imgNft;

  useEffect(() => {
    
    const fetchNFTs = async () => {
      try {
        const alchemy = new Alchemy({
          apiKey: "O8e2EDz-LUqlqfWWZDG2-CKo3wdOtxBL",
          network: Network.OPT_SEPOLIA,
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
              "0xe2a5801e941b5BAfcf5F4d705Cf2379C2286267b",
              "1"
            );

            const img = await alchemy.nft.getNftMetadata(
              "0xe2a5801e941b5BAfcf5F4d705Cf2379C2286267b",
              "1"
            );

            console.log(response);
            console.log(img.image.cachedUrl);
            console.log(img.image.originalUrl);
  
            imgNft = img.image.cachedUrl;
            console.log(imgNft);

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
            <img src={nft.image.cachedUrl} alt="Imagem NFT" />
            <p>{nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Dashboard;
