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

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={'Hi, John'} headerIcon={'bell'} />
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
