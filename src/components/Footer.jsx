import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.footer}>
                <Text style={styles.footerText}>Customer Service</Text>
                <Text style={styles.footerLink}>Gemstone Recommendation</Text>
                <Text style={styles.footerLink}>FAQs</Text>
                <Text style={styles.footerLink}>Order Status</Text>
                <Text style={styles.footerLink}>Returns & Exchange</Text>
                <Text style={styles.footerLink}>Resize & Repair</Text>
            </View>
  )
}

const styles = StyleSheet.create({
    footer: { padding: 20, backgroundColor: '#f8f8f8',flex:1,justifyContent:'center',alignItems:'center'},
    footerText: { fontSize: 16, fontWeight: 'bold',color:'#800020' },
    footerLink: { color: '#0000ff', marginTop: 5 },
})