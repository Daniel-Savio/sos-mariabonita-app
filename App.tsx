import React, { useEffect, useState, useCallback} from 'react';
import { Home } from "./src/pages/Home";
import * as Font  from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView, StatusBar } from 'react-native';
import { useDeviceContext } from "twrnc";
import tw from './tailwind';


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useDeviceContext(tw);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
          'Slackey': require('./assets/fonts/Slackey-Regular.ttf')
      });
       
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

 
    const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar
        animated={false}
        backgroundColor="#C45100"
      />
      <Home/>
    </SafeAreaView>
  );
}
