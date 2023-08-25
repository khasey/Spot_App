import { View, Text ,StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import { Circle } from 'react-native-maps';

export default function Favoris() {
  return (
  <SafeAreaView style={styles.container}>
    <View style={{ width:'100%', height:'100%'}}>
      <ScrollView style={styles.fav}>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
        backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
        </View>
        <View style={styles.favoris}>
            <Circle 
            style={{
              borderWidth:0.5,
              backgroundColor:'white',
              width:90, 
              height:90, 
              borderRadius:20,
              marginLeft:15,
              }}>
              
              </Circle>
              <Text style={{
                margin:10,
                width: 250, 
                height:90, 
                fontSize:12, 
                fontWeight:'600' ,
                }}>Nom de l'événement, avec description puis redirection sur la map ou redirection sur wayz
                pour que l utilisateur puisse revenir a l endroit favoris</Text>
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
  fav:{
    display:'flex',
    // backgroundColor:'red',
  },
  favoris:{
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'row',
    margin:5,
    width:400,
    height:120,
    backgroundColor:'white',
    borderRadius:10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      }
    }),
  },
});