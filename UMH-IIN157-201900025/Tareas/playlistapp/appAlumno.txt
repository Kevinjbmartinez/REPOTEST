import './App.css';
import Nota, {Nota2,Nota3} from  "./Componente/Alumno"


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
            <p>
            </p>

        <Nota       
        identidad="08191990009876" nombre="Juan Jose Garcia Lopez" nacimiento= "25-Feb-1990" promedio={(80+70+90)/3}


        />
        <Nota
        identidad="0602197976543" nombre="Pedro Antonio Suarez Avila" nacimiento= "12-Jul-1979" promedio={(78+75+97)/3}

        
        />
        <Nota
        identidad="0511200045678" nombre="Lourdes Elizabet Gonzales Juarez" nacimiento= "31-Dic-2000" promedio={(90+97+98)/3}

        
        />
       
      </header>
    </div>
  );
}

export default App;
