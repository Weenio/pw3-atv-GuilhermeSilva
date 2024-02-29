import logo from './logo.svg';
import './App.css';

import BookReader from './components/BookReader';
import BookCard from './components/BookCard';
import BookDesc from './components/BookDescription';

import beserk from './images/capalivro.jpg'

function App() {

  const descLivro = "Guts é um guerreiro errante e antigo Comandante da Tropa de Assalto da renomada unidade mercenária conhecida como o Bando do Falcão. Ele, agora, caça criaturas demoníacas chamadas Apóstolos, humanos que fizeram um pacto com um grupo de arqui demônios conhecidos como \"A Mão de Deus\" que exige o sacrifício de qualquer coisa ou pessoa que for mais achegado a eles em troca de um poder sobrenatural incrível. O próprio Guts carrega uma Marca do Sacrifício vinda deste mesmo ritual; ele é uma das poucas pessoas que sobreviveram a esse ritual, mas, ainda assim, demônios são atraídos incessantemente até ele onde quer que vá, com a Marca se tornando mais dolorosa e sangrenta conforme a proximidade e o poder de seus adversários. Depois de uma briga de infância problemática no bando mercenário de seu pai adotivo, Guts é recrutado pelos Falcões por seu carismático líder Griffith."

  return (
    <div className="App">
      <div className="leftCol">
        <BookCard
          img={beserk}
        />
      </div>
      <BookReader
        nomeLivro={"Berserk Vol. 1: Edição de Luxo"}
        descBLivro={"Capa comum – 20 novembro 2023"}
        autorLivro={"Kentaro Miura"}
        editoraLivro={"Panini"}
        notaLivro={"4,9"}
      />
      <BookDesc
        descLivro={descLivro}
      />
    </div>
  );
}

export default App;
