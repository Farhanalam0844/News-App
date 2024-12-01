import React,{Component}  from 'react'
import './App.css';
import NewsBar from './Components/NewsBar';
import NavBar from './Components/NavBar';
// import {
//   BrowserRouter as Router,Route,Routes,Switch
// } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1 className='heading my-6 font-bold text-3xl text-center '>NewsMonkey Top-Headlines</h1>
        {/* <Router> */}
          {/* <Routes> */}
          <NewsBar pageSize={8} country={'in'} category={'general'} />
            {/* <Route exact path='/sports' key={'sports'} Component={<NewsBar pageSize={8} country={'in'} category={'sports'}/>} />
            <Route exact path='/business' key={'buisness'} Component={<NewsBar pageSize={8} country={'in'} category={'business'}/>} />
            <Route exact path='/entertainment' key={'entertainment'} Component={<NewsBar pageSize={8} country={'in'} category={'entertainment'}/>} />
            <Route exact path='/health' key={'health'} Component={<NewsBar pageSize={8} country={'in'} category={'health'}/>} />
            <Route exact path='/science' key={'science'} Component={<NewsBar pageSize={8} country={'in'} category={'science'}/>} />
            <Route exact path='/technology' key={'technology'} Component={<NewsBar pageSize={8} country={'in'} category={'technology'}/>} /> */}
        {/* </Routes> */}
        {/*  </Router> */}
      </div>
    )
  }
}
