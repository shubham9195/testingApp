import React, { Component } from 'react';
import Rows from './components/Row'
class  Table extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[{name:'Item',inputType:'select',key:1},{name:'Material fee',inputType:'currency',key:2},{name:'Unpacking Fee',inputType:'currency',key:3},{name:'Packing Fee',inputType:'currency',key:4}]
     }
  }
  handlAddRow(){
    var data = {}
    this.state.data.push(data)
    this.setState(this.state.data);
  }
  handleDeleteRows(data){
    var index = this.state.data.indexOf(data);
    this.state.data.splice(index,1);
    this.setState(this.state.data);
}

  render() { 
    return ( 
      <div className="container">
        <Rows/>
        <button className="button" onClick={()=>this.handlAddRow()}>Add Item</button>
      </div>
     );
  }
}
 
export default Table;