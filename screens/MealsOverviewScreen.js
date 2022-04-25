
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// Can also use hook as an alternative to using route
// import { useRoute } from '@react-navigation/native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

// Route prop can be used like the navigation prop.
function MealsOverviewScreen({ route }) {
    // optional object containing params which is defined while navigating. 
    const catId = route.params.categoryId;  // comes from the CategoriesScreen. the param "CategoryId" is defined in the navigation prop for MealsOverview
   
    // Using useRoute hook instead of route prop
    // const route = useRoute();
    // route.params...

    const displayedMeals = MEALS.filter((mealItem) => { 
        return mealItem.categoryIds.indexOf(catId) >= 0;
     });

    // Imported from MealItem.js as a function
     function renderMealItem(itemData) {
         return <MealItem title={itemData.item.title} />;
     };

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});