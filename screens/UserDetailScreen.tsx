import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import DetailText from '../components/DetailText';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {User} from '../redux/reducers/userListReducer';

interface UserDetailsProps {
  route: RouteProp<{params: {item: User}}, 'params'>;
}

const UserDetailScreen: React.FC = () => {
  const navigation = useNavigation<{goBack: () => void}>();
  const route = useRoute<UserDetailsProps['route']>();
  const {item} = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0.1}}
        colors={['#fdbe77', '#ff989a', '#ff73b8']}
        style={styles.linearGradient}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => handleGoBack()}
            style={styles.profileCircle}>
            <AntDesign
              name="left"
              size={responsiveFontSize(3)}
              color="#666666"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Image
            source={{uri: item.picture.large}}
            style={styles.itemImage}
            resizeMode="contain"
          />
          <DetailText
            style={styles.fontStyle}
            title="First Name:"
            text={item.name.first}
          />
          <DetailText
            style={styles.fontStyle}
            title="Last Name:"
            text={item.name.last}
          />
          <DetailText
            style={styles.fontStyle}
            title="Email:"
            text={item.email}
          />
          <DetailText
            style={styles.fontStyle}
            title="Gender:"
            text={item.gender}
          />
          <DetailText
            style={styles.fontStyle}
            title="Country:"
            text={item.location.country}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  profileContainer: {
    marginLeft: responsiveWidth(5),
    height: responsiveHeight(15),
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
  },
  profileCircle: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  itemImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: responsiveHeight(-7),
  },
  fontStyle: {
    fontSize: responsiveFontSize(1.5),
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    flex: 1,
  },
});

export default UserDetailScreen;
