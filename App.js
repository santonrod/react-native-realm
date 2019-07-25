import React, { Component } from 'react'
import { View } from 'react-native'
import List from './app/components/List'
import Input from './app/components/Input'
import Title from './app/components/Title'
import { actionCreators } from './app/components/todoListRedux'
import store from './app/components/store'

export default class App extends Component {
  state = {}

  componentWillMount() {
    const { todos } = store.getState()
    this.setState({ todos })

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState()
      this.setState({ todos })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
   store.dispatch(actionCreators.remove(index))
  }

  render() {
    const { todos } = this.state
    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    );
  }
}