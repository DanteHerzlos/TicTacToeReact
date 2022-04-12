import React, {useState, useEffect} from 'react'

function MyButton({isReset, step, setStep, setState, id, state}) {
    const [text, setText] = useState('')
    const [disable, setDisable] = useState(false);

    function changeStep() {
        if (step === 'X') {
            setState({...state, [id]: 'X'})
            setStep('O')
            setText('X')            
        }else{
            setState({...state, [id] : 'O'})
            setStep('X')
            setText('O')
        }
        setDisable(true) 
    }

    useEffect(() => {
        setDisable(false)
        setText('')
    }, [isReset])
      
    return (
        <button className='tic-button' disabled={disable} onClick={changeStep}>
            {text}
        </button>
    )
}

export default MyButton