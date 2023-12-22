import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {categories, colors} from '../Constant';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal>
        {categories.map((category, index) => {
          return (
            <View style={styles.categoryCard}>
              <Text>{category.category}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: colors.COLOR_LIGHT,
    marginRight: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 16,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
});
