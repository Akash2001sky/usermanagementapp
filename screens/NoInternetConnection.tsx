import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {addEventListener} from '@react-native-community/netinfo';

const NoInternetConnection: React.FC = () => {
  const [ribbonHeight, setRibbonHeight] = useState(new Animated.Value(0));
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    if (isConnected) {
      setTimeout(() => {
        Animated.timing(ribbonHeight, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }).start();
      }, 2000);
    } else {
      Animated.timing(ribbonHeight, {
        toValue: responsiveHeight(12),
        duration: 2000,
        useNativeDriver: false,
      }).start();
    }
  }, [isConnected]);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.animatedView,
        {
          height: ribbonHeight,
          backgroundColor: !isConnected ? '#EA4335' : '#34A853',
        },
      ]}>
      <Text
        style={[
          styles.text,
          {marginTop: !isConnected ? responsiveHeight(2) : responsiveHeight(0)},
          {
            marginBottom: !isConnected
              ? responsiveHeight(2)
              : responsiveHeight(0),
          },
        ]}>
        {!isConnected ? "You're offline right now !" : "You're now connected !"}
      </Text>
    </Animated.View>
  );
};

export default NoInternetConnection;

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Montserrat-Bold',
  },
  animatedView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
  },
});
