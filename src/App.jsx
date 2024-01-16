import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="mx-auto w-[40%] bg-[#f5f5f5] mt-[100px] px-4 py-6 shadow-lg rounded-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Counter Dapp</h1>
        <h2 className="text-center">count is {count}</h2>

        <div className="flex justify-center gap-x-3 mt-4">
          <button className="text-white bg-slate-400 p-2 rounded-[5px] font-medium">
            Increase by 1
          </button>
          <button className="text-white bg-slate-400 p-2 rounded-[5px] font-medium">
            Decrease by 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
