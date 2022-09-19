import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddComplaint = () => {
    return (
        <ScrollView style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput} placeholder="First Name" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Last Name" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Country" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Mailing Address" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Email Address" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Phone Number" keyboardType="number-pad" />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={[styles.textArea, { textAlignVertical: 'top' }]} placeholder="Complaint About"
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
            <View style={[styles.textInputView, { marginTop: 15 }]}>
                <TextInput style={styles.textInput} placeholder="Complaint Details" />
            </View>
            <View style={{ paddingTop: 30, paddingHorizontal: '25%' }}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={{ textTransform: 'uppercase', color: '#fff', fontWeight: '700' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddComplaint;

const styles = StyleSheet.create({
    imageView: { alignItems: 'center', marginTop: 50 },
    textInputView: { borderWidth: 2, borderColor: '#ddd', borderRadius: 6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 },
    textInput: { height: 45, fontSize: 16, width: '100%', color: '#000' },
    textArea: { height: 100, fontSize: 16, width: '100%', color: '#000', justifyContent: "flex-start" },
    submitBtn: { width: '100%', backgroundColor: '#1d2975', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }
});
