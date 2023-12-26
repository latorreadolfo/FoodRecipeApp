import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';

import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../Constant';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const RecipeDetailScreen = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <View style={[styles.mainContainer, {backgroundColor: item.color}]}>
      <SafeAreaView style={styles.headingIcons}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome
            name={'arrow-circle-left'}
            size={28}
            color={colors.COLOR_LIGHT}
          />
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color={colors.COLOR_LIGHT} />
      </SafeAreaView>
      <View style={styles.secondaryContainer}>
        {/* RECIPE IMAGE */}
        <View style={styles.imgContainer}>
          <Image style={styles.imgProps} source={item.image} />
        </View>

        {/* RECIPE NAME */}
        <Text style={styles.itemTxt}>{item.name}</Text>

        {/* RECIPE DESCRIPTION */}
        <Text style={styles.recipeDescription}>{item.description}</Text>

        {/* RECIPE EXTRA DETAILS */}
        <View style={styles.mainDetailsContainer}>
          <View style={styles.firstBox}>
            <Text style={styles.emoji}>👨🏼‍🍳</Text>
            <Text style={styles.emojiTxt}>{item.difficulty}</Text>
          </View>
          <View style={styles.secondBox}>
            <Text style={styles.emoji}>⏱</Text>
            <Text style={styles.emojiTxt}>{item.time}</Text>
          </View>
          <View style={styles.thirdBox}>
            <Text style={styles.emoji}>🔥</Text>
            <Text style={styles.emojiTxt}>{item.calories}</Text>
          </View>
        </View>

        {/* INGREDIENTS */}
        <View style={styles.ingredientsView}>
          <Text style={styles.ingredientsHeading}>Ingredients:</Text>

          {item.ingredients.map(ingredient => {
            return (
              <View style={styles.ingredientsViewlist}>
                <Text style={styles.ingredientsTxt}>{ingredient}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headingIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  secondaryContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
  },
  imgContainer: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: -150,
  },
  imgProps: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  itemTxt: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.COLOR_DARK,
    marginTop: 160,
  },
  recipeDescription: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.COLOR_DARK,
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  mainDetailsContainer: {
    flexDirection: 'row',
  },
  firstBox: {
    backgroundColor: '#F9E79F',
    paddingVertical: 10,
    minWidth: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  secondBox: {
    backgroundColor: '#7DCEA0',
    paddingVertical: 10,
    minWidth: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  thirdBox: {
    backgroundColor: '#D98880',
    paddingVertical: 10,
    minWidth: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 40,
  },
  emojiTxt: {
    fontSize: 18,
    color: colors.COLOR_DARK,
    fontWeight: '400',
  },
  ingredientsView: {
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  ingredientsHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.COLOR_DARK,
  },
  ingredientsViewlist: {
    marginLeft: 5,
  },
  ingredientsTxt: {
    color: colors.COLOR_DARK,
  },
});
