import {
  useConnect,
  useAccount,
  useContract,
  useSigner,
  useProvider,
} from "wagmi";

const modal = ( { setModalOn }) => {
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const { connected } = data;

  const handleOKClick = () => {
    setModalOn(false);
}

  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-200 rounded-xl shadow-xl">
        <div className="py-24 text-center">
          <p className="text-2xl font-bold first-line:mt-1 text-gray-700">Connect your wallet:</p>
          <div className="mt-10 mx-6 flex justify-center gap-6">
            {data.connectors.map((x) => (
              <button
                className="text-white bg-blue-400 rounded-full px-4 py-2 font-semibold"
                key={x.id}
                onClick={() => { connect(x);  handleOKClick() }}
              >
                {x.name}
                {!x.ready && " (unsupported)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <p className="text-red-500">{error?.message ?? "Failed to connect"}</p>
      )}
    </div>
  );
};

export default modal;
