import './App.css';
import Nota, {Nota2,Nota3} from  "./Componente/Alumno"


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
            <p>
            </p>

        <Nota       
        identidad="08191990009876" nombre="Juan Jose Garcia Lopez" nacimiento= "25-Feb-1990" Nota="70,90,78"


        />
        <Nota
        identidad="0602197976543" nombre="Pedro Antonio Suarez Avila" nacimiento= "12-Jul-1979" Nota="87,76,97"

        
        />
        <Nota
        identidad="0511200045678" nombre="Lourdes Elizabet Gonzales Juarez" nacimiento= "31-Dic-2000" Nota="98, 99,97"

        
        />
       
      </header>
    </div>
  );
}

export default App;
