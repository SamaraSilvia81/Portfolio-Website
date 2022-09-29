import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Alert from './Alert';

export default function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution);
	const [showAlert, setShowAlert] = useState(false)

	useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

		if(isCorrect) {
			setTimeout(() => setShowAlert(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}
		if(turn > 5) {
			setTimeout(() => setShowAlert(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

	return (
		<div className='gridBox'>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			{showAlert && <Alert isCorrect={isCorrect} turn={turn} solution={solution} />}
		</div>
	)
}
	
