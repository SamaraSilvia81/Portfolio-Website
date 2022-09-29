import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function Info() {

  return  (

	<div>
		<div className='infoGame'>

			 <Box sx={{ flexGrow:1}} >
				<AppBar position="static" sx={{ height:80,backgroundColor:'#2a2a3a'}} >
				<Toolbar className='NavBar'>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}, top:80}}
					>
					JOGO DA SENHA
				</Typography>
				</Toolbar>
				</AppBar>
     		 </Box>
		</div>

		<div className='outRules'> 
			<div className='rulesGame'>

				<h3>Regras do Jogo</h3>

				<p><StarIcon sx={{ color:'#9897d0'}}/>Digite qualquer palavra e aperte <code>ENTER</code></p>
				<p><StarIcon sx={{ color:'#9897d0'}}/>Se digitou errado pode deletar com o teclado</p>
				<p><StarIcon sx={{ color:'#9897d0'}}/>Você tem apenas 6 chances</p>

				<br></br>

				<div className='cores'>
					<p>Palavras na posição <code id='green'>correta</code></p>
					<p>Palavras na posição <code id='pink'>errada</code></p>
					<p>Palavras <code id='grey'>inexistentes</code></p>
				</div>

			</div>
		</div>

	</div>
  )
}

export default Info