import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentPicker from 'react-native-document-picker'

const DocumentUpload = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    return (
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>

            <View style={styles.textInputView}>
                {fileResponse && fileResponse.length > 0 ? fileResponse.map((file, index) => (
                    <Text
                        key={index.toString()}
                        style={styles.uri}
                        numberOfLines={1}
                        ellipsizeMode={'middle'}>
                        {file?.uri}
                    </Text>
                )) :
                    <Text>Choose file</Text>}

                <TouchableOpacity style={styles.btn} onPress={handleDocumentSelection}>
                    <Text style={{ color: '#fff' }}>Browse</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleDocumentSelection}>
                <Text style={{ color: '#fff' }}>SUBMIT</Text>
            </TouchableOpacity>


        </View>
    )
}

export default DocumentUpload;

const styles = StyleSheet.create({
    btn: { height: 40, borderRadius: 6, backgroundColor: '#1d2975', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'center' },
    submitBtn: { height: 40, marginTop: 20, borderRadius: 5, width: 75, backgroundColor: '#1d2975', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'center' },
    textInputView: { paddingLeft: 5, borderWidth: 2, height: 40, borderColor: '#ddd', borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});
