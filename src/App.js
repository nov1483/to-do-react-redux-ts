import './App.css';
import { AppRouter } from './components/AppRoutes';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
