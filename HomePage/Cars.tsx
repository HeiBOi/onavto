import React, { useLayoutEffect } from 'react'
import { ListItem } from 'react-native-elements'
import { SafeAreaView, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import categoriesData from './data/categoriesData'


const Cars = ({ navigation }: any) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "",
            headerRight: () => (
                <TouchableOpacity>
                    <AntDesign name="filter" size={21} color="#fff" />
                </TouchableOpacity>
            )
        })
    })

    const renderCategoryItem = ({ item } : any) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item})} style={styles.carlist}>
        <View>
            <ImageBackground imageStyle={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }} source={item.image} style={styles.carimagelist} />
        </View>
        <View style={styles.cartextlist}>
            <Text style={styles.cartitlelist}>{item.title}</Text>
            <Text style={styles.carsubtitlelist}>
                Country: {item.subtitle}
            </Text>
            <Text style={styles.carsubtitlelists}>
                Mileage: {item.mileage} km
            </Text>
        </View>
    </TouchableOpacity>  
    )

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item): any => item.id}
        />
      </SafeAreaView>
    )
}

export default Cars

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        width: '100%',
    },
    carlist: {
        width: '95%',
        height: 80,
        backgroundColor: '#181818',
        overflow: 'hidden',
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 10,
        marginTop: 15,
    },
    carimagelist: {
        height: 80,
        width: 130,
        resizeMode: 'contain',
    },
    cartextlist: {
        position: 'absolute',
        left: '35%',
        marginVertical: 10,
    },
    cartitlelist: {
        color: '#fff',
        fontWeight: '800',
    },
    carsubtitlelist: {
        color: "rgba(255,255,255,0.4)",
        paddingRight: 150,
        marginTop: 3,
    },
    carsubtitlelists: {
        color: "rgba(255,255,255,0.4)",
        paddingRight: 150,
        marginTop: 3,
        fontWeight: '700',
    },
})