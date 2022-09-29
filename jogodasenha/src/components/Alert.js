export default function Alert({ isCorrect, solution, turn }) {
	return (
		<div className="alert">
			<div>
				<p className="solution">{solution}</p>
				{isCorrect && (
					<>
						<h1>You Win!</h1>
						<p>You did it, in {turn} guesses :)</p>
					</>
				)}
				{!isCorrect && (
					<>
						<h1>You Lose!</h1>
						<p>See u later :)</p>
					</>
				)}
				<a href="/jogodasenha"><button>Try Again</button></a>
			</div>
		</div>
	)
}
