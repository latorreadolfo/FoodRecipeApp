import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

type THeader = {
  headerText: string;
  headerIcon: string;
};

const Header: React.FC<THeader> = ({headerText, headerIcon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>{headerText}</Text>
      <FontAwesomeIcon name={headerIcon} size={24} color="#F96163" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  headerTxt: {
    flex: 1,
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
