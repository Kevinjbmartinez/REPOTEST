import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function Contacto(props){
const {data} = props;
const {id=0,nombre = "Nombre de Contacto", numero ="Telef"} = data;

    return(
 <View style={estilos.contenedor}> 
<Text style={estilos.nombre} >{nombre}</Text>
<Text style={estilos.numero}>{numero}</Text>
 </View>
    )

}

const estilos = StyleSheet.create({
contenedor:{
width: '95%',
height:150,
padding:8,
marginLeft:8,
marginRight:8,
margin:8,
marginBottom:8,
marginTop:8,
borderRadius:9,
backgroundColor:'#FF5733'
},
titulo:{
    fontSize: 18,
    fontWeight: '500',

},

descripcion:{
  fontSize: 18,
  fontWeight: '500',

}


/*Kevin Martinez - 201900025*/

});