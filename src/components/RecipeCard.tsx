import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {colors, recipeList} from '../Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const RecipeCard = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('RecipeDetail')}
            style={styles.recipeCard}>
            <Image style={styles.recipeImg} source={item.image} />
            <Text style={styles.recipeDescription}>{item.name}</Text>
            <View style={styles.recipePropsBox}>
              <Text style={styles.timeTxt}>{item.time}</Text>
              <Text style={styles.timeTxt}> | </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingTxt}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: colors.COLOR_LIGHT,
    borderRadius: 16,
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingVertical: 26,
    alignItems: 'center',

    shadowColor: colors.COLOR_DARK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
  },
  recipeImg: {
    width: 150,
    height: 150,
    resizeMode: 'center',
  },
  recipeDescription: {
    color: colors.COLOR_DARK,
    marginBottom: 8,
  },
  timeTxt: {
    color: colors.COLOR_DARK,
  },
  ratingTxt: {
    color: colors.COLOR_DARK,
    marginRight: 4,
  },
  recipePropsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});
