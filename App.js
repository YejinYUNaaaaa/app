import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './src/components/Header';
import Subtitle from './src/components/Subtitle';
import InputBox from './src/components/InputBox';
import TodoItem from './src/components/TodoItem';

export default function App extends Component {
constructor(props) {
  super(props);
  this.state={
    inputValue : 
    todos: [
      {
        title: "first"
      },
      {
        title: "second"
      },
    ]
  }
}

_makeTodoItem = ({item, index}) => {

  <TodoItem text={item,title}/>

}



_changeText = (value) => {
  this.setState({inputValue: value})

}



_addTodoItem = () => {
  if(this.state.inpurValue ! =' ') {
    const prevTodo = this.state.todos;
    const newTodo = {title: this.state.inputValue};

    this.setState({
      inputValue: '',
      todos: prevTodo.concat(newTodo)
    });
  }
}




}

render() {

  const{todos} = this.state
  const{_makeTodoItem} = this
  const{_changeText} = this
  const{addTodoItem} = this

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Header></Header>
      </View>
      
      
      <View style={styles.subcontainer}>
      <Subtitle title="할 일을 입력하세요"></Subtitle>
      <InputBox>
        value={inpurValue}
        changeText={_changeText}
        addTodo={_addTodoItem}
      </InputBox>
      </View>

      <View style={styles.subcontainer}>
      <Subtitle title = "to do list"></Subtitle>
      <FlatList
        data={todos}
        renderItem={_makeTodoItem}
        keyExtractor={(item, index) => (return '$(index)' )}
      />

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 20,
    borderColor:'orange',
  },
  text: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor:'orange',
  }
});
