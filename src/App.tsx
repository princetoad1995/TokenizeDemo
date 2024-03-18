import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Routes';
import NavigationHelper from './routes/NavigationHelper';
import LanguageProvider from './context/LanguageContext';
import { ThemeProvider } from '@rneui/themed';
import theme from './theme';
import Toast from 'react-native-toast-message';

const persistor = persistStore(store);

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <NavigationContainer
            ref={NavigationHelper.navigationRef}
            onReady={() => (NavigationHelper.isReadyRef.current = true)}>
            <ThemeProvider theme={theme}>
              <LanguageProvider>
                <Routes />
              </LanguageProvider>
            </ThemeProvider>
          </NavigationContainer>
          <Toast />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
