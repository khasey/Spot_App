import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Prochainement() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prochainement</Text>
      <View style={styles.list}>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{borderRadius:10}}>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{ color: 'white' }}>Prochainement 1</Text>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        color:'black',
        marginTop:10,
        marginBottom:10,
    },
    list:{
        height:465,
        backgroundColor:'white',
        width:400,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
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
    categories: {
        width:390,
        height:120,
        backgroundColor:'red',
        marginTop:5,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
})