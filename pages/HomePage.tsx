import React, {useLayoutEffect} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const HomePage = ({ navigation }: any) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "",
        });
    })

    return (
        <View style={styles.container}>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        width: '100%',
    },
})
