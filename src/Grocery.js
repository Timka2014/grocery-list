
import { Component } from "react";
import shopping from './shopping.png';

export default class Grocery  extends Component{
    state ={
userInput: "",
groceryList:[]
    }

onChangeEvent(e){
this.setState({userInput:e})  
}

addItem (input) {
    if (input === '') {
        alert ('Please, choose an item') 
    } else {
            let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput:''})
        }
}

crossedWord (event) {
const li =event.target;
li.classList.toggle('crossed');
}

deleteItem () {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

    render() {
        return (
            <div>
                <div className='App'>
                    <input  type='text' placeholder='What would you like to buy?' 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}></input></div>
            <div className='App'>
                    <button id="btnAdd" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                    </div>
                
                     <ul>{this.state.groceryList.map ((item, index) => ( 
               <li onClick={this.crossedWord} key={index}><img src={shopping} width='40'></img>{item}</li> ))}
                </ul>
                <div className='App'><button  id='btnDelete' onClick={() => this.deleteItem()}>DELETE</button> </div>
    </div>
        )

    }
}