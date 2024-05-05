import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Home = (props) => {
    return (
        <View>
            <ImageBackground source={require('../assets/leaves.jpg')} style={{ height: '100%' }} />

            <View style={{ position: 'absolute' }}>
                <View style={{ marginVertical: 100, marginHorizontal: 40 }}>
                    <Text style={{ color: 'white', fontSize: 64 }}>Let's Start</Text>
                    <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Coding</Text>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#006A42' }]} onPress={() => { props.navigation.navigate('Login') }}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: 'white' }]} onPress={() => { props.navigation.navigate('Signup') }}>
                        <Text style={{ color: '#006A42', fontSize: 30, fontWeight: 'bold' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 100,
        alignItems: "center",
        marginTop: 30,
        paddingVertical: 5,
        width: 300,
    }
})
export default Home