import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native'

const fundo = 'white'

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image
        resizeMode='contain'
        style={{
          height:150,
          width:150,
          justifyContent:'center',
          alignItems:'center',
        }}
        source={require('./assets/logo.png')}/>
      </View>

      <View style={styles.container}>
        <View style={styles.viewTextEntrar}>
          <Text style={{
            fontSize:35,
            fontWeight:'bold',
          }}>Entrar no </Text>
          <Text
          style={{
            fontSize:33,
            fontWeight:'bold',
            color:'#F69E44'
          }}>Pro</Text>
          <Text
          style={{
            fontSize:33,
            fontWeight:'bold',
            color:'#8A348B'
          }}>Inclusão</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={ () => {}}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

          <TouchableOpacity
            onPress={()=>Alert.alert("Login","...")}
            style={styles.login}>
              <Text style={{
                fontSize:16,
                color:'white',
              }}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.noLogin}>
            <Text
            onPress={()=>Alert.alert("Criar conta","...")}
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
            }}>Não possui conta?</Text>
            <Text
            onPress={()=>Alert.alert("Esqueceu sua senha","...")} 
            style={{
              color: 'blue',
              textDecorationLine: 'underline'
            }}>Esqueceu sua senha?</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  logo: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom:60
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },

  viewTextEntrar:{
    marginBottom:10,
    width:'100%',
    justifyContent:'center',
    flexDirection:'row'
  },

  input: {
    backgroundColor: 'white',
    width:'100%',
    borderRadius: 7,
    marginBottom: 7,
    color: '#222',
    fontSize: 18,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    paddingVertical: 15,
  },

  login: {
    backgroundColor: 'purple',
    width:'100%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop:9
  },

  noLogin:{
    flexDirection:'row',
    marginTop:18,
    justifyContent:'space-between',
    width:'100%'
  },

  signup: {
    backgroundColor: fundo,
    height: 40,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: 'purple',
    borderWidth: 1
  },

  signuptext: {
    color: 'purple'
  }
})