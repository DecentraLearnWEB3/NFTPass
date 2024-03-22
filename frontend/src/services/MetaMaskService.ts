const MetaMaskService = {
    
    connectToMetaMask: async (): Promise<string> => {
      if ((window as any).ethereum) {
        try {
          await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
  
          const accounts = await (window as any).ethereum.request({ method: 'eth_accounts' });
          const selectedAddress: string = accounts[0];
  
          console.log('Conectado à MetaMask');
          console.log('Endereço da carteira:', selectedAddress);
  
          return selectedAddress;
        } catch (error) {
          console.error(error);
          throw error;
        }
      } else {
        console.log('MetaMask não detectado');
        throw new Error('MetaMask não detectado');
      }
    },
  };
  
  export default MetaMaskService;
  