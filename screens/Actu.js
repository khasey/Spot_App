import { View, Text ,StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

export default function Actu() {
  return (
  <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.bignews}>
            <Text style={{ color: 'white' }}>Actu 1</Text>
        </View>
        <View style={styles.smallnews}>
            <Text style={{ color: 'white' }}>Actu 2</Text>
        </View>
        <View style={styles.smallnews}>
            <Text style={{ color: 'white' }}>Actu 3</Text>
        </View>
        <View style={styles.smallnews}>
            <Text style={{ color: 'white' }}>Actu 4</Text>
        </View>
        <View style={styles.smallnews}>
            <Text style={{ color: 'white' }}>Actu 5</Text>
        </View>
        </ScrollView>    
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bignews: {
    width:400,
    height:400,
    borderWidth:0.5,
    backgroundColor:'white',
    marginTop:5,
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
        },
        android: {
          elevation: 10,
        }
      })
  },
  smallnews: {
    width:400,
    height:150,
    borderWidth:0.5,
    backgroundColor:'white',
    marginTop:5,
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
        },
        android: {
          elevation: 10,
        }
      })
  }
});