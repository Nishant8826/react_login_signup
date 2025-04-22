import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Home = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/leaves.jpg')} style={{ height: '100%', width: '100%' }} />

            <View style={styles.card}>

                <Text style={{ color: 'white', fontSize: 64, marginBottom: 40, textAlign: 'center' }}>Let's Start Coding</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#006A42' }]} onPress={() => { props.navigation.navigate('Login') }}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'white' }]} onPress={() => { props.navigation.navigate('Signup') }}>
                    <Text style={{ color: '#006A42', fontSize: 30, fontWeight: 'bold' }}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    card: {
        position: 'absolute',
        marginVertical: '10%',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 100,
        alignItems: "center",
        marginTop: 30,
        paddingVertical: 5,
        width: '75%',
    }
})
export default Home