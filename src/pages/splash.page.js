/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Initial');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#225084"
        barStyle="light-content"
        translucent
      />
      <Image source={Logo} style={styles.image} />
    </View>
  );
};

export default Splash;

const width = Dimensions.get('screen').width / 1.8;
const height = Dimensions.get('screen').height / 5;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#225084',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width,
    height,
    borderRadius: 150,
  },
});
