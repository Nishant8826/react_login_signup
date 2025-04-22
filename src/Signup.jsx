import { Text, Touchable, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignupDisabled, setIsSignupDisabled] = useState(true);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleFirstNameChange = (text) => {
        setFirstName(text);
        validateSignupForm(text, lastName, phone, email, password, confirmPassword);
    };

    const handleLastNameChange = (text) => {
        setLastName(text);
        validateSignupForm(firstName, text, phone, email, password, confirmPassword);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        validateSignupForm(firstName, lastName, phone, text, password, confirmPassword);
    };

    const handlePhoneChange = (text) => {
        setPhone(text);
        validateSignupForm(firstName, lastName, text, email, password, confirmPassword);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        validateSignupForm(firstName, lastName, phone, email, text, confirmPassword);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        validateSignupForm(firstName, lastName, phone, email, password, text);
    };

    const validateSignupForm = (firstName, lastName, phone, email, password, confirmPassword) => {
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmailError('');
        setPasswordError('');
        setConfirmPassword('');

        let isValid = true;

        if (!firstName.trim() || firstName == '') {
            setEmailError('First Name is required');
            isValid = false;
        }

        if (!lastName.trim() || lastName == '') {
            setLastNameError('Last Name is required');
            isValid = false;
        }

        if (!phone.trim() || phone == '') {
            setPhoneError('Phone is required');
            isValid = false;
        }

        if (!email.trim() || email == '') {
            setEmailError('Email is required');
            isValid = false;
        }

        if (!password.trim() || password == '') {
            setPasswordError('Password is required');
            isValid = false;
        };

        if (!confirmPassword.trim() || confirmPassword == '') {
            setPasswordError('Confirm Password is required');
            isValid = false;
        };

        setIsSignupDisabled(!isValid);
    };
    const handleSignupPress = async () => {
        const user = {
            "firstName": firstName,
            "lastName": "Rathore",
            "phone": 8800784843,
            "email": "nishant@mailinator.com",
            "password": "Admin@123",
            "confirmPassword": "Admin@123"
        }
        try {
            const url = 'http://localhost:4000/createUser'
            let result = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })
            result = await result.json();
            console.log(result);
            if (result.status == 200) {
                showAlert('Login Successfully', `Welcome ${result.user.firstName + result.user.lastName}`)
            }


        } catch (error) {
            console.log('Login error:', error);
        };
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/leaves.jpg')} style={{ height: '100%', width: '100%' }} />

            <View style={styles.card}>
                <View style={styles.loginText}>
                    <Text style={{ fontSize: 64, color: 'white', fontWeight: 'bold' }}>Register</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Create an Account</Text>
                </View>
                <View style={styles.cardBox}>
                    <TextInput placeholder='First Name' style={styles.inputField} placeholderTextColor={'#006A42'} value={firstName} onChangeText={handleFirstNameChange} />
                    <TextInput placeholder='Last Name' style={styles.inputField} placeholderTextColor={'#006A42'} value={lastName} onChangeText={handleLastNameChange} />
                    <TextInput placeholder='Email / Username' keyboardType={"email-address"} style={styles.inputField} placeholderTextColor={'#006A42'} value={email} onChangeText={handleEmailChange} />
                    <TextInput placeholder='Contact Number' style={styles.inputField} placeholderTextColor={'#006A42'} value={phone} onChangeText={handlePhoneChange} />
                    <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputField} placeholderTextColor={'#006A42'} value={password} onChangeText={handlePasswordChange} />
                    <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.inputField} placeholderTextColor={'#006A42'} value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
                    <View style={{ display: 'flex', flexDirection: 'row', width: '80%' }}>
                        <Text style={{ color: 'grey' }}>
                            By signing in, you are agree to our {' '}
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#006A42', fontWeight: 'bold' }}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleSignupPress} style={styles.btn}>
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

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: 'scroll',
        height: '100%'
    },
    card: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    loginText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '20%'
    },
    cardBox: {
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        height: '80%',
        width: '100%',
        paddingTop: '15%',
        alignItems: 'center'
    },
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
