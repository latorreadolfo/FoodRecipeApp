import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/welcome1.png')} />
      <Text style={styles.descriptionTxt}> 100+ Healthy Recipes </Text>
      <Text style={styles.headingTxt}>Cook Like A Chef</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList')}
        style={styles.welcomeBtn}>
        <Text style={styles.welcomeBtnTxt}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  descriptionTxt: {
    color: '#F96163',
    fontWeight: '400',
    fontSize: 25,
  },
  headingTxt: {
    color: '#3C444C',
    fontSize: 40,
    fontWeight: '900',
    marginTop: 50,
  },
  welcomeBtn: {
    marginTop: 30,
    backgroundColor: '#F96163',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 9,
    alignItems: 'center',
  },
  welcomeBtnTxt: {
    fontSize: 20,
    color: '#FFF',
  },
});
