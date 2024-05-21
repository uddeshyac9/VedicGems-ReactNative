import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function Navigation() {
  return (
    <View style={styles.navLinks}>
    <TextInput style={styles.searchBar} placeholderTextColor="#800020"  placeholder="Search Products" />
    <Text style={styles.navLink}>Navratna Jewellery</Text>
    <Text style={styles.navLink}>Gemstone Recommendation</Text>
    <Text style={styles.navLink}>Blog</Text>
</View>
  )
}
const styles = StyleSheet.create({
    searchBar: {
        textAlign: 'center',
        fontSize: 16,
        borderColor: '#800020',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: 5,
        // Shadow properties for iOS
        shadowColor: '#800020',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        // Elevation for Android
        elevation: 3,
        color:'800020'
    },
    navLinks: { flex: 1, alignContent: 'center', justifyContent: 'center', paddingVertical: 10 },
    navLink: { textAlign: 'center', fontSize: 16, color: '#800020' },
})