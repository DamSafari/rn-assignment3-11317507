import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello, Devs</Text>
        <Text style={styles.taskText}>14 tasks today</Text>
      </View>
      <Image style={styles.image} source={require("C:/Users/senad/Desktop/DCIT 202/DCIT 202 assignment 3/rn-assignment3-11317507/assets/person 1.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#f7f0e8',
  },
  greetingContainer: {
    flex: 1,
    marginTop: 30,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 14,
    color: '#888',
  },
  image:{
    width: 80,
    height: 80,
    marginTop: 30,

  }
});

export default Header;
