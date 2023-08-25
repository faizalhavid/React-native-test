import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import MioLogo2 from '@assets/images/Mio_Logo2.png';
import { Dimensions } from 'react-native';
import { Colors } from '@src/theme';
import MyButton from '@src/components/button';

const size = Dimensions.get('window');

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        halo
      </Text>
        <MyButton text="Button" onPress={() => {}} variant={"gradient"}/>
        <MyButton text="Button" onPress={() => {}} variant={"outline"}/>
    </View>
    
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flex : 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    marginTop: size.height * 0.15,
    justifyContent: 'center',
  },
  logo: {
    height: 81,
    width: 218,
    resizeMode: 'contain',
    marginBottom: size.height * 0.08,
  },
  textBold: {
    fontSize: 18,
    color: Colors.NAVY,
    fontWeight: '700',
  },
  textRegular: {
    fontSize: 15,
    color: Colors.GRAY,
    fontWeight: '400',
  },
});
