import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    const addTask = (taskText) => {
        if (taskText) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>My To-Do List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </View>
    );
}

export default App;
