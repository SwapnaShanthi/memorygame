import React, { Component } from 'react';
import Tile from './Tile'

class GameBoard extends Component {

    constructor(props){
        super(props);
        this.state={TileArray:this.props.TileArray}
    }
   changeColor=()=>{

      
   }

  render() {

    const display = this.state.TileArray.map((item,index)=>{
        
       return(<div key={index}>{this.state.TileArray[index].map((tile,itemIndex)=>{
       
                return <div key={tile.number} className="tilediv"><Tile  tileArray={this.props.TileArray} tilenumber={tile.number} changeTileStatus={this.props.changeTileStatus}/></div>

             })}</div>)
    })

    return (

        <div>
            {display}

        </div>
    );
  }
}

export default GameBoard;