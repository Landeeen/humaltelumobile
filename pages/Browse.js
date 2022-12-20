import * as React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import WhenLikedDrawer from '../components/WhenLikedDrawer';
import PackScreen from '../components/PackScreen';


export default function Browse({navigation}) {

    const [tasksBest, setTasksBest] = React.useState([{packTitle: 'tykätyin', packCreator: 'samu', tasks: ['syö kivi', 'hyppää kuuhun', 'tee voltti','tämä on erittäin pitkä tehtäväkuvaus testausta varten, jotta voidaan nähdä miten pidempi teksti käyttäytyy pienemmissä ruuduissa. Aha ei olllutkaan vielä tarpeeksi pitkä, joten jatketaan kirjoittamista vielä jonkin aikaa, että saadaan tarpeeksi pitkä kuvaus aikaiseksi testausta varten','syö kivi', 'hyppää kuuhun', 'tee voltti','tämä on erittäin pitkä tehtäväkuvaus testausta varten, jotta voidaan nähdä miten pidempi teksti käyttäytyy pienemmissä ruuduissa. Aha ei olllutkaan vielä tarpeeksi pitkä, joten jatketaan kirjoittamista vielä jonkin aikaa, että saadaan tarpeeksi pitkä kuvaus aikaiseksi testausta varten','syö kivi', 'hyppää kuuhun', 'tee voltti','tämä on erittäin pitkä tehtäväkuvaus testausta varten, jotta voidaan nähdä miten pidempi teksti käyttäytyy pienemmissä ruuduissa. Aha ei olllutkaan vielä tarpeeksi pitkä, joten jatketaan kirjoittamista vielä jonkin aikaa, että saadaan tarpeeksi pitkä kuvaus aikaiseksi testausta varten','syö kivi', 'hyppää kuuhun', 'tee voltti','tämä on erittäin pitkä tehtäväkuvaus testausta varten, jotta voidaan nähdä miten pidempi teksti käyttäytyy pienemmissä ruuduissa. Aha ei olllutkaan vielä tarpeeksi pitkä, joten jatketaan kirjoittamista vielä jonkin aikaa, että saadaan tarpeeksi pitkä kuvaus aikaiseksi testausta varten']}, 'testi2', 'testi3', 'testi4', 'testi5', 'testi6', 'testi7', 'testi8', 'testi9', 'testi10', 'testi11', 'testi12','testi13', 'testi14', 'testi15', 'testi16', 'testi17',])
    const [tasksMonthly, setTasksMonthly] = React.useState([{packTitle: 'kuukauden paras', packCreator: 'samu', tasks: ['syö kivi', 'hyppää kuuhun', 'tee voltti']}, 'testi2', 'testi3', 'testi4', 'testi5', 'testi6', 'testi7', 'testi8', 'testi9', 'testi10', 'testi11', 'testi12','testi13', 'testi14', 'testi15', 'testi16', 'testi17',])
    const [tasksNew, setTasksNew] = React.useState([{packTitle: 'uusin', packCreator: 'samu', tasks: ['syö kivi', 'hyppää kuuhun', 'tee voltti']}, 'testi2', 'testi3', 'testi4', 'testi5', 'testi6', 'testi7', 'testi8', 'testi9', 'testi10', 'testi11', 'testi12','testi13', 'testi14', 'testi15', 'testi16', 'testi17',])

    const [tasks, setTasks] = React.useState(tasksBest)

    const [selectedTask, setSelectedTask] = React.useState(null)
    const [packScreen, setPackScreen] = React.useState(false)

    const openPack = (item) => {
        setSelectedTask(item)
        setPackScreen(!packScreen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.backButton}>
                    <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle" size={35} color="black"/>
                    </Pressable>
                </View>
                <WhenLikedDrawer setTasks={setTasks} tasksBest={tasksBest} tasksMonthly={tasksMonthly} tasksNew={tasksNew}/>
            </View>
            <View style={styles.bottom}>
               <FlatList
                showsVerticalScrollIndicator={false}
                vertical
                data={tasks}
                renderItem={({item, index}) => {
                    return (
                    
                        <Pressable style={({ pressed }) => [styles.task, pressed ? {opacity: 0.3} : {},]} onPress={() => openPack(item)}>
                            <Text style={styles.packTitle}>{item.packTitle}</Text>
                            <Text style={styles.taskNumber}>tekijä: {item.packCreator}</Text>
                            <Text style={styles.taskNumber}>23/100</Text>
                            <View style={styles.likeCounter}>
                                <Ionicons name="thumbs-up" size={40} color="green"/>
                                <Text style={styles.likeCounterText}>67</Text>
                            </View>
                        </Pressable>
                    )
                }}
                // keyExtractor={this.keyExtractor}
                // style={styles.containerList}
                contentContainerStyle={styles.list}
                numColumns={2}
                columnWrapperStyle={styles.column}
                />
            </View>
            {packScreen && <PackScreen setPackScreen={setPackScreen} selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>}
        </View>
        
    );
  }


  const styles = StyleSheet.create({
    container: 
        {
        height: '100%',
        backgroundColor: '#218380',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        },
    top: 
        {
        height: '20%',
        width: '91%',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        marginBottom: 20
        },
    backButton:
        {
        
        fontSize: 15,
        flexDirection: 'row',
        width: '90%',
        },
    bottom: 
        {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
        },
    containerList: 
        {
        },
    list: 
        {
        },
    column: 
        {
        alignItems: 'center',
        justifyContent: 'center'
        },
    task: 
        {
        backgroundColor: '#ffbc42',
        borderRadius: 10,
        width: '45%',
        height: 200,
        margin: 7.5,
        // justifyContent: 'space-between'
        },
    packTitle: 
        {
        fontSize: 30,
        fontFamily: 'RonyBold',
        paddingTop: 5,
        backgroundColor: '#e5a93b',
        borderRadius: 10,
        margin: 5,
        overflow: 'hidden',
        padding: 5,
        height: '65%'
        },
    taskNumber: 
        {
        fontFamily: 'Rony',
        padding: 5,   
        fontSize: 15 
        
        },
    likeCounter: 
        {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: "335deg" }],
        position: 'absolute',
        right: '10%',
        top: '50%',
        opacity: 0.6
        },
    likeCounterText: 
        {
        color: 'green',
        fontSize: 17,
        fontFamily: 'RonyBold',
        marginTop: 5
        },
  })
  