import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface UserItemProps {
  name: string;
  username: string;
  imageUrl: string;
  onPress: () => void;
}

const UserItem: React.FC<UserItemProps> = ({
  name,
  username,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Image
        source={{uri: imageUrl}}
        style={styles.itemImage}
        resizeMode="contain"
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.mainNameText}>{name}</Text>
        <Text style={[styles.mainNameText, styles.extraNameText]}>
          {username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: responsiveHeight(2),
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 20,
    marginBottom: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: 10,
  },
  mainNameText: {
    fontSize: responsiveFontSize(1.8),
    color: '#666666',
    fontFamily: 'Montserrat-Bold',
  },
  itemTextContainer: {
    marginLeft: responsiveWidth(3),
  },
  extraNameText: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Montserrat-Medium',
  },
});

export default UserItem;
