import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { API, graphqlOperation } from 'aws-amplify'
import { listPacks } from '../src/graphql/queries/'


export default function Play({navigation, route}) {

  const [tasks, setTasks] = React.useState([])


React.useEffect( () => {

const fetchPacks = async () => {
  try{

    const packsResult = await API.graphql(
      graphqlOperation(listPacks)
    )
    setTasks(packsResult.data.listPacks.items[0].tasks)
    // console.log(packsResult.data.listPacks.items[1].tasks);
    
  } catch (e) {
    console.log(e);
  }
}
fetchPacks()
}, [])

const player1 = 'Samu'

const {playerList} = route.params

const [task, setTask] = React.useState(null)

const nextTask = () => {
  
  const newTask = tasks[Math.floor(Math.random() * tasks.length)]
  setTask(newTask)
  const newTasks = tasks.filter((e) => e !== newTask)
  
  setTasks(newTasks)
 
  
  
}

    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Pressable style={({ pressed }) => [styles.menu, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Home')}>
              <Ionicons name="menu" size={25} color="black"/>
            </Pressable>
           
              <Pressable style={({ pressed }) => [styles.category, pressed ? {opacity: 0.3} : {},]} onPress={() => nextTask()}>
                <Text>Seuraava tehtävä</Text>
              </Pressable>
            
          </View>
          <View style={styles.card}>
            <Text style={styles.task}>{task}</Text>
            {task === undefined && tasks.length < 1 ?
            <View>
              <Text style={styles.task}>PELI PÄÄTTYI</Text>
              <Pressable style={({ pressed }) => [styles.menu, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={25} color="black"/>
                <Text >Takaisin kotivalikkoon</Text>
              </Pressable>
            </View>
              : null}
          </View>
          
        </View>
    );
  }

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
    justifyContent: 'center',
    paddingTop: 75,
    flexDirection: 'row',
    flexWrap: 'wrap'
    },
  category:
    {
    backgroundColor: 'white',
    width: '40%',
    height: '10%',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
    justifyContent: 'center',
    },
  card:
    {
    margin: 5,
    width: '90%',
    height: '50%',
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    },
  task:
    {
    fontSize: 30
    },
  menu:
    {
      position: 'absolute',
      top: 45,
      left: 20

    },
  })