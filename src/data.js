//  icons
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiBook,
  FiMusic,
  FiFilm,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/puberflix.png';
import Project2 from './assets/img/projects/villians.png';
import Project3 from './assets/img/projects/library.png';
import Project4 from './assets/img/projects/todolist.png';
import Project5 from './assets/img/projects/profilegit.png';
import Project6 from './assets/img/projects/gamesecret.png';
import Project7 from './assets/img/projects/library.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/git.png';
import SkillImg6 from './assets/img/skills/figma.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'hobbies',
    href: 'hobbies',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/SamaraSilvia81',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/samara-silvia-9a2a26231',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'PuberFlix',
    category: 'UI/UX design',
    description:'Protótipo desenvolvido pela minha equipe para o primeiro ciclo de residência, Kick Off, do programa Embarque Digital.',
    href: 'https://www.figma.com/proto/7dO3PLdiGHOwpeiz8NbfHT/Resid%C3%AAncia-1?node-id=18%3A1172&starting-point-node-id=18%3A1172',
  },
  {
    id: '2',
    image: Project2,
    name: 'Word´s Villians',
    category: 'web development',
    description:'Projeto Pessoal de Front, contendo as tecnologias de HTML,CSS e JS, voltado para um universo dos vilões geek.',
    href: 'https://worldsvillians.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Library Studio',
    category: 'UI/UX design',
    description:'Prótipo desenvolvido para um projeto fullstack, envolvendo React no front e Java e Spring Boot no back.',
    href: 'https://www.figma.com/proto/pEAWwmhwBH1392WHb1oFj0/Prot%C3%B3tipo---Library-Studio-X?node-id=0%3A1',
  },
  {
    id: '4',
    image: Project4,
    name: 'ToDo List',
    category: 'web development',
    description:'Projeto Front-End desenvolvido com HTML, CSS e JS.',
    href: 'https://projetos-front-end.vercel.app/ToDoList/index.html',
  },
  {
    id: '5',
    image: Project5,
    name: 'Profile Github',
    category: 'web development',
    description:'Projeto Básico de React simulando a view profile mobile do github.',
    href: '',
  },
  {
    id: '6',
    image: Project6,
    name: 'Game Secret',
    category: 'web development',
    description:'Projeto de React sobre um jogo de advinhar palavras/senhas.',
    href: 'https://jogo-da-senha-samara81.vercel.app/jogodasenha',
  },
  {
    id: '7',
    image: Project7,
    name: 'Library Studio',
    category: 'fullstack',
    description:'Prótipo desenvolvido para um projeto fullstack, envolvendo React no front e Java e Spring Boot no back.',
    href: 'https://www.figma.com/proto/pEAWwmhwBH1392WHb1oFj0/Prot%C3%B3tipo---Library-Studio-X?node-id=0%3A1',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'fullstack',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

// hobbies
export const hobbies = [
  {
    icon: <FiBook />,
    name: 'Bookstan',
    description:
      'Eu me considero uma apreciadora de livros. Eu amo ler livros, embora não leia tanto quanto eu gostaria. Acredito que os meus gêneros favoritos são fantasia, principalmente a alta como a saga de Nárnia e a trilogia de Castelo animado, mas também gosto muito de dramas e um romance clássico. Sou um tanto eclética nessas questões. '
  },
  {
    icon: <FiMusic />,
    name: 'Musicista',
    description:
      'Eu amo investir meu tempo tocando teclado, cantando e fazendo kits vocais. Amo a beleza que é a melodia! A forma como a música conversa com você. Em comparação aos livros, eu não sou tão eclética, então os meus gêneros favoritos são gospel, pois como cristã ele se sonda, mas também gosto de um pop e uma música clássica!',
  },
  {
    icon: <FiFilm />,
    name: 'Cinematográfica',
    description:
      'Quem não ama se sentar na cama, com cobertores quentinhos e maratonar uma série né? Eu adoro, principalmente se for filmes e séries da Marvel e Dc. Amo essas indústrias! Mas também aprecio um excelente anime, Avatar - kof kof -, e uns doramas!',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dublin, Island',
    description: 'Serving clients worldwide',
  },
];