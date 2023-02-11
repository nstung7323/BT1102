// In App.js in a new project
import { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://10.0.2.2:3000/products')
      .then(res => res.json())
      .then(data => setList(data.products))
      .catch((errors) => {
        throw errors
      })
  }, []);

  return (
    <FlatList 
    data={list}
    renderItem={({item}) => 
      <View>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
          <Text>{item.price}</Text>
      </View>
  }
  keyExtractor={(item) => item.id}
  />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Products" 
        component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
