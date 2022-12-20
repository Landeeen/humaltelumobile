import * as React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WhenLikedDrawer({setTasks, tasksBest, tasksMonthly, tasksNew }) {

const [selected, setSelected] = React.useState(1)

const onSelect = (value) => {
    setSelected(value)
    value === 1 && setTasks(tasksBest)
    value === 2 && setTasks(tasksMonthly)
    value === 3 && setTasks(tasksNew)
}

return (
    
       <View style={styles.container}>
            
            <View style={styles.list}>
                <Pressable style={({ pressed }) => [styles.end1, selected === 1 ? styles.selected : {},]} onPress={() => onSelect(1)}>
                    <Text style={styles.text}>Tykätyimmät</Text>
                </Pressable>
                <Pressable  style={({ pressed }) => [styles.middle, selected === 2 ? styles.selected : {},]} onPress={() => onSelect(2)}>
                    <Text style={[styles.text,styles.textMiddle]}>Kuukauden parhaat</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.end2, selected === 3 ? styles.selected : {},]} onPress={() => onSelect(3)}>
                    <Text style={styles.text}>Uusimmat</Text>
                </Pressable>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({

container:
    {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: '5%'
    // alignItems: 'center',
    },
list:
    {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
    },
end1:
    {
    width: '35%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
    },
end2:
    {
    width: '35%',
    height: '100%',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
    },
middle:
    {
    width: '30%',
    height: '100%',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingBottom: '3%',
    paddingTop: '3%',
    borderColor: '#218380',
    alignItems: 'center',
    justifyContent: 'space-around'
    },
text:
    {
    fontFamily: 'RonyBold',
    fontSize: 18,
    color: '#218380',
    textAlign: 'center'
    },
textMiddle:
    {
    textAlign: 'center'
    },
selected:
    {
    backgroundColor: 'black'
    },
  })