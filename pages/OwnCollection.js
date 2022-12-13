import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function OwnCollection({navigation}) {
    
const [fontsLoaded] = useFonts({
    'Rony': require('../assets/fonts/Simvoni-gxm5Y.ttf'),
    'RonyBold': require('../assets/fonts/SimvoniBold-L3m7g.ttf'),
});

const [playerPacks, setPlayerPacks] = React.useState([{name: 'testi1 om tämä', tasks: 88},{name: 'tosipitkäsana', tasks: 88},{name: 'testi3', tasks: 88},{name: 'testi4', tasks: 88},{name: 'testi5', tasks: 88}])
const [likedPacks, setLikedPacks] = React.useState([])


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Pressable style={({ pressed }) => [styles.backButton, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={35} color="black"/>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.topCard, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('PackCreator')}>
                    <Text style={styles.topTitle}>Luo uusi</Text>
                    <Ionicons name="add" size={25} color="#218380"/>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.topCard, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('PackCreator')}>
                    <Text style={styles.topTitle}>Selaa pakkoja</Text>
                    <Ionicons name="globe-outline" size={25} color="#218380"/>
                </Pressable>
            </View>
            <View style={styles.packList}>
               
                <View style={styles.listTitleBox}>
                    <Text style={styles.listTitle}>Omat pakat</Text>
                    <Text style={styles.listTitle}>5/10</Text>
                </View>
                <FlatList
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // pagingEnabled={true}
                    data={playerPacks}
                    
                    renderItem={({item, index}) => {
                        return (
                        
                            <Pressable style={({ pressed }) => [styles.card, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('PackCreator')}>
                                <Text style={styles.packTitle}>{item.name}</Text>
                                <Text style={styles.taskNumber}>{item.tasks}/100</Text>
                            </Pressable>
                        )
                    }}
                    
                />
            </View>
            <View style={styles.packList}>
                <View style={styles.listTitleBox}>
                    <Text style={styles.listTitle}>Tykätyt pakat</Text>
                    <View style={styles.likedBox}>
                        <Ionicons name="heart" size={20} color="black"/>
                        <Text style={styles.listTitle}>21</Text>
                    </View>
                </View>
                <FlatList
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // pagingEnabled={true}
                    data={playerPacks}
                    
                    renderItem={({item, index}) => {
                        return (
                        
                            <Pressable style={({ pressed }) => [styles.card, styles.card2, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('PackCreator')}>
                                <Text style={styles.packTitle}>{item.name}</Text>
                                <Text style={styles.taskNumber}>tekijä: Samu</Text>
                                <Text style={styles.taskNumber}>{item.tasks}/100</Text>
                            </Pressable>
                        )
                    }}
                    
                />
            </View>
            
        </View>
    );
  }



  const styles = StyleSheet.create({
    container: 
        {
        alignItems: 'center',
        backgroundColor: '#218380',
        height: '100%',
        
        },
    topBar: 
        {
        height: '30%',
        width: '100%',
        
        // backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'column',
        
        },
    topCard: 
        {
        height: '17%',
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        },
    backButton: 
        {
        margin: 10,
        marginLeft: '5%',
        },
    topTitle: 
        {
        fontSize: 20,
        fontWeight: 'bold',
        // marginLeft: 10,
        fontFamily: 'RonyBold',
        paddingTop: 5,
        color: '#218380',
        },
    packList: 
        {
        height: '35%',
        width: '100%',
        
        backgroundColor: '#218380',
    
        },
    listTitleBox: 
        {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        marginLeft: '5%',
        backgroundColor: '#1c706e',
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        },
    listTitle: 
        {
        fontFamily: 'Rony',
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        },
    likedBox: 
        {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        },
    card: 
        {
        // alignItems: 'center',
        backgroundColor: '#ffbc42',
        height: '85%',
        width: 150,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginLeft: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        },
    card2: 
        {
        // backgroundColor: '#d9557c',
        },
    packTitle: 
        {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'RonyBold',
        padding: 5,
        margin: 5,
        backgroundColor: '#e5a93b',
        borderRadius: 10,
        overflow: 'hidden',
        opacity: 0.8,
        height: '60%'
        },
    taskNumber: 
        {
        fontSize: 15,
        padding: 10,
        fontFamily: 'Rony',
        paddingTop: 5,
        },
  })
  