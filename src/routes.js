import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeScreen from './screens/home.js';
import Meditation from './screens/meditation.js';
import MapScreen from './screens/ai_chat.js'
import InfoScreen from './screens/info.js'

const Tabs = createBottomTabNavigator();

const Routes = props => {

	return (

		<NavigationContainer>
			<Tabs.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
		  tabBarActiveTintColor: 'white',
		  tabBarInactiveTintColor: 'white',
		  tabBarStyle: {
			backgroundColor: '#516832',
		  }
        }}
      >
				<Tabs.Screen 
					name="Home"
					component={HomeScreen} 
					options={{ 
					 tabBarLabel: 'Home',
           tabBarIcon: ({ color, size }) => (
						 <SimpleLineIcons name="home" size={20} color="white"/>
           			),
       	 		}}
      		/>
				<Tabs.Screen 
					name="Meditation" 
					component={Meditation} 
					options={{
						tabBarLabel: 'Meditation',
          	tabBarIcon: ({ color, size }) => (
						 <SimpleLineIcons name="puzzle" size={20} color="white" />
          			),
				}}
			/>

				<Tabs.Screen 
       	 			name="Map"
					component={MapScreen} 
					options={{ 
					 tabBarLabel: 'Chat',
           tabBarIcon: ({ color, size }) => (
						 <SimpleLineIcons name="globe" size={20} color="white"/>
					),
				}}
			/>

				<Tabs.Screen 
					name="Info"
					component={InfoScreen} 
					options={{ 
					 tabBarLabel: 'Info',
           tabBarIcon: ({ color, size }) => (
						 <SimpleLineIcons name="doc" size={20} color="white"/>
           			),
       	 		}}
      		/>
      </Tabs.Navigator>
	</NavigationContainer>	
	);
};

export default Routes;
