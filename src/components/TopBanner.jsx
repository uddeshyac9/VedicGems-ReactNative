import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBanner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Welcome to Vedicgems ✨</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000',
    padding:10,
   
    alignItems: 'center',
    
  },
  bannerText: {
    color: '#fff',
    fontSize: 16
  }
});

export default TopBanner;
