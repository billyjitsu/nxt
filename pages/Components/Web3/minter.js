import { useContract, useSigner, useProvider } from "wagmi";
import ContractABI from '../../contract/contract.json';


const minter = () => {



  const [signer] = useSigner();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: "0xE67Eb863f11608a40D7B9b211dA642CCA035ABE3",
    contractInterface: ContractABI.abi,
    signerOrProvider: signer.data || provider,
  });

  const updateMessage = async () => {
    const txn = await contract.setGreeting("hello", {
      gasLimit: 230000,
    });
    await txn.wait();
  };

  return (
    <div>
      <button
        className="mx-auto mt-10 rounded bg-slate-200 p-2"
        onClick={updateMessage}
      >
        update message
      </button>
    </div>
  );
};

export default minter;
