import * as React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';

export default function TextDrawer({item}) {

const [open, setOpen] = React.useState(false)
const [numOfLines, setNumOfLines] = React.useState(1);
const [noWrap, setNoWrap] = React.useState(55);

const wrapper = () => {
    noWrap ===  55 ? setNoWrap(1000) : setNoWrap(55)
    numOfLines ===  1 ? setNumOfLines(50) : setNumOfLines(1)
    // console.log(item);
}


return (
    
        <Pressable onPress={() => {
          wrapper();
        }}
        style={styles.toggle}>
            <Text numberOfLines={numOfLines} style={[styles.textToggle, {maxHeight: noWrap}]}>{item}</Text>  
       </Pressable>
    
    );
}

const styles = StyleSheet.create({

toggle:
    {
    width: '67%',
    justifyContent: 'center',
    // alignItems: 'center',
    },
textToggle:
    {
    margin: 22,
    fontFamily: 'Rony',
    paddingTop: 5,
    },



    
  })