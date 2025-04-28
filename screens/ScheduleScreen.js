import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';


export default function ScheduleScreen() {
  const [selectedToggle, setSelectedToggle]= useState("Adhoc")
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Schedule a Service</Text>

        <View style={styles.toggleContainer}>
        <TouchableOpacity 
    style={[
      styles.toggleButton, 
      selectedToggle === 'Adhoc' ? styles.activeToggle : styles.inactiveToggle
    ]}
    onPress={() => setSelectedToggle('Adhoc')}
  >
    <Text style={selectedToggle === 'Adhoc' ? styles.activeToggleText : styles.inactiveToggleText}>
      Adhoc
    </Text>
  </TouchableOpacity>

  <TouchableOpacity 
    style={[
      styles.toggleButton, 
      selectedToggle === 'Recurring' ? styles.activeToggle : styles.inactiveToggle
    ]}
    onPress={() => setSelectedToggle('Recurring')}
  >
    <Text style={selectedToggle === 'Recurring' ? styles.activeToggleText : styles.inactiveToggleText}>
      Recurring
    </Text>
  </TouchableOpacity>
        </View>

        {["Select Location","Select Service", "Select Date", "Select Time"].map((label, index) => (
          <TouchableOpacity key={index} style={styles.selectButton}>
            <Text style={styles.selectButtonText}>{label}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.allPlansButton}>
          <Text style={styles.allPlansButtonText}>See All Plans</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    marginVertical: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    width:"100%",
  
    
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
  selectButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    marginVertical: 14,
    borderRadius: 10,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  
    elevation: 3,
  },
  selectButtonText: {
    color: '#555',
    fontSize: 16,
    textAlign:"center"
  },
  nextButton: {
    backgroundColor: '#92C93D',
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderRadius: 2,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  allPlansButton: {
    backgroundColor: '#92C93D',
    width: '100%',
    padding: 12,
    marginTop: 10,
    borderRadius: 2,
    alignItems: 'center',
  },
  allPlansButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
});
