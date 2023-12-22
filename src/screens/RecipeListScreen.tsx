import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* RENDER HEADER */}
      <Header headerText={'Hi, John'} headerIcon={'bell'} />

      {/* SEARCH FILTER */}
      <SearchFilter icon="search" placeholder={'Search your recipe'} />

      {/* CATEGORIES FILTER */}
      <View>
        <Text style={styles.categoriesHeading}>Categories</Text>

        {/* CATEGORIES LIST */}
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  categoriesHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});
