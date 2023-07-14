import { Component } from 'react';
import './App.css';
import prisci from './prisci.jpg';
import shop from './shop.jpg';
import Grocery from './Grocery.js';

export default class App extends Component {
  state = {
    topImage: shop,
    bottomImage: prisci
  }

  render () {
 return (
  <div className='app'>
    <div className='App'>
    <img src={this.state.topImage} alt='girl' width='180'></img></div>
    <div className='App'><h1>Grocery List</h1></div>
    <Grocery />
    <div className='App'><img src={this.state.bottomImage} alt='shopping' width='220'></img></div>
    </div>
)}}
