import { AppRouter } from './components/AppRoutes';
import Header from './components/Header';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
