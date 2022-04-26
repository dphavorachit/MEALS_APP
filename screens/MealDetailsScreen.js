import { Text } from 'react-native';

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;      // Can use mealId param from MealItem.js 
    return <Text>This is the Meal Details Screen ({mealId})</Text>
}

export default MealDetailsScreen;