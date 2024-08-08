import React from 'react';
import {Text, TextStyle, StyleSheet, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface DetailTextProps {
  title: string;
  text: string;
  style?: TextStyle;
}

const DetailText: React.FC<DetailTextProps> = ({title, text, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.defaultText]}>{title}</Text>
      <Text style={[styles.defaultText, style]}> {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: responsiveFontSize(1.5),
    color: '#666666',
    fontFamily: 'Montserrat-Bold',
  },
  container: {
    padding: responsiveWidth(3),
    backgroundColor: '#ffffff',
    elevation: 10,
    width: responsiveWidth(70),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DetailText;
