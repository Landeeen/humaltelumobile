import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, FlatList} from 'react-native';
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

const packs = [
    {
    name: 'Normaali Peli',
    maker: 'Samu'
    },
    {
    name: 'Normaali Peli',
    maker: 'Samu'
    },
    {
    name: 'Normaali Peli',
    maker: 'Samu'
    },
    {
    name: 'Normaali Peli',
    maker: 'Samu'
    },
]

    return (
        <View style={styles.container}>
            <View style={styles.top}>
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
                return(<Text style={styles.names}>{player}</Text>)}
                )}
                </View>
                <Ionicons name="beer-outline" size={200} style={styles.background}/>
            </View>
            <Pressable style={({ pressed }) => [styles.startButton, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Play')}>
                <Ionicons name="play-circle" size={40} color="black"/>
                <Text style={styles.startText}>Aloita Peli</Text>
            </Pressable>
            <View style={styles.card}>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={packs}
                renderItem={({item}) => <PackItem pack={item}/>}
                
                />
                
            </View>
        </View>

    );
  }
  
{/* <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            /> */}

const styles = StyleSheet.create({
    container:
        {
        alignItems: 'center',
        height: '100%'
        },
    top:
        {
        backgroundColor: '#218380',
        width: '100%',
        height: '75%',
        alignItems: 'center',
        paddingTop: 75
        },
    input:
        {
        backgroundColor: 'white',
        width: '70%',
        height: 50,
        borderColor: '#ffbc42',
        borderRadius: 8,
        fontSize: 20
        },
    background:
        {
        color: '#ffbc42',
        top: 180,
        left: 100,
        opacity: 0.3,
        transform: [{ rotate: "20deg" }],
        position: 'absolute',
        zIndex: -1
        },
    list:
        {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
        marginTop: 40,
        },
    names:
        {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 10,
        overflow: 'hidden',
        },
    startButton:
        {
        margin: 5,
        position: 'absolute',
        bottom: 325,
        backgroundColor: '#218380',
        width: '70%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        },
    startText:
        {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
        },
    packSelector:
        {
        margin: 5,
        width: '80%',
        height: 250,
        backgroundColor: '#ffbc42',
        borderRadius: 10,
        position: 'absolute',
        bottom: 50,
        alignItems: 'center'
        },
    title:
        {
        fontSize: 25,
        margin: 30
        },
    card:
        {
            position: 'absolute',
            bottom: 50,
        },

  })