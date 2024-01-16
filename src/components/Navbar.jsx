import { connect, disconnect } from 'get-starknet';
import { useEffect, useState } from 'react';

function Navbar() {
  const [connection, setConnection] = useState('');
  const [account, setAccount] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const starknetConnect = async () => {
      const connection = await connect();

      if (connection && connection.isConnected) {
        setConnection(connection);
        setAccount(connection.account);
        setAddress(connection.selectedAddress);
      }
    };

    starknetConnect();
  }, []);

  const connectWallet = async () => {
    const connection = await connect();
    if (connection && connection.isConnected) {
      setConnection(connection);
      setAccount(connection.account);
      setAddress(connection.selectedAddress);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    setAddress(undefined);
    setConnection(undefined);
    setAccount('');
  };

  return (
    <div className="flex  items-center justify-between py-3 px-6">
      <h1>Counter</h1>
      {connection?.isConnected ? (
        <div className="flex items-center gap-x-3">
          <span className="py-1 px-3 bg-slate-400  text-white rounded-[5px]">
            {address.slice(0, 7).concat('...')}
          </span>
          <button onClick={() => disconnectWallet()}>Disconnect wallet</button>
        </div>
      ) : (
        <button onClick={() => connectWallet()}>Connect wallet</button>
      )}
    </div>
  );
}

export default Navbar;
