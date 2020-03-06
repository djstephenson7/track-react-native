import { FontAwesome } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text>Account Screen</Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

export default AccountScreen;
