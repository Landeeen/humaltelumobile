import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, FlatList, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PackItem from '../components/PackItem';

export default function ConfigurePlay({navigation}) {

const [player, onChangePlayer] = React.useState(null)
const [playerList, setPlayerList] = React.useState([])

const addPlayer = () => {
    const newList = [...playerList, player]
    player ? setPlayerList(newList) :  console.warn('enter a name')
    onChangePlayer(null)
    
}

const startGame = () => {
    console.warn(playerList);
}

const removePlayer = (player) => {
    
    const newPlayerList = (playerList.filter(e => e !== player))
    setPlayerList(newPlayerList)
    // console.warn(playerList);
}


const packs = [
    {
    name: 'Normaali Peli',
    tasks: 80,
    creator: 'Samu'
    },
    {
    name: 'Super Peli',
    tasks: 80,
    creator: 'Samu'
    },
    {
    name: 'Hauska Peli',
    tasks: 80,
    creator: 'Samu'
    },
    {
    name: 'Vain Peli',
    tasks: 80,
    creator: 'Samu'
    },
]

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.backButton}>
                    <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle" size={35} color="black"/>
                    </Pressable>
                    {/* <TextInput
                value={player}
                style={styles.topText}
                onChangeText={onChangePlayer}
                textAlign={'center'}
                placeholder="Lisää pelaaja +"
                placeholderTextColor={'#218380'}
                onSubmitEditing={addPlayer}
                /> */}
                </View>
                <TextInput
                value={player}
                style={styles.input}
                onChangeText={onChangePlayer}
                textAlign={'center'}
                placeholder="Lisää pelaaja"
                onSubmitEditing={addPlayer}
                />
                
                <View style={styles.list}>
                {playerList.map((player) => {
                return(
                    <View style={styles.names} >
                        <Text style={styles.namesText}>{player}</Text>
                        <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => removePlayer(player)}>
                            <Ionicons name="close" size={20} color="red"/>
                        </Pressable>
                    </View>
                )}
                )}
                </View>
                {/* <Image
                style={styles.background}
                source={require('../assets/Hlogo.png')}
                /> */}
            </View>
            <View style={styles.bottom}>
                
            
            
                <FlatList
                keyExtractor={item => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={packs}
                renderItem={({item}) => <PackItem pack={item} playerList={playerList} navigation={navigation}/>}
                
                />
                <View style={styles.instructor}>
                    <Ionicons name="caret-back" size={20} color="black"/>
                    <Text style={styles.instructorText}> </Text>
                    <Ionicons name="caret-forward" size={20} color="black"/>
                </View>
                
            </View>
            
        </View>

    );
  }

const styles = StyleSheet.create({
    container:
        {
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#218380',
        },
    top:
        {
        // backgroundColor: '#218380',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 50,
        
        },
    backButton:
        {
        marginBottom: 20,
        fontSize: 15,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
        },
    topText:
        {
        fontFamily: 'RonyBold',
        fontSize: 25,
        padding: 10,
        width: '85%',
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        color: '#218380',
        textAlign: 'center',

        },

    input:
        {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderColor: '#ffbc42',
        borderRadius: 8,
        fontSize: 20,
        opacity: 0.6
        },
    // background:
    //     {
    //     width: 450,
    //     height: 450,
    //     top: '10%',
    //     left: '15%',
    //     opacity: 0.3,
    //     position: 'absolute',
    //     zIndex: -1
    //     },
    list:
        {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
        marginTop: 15,
        },
    names:
        {
        margin: 10,
        padding: 4,
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: 'white',
        maxWidth: 150,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        },
    namesText:
        {
        fontWeight: 'bold',
        fontSize: 15,
        paddingRight: 5,
        color: '#218380',
        },
    instructor:
        {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: '20%',
        height: '10%',
        opacity: 0.2,
        zIndex: -1
        },
    instructorText:
        {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
        },
    title:
        {
        fontSize: 25,
        margin: 30
        },
    bottom:
        {
        height: '40%',
        width: '100%',
        alignItems: 'center'
        },
    
  })