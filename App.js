
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems]=useState([]);
  const [historyItems, setHistoryItems]=useState([]);

  const handleAddTask = () =>{
    Keyboard.dismiss(); //remove keyboard when you add new item
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    let itemsHst = [...historyItems];
    setHistoryItems([...historyItems,itemsCopy.splice(index,1)]);
    setTaskItems(itemsCopy);


  }
  const restoreTask = (index) =>{
    let itemsCopy = [...taskItems];
    let itemsHst = [...historyItems];
    setTaskItems([...itemsCopy,itemsHst.splice(index,1)]);
    setHistoryItems(itemsHst);
  }
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
            Today's tasks
        </Text>
          <ScrollView style={styles.scrollWrap}>
            <View style={styles.items}>
          {/*this is where tasks will go*/}
        {
          taskItems.map((item, index) =>{
            return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })}
            </View>
          </ScrollView>
        <ScrollView style={styles.scrollHistory}>
        {
          historyItems.map((item, index) =>{
            return(
                <TouchableOpacity key={index} onPress={() => restoreTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS==='ios' ? "padding":'height'}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}>
        </TextInput>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  tasksWrapper :{
    paddingTop: 40,
    paddingHorizontal : 20,

  },
sectionTitle :{
  fontSize: 24,
  fontWeight : 'bold',
},
scrollWrap:{
  height:'40%',
  marginBottom:10,
},
scrollHistory:{
  height:'30%',
backgroundColor:'blue',
},
items :{
  padding:5,
  marginTop: 20,
  flexDirection:'row',
  flexWrap:'wrap',
  backgroundColor:'red',

},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems:'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {},
});
