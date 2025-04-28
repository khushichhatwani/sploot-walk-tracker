import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BookingScreen = () => {
      const [selectedToggle, setSelectedToggle]= useState("In-Progress")
    
  return (
    <SafeAreaView style={styles.container}>  
    <View style={styles.toggleContainer}>
        <TouchableOpacity 
        style={[
          styles.toggleButton, 
          selectedToggle === 'In-Progress' ? styles.activeToggle : styles.inactiveToggle
        ]}
        onPress={() => setSelectedToggle('In-Progress')}
      >
        <Text style={selectedToggle === 'In-Progress' ? styles.activeToggleText : styles.inactiveToggleText}>
          In-Progress
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity 
        style={[
          styles.toggleButton, 
          selectedToggle === 'Completed' ? styles.activeToggle : styles.inactiveToggle
        ]}
        onPress={() => setSelectedToggle('Completed')}
      >
        <Text style={selectedToggle === 'Completed' ? styles.activeToggleText : styles.inactiveToggleText}>
          Completed
        </Text>
      </TouchableOpacity>
    </View>
 </SafeAreaView>
  )
}
export default BookingScreen

const styles = StyleSheet.create({
  
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    width:"100%",
    marginTop:10,
    padding:16
  
    
  },
  activeToggle: {
    backgroundColor: '#92C93D',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    flex:1
  },
  inactiveToggle: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    flex:1
  },
  activeToggleText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center",
    fontSize:16
  },
  inactiveToggleText: {
    color: '#666',
    fontWeight: 'bold',
    textAlign:"center",
    fontSize:16
  },
  
});


