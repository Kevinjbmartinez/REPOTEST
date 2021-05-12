import './App.css';
import Persona  from "./componentes/Persona"; 
function App() {

  const v_nombre = "Juan Jose";
  const v_apellido = "Perez"
  const opersona = {
    nombre: "Juan Jose",
    apellido: "Perez",
    edad: 20,
    nacionalidad: "Hondureño",
    genero: "M"
  };

const f_saludar= (props) => {
  alert("Hola, soy "+props);
  
}

  return (
    <div className="App">
      <header className="App-header">
        
        <Persona
        personaInfo={opersona}
        fnsaludar= {f_saludar}
        />
                
        
      </header>
    </div>
  );
}

export default App;
