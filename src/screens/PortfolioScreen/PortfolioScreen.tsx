import React from 'react';
import { View, Text } from 'react-native';
import { useStylePortfolio } from './PortfolioStyles';

const PortfolioScreen = () => {
  const { styles } = useStylePortfolio();

  return (
    <View style={styles.container}>
      <Text>Portfolio screen</Text>
    </View>
  );
};

export default PortfolioScreen;
