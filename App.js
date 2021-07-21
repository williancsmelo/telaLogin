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
  TouchableOpacity
} from 'react-native'

const fundo = 'white'

export default function App() {
  clickLogin = () => {
    Alert.alert('Solicitando login', 'Login...')
  }
  clickSignup = () => {
    Alert.alert('Criando conta', 'Criar conta...')
  }

  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image source={require('./assets/logo.png')} />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              this.clickLogin()
            }}
          >
            <Text style={styles.logintext}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signup}
          onPress={() => {
            this.clickSignup()
          }}>
            <Text style={styles.signuptext}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: fundo,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 7,
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    //paddingVertical: 15,
    bottom: '10%'
  },

  buttons: {
    bottom: '5%',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around'
  },

  login: {
    backgroundColor: 'purple',
    height: 40,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  logintext: {
    color: 'white'
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
