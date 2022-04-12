import {useEffect}from 'react'

function useWinner(deps) {
    const WINROWS = ['123', '456', '789', '147', '258', '369', '159', '357']

    useEffect(() => {
        function isWinFunc(){
          for (let i=0; i < WINROWS.length; i++){
            let countX = 0
            let countO = 0
            for (let j=0;  j < 3; j++ ){
              if (deps.state[WINROWS[i][j]] === 'X'){
                countX++
                if(countX === 3){
                    deps.setWinner('X')
                }
              }
      
              if (deps.state[WINROWS[i][j]] === 'O'){
                countO++
                if(countO === 3){
                    deps.setWinner('O')
                }
              }
            }
          }
        }
        isWinFunc()
      },[deps.setWinner, deps.state]) 
}

export default useWinner