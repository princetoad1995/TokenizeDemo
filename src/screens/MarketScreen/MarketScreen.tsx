import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { useStyleMarket } from './MarketStyles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Icon, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CoinItem, LabelItem } from './components';
import { MarketItemProps } from '@/models';
import { getMarkets } from '@/store/user/userThunks';

const MarketScreen = () => {
  const { styles } = useStyleMarket();
  const { t } = useTranslation();
  const { markets, loading } = useSelector((state: RootState) => state.user);
  const flatlistRef = useRef<FlatList>(null);
  const dispatch = useDispatch<any>();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(markets?.[0]?.title || '');

  const coins = useMemo(() => {
    return markets.find(item => item.title === selectedLabel)?.list || [];
  }, [selectedLabel, markets]);

  const onPressLabel = (title: string) => {
    setSelectedLabel(title);
    flatlistRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(getMarkets());
  };

  useEffect(() => {
    if (!loading) {
      setIsRefreshing(false);
    }
  }, [loading]);

  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.containerSearch}>
          <Text style={styles.headerLabel}>
            {t('market.title').toUpperCase()}
          </Text>
          <Icon name="search" type="feather" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {markets.map((item, index) => (
            <LabelItem
              title={item.title}
              key={index}
              onPress={onPressLabel}
              isSelected={item.title === selectedLabel}
            />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {renderHeader()}
        <FlatList
          ref={flatlistRef}
          data={coins}
          renderItem={({ item }: ListRenderItemInfo<MarketItemProps>) => (
            <CoinItem item={item} />
          )}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing} // replace with your refreshing state
              onRefresh={handleRefresh} // replace with your refresh function
            />
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default MarketScreen;
