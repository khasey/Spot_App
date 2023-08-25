import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default function Map() {
  return (
  <SafeAreaView style={styles.container}>
    <MapView style={styles.map} 
    initialRegion={{
      latitude: 47.5946573,
      longitude: 6.9207716,
      latitudeDelta: 0.4922,
      longitudeDelta: 0.1421,
    }}
    >
      <Marker coordinate={{latitude: 47.5946573, longitude: 6.9207716}}/>
    </MapView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});