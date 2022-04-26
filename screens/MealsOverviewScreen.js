
import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
// Can also use hook as an alternative to using route
// import { useRoute } from '@react-navigation/native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

// Route prop can be used like the navigation prop.
function MealsOverviewScreen({ route, navigation }) {
    // optional object containing params which is defined while navigating. 
    const catId = route.params.categoryId;  // comes from the CategoriesScreen. the param "CategoryId" is defined in the navigation prop for MealsOverview
   
    // Using useRoute hook instead of route prop
    // const route = useRoute();
    // route.params...

    const displayedMeals = MEALS.filter((mealItem) => { 
        return mealItem.categoryIds.indexOf(catId) >= 0;
     });

    // Need to place the navigation set options into a useLayoutEffect to avoid warnings. Because CATEGORIES is external being imported.
     useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
     }, [catId, navigation]);   //DEPENDENCIES

 

    // Imported from MealItem.js as a function
     function renderMealItem(itemData) {
         // Helper object to import props from MealItem.js
         const item = itemData.item;    // using itemData.item multiple times within function - use item variable
         const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
         };
         return (
            <MealItem {...mealItemProps} />
         );
     }

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