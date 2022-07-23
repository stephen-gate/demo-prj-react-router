import {BrowserRouter} from 'react-router-dom';
import AppDemoRouter from './AppDemoRouter';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.div_run_stand_alone}>
    <BrowserRouter>
        <AppDemoRouter />
    </BrowserRouter>
    </div>
  );
}

export default App;
