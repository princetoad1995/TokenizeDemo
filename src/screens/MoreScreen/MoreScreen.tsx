import React from 'react';
import { View, Text } from 'react-native';
import { useStyleMore } from './MoreStyles';

const MoreScreen = () => {
  const { styles } = useStyleMore();

  return (
    <View style={styles.container}>
      <Text>More screen</Text>
    </View>
  );
};

export default MoreScreen;
