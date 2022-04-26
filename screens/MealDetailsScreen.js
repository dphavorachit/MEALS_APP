import { Text, View, Image, StyleSheet } from 'react-native';

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;      // Can use mealId param from MealItem.js 

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);      // gives access to MEALS properties
    return (
        <View>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}>{ingredient}</Text>))}
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps</Text>
            </View>
            {selectedMeal.steps.map((step) => (<Text key={step}>{step}</Text>))}
        </View>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
});