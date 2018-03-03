
import { StackNavigator } from 'react-navigation'
import MainList from './components/MainList'
import TaskFull from './components/TaskFull'

export default MainNavigator = StackNavigator({
  Main: {
    screen: MainList,
  },
  TaskFull: {
    screen: TaskFull
  }
});
