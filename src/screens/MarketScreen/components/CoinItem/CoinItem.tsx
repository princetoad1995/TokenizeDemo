import React from 'react';
import { View, Image } from 'react-native';
import { useStyleCoinItem } from './CoinItemStyles';
import { CoinItemProps } from './types';
import { Card, Text } from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import { calculatePercentageChange } from '@/utils/format-number';
import { arrowUp, arrowDown } from '@/assets/images';

const CoinItem = ({ item }: CoinItemProps) => {
  const { styles } = useStyleCoinItem();

  const { marketId, marketCurrencyLong, marketCurrency } = item;
  const percent = calculatePercentageChange(item.lastPrice, item.openPrice);

  return (
    <Card>
      <FastImage
        source={{
          uri: `https://tokenize-dev.com/assets/images/currency-logos/${marketCurrency.toLocaleLowerCase()}.png`,
        }}
        style={styles.img}
      />
      <View style={styles.containerCoinName}>
        <Text style={styles.marketIdLabel}>{marketId}</Text>
        <Text h3 style={styles.marketNameLabel}>
          {marketCurrencyLong}
        </Text>
      </View>
      <View style={styles.containerMoney}>
        <Text style={styles.lastPriceLabel}>${item.lastPrice.toFixed(2)}</Text>
        <View style={styles.containerPercent}>
          <Text
            h4
            style={
              percent.includes('+')
                ? styles.percentGreenLabel
                : styles.percentRedLabel
            }>
            {percent}%
          </Text>
          <Image
            style={styles.arrowImg}
            source={percent.includes('+') ? arrowUp : arrowDown}
            resizeMode="stretch"
          />
        </View>
      </View>
    </Card>
  );
};

export default CoinItem;
