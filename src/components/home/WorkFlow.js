import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

const WorkFlow = () => {
    const tableHead = ['Sr.No', 'Report Name', 'Uploaded By'];
    const tableData = [
        [1, "htmlviewer.pdf", "Tets one"],
        [2, "htmlviewer.png", "Tets test"],

    ];

    return (
        <ScrollView horizontal={true}>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#ddd' }}>
                    <Row data={tableHead} flexArr={[1, 5, 3]} style={styles.head} textStyle={{ margin: 6, color: '#fff', fontWeight: '700' }} />
                    <Rows data={tableData} textStyle={styles.text} />
                </Table>
            </View>
        </ScrollView>
    )
}

export default WorkFlow;

const styles = StyleSheet.create({

    head: { height: 40, backgroundColor: '#1d2975', },
    text: { margin: 6 }
});
