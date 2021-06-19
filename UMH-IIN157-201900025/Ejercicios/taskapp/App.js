import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button
} from 'react-native';


import Tarea from "./src/componentes/Tarea.js";

export default function App(){

const [listaTareas, setTareas] = useState([
  {id:1, titulo : "Kevin Joel Martinez", descripcion :"201900025"},
{id:1, titulo : "Tarea 1", descripcion :"Descripcion Tarea 1"},
{id:2, titulo : "Tarea 2", descripcion :"Descripcion Tarea 2"},
{id:3, titulo : "Tarea 3", descripcion :"Descripcion Tarea 3"},
]);

const [nuevaTarea,addTarea ] = useState(false);
useEffect( ()=>{
if(nuevaTarea === true){
  listaTareas.push({id:4, titulo : "Tarea X+1", descripcion :"Esta es una tarea agregada"});

}
addTarea(false);

},
[nuevaTarea])

const agragarTarea =() =>{
  addTarea(true);
}

  return(
    <SafeAreaView>
      <Button style={styles.btn} title="Nueva Tarea" color="#FF  5733" onPress={agragarTarea}></Button>
      <ScrollView>

      {
       listaTareas.map((item,index)=> (
       <Tarea data={item}/>

  ))

/*
<Tarea
        titulo="Tarea 1"
        descripcion = "Descaripcion Tarea 1"
        />

      <Tarea
        titulo="Tarea 2"
        descripcion = "Descaripcion Tarea 2"
        />

        <Tarea
        />
<Tarea
        />
        <Tarea
        />
        <Tarea
        />
        */

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

