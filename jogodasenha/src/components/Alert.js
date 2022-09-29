export default function Alert({ isCorrect, solution, turn }) {
	return (
		<div className="alert">
			<div>
				<p className="solution">{solution}</p>
				{isCorrect && (
					<>
						<h1>Você Ganhou!</h1>
						<p>Você fez isso, em {turn} tentativas :)</p>
					</>
				)}
				{!isCorrect && (
					<>
						<h1>Você Perdeu!</h1>
						<p>Até logo! :)</p>
					</>
				)}
				<a href="/jogodasenha"><button>Try Again</button></a>
			</div>
		</div>
	)
}
