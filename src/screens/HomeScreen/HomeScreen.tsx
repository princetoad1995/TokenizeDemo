import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useStyleHome } from './HomeStyles';

const HomeScreen = () => {
  const { styles } = useStyleHome();

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
