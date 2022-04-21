import {
  useConnect,
  useAccount,
  useContract,
  useSigner,
  useProvider,
} from "wagmi";

import Minter from "./minter.js";

const wagmi = ({ setModalOn }) => {
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const { connected } = data;
  // moved things around , checking if I will need these
  const [signer] = useSigner();
  const provider = useProvider();

  const handleOKClick = () => {
    setModalOn(false);
    console.log("Modal should be false");
}

  

  if (connected) {
    return (
      <div className="py-5 text-center">
        <button
          className="mx-auto mt-10 rounded bg-slate-200 p-2"
          onClick={disconnect}
        >
          Disconnect
        </button>

        <Minter />
      </div>
    );
  }

  return (
    <div className="py-5 text-center">
      <p>Need to connect something</p>
    </div>
  );
};

export default wagmi;
