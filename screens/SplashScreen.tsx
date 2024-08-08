import {View, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {splashIcon} from '../images/images';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<{
    replace: (arg: string) => void;
  }>();
  let navigationTimeout: NodeJS.Timeout;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnimation, {
          toValue: 2,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const navigationHandler = () => {
    navigationTimeout = setTimeout(() => {
      navigation.replace('UserList');
    }, 2000);
  };
  const componentUmount = () => {
    clearTimeout(navigationTimeout);
  };
  useEffect(() => {
    startAnimation();
    navigationHandler();
    return () => componentUmount();
  }, []);
  return (
    <View style={styles.main_view}>
      <Animated.Image
        source={splashIcon}
        style={[styles.logo_image, {transform: [{scale: scaleAnimation}]}]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo_image: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    resizeMode: 'contain',
  },
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
