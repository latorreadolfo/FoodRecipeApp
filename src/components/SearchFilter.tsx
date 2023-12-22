import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

type TSearchFilter = {
  icon: string;
  placeholder: string;
};

const SearchFilter: React.FC<TSearchFilter> = ({icon, placeholder}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon name={icon} size={20} color="#F96163" />
      <TextInput style={styles.txtInput} placeholder={placeholder}></TextInput>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  txtInput: {
    paddingLeft: 8,
    fontSize: 16,
    color: '#808080',
  },
});
