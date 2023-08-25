import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import loadingState from '@utils/proxy'
import {Colors} from '@src/theme'

const Loading = () => {
  return (
    <View >
      {loadingState.isLoading ? (
        <ActivityIndicator size="large" color={Colors.SAGE} />
      ) : null}
    </View>
  );
};


export default Loading;
