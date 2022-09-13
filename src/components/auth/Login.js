import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ navigation, onpress }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/images/nkda_logo.jpg')} style={styles.imageStyle} />
            </View>
            <View style={{ marginTop: 100, paddingHorizontal: 35 }}>
                <Text style={styles.headTitle}>Welcome</Text>
                <Text style={styles.headTitle}>Back</Text>
                <Text style={styles.subTitle}>Proceed with your Login</Text>
            </View>
            <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
                <View style={styles.textInputView}>
                    <Image source={require('../../assets/icons/email.png')} style={{ height: 30, width: 30 }} />
                    <TextInput style={styles.textInput} placeholder="Email" />
                </View>
                <View style={[styles.textInputView, { marginTop: 15 }]}>
                    <Image source={require('../../assets/icons/padlock.png')} style={{ height: 25, width: 30, }} resizeMode="contain" />
                    <TextInput style={styles.textInput} placeholder="Password" />
                </View>
            </View>
            <View style={{ paddingTop: 30, paddingHorizontal: 20, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => onpress()}>
                    <Image source={require('../../assets/icons/up-arrow.png')} style={{ height: 50, width: 50, }} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={styles.subTitle}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.subTitle, { color: '#8A60E3' }]}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: { height: 100, width: 100 },
    imageView: { alignItems: 'center', marginTop: 50 },
    headTitle: { fontSize: 24, fontWeight: 'bold', color: '#000', lineHeight: 26 },
    subTitle: { fontSize: 16, color: '#000', paddingTop: 10 },
    textInputView: { borderWidth: 2, borderColor: '#ddd', borderRadius: 6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 },
    textInput: { height: 50, fontSize: 18, width: '100%', color: '#000' }
});


export default Login;