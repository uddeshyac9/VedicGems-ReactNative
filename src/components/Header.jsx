// components/Header.jsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/WebsiteLogo.png')} style={styles.promoImage} />
            <Text style={styles.headerText}>Sparkling Brilliant Ruby</Text>
            <Button mode="contained" style={styles.shopButton}>SHOP NOW</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    header: { padding: 10, 
        backgroundColor: '#800020',
         alignItems: 'center' },
    promoImage: {
        width: '112%',
        height: 130,
        resizeMode: 'contain',
        borderRadius:5,
        
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    shopButton: {
        marginTop: 10,
        backgroundColor: '#ff4081',
    },
});

export default Header;
