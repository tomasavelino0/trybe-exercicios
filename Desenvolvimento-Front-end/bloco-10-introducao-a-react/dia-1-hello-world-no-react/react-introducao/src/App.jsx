import './App.css';
import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arraySkills = ['npm', 'jest',
  'front-end'];
const skillsMap = <ul>{arraySkills.map((skill) => Task(skill))}</ul>;

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <ul>
        {skillsMap}
      </ul>
      <Content />
      <Footer />
    </div>


  }
}

export default App;
