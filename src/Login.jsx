import { Text, Button, TouchableOpacity, View, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginDisabled, setIsLoginDisabled] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        validateLoginForm(text, password);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        validateLoginForm(email, text);
    };

    const validateLoginForm = (email, password) => {
        setEmailError('');
        setPasswordError('');

        let isValid = true;

        if (!email.trim() || email == '') {
            setEmailError('Email is required');
            isValid = false;
        }

        if (!password.trim() || password == '') {
            setPasswordError('Password is required');
            isValid = false;
        }

        setIsLoginDisabled(!isValid);
    };

    const handleLoginPress = async () => {
        const credentials = {
            email: email,
            password: password,
        };
        try {
            const credentials = { email: email, password: password, };
            const url = 'http://localhost:4000/login'
            let result = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })
            result = await result.json();

            // let result = await axios.post(url,credentials)

            console.log(result);

        } catch (error) {
            console.log('Login error:', error);
        };
    };

    return (
        <View>
            <ImageBackground source={require('../assets/leaves.jpg')} style={{ height: '100%' }} />

            <View style={{ position: 'absolute' }}>
                <View style={{ alignItems: 'center', width: 400 }}>
                    <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 50, marginBottom: 20 }} >Login</Text>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 100, height: 700, width: 400, paddingTop: 100, alignItems: 'center' }}>
                        <Text style={{ color: '#006A42', fontSize: 40, fontWeight: 'bold' }}>Welcome Back</Text>
                        <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 50 }}>Login to Your Account</Text>
                        <TextInput placeholder='Email / Username' keyboardType={"email-address"} style={styles.inputField} placeholderTextColor={'#006A42'} value={email}
                            onChangeText={handleEmailChange} />
                        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                        <TextInput placeholder='Password' secureTextEntry style={styles.inputField} placeholderTextColor={'#006A42'} value={password}
                            onChangeText={handlePasswordChange} />
                        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                        <View style={{ alignItems: 'flex-end', paddingRight: 16, width: '80%', marginBottom: 30 }}>
                            <Text style={{ color: '#006A42', fontSize: 16, fontWeight: 'bold' }}>Forgot Password ?</Text>
                        </View>
                        <View style={styles.button}>
                            <Button title="Login" onPress={handleLoginPress} disabled={isLoginDisabled} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't Have an Account ? </Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Signup') }}>
                                <Text style={{ color: '#006A42', fontSize: 16, fontWeight: 'bold' }}>Signup</Text>
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
    },
    error: {
        color: 'red',
        marginBottom: 5,
    },
    button: {
        width: '60%',
        marginVertical: 10
    }
})

export default Login;
