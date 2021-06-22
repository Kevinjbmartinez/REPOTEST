import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, 
  TextInput, 
  Button, 
  Alert 
} from 'react-native';

import Contacto from "./src/componente/Lista";

export default function App(){

  const [numero, setnumero]   = useState(0);
  const [listaContactos, setContacto] = useState([
{id:1, nombre : "Contacto 1", numero :"Numero de contacto"},
{id:2, nombre : "Contacto 2", numero :"Numero de contacto"},
{id:3, nombre : "Contacto 3", numero :"Numero de contacto"},
]);

const [nuevoContacto,addContacto ] = useState(false);
useEffect( ()=>{
if(nuevoContacto === true){
  listaContactos.push({id:4, titulo : "Contacto X+1", numero :"Agregue numero de contacto"});

}
addContacto(false);

},
[nuevaContacto])

const agregarContacto =() =>{
  addContacto(true);
}

  return(
    <SafeAreaView>
      <Button style={styles.btn} title="Nuevo Contacto" color="#FF5733" onPress={agregarContacto}></Button>
            <ScrollView>


      {
       listaContactos.map((item,index)=> (
       <Tarea data={item}/>

  ))

      }


      </ScrollView>
    </SafeAreaView>
         
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  titulo:{
    fontSize: 100,
    fontWeight: '600',

  },
  btn:{
marginTop:8,
marginLeft:8,
marginRight:8

  }
});
