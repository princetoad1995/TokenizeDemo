import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  HomeScreen,
  MarketScreen,
  MoreScreen,
  PortfolioScreen,
  WalletScreen,
} from '@/screens';
import { useTranslation } from 'react-i18next';
import { useTheme, Text } from '@rneui/themed';
import {
  homeIcon,
  martketIcon,
  moreIcon,
  portfolioIcon,
  walletIcon,
} from '@/assets/images';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { height } = useWindowDimensions();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { colors } = theme;

  const renderTabBarIcon = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) => {
    let source;

    switch (route.name) {
      case 'Home':
        source = homeIcon;
        break;
      case 'Market':
        source = martketIcon;
        break;
      case 'Wallet':
        source = walletIcon;
        break;
      case 'Portfolio':
        source = portfolioIcon;
        break;
      case 'More':
        source = moreIcon;
        break;
      default:
        break;
    }
    return (
      <Image
        source={source}
        style={[
          styles.icon,
          { tintColor: focused ? colors.accent : colors.grey1 },
        ]}
        resizeMode="stretch"
      />
    );
  };

  const renderTabBarLabel = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) => {
    let label;

    switch (route.name) {
      case 'Home':
        label = t('home.title');
        break;
      case 'Market':
        label = t('market.title');
        break;
      case 'Wallet':
        label = t('wallet.title');
        break;
      case 'Portfolio':
        label = t('portfolio.title');
        break;
      case 'More':
        label = t('more.title');
        break;
      default:
        break;
    }
    return (
      <View style={styles.containerButton}>
        <Text h4 h4Style={{ color: focused ? colors.accent : colors.grey1 }}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => renderTabBarIcon(route, focused),
        tabBarLabel: ({ focused }) => renderTabBarLabel(route, focused),
        tabBarStyle: {
          minHeight: height * 0.1,
        },
      })}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Market'} component={MarketScreen} />
      <Tab.Screen name={'Wallet'} component={WalletScreen} />
      <Tab.Screen name={'Portfolio'} component={PortfolioScreen} />
      <Tab.Screen name={'More'} component={MoreScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 23,
    height: 23,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 4,
  },
  indicator: {
    width: 10,
    height: 4.5,
    borderRadius: 24,
  },
});

export default BottomTabNavigator;
