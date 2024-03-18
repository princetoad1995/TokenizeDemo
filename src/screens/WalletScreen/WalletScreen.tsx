import React from 'react';
import { View, Text } from 'react-native';
import { useStyleWallet } from './WalletStyles';

const WalletScreen = () => {
  const { styles } = useStyleWallet();

  return (
    <View style={styles.container}>
      <Text>Wallet screen</Text>
    </View>
  );
};

export default WalletScreen;
