import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from './components/Detalhes';
import Card from './components/Card';

const dados = [
  { nome: 'Blueberry and Raspberry Pancakes', imagem: require('./assets/favpng_breakfast-cereal-fast-food-pancake-toast.png'), valor: 15.75, rate: 4.9, kcal: 60, tempo: '20-30 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Frango Catupiry Azeitonado', imagem: require('./assets/pizza-de-frango-com-catupiry.jpg'), valor: 11.99, rate: 8.9, kcal: 20, tempo: '10-30 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Cupcake de Jaca', imagem: require('./assets/7ace9fd0d898132ccc584d6e034d3c97.jpg'), valor: 20.9, rate: 9.9, kcal: 35, tempo: '5-12 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Besouros de Chocolate', imagem: require('./assets/chocolate-701500_1280.jpg'), valor: 25555, rate: 3.9, kcal: 90, tempo: '2-10 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' }
];

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <Text style={styles.tituloApp}>Foodi Appi</Text>
      {dados.map((obj, index) =>
        <Pressable
          key={index}
          style={styles.v100}
          onPress={() => navigation.navigate('Detalhes do Produto', { item: obj })}>
          <Card key={index} item={obj} />
        </Pressable>
      )}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes do Produto" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  v100: {
    width: '100%'
  },
  tituloApp: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

