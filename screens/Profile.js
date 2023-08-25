import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
  <SafeAreaView style={styles.container}>
    <View style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
      <View style={styles.photo}>

      </View>
      <View style={styles.username}>
        <Text style={{textAlign:'center', marginTop: 15}}>Username</Text>
      </View>
      <View style={styles.hautfait}>

      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo:{
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth:0.5,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      }
    }),
  },
  username:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 60,
    borderWidth:0.5,
    backgroundColor: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      }
    }),
  },
  hautfait:{
    width: 350,
    height: 500,
    backgroundColor: 'white', 
    marginTop: 10,
    borderWidth:0.5,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      }
    }),
  },
});