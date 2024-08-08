import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import UserItem from '../components/UserItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers, refreshUsers} from '../redux/reducers/userListReducer';
import {AppDispatch, RootState} from '../redux/store';

interface UserListTypes {
  name: {first: string};
  login: {username: string};
  picture: {large: string};
}

const UserListScreen: React.FC = () => {
  const navigation = useNavigation<{
    navigate: (arg: string, params: {}) => void;
  }>();
  const dispatch = useDispatch<AppDispatch>();
  const {users, loading, hasMore} = useSelector(
    (state: RootState) => state.userListReducer,
  );
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(getAllUsers(1));
  }, [dispatch]);

  const loadMoreUsers = () => {
    if (hasMore && !loading) {
      dispatch(getAllUsers(Math.floor(users.length / 10) + 1));
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(refreshUsers());
    await dispatch(getAllUsers(1));
    setRefreshing(false);
  }, [dispatch]);

  const handleNavigation = (item: UserListTypes) => {
    navigation.navigate('UserDetails', {item});
  };
  const renderUserList = ({item}: {item: UserListTypes}) => {
    return (
      <UserItem
        onPress={() => handleNavigation(item)}
        name={item.name.first}
        username={item.login.username}
        imageUrl={item.picture.large}
      />
    );
  };

  const renderFooter = () => {
    if (!loading || users.length === 0) return null;
    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  };

  const renderEmptyComponent = () => {
    if (loading && users.length === 0 && !refreshing) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0.1}}
        colors={['#fdbe77', '#ff989a', '#ff73b8']}
        style={styles.linearGradient}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>User List</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          contentContainerStyle={styles.flatListContentContainer}
          keyExtractor={item => item.login.uuid}
          maxToRenderPerBatch={7}
          renderItem={renderUserList}
          onEndReached={loadMoreUsers}
          onEndReachedThreshold={1}
          ListEmptyComponent={renderEmptyComponent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={renderFooter}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  headerContainer: {
    padding: responsiveHeight(2),
    marginLeft: responsiveWidth(3),
    elevation: 10,
    shadowColor: '#fdbe77',
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Montserrat-ExtraBold',
    color: '#FFFFFF',
  },
  flatListContentContainer: {
    padding: responsiveWidth(5),
  },
  footerContainer: {
    paddingVertical: responsiveHeight(2),
    alignItems: 'center',
  },
  emptyComponentContainer: {
    height: responsiveHeight(20),
    width: responsiveWidth(70),
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default UserListScreen;
