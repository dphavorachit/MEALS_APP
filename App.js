import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

// Stack now contains a stack of screens that holds 2 component: name, component.
// The name is a way to give an ID to the screen. Component points to the screen component. Just the pointerk.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        </Stack.Navigator>
        {/*<CategoriesScreen /> // Not needed anymore since the screen is in the stack*/}
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  
});