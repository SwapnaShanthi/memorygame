import React, { Component } from 'react';
import '../style/memorygame.css'

class Tile extends Component {

    constructor(props){
        super(props);
    }


  render() {
      const tilecolor =()=>{
        for(let i=0;i<this.props.tileArray.length;i++){
           
            for(let j=0;j<this.props.tileArray[i].length;j++){
                  if(this.props.tileArray[i][j].number === this.props.tilenumber ){
                    
                      return this.props.tileArray[i][j].color;
                  }
            }
      
          }
      }
  
    return (
            <button className={tilecolor()} onClick={()=>this.props.changeTileStatus(this.props.tilenumber)}></button>
       
    );
  }
}

export default Tile;