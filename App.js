// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite seu nome</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      {nome !== '' && (
        <View style={styles.areaNome}>
          <Text style={styles.label}>Nome estilizado:</Text>
          <Text style={styles.nomeEstilizado}>{nome}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#4a90e2',
    marginBottom: 40,
  },
  areaNome: {
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  nomeEstilizado: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    textAlign: 'center',
    textShadowColor: 'rgba(74, 144, 226, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});