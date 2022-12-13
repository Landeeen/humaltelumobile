import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../src/graphql/queries/'


export default function Play({navigation, route}) {

const [tasks, setTasks] = React.useState([])


React.useEffect( () => {

const fetchPacks = async () => {
  try{

    const packsResult = await API.graphql(
      graphqlOperation(queries.getPack, { id: '1' })
      
    )
    setTasks(packsResult.data.getPack.tasks)
    console.log(packsResult.data.getPack.tasks);
    
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
              <View style={styles.menu}>
                  <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.goBack()}>
                      <Ionicons name="md-pause-circle" size={35} color="black"/>
                  </Pressable>
                  <Image
                  style={styles.logo}
                  source={require('../assets/Hlogo.png')}
                  />
              </View>
            <View style={styles.card}>
            <Text style={styles.task}>{task}</Text>
            {task === undefined && tasks.length < 1 ?
            <View>
              <Text style={styles.endText}>PELI PÄÄTTYI</Text>
              <Pressable style={({ pressed }) => [styles.backHome, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Home')}>
                <Text >Takaisin kotivalikkoon</Text>
                <Ionicons name="home-outline" size={25} color="black"/>
              </Pressable>
            </View>
              : null}
          </View>
          </View>
          <View style={styles.bottom}>
          
           
              <Pressable style={({ pressed }) => [styles.nextButton, pressed ? {backgroundColor: '#798f81'} : {},]} onPress={() => nextTask()}>
                <Ionicons name="beer-outline" size={75} style={styles.nextIcon}/>
              </Pressable>
            
          </View>
         
          
        </View>
    );
  }

const styles = StyleSheet.create({
  container:
    {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#218380'
    },
  top:
    {
    backgroundColor: '#218380',
    width: '100%',
    height: '75%',
    alignItems: 'center',
    paddingTop: 50,
    
    },
  menu:
    {
    width: '90%',
    marginBottom: 20,
    flexDirection: 'row',
    },
  logo:
    {
    position: 'absolute',
    width: 50,
    height: 50,
    opacity: 0.8,
    right: 1,
    },
  
  card:
    {
    margin: 5,
    width: '90%',
    height: '100%',
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    },
  task:
    {
    fontSize: 30
    },
  endText:
    {
    fontWeight: 'bold',
    fontSize: 30,
    
    },
  backHome:
    {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
    
    },
  bottom:
    {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
    },
  nextButton:
    {
    backgroundColor: 'white',
    width: 175,
    height: 175,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: -20,
    borderWidth: 20,
    borderColor: '#218380',
    overflow: "hidden",
    
    },
  nextButtonText:
    {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#218380',
    textAlign: 'center'
    },
  nextIcon:
    {
    fontWeight: 'bold',
    fontSize: 75,
    color: '#218380',
    transform: [{ rotate: "20deg" }],
    marginLeft: 5
    },
  })