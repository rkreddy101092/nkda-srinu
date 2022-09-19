import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from "react-native";
import AddComplaint from "./AddComplaint";
import DocumentUpload from "./DocumentUpload";
import WorkFlow from "./WorkFlow";

const Home = () => {

    const [tab, setTab] = useState(0);
    const list = ['Add Complaint', 'Workflow', ' Document Upload'];

    const TabItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.tabBtn, index === tab ? styles.activeTab : {}]} onPress={() => setTab(index)}>
                <Text style={[styles.tabText, index === tab ? styles.activeTabText : {}]}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={list}
                renderItem={TabItem}
                horizontal={true}
            />

            {tab === 0 ?
                <AddComplaint /> :
                tab === 1 ?
                    <WorkFlow /> :
                    <DocumentUpload />}
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    tabBtn: { padding: 10, marginRight: 30 },
    activeTab: { borderBottomColor: '#1d2975', borderBottomWidth: 2 },
    activeTabText: { color: '#1d2975', },
    tabText: {}
});


