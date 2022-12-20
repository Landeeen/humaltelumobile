import * as React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function PackScreen({setPackScreen, selectedTask, setSelectedTask }) {

return (
    
       <View style={styles.container}>
            <View style={styles.top}>
                
                    <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => setPackScreen(false)}>
                        <Ionicons name="close" size={35} color="black"/>
                        
                    </Pressable>
                    <Text style={styles.title}>{selectedTask.packTitle}</Text>
            </View>
            <View style={styles.bottom}>
                <FlatList
                showsVerticalScrollIndicator={true}
                vertical
                data={selectedTask.tasks}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.listTask}>
                            <Text style={styles.listIndex}>{index + 1}.</Text>
                            <Text style={styles.listText}>{item}</Text>
                        </View>
                    )
                }}
                // keyExtractor={this.keyExtractor}
                // style={styles.containerList}
                />
            </View>
       </View>
    );
}

const styles = StyleSheet.create({

container:
    {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#e5a93b',
    alignItems: 'center',
    
    },
top:
    {
    height: '15%',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 50,
    marginBottom: 20,
    backgroundColor: '#e5a93b',
    flexDirection: 'row'
    },
title:
    {
    fontFamily: 'RonyBold',
    fontSize: 35,
    width: '75%'
    
    },
bottom:
    {
    flexDirection: 'column',
    width: '100%',
    height: '85%',
    },
listTask:
    {
    backgroundColor: '#ffbc42',
    width: '100%',
    minHeight: 75,
    borderBottomWidth: 2,
    alignItems: 'flex-start',
    flexDirection: 'row',
    },
listIndex:
    {
    fontFamily: 'RonyBold',
    fontSize: 20,
    margin: '2%',
    marginTop: '9%',
    width: '9%'
    },
listText:
    {
    fontFamily: 'Rony',
    fontSize: 20,
    
    marginBottom: '8%',
    marginTop: '8%',
    lineHeight: 25,
    width: '85%'
    },

  })