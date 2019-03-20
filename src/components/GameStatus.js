import React, { Component } from 'react';

class GameStatus extends Component {
    constructor(props){
       super(props);

    }
   
    render() {
        
       
        
        return (
              <div> <button className="gamestatus" onClick={()=>this.props.resetBoard(this.props.BoardStatus)}>{this.props.BoardStatus}</button> </div>
           
           
        );
    }
}

export default GameStatus;