import { Text, Touchable, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [firstNameVerify, setFirstNameVerify] = useState(false);

    function handleFirstName(e) {
        const fn = e.nativeEvent.text
        setFirstName(fn)

        if (fn.length > 1) {
            setFirstNameVerify(true);
        }
    }
    return (
        <View>
            <ImageBackground source={require('../assets/leaves.jpg')} style={{ height: '100%' }} />

            <View style={{ position: 'absolute' }}>
                <View style={{ alignItems: 'center', width: 400 }}>
                    <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 50 }} >Register</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Create an Account</Text>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 100, height: 700, width: 400, paddingTop: 100, alignItems: 'center' }}>
                        <TextInput placeholder='First Name' style={styles.inputField} placeholderTextColor={'#006A42'} onChange={(e) => handleFirstName(e)} />
                        {firstName.length < 1 ? null : firstNameVerify ? null : <Text>First Name is Required</Text>}
                        <TextInput placeholder='Last Name' style={styles.inputField} placeholderTextColor={'#006A42'} />
                        <TextInput placeholder='Email / Username' keyboardType={"email-address"} style={styles.inputField} placeholderTextColor={'#006A42'} />
                        <TextInput placeholder='Contact Number' style={styles.inputField} placeholderTextColor={'#006A42'} />
                        <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputField} placeholderTextColor={'#006A42'} />
                        <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.inputField} placeholderTextColor={'#006A42'} />
                        <View style={{ display: 'flex', flexDirection: 'row', width: '80%' }}>
                            <Text style={{ color: 'grey' }}>
                                By signing in, you are agree to our {' '}
                            </Text>
                            <Text style={{ color: '#006A42', fontWeight: 'bold' }}>Terms & Conditions</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'center' }}>
                            <Text style={{ color: 'grey' }}>
                                and{' '}
                            </Text>
                            <Text style={{ color: '#006A42', fontWeight: 'bold' }}>Privacy Policy</Text>
                        </View>

                        <TouchableOpacity onPress={() => { }} style={styles.btn}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Signup</Text>
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already Have an Account ? </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
                                <Text style={{ color: '#006A42', fontSize: 16, fontWeight: 'bold' }} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 100,
        color: '#006A42',
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'rgb(220,220,220)',
        paddingVertical: 8,
        marginVertical: 10
    },
    btn: {
        backgroundColor: '#006A42',
        borderRadius: 100,
        alignItems: "center",
        marginTop: 30,
        paddingVertical: 5,
        width: 300
    }
})

export default Signup;
