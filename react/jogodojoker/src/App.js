import logo from './logo.svg';
import './App.css';
import JogoDoJoker from './JogoDoJoker';

const perguntas = [
    {
        "question": "Qual o actor que interpretou a personagem Maui no filme Moana?",
        "options": [
            {"key": "a", "text": "Brad Pitt"},
            {"key": "b", "text": "Dwayne Johnson"},
            {"key": "c", "text": "Morgan Freeman"},
            {"key": "d", "text": "Adam Sandler"}
        ],
        "answer": "b"
    },
    {
        "question": "Em que filme surge a frase 'Para o infinito e mais além'?",
        "options": [
            {"key": "a", "text": "Star Wars"},
            {"key": "b", "text": "Rei Leão"},
            {"key": "c", "text": "Toy Story"},
            {"key": "d", "text": "Chicken Little"}
        ],
        "answer": "c"
    },
    {
        "question": "Qual o nome da Leoa do filme Rei Leão 2?",
        "options": [
            {"key": "a", "text": "Kiara"},
            {"key": "b", "text": "Nala"},
            {"key": "c", "text": "Kira"},
            {"key": "d", "text": "Britney"}
        ],
        "answer": "a"
    },
    {
        "question": "Quais os nomes dos sobrinhos do Pato Donald?",
        "options": [
            {"key": "a", "text": "Carlinhos, Nandinho e Pipinho"},
            {"key": "b", "text": "Nuninho, Ruizinho e Pedrinho"},
            {"key": "c", "text": "Nelsinho, Joãozinho e Paulinho"},
            {"key": "d", "text": "Huguinho, Zezinho e Luisinho"}
        ],
        "answer": "d"
    },
    {
        "question": "Qual a especie do animal amigo do Aladdin?",
        "options": [
            {"key": "a", "text": "Cão"},
            {"key": "b", "text": "Macaco"},
            {"key": "c", "text": "Elefante"},
            {"key": "d", "text": "Lemur"}
        ],
        "answer": "b"
    },
    {
        "question": "Qual o animal que representa a consciência do Pinóquio?",
        "options": [
            {"key": "a", "text": "Grilo"},
            {"key": "b", "text": "Formiga"},
            {"key": "c", "text": "Gafanhoto"},
            {"key": "d", "text": "Coelho"}
        ],
        "answer": "a"
    },
    {
        "question": "Qual o nome da pantera no filme O Livro da Selva?",
        "options": [
            {"key": "a", "text": "Baviera"},
            {"key": "b", "text": "Baga"},
            {"key": "c", "text": "Bala"},
            {"key": "d", "text": "Baguera"}
        ],
        "answer": "d"
    },
    {
        "question": "Quais os nome das personagens principais no filme A Atlântida?",
        "options": [
            {"key": "a", "text": "Nilo e Linda"},
            {"key": "b", "text": "Milo e Kida"},
            {"key": "c", "text": "Nilo e Guida"},
            {"key": "d", "text": "Milo e Zita"}
        ],
        "answer": "b"
    },
    {
        "question": "Quais os poderes de Violeta no filme Os Incriveis?",
        "options": [
            {"key": "a", "text": "Elasticidade e super força"},
            {"key": "b", "text": "Super força e velocidade"},
            {"key": "c", "text": "Campos de força e invisibilidade"},
            {"key": "d", "text": "Invisibilidade e telecinesia"}
        ],
        "answer": "c"
    },
    {
        "question": "Que princesa foi amaldiçoada pela rainha Maléfica?",
        "options": [
            {"key": "a", "text": "Aurora"},
            {"key": "b", "text": "Cinderela"},
            {"key": "c", "text": "Ariel"},
            {"key": "d", "text": "Branca de Neve"}
        ],
        "answer": "a"
    },
    {
        "question": "Onde se passa o filme O Corcunda de Notre Dame?",
        "options": [
            {"key": "a", "text": "Londres"},
            {"key": "b", "text": "Paris"},
            {"key": "c", "text": "Atenas"},
            {"key": "d", "text": "Berlim"}
        ],
        "answer": "b"
    },
    {
        "question": "Em que animal se transformou o Imperador no filme Pacha e o Imperador?",
        "options": [
            {"key": "a", "text": "Num camelo"},
            {"key": "b", "text": "Num gato"},
            {"key": "c", "text": "Num lama"},
            {"key": "d", "text": "Num puma"}
        ],
        "answer": "c"
    },
    {
        "question": "Que actor interpreta a personagem Jack Sparrow no filme Os Piratas das Caraíbas?",
        "options": [
            {"key": "a", "text": "Johnny Depp"},
            {"key": "b", "text": "Brat Pitt"},
            {"key": "c", "text": "Leonardo DiCaprio"},
            {"key": "d", "text": "Orlando Bloom"}
        ],
        "answer": "a"
    },
    {
        "question": "Como se chama a amiga de Wall-E? ",
        "options": [
            {"key": "a", "text": "Hannah"},
            {"key": "b", "text": "Lee"},
            {"key": "c", "text": "Eva"},
            {"key": "d", "text": "Beep-Boop"}
        ],
        "answer": "c"
    },
    {
        "question": "Como se chama o dragão da Mulan? ",
        "options": [
            {"key": "a", "text": "Jack"},
            {"key": "b", "text": "Mushu"},
            {"key": "c", "text": "Liu"},
            {"key": "d", "text": "Lee"}
        ],
        "answer": "b"
    }

]


function App() {
  return (
    <div className="App">
      <JogoDoJoker perguntas={perguntas} />
    </div>
  );
}

export default App;
