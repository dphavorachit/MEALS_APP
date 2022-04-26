import { View, Pressable, Text, Image, StyleSheet, Platform} from "react-native";
import { useNavigation } from '@react-navigation/native' // Hook
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();     // function call for useNavigation hook

    // Need to add this function so that the MealDetailsScreen only routes when the button is selected on press.
    function selectMealItemHandler()  {
        navigation.navigate('MealDetails', {        // uses the 'name' of the screen in App.js
        mealId: id      // calling params using the id prop from MealItem function above
        });    
    }
    
     


    return (
    <View style={styles.mealItem}>
        <Pressable 
            android_ripple={{color: '#ccc' }}
            style={({pressed}) =>  pressed ? styles.buttonPressed : null}
            onPress={selectMealItemHandler}
        >
            <View>
                <View>
                    <Image source={{uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>    
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        //overflow: 'hidden',
        backgroundColor: 'white',
        // Android
        elevation: 4,
        // IOS
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',     //hides overflow beyond the rounded corners for ripple
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        margin: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    buttonPressed: {
        opacity: 0.5
    }
});