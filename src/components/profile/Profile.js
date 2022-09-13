import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = ({ logout }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
            <Text style={styles.headTitle}>Profile Screen</Text>
            <TouchableOpacity onPress={() => logout()} style={styles.logoutBtn}>
                <Text style={{ color: 'red', fontSize: 18 }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headTitle: { fontSize: 22, fontWeight: '600', color: '#000', lineHeight: 26 },
    logoutBtn: { borderColor: 'red', borderRadius: 10, paddingHorizontal: 10, width: '100%', height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }

});

export default Profile;