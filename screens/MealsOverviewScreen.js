
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

// Route prop can be used like the navigation prop.
function MealsOverviewScreen({ route }) {
    // optional object containing params which is defined while navigating. 
    const catId = route.params.categoryId;  // comes from the CategoriesScreen. the param "CategoryId" is defined in the navigation prop for MealsOverview

    return (
        <View style={styles.container}>
            <Text>
                Meals Overview Screen - {catId}
            </Text>
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