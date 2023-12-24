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
import RecipeCard from '../components/RecipeCard';

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

      {/* RECIPE LIST FILTER */}
      <View style={styles.recipesView}>
        <Text style={styles.recipesHeading}>Popular</Text>

        {/* RECIPES LIST */}
        <RecipeCard />
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
    marginTop: 12,
  },
  recipesHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 12,
  },
  recipesView: {
    flex: 1,
  },
});
