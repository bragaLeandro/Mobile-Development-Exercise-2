import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

let styles = {
  input: {
    padding: 22,
    backgroundColor: '#eeeee4',
    borderColor: '#000000',
    borderBottom: '1px solid',
  },
  container: {
    marginTop: 60,
    backgroundColor: '#eeeee4',
    minHeight: "100%",

  },
  body: {
    minHeight: "100%",
    backgroundColor: '#eeeee4'
  }
};

function App() {
  const [text, setText] = useState('Cadastrar');
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    setText('Enviado');
    setDisabled(true);
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome do pet" />
        <TextInput style={styles.input} placeholder="Raça" />
        <TextInput style={styles.input} placeholder="Peso" />
        <TextInput style={styles.input} placeholder="Nascimento" />
        <TextInput style={styles.input} placeholder="Nome do Dono" />
        <Button title={text} onPress={handleSubmit} disabled={isDisabled} />
      </View>
    </View>
  );
}

export default App;