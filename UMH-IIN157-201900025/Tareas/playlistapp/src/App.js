import './App.css';
import Cancion, {Cancion2} from "./Componentes/Cancion"

function App() {

const v_titulo= "Back in Black";
const v_duracion= 4;
const v_album= "Back in Black"; 
const v_numero= 12;
const v_fechacreacion= "Abril de 1980"

const canciones = {
  titulo: "En el muelle de San Blas", 
  duracion: 5,
  album: "Sueños líquidos", 
  numero: 7,
  fechacreacion: "29 de noviembre de 1997"
};

const f_saludar= (props) => {
  alert("Hola, estas escuchando "+props);
}


  return (
    <div className="App">
      <header className="App-header">
          <p>
           PLAYLIST
        </p>
        <Cancion2 Ccan={canciones}
        fnsaludar= {f_saludar}
        />

<Cancion 
        
        titulo= {v_titulo} 
        duracion= {v_duracion} 
        album= {v_album}
        numero= {v_numero}
        fechacreacion= {v_fechacreacion}
        fnsaludar= {f_saludar}
         />

<Cancion 
        
        titulo=" In the Shadows" 
        duracion="4 : 19" 
        album="Dead Letters" 
        numero="9" 
        fechacreacion="diciembre de 2002"
        fnsaludar= {f_saludar}
        
        />
      </header>
    </div>
  );
}

export default App;
