import React, {useContext, useState, useEffect} from 'react'
import { ResetContext } from './Context';
import useWinner from './Hooks/useWinner';
import MyButton from './MyButton';

function GameField({setWinner}) {
  const [step, setStep] = useState('X')
  const {isReset, setIsReset} = useContext(ResetContext)
  const [state, setState] = useState({})
  const btnProps = {isReset, setStep, step, setState, state}

  useWinner({setWinner, state})

  useEffect(() => {
    setStep('X')
    setState({})
    setWinner('')
  }, [isReset])

  return (
    <div>
      <h1>Now turn: {step}</h1>
      <div className='tbl'>
        {[...Array(9)].map((x, i) =>
          <MyButton {...btnProps} key={i} id={i+1} />
        )}
      </div>
      <button onClick={() => setIsReset(!isReset)} className='btn-reset' >Reset</button>
    </div>
  )
}

export default GameField