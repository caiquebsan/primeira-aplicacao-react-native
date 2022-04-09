import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

/*export default function App() {

  const [texto, setTexto] = useState('Texto Inicial')
  //useState cria um 'vetor' com duas posicoes. Realizada atribuição de forma desestruturada
  //v[0] = texto : variavel, no caso Texto Inicial
  //v[1] = setTexto : funcao que atualiza a variavel

  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <Button 
        title="OK"
        onPress={() => setTexto("Outro Texto")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
*/

export default class extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      cont: 0
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.cont}</Text>
        <Button
          title="OK"
          onPress={() => this.setState({
            cont: this.state.cont + 1
          })}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
