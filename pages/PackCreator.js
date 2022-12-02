import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function MyCheckbox() {
    const [checked, onChange] = React.useState(false);
  
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark" size={24} color="black" />}
      </Pressable>
    );
  }



export default function PackCreator({navigation}) {

const [task, onChangeTask] = React.useState(null)

const [checkedP, onChangeCheckedP] = React.useState(false);
  
    function onPuPrPress() {
        onChangeCheckedP(!checkedP);
    }

const addTask = () => {
        // const newList = [...playerList, player]
        // player ? setPlayerList(newList) :  console.warn('enter a name')
        onChangeTask(null)
        
}

const [tasks, setTasks] = React.useState(['testi1', 'testi2', 'testi3', 'testi4', 'testi5', 'testi6', 'testi7', 'testi8', 'testi9', 'testi10', 'testi11', 'testi12','testi13', 'testi14', 'testi15', 'testi16', 'testi17',])

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.packName}>Testipakka</Text>
                <View style={styles.topBarRight}>
                    <Text style={styles.numberOfTasks}>68/100</Text>
                    <Pressable style={styles.saveButton}>
                        <Ionicons name="save-outline" size={40} color="black"/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.publicSelector}>
                <Pressable style={[styles.public, !checkedP && styles.publicSelected]}
                        onPress={onPuPrPress}>
                    <Text style={styles.publicText}>julkinen</Text>
                </Pressable>
                <Pressable style={[styles.private, checkedP && styles.privateSelected]}
                        onPress={onPuPrPress}>
                    <Text style={styles.privateText}>yksityinen</Text>
                </Pressable>
            </View>
            <View style={styles.middleBar}>
                <Pressable style={styles.middleButton}>
                    <Ionicons name="information-circle" size={25} color="black"/>
                    <Text style={styles.middleText}>info</Text>
                </Pressable>
                <Pressable style={styles.middleButton}>
                    <Ionicons name="menu" size={25} color="black"/>
                    <Text style={styles.middleText}>menu</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.middleButton, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={22} color="black"/>
                    <Text style={styles.middleText}>home</Text>
                </Pressable>
                <TextInput
                value={task}
                multiline
                numberOfLines={4}
                style={styles.input}
                onChangeText={onChangeTask}
                // textAlign={'center'}
                placeholder="Lisää haaste"
                blurOnSubmit={true}
                onSubmitEditing={addTask}
                />
                <Pressable style={styles.addButton}>
                    <Ionicons name="add-circle" size={40} color="#218380"/>
                </Pressable>
            </View>
            <View style={styles.bottomTab}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={tasks}
                    // renderItem={({item}) => <PackItem pack={item}/>}
                    renderItem={({item, index}) => {
                        return (
                        <View style={styles.task}>
                            <Pressable style={styles.selector}>
                                <MyCheckbox />
                            </Pressable>
                            <Text style={styles.taskText}>{index + 1}.   {item}</Text>
                            <Pressable style={styles.editButton}>
                                <Ionicons name="pencil" size={20} color="black"/>
                            </Pressable>
                        </View>)
                    }}
                    keyExtractor={item => item}
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
        height: '10%',
        width: '95%',
        marginTop: '12%',
        marginBottom: '1%',
        backgroundColor: '#ffbc42',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        },
    topBarRight: 
        {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        
        },
    saveButton: 
        {
        marginTop: '10%'
        },
    packName: 
        {
        width: '75%',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '4%'
        },
    numberOfTasks: 
        {
        fontSize: 15
        },
    publicSelector: 
        {
        flexDirection: 'row',
        backgroundColor: '#ffbc42',
        width: '95%',
        height: '4%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
        },
    public: 
        {
        width: '50%',
        backgroundColor: '#ffbc42',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        },
    private: 
        {
        width: '50%',
        backgroundColor: '#ffbc42',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        },
    publicSelected: 
        {
        backgroundColor: '#e5a93b',
        },
    privateSelected: 
        {
        backgroundColor: '#e5a93b',
        },
    middleBar: 
        {
        height: '30%',
        width: '85%',
        marginTop: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
        },
    middleButton: 
        {
        height: '10%',
        width: '33%',
        marginTop: '2%',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        
        },
    middleText: 
        {
        fontSize: 15,
        paddingLeft: 5,
        paddingRight: 5
        },
    input: 
        {
        height: '75%',
        width: '75%',
        marginTop: '2.5%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        padding: 15,
        fontSize: 30,
        paddingTop: 17
        
        },
    addButton: 
        {
        height: '75%',
        width: '23%',
        marginTop: '2.5%',
        marginLeft: '2%',
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
        },
    bottomTab: 
        {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        width: '95%',
        },
    task: 
        {
        flexDirection: 'row',
        backgroundColor: '#ffbc42',
        marginTop: 25,
        height: 55,
        borderRadius: 10,
        },
    taskText: 
        {
        width: '70%',
        marginTop: '5%'
        },
    selector: 
        {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        
        },
    editButton: 
        {
        width: '15%',
        backgroundColor: '#e5a93b',
        overflow: 'hidden',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
        },
    checkboxBase:
        {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'transparent',
        marginLeft: '-20%'
        },
    checkboxChecked:
        {
        backgroundColor: '#f2431f',
        },
   
  })
  