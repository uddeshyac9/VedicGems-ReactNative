import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Appbar } from 'react-native-paper';
import axios from 'axios';
import TopBanner from '../components/TopBanner';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import OurParters from '../components/OurParters';
import Navigation from '../components/Navigation';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const navratnaScrollViewRef = useRef(null);
    const featuredScrollViewRef = useRef(null);

    const blogCards = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDimkrVoaYKVyTEW-vjVmsYnXNajaUnif8tg&s',
            title: 'Fine Jewelry Care: 7 Mistakes You Need To Stop Making Now!',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG2N7Wnqlpi8Al686ue_QijkFDSGD-6Q2NA&s',
            title: 'Manicure Files: 7 Celebrity Nail Trends That Look Better',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNlwthvmfw2UoUsC6rMU90FUhZNYsiW8OYw&s',
            title: '5 Great Jewelry Styling Formulas to Elevate Your Going-out O',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmihaf4DmdaCrE-QeZe1JGDV5Une4JeOySgA&s',
            title: '10 Best 1-Carat Diamond Ring Finds You’d Love to Buy Immed',
        },
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const scrollLeft = (scrollViewRef) => {
        scrollViewRef.current.scrollTo({ x: -120, animated: true });
    };

    const scrollRight = (scrollViewRef) => {
        scrollViewRef.current.scrollTo({ x: 120, animated: true });
    };

    return (
        <ScrollView style={styles.container}>
            <TopBanner />
            {/* AppBar */}
            <Appbar.Header style={styles.appBar}>
                <Appbar.Action icon={() => <MaterialIcon name="account-circle" size={24} color="white" />} onPress={() => { }} />
                <Image source={require('../assets/VedicGemsLogo.png')} style={styles.logo} />
                <Appbar.Action icon={() => <MaterialIcon name="shopping-cart" size={24} color="white" />} onPress={() => { }} />
            </Appbar.Header>

           
         

            {/* Header */}
            <Header />
               
                {/* Navigation Links */}
                <Navigation/>

            {/* Navratnas Section */}
            <Text style={styles.sectionTitle}>Explore Navaratnas</Text>
            <View style={styles.horizontalScrollContainer}>
                <TouchableOpacity onPress={() => scrollLeft(navratnaScrollViewRef)}>
                    <Icon name="leftcircle" size={24} color="#800020" />
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    style={styles.navratnas}
                    ref={navratnaScrollViewRef}
                    showsHorizontalScrollIndicator={false}
                >
                    {products.map((product) => (
                        <Card key={product.id} style={styles.navratnaCard}>
                            <Card.Cover source={{ uri: product.image }} style={styles.cardCover} />
                            <Card.Content>
                                <Title>{product.title}</Title>
                                <Paragraph>${product.price}</Paragraph>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
                <TouchableOpacity onPress={() => scrollRight(navratnaScrollViewRef)}>
                    <Icon name="rightcircle" size={24} color="#800020" />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../assets/Blog.png')} style={styles.guidelogo} />
            </View>

            {/* Featured Products */}
            <Text style={styles.sectionTitle}>Find Your Favorite</Text>
            <View style={styles.horizontalScrollContainer}>
                <TouchableOpacity onPress={() => scrollLeft(featuredScrollViewRef)}>
                    <Icon name="leftcircle" size={24} color="#800020" />
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    style={styles.products}
                    ref={featuredScrollViewRef}
                    showsHorizontalScrollIndicator={false}
                >
                    {products.map((product) => (
                        <Card key={product.id} style={styles.productCard} >
                            <Card.Cover source={{ uri: product.image }} style={styles.cardCover} />
                            <Card.Content>
                                <Title>{product.title}</Title>
                                <Paragraph>${product.price}</Paragraph>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
                <TouchableOpacity onPress={() => scrollRight(featuredScrollViewRef)}>
                    <Icon name="rightcircle" size={24} color="#800020" />
                </TouchableOpacity>
            </View>

            {/* Blog Section */}
            <View style={styles.blogSection}>
                <Text style={styles.sectionTitle}>Guide to Your Gemstone</Text>
                <ScrollView horizontal style={styles.blogCardsContainer} showsHorizontalScrollIndicator={false}>
                    {blogCards.map((blog, index) => (
                        <BlogCard key={index} image={blog.image} title={blog.title} />
                    ))}
                </ScrollView>
            </View>

            {/* Partners Section */}

            <OurParters />
            {/* Footer Section */}
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    appBar: { backgroundColor: '#800020', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    logo: { width: 120, height: 60, resizeMode: 'contain', borderRadius: 5 },
   
    promoImage: { width: '112%', height: 120, objectFit: 'cover', resizeMode: 'contain' },
    headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
    shopButton: { marginTop: 10, backgroundColor: '#ff4081' },
    sectionTitle: { margin: 20, fontSize: 20, fontWeight: 'bold', color: '#800020' },
    navratnas: { paddingHorizontal: 20 },
    navratnaCard: { width: 200, marginRight: 20 },
    products: { paddingHorizontal: 20, flex: 1 },
    productCard: { width: 200, marginRight: 20 },
    cardCover: { height: 200, objectFit: 'contain' },
    horizontalScrollContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    blogSection: { height: 290, marginTop: 20 },
    blogCardsContainer: { paddingHorizontal: 20 },



 
    guidelogo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 50
    },

});

export default HomeScreen;
