import './App.css';
import  Counter  from './components/Counter';
import  LoginForm  from './components/LoginForm';
import  SubscribeButton  from './components/SubscribeButton';
import  TodoList  from './components/TodoList';
import  Stopwatch  from './components/Stopwatch';
import  SearchFilter  from './components/SearchFilter';
import HabitTracker from './components/HabitTracker';
import { ShoppingCart } from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <h1>Practice</h1>
      <div className="components-grid">
        <Counter />
        <LoginForm />
        <SubscribeButton />
        <TodoList />
        <Stopwatch />
        <SearchFilter />
        <HabitTracker />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;