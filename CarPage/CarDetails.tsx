import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements';
import categoriesData from '../HomePage/data/categoriesData'

const CarDetails = ({route}: any) => {
    const { item } = route.params;
    console.log(item);

    return (
        <View style={styles.container}>
                <Image source={item.image} style={styles.carimageland} />
            <View style={styles.cardetailsOWN}>
                <Text style={styles.cartitletext}>{item.title}</Text>
                <Text style={styles.carprice}>{item.price} €</Text>
                <Text style={styles.carsubtitletext}>Country: {item.subtitle}</Text>
                <Text style={styles.carmileagetext}>Mileage: {item.mileage}km</Text>
                <Text style={styles.ownerphonetext}>Phone : {item.phnumb}</Text>

                <View>
                    <Text style={styles.cardesctext}>Description :</Text>
                    <Text style={styles.cardescctext}>{item.desc}</Text>
                </View>

                <TouchableOpacity onPress={() => console.log("PROFIL RADI")} style={styles.profilepost}>
                    <Avatar source={require('../assets/images/ceo.jpg')} rounded size={40} />
                    <View style={styles.profiletext}>
                        <Text style={styles.profilepostusername}>David3132</Text>
                        <Text style={styles.profilepostlasttime}>Online: before 4 hours</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CarDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    cardetailsOWN: {
        padding: 12,
    },
    carimageland: {
        width: '100%',
        resizeMode: 'cover',
        height: 275,
    },
    cartitletext: {
        color: '#fff',
        marginVertical: 4,
        fontWeight: '800',
    },
    carsubtitletext: {
        color: 'rgba(255,255,255,0.6)',
        fontWeight: '600',
        marginVertical: 4,
    },
    carmileagetext: {
        color: '#ddd',
        marginVertical: 4,
    },
    cardesctext: {
        color: '#fff',
        marginTop: 2,
        fontWeight: '700',
        marginBottom: 2.5,
        fontSize: 18,
    },
    cardescctext: {
        color: '#fff',
        marginVertical: 0,
    },
    ownerphonetext: {
        color: '#fff',
        marginVertical: 7,
    },
    carprice: {
        color: '#fff',
        fontWeight: '800',
    },
    profilepost: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        top: 15,
        marginBottom: 15,
        backgroundColor: '#202020',
        padding: 6,
    },
    profiletext: {
        marginLeft: 12,

    },
    profilepostusername: {
        color: "#fff",
        fontWeight: '600',
        marginBottom: 2,
    },
    profilepostlasttime: {
        color: "rgba(255,255,255,0.5)"
    },
})
