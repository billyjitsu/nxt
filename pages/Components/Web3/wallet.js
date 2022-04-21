import {
  useConnect,
  useAccount,
  useContract,
  useSigner,
  useProvider,
} from "wagmi";
import { useState } from "react";
import { toHex, truncateAddress } from "./tools/walletTool";
import Modal from "./tools/modal";

const wallet = () => {
  const [modalOn, setModalOn] = useState(false); // testing modal
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  const { connected } = data;

  const clicked = () => {
    setModalOn(true)
  }

  if(connected && !modalOn) {
    return (
        <div>
            <button className="text-white bg-blue-400 rounded-full px-4 py-2 font-semibold sub-text">{`${truncateAddress(
              accountData.address
            )}`}</button>
    
        </div>
        
      );
  } 

  if(!connected && modalOn) {
    return (
        <div>
            <Modal setModalOn={setModalOn} />
    
        </div>
        
      );
  } 



  return (
    <div>
      <button className="text-white bg-blue-400 rounded-full px-4 py-2 font-semibold" onClick={clicked}>
          Connect Wallet
        </button>

    </div>
    
  );
};

export default wallet;
