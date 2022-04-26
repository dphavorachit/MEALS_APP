import { Text, View, Image } from 'react-native';

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;      // Can use mealId param from MealItem.js 

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);      // gives access to MEALS properties
    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability} 
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}>{ingredient}</Text>))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => (<Text key={step}>{step}</Text>))}
        </View>
    )
}

export default MealDetailsScreen;