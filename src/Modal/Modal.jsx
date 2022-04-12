import React, {useContext} from 'react'
import { ResetContext } from '../Context'
import cl from './modal.module.css'

function Modal({active, setActive, winner}) {
    const {isReset, setIsReset} = useContext(ResetContext)
    
    function resetBtn() {
        setIsReset(!isReset)
        setActive(false)
    }

    return (
    <div className={active ? `${cl.modal} ${cl.active}` : cl.modal} >
        <div className={active ? `${cl.modalContent} ${cl.active}` : cl.modalContent}>
            <h1>{winner} is Winner!</h1>
            <button onClick={resetBtn} className='btn-reset'>Reset</button>
        </div>
    </div>
  )
}

export default Modal