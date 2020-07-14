import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ChatScreen from './src/screens/Chat'

const Stack = createStackNavigator()

StatusBar.setBarStyle('light-content')
StatusBar.setBackgroundColor('#363A44')


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ChatScreen} 
          options={{
            headerStyle: { 
              backgroundColor: '#363A44',
            },
            headerTitleStyle: {
              fontFamily: 'Roboto',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 21
            },
            headerTintColor: '#fff',
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                // color='#fff'
                onPress={() => {
                  // Do something
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
