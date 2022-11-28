import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Play({navigation, route}) {

const {playerList} = route.params

const categoryButtons = ['yksilö', 'pari', 'ryhmä', 'sattuma']
const [tasks, setTasks] = React.useState(['juo shotti', 'heitä voltti', 'syö kiviä', 'lennä kuuhun'])
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
           {categoryButtons.map((category, index) => {
            return(
              <Pressable style={({ pressed }) => [styles.category, pressed ? {opacity: 0.3} : {},]} onPress={() => nextTask()}>
                <Text>{category}</Text>
              </Pressable>
            )
           })}
          </View>
          <View style={styles.card}>
            <Text style={styles.task}>{task}</Text>
            
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