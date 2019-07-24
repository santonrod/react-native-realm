import React, { Component } from 'react'
import { View } from 'react-native'
// import List from './app/components/List'
// import Input from './app/components/Input'
import Title from './app/components/Title'

export default class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App']
  }

  onAddTodo = (text) => {
    const {todos} = this.state
    this.setState({
      todos: [text, ...todos]
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter((todo,i) => i !== index)
    })
  }

  render() {
    return (
      <View>
        <Title>To-Do List</Title>
      </View>
    );
  }
}