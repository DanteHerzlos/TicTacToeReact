import './App.css';
import React, { useState, useEffect } from 'react';
import GameField from './GameField';
import Modal from './Modal/Modal';
import { ResetContext } from './Context';

function App() {
  const [winner, setWinner] = useState('')
  const [isReset, setIsReset] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    if (winner !== '') {
      setModalActive(!modalActive)
    }
  }, [winner])

  return (
    <ResetContext.Provider value={{
      isReset,
      setIsReset
    }}>
      <div className="App"> 
        <GameField setWinner={setWinner}/>
        <Modal active={modalActive} setActive={setModalActive} winner={winner} />
      </div>
    </ResetContext.Provider>
  );
}

export default App;