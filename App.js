import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Login from './src/screens/Auth/Login'
import Register from './src/screens/Auth/Register';
import Dashboard from './src/screens/Default/Dashboard';
import Profile from './src/screens/Default/Profile';
import Logo from './src/component/svgs/Logo';

import { styles } from './src/stylesheets/styles'

//Tab navigator
const Tab = createBottomTabNavigator();

//Stack navigator
const Auth = createNativeStackNavigator();

class App extends React.Component {

  state = {
    isLoggedin:false
  }
  handleNext = (val) => {
      this.setState({isLoggedin:val})
  }
  render()
  {
    
    return (
      !this.state.isLoggedin ? 
      <NavigationContainer>
        <Auth.Navigator screenOptions={{
          headerShown:false
        }}>
          <Auth.Screen name="Login" >
            {(props) => <Login next={this.handleNext} {...props}/>}
          </Auth.Screen>
          <Auth.Screen name="Register">
            {props => <Register next={this.handleNext} {...props}/>}
          </Auth.Screen>
        </Auth.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          headerTitle:() => <Logo fill="#ff6600" style={styles.logoSize} />
        }}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Profile" component={Profile} options={{
            title:"Profile"
          }}/> 
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;