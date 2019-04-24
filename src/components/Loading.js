import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <ActivityIndicator size="large" color="#E52A3B" />
  </View>
);

export default Loading;
