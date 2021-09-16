import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'

const home = ({ navigation }: any) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.5} style={styles.homefirstA}>
                <ImageBackground imageStyle={{borderRadius: 20}} blurRadius={6} source={require('../assets/imageback.jpg')} style={styles.homefirstad} />
                <View style={styles.tabinhomefirstA}>
                    <Text style={styles.textinfirstA}>Home</Text>
                    <Text style={styles.textinfirstB}>Click to see more informations</Text>
                </View>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Cars")} activeOpacity={0.3} style={styles.boxInScrollView}>
                    <Image source={require('../assets/car.png')} style={{ width: 205, height: 190, resizeMode: 'contain', position: 'absolute', left: -20, transform: [ {rotate: '-10deg'} ], opacity: 0.25, }} />
                    <Text style={styles.textinBoxX}>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.3} style={styles.boxInScrollView}> 
                    <Image source={require('../assets/motorcycle.png')} style={{ width: 205, height: 190, resizeMode: 'contain', position: 'absolute', left: -20, transform: [ {rotate: '-10deg'} ], opacity: 0.25, }} />
                    <Text style={styles.textinBoxX}>Motocycles</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.3} style={styles.boxInScrollView}>
                    <Image source={require('../assets/wheel.png')} style={{ width: 205, height: 190, resizeMode: 'contain', position: 'absolute', left: -20, transform: [ {rotate: '-10deg'} ], opacity: 0.25, }} />
                    <Text style={styles.textinBoxX}>Auctions</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.tostabA}>OnlineAuto rules</Text>
                <Text style={styles.tostab1}># Fake items are not allowed</Text>
                <Text style={styles.tostab2}># Offensive content is punished by permanently ban</Text>
                <Text style={styles.tostab3}># You accept our policies when creating your profile</Text>
            </View>
            <View>
                <Text style={{ color: "rgba(255,255,255,0.3)", textAlign: 'center', marginVertical: 5, }}>© Copyright 2021 - 2022 David</Text>
            </View>
        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        width: '100%',
    },
    homefirstA: {
        borderRadius: 50,
        left: '5%',
        top: 50,
        marginBottom: 80,
    },
    homefirstad: {
        width: '95%',
        height: 250,
    },
    tabinhomefirstA: {
        position: 'absolute',
        width: '90%',
        height: 250,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinfirstA: {
        fontWeight: '800',
        fontSize: 32,
        color: '#fff',
    },
    textinfirstB: {
        fontWeight: '400',
        fontSize: 17,
        color: '#fff',
    },
    boxInScrollView: {
        backgroundColor: "rgba(60, 60, 60, 0.4)",
        width: '92%',
        height: 90,
        marginBottom: 14,
        marginLeft: 17,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'left',
    },
    textinBoxX: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '800',
        letterSpacing: 3,
        fontSize: 20,
    },
    tostabA: {
        color: "rgba(255,255,255,1)",
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '600',
        marginVertical: 3,
    },
    tostab1: {
        color: "rgba(255,255,255,0.6)",
        textAlign: 'center',
        marginVertical: 3,
    },
    tostab2: {
        color: "rgba(255,255,255,0.6)",
        textAlign: 'center',
        marginVertical: 3,
    },
    tostab3: {
        color: "rgba(255,255,255,0.6)",
        textAlign: 'center',
        marginVertical: 3,
    },
})
