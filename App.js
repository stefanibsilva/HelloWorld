import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo</Text>

      <text>Meu nome é Stefani e este é meu primeiro APP em React!</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  titulo: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5
  }
});
