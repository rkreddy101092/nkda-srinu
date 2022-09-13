import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/auth/Login';
import SignUp from './src/components/auth/SignUp';
import Home from './src/components/home/Home';
import { Image, TouchableOpacity } from 'react-native';
import Profile from './src/components/profile/Profile';

const Stack = createNativeStackNavigator();



const App = () => {

  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token == null ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <Login {...props} onpress={() => setToken('sampleusertoken')} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home}
              options={({ navigation, route }) => ({
                title: 'Home Page',
                headerRight: () => (
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                  }}>
                    <Image source={require('./src/assets/icons/user.png')} style={{ height: 20, width: 20 }} />
                  </TouchableOpacity>
                ),
                headerStyle: {
                  backgroundColor: '#1d2975',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              })}
            />
            <Stack.Screen name="Profile"
              options={{
                headerStyle: {
                  backgroundColor: '#1d2975',
                },
                headerTintColor: '#fff',
              }}
            >
              {() => <Profile logout={() => setToken(null)} />}
            </Stack.Screen>
          </>
        )}


      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
