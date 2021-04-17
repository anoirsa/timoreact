import './App.css';
import React , {Fragment}from 'react';
import Attendance from './Attendace';

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <Fragment> 
        <h1>Hello VAMK</h1>
        <Attendance title="This is a Timo course" />
      </Fragment>
    );
  }
}



export default App;
