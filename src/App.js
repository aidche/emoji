import React, { Component } from 'react';
<<<<<<< HEAD
import Emojis from './Emojis';
import EmojiJSON from './emojiList.json';


class App extends Component { 
    constructor (props) {
        super(props);
        this.state = {
            list: list,
            input: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }
 handleInput (event){
    //console.log(event.target.value);

    //updating state
    this.setState({

        input : event.target.value
    })
 }
=======
import Emojis from './Emojis'


class App extends Componaaent { 
    constructor (props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
            input: ''
        }
    }

>>>>>>> 977986df2738f00e850310484aa0ce0feff3b230
    render () {
        return (
            <div className="app">
                <input 
                    className="searchbar"
                    placeholder="Type something"
<<<<<<< HEAD
                    onChange={this.handleInput}
=======
>>>>>>> 977986df2738f00e850310484aa0ce0feff3b230
                />
                <Emojis parentState={this.state.list}/>
            </div>
        )
    }
}

export default App;

























//   constructor(props) {
//     super(props);
//     this.state = {
//       // TODO: create the state properties
//     }
//     // remember, whenever we create our own method on a React Component Class, we need to modify it with this line - which enables the method to be called properly
//     // TODO: add bound handlers...
//   }

//   // TODO: Add a handler

//   render() {
//     return ( 
//       <div>

//         {/* TODO: Grab a header from BULMA */}

//         <div className="main">
//           {/* TODO: Add an input bar */}
          
//         {/* TODO: Render the emojis, using component composition */}

//         </div> 
//       </div>
//     )
//   }
// }

// export default App;