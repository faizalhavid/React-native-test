import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { proxy, useSnapshot } from 'valtio';

const loadingState = proxy({
  isLoading: true,
});

export default loadingState;