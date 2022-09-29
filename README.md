# JOGO DA SENHA
Para a implementanção do jogo foi usado a linguagem react, junto ao framework "MUI" para criação de alguns componentes como:
- NavBar
- Icons de Estrela

## COMPONENTES DO SITE
- *Row e Div:* Esses componentes foram usados para criação das "tabelas" de preenchimento das palavras.
- *useWordle:* Foi nesse componente que a lógica do código está, tendo as seguintes funcionalidades:
  - Limite de tentativas em um array;
  - CurrentGuess: Formato de resposta das tentativas, limitando a 5;
  - Sistema de inserir dados pelo "enter" e apagar pelo "delete";
  - Uso do "regex" para identifricar o recebimento de letras;
  - Uso do "useState" captar todas essas mudanças de estado;
  - Turn: Limite de Preenchimento;
  - Sistema de Cores;
- *Alert:* Componente usado para configurar o modelo de alertas dos resultado, tanto para vencedor, quanto para perdedor.
- *Info:* Componente criado para instruir os jogadores quanto as regras e funcionalidades do jogo.
- *Wordle:* É o componente chave para o funcionamento do próposito do site, pois nele está os demais componentes, exceto o "Info".

