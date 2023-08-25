import { useFonts } from 'expo-font';
import { TamaguiProvider, YStack } from 'tamagui';
import config from './tamagui.config';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Home, Map, Favoris, Actu, Profile } from './screens'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderTopColor: '#000',
    borderTopWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      }
    }),
    paddingBottom: 55,
    right: 0,
    left: 0,
    height: 90,
    position: 'absolute',
    elevation: 0,
    bottom: 0,
},})


export default function App() {

  const [loaded] = useFonts({
    Inter: require('./assets/Inter-Regular.ttf'),
    InterBold: require('./assets/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons name="ios-home" size={24} color={focused ? '#ffffff' : '#909090'} />
              <Text style={{ color: focused ? '#ffffff' : '#909090', fontSize: 8 }}>Home</Text>
            </View>
            )
        }
        }}
        />
        <Tab.Screen 
        name="Actu" 
        component={Actu} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (  
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Entypo name="news" size={24} color={focused ? '#ffffff' : '#909090'} />
              <Text style={{ color: focused ? '#ffffff' : '#909090', fontSize: 8 }}>News</Text>
            </View>
            )
        }
        }}
        />
        <Tab.Screen 
        name="Map" 
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#000',
                width: Platform.OS === 'ios' ? 80 : 70,
                height: Platform.OS === 'ios' ? 80 : 70,
                borderRadius: Platform.OS === 'ios' ? 30 : 35,
                top: Platform.OS === 'ios' ? -10 : -10,
                borderRadius: 30,
                borderTopColor:'#5FD6FF',
                borderLeftColor:'#fff',
                borderRightColor:'#fff',
                borderBottomColor:'#5FD6FF',
                backgroundColor: '#000',
              }}>
            <View 
            style={{ 
              borderWidth: 0.2,
              alignItems: 'center', 
              justifyContent: 'center',
              ...Platform.select({
                ios: {
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 5,
                },
                android: {
                  elevation: 10,
                }
              }),
              boxShadow: Platform.OS === 'ios' ? '5 5 15px rgba(0,0,0,0.5)' : 'none',
              backgroundColor: '#ffffff',
              // borderWidth: 2,
              width: Platform.OS === 'ios' ? 70 : 70,
              height: Platform.OS === 'ios' ? 70 : 70,
              borderRadius: Platform.OS === 'ios' ? 30 : 35,
              // top: Platform.OS === 'ios' ? -10 : -10,
              }}>
              <MaterialCommunityIcons name="map-marker-radius" size={24} color={focused ? '#000' : '#909090'} />
              <Text style={{ color: focused ? '#000' : '#909090', fontSize: 8 }}>Map</Text>
            </View>
            </View>
            )
        }
        }}
        />
        <Tab.Screen 
        name="Favoris" 
        component={Favoris} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <MaterialIcons name="favorite-border" size={24} color={focused ? '#ffffff' : '#909090'} />
              <Text style={{ color: focused ? '#ffffff' : '#909090', fontSize: 8 }}>Fav</Text>
            </View>
            )
        }
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons name="person-outline" size={24} color={focused ? '#ffffff' : '#909090'} />
              <Text style={{ color: focused ? '#ffffff' : '#909090', fontSize: 8 }}>Profil</Text>
            </View>
            )
        }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
