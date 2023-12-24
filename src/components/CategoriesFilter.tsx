import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {categories, colors} from '../Constant';

const CategoriesFilter = () => {
  return (
    <View style={styles.categoriesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              style={[
                styles.categoryCard,
                {
                  backgroundColor:
                    index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                },
              ]}>
              <Text
                style={[
                  styles.categoryTxt,
                  {
                    color: index === 0 ? colors.COLOR_LIGHT : '#000',
                  },
                ]}>
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  categoriesContainer: {},
  categoryCard: {
    marginRight: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
  },
  categoryTxt: {
    fontSize: 16,
  },
});
