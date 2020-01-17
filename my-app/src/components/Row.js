import React, { Component } from 'react';
class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[{name:'Item',inputType:'select',key:1},{name:'Material fee',inputType:'currency',key:2},{name:'Unpacking Fee',inputType:'currency',key:3},{name:'Packing Fee',inputType:'currency',key:4}]
     }
  }

   
  
  render() { 
    return ( 
      <div className="dataTable">
      <h1>Table</h1>
      <table>
        <tbody>
            
        <tr>
            <th>Item</th>
            <th>Material Fee</th>
            <th>Packing Fee</th>
            <th>Unpacking Fee</th>
            </tr>
            <tr>
                <td>
                <select>
  <option value={this.props.value}>Select</option>
  <option value={this.props.value}>option1</option>
  <option value={this.props.value}>option1</option>
  <option value={this.props.value}>option1</option>
</select>
                    </td>
                <td><input type="text">{this.props.inputType}</input></td>
                <td><input type="text">{this.props.inputType}</input></td>
                <td><input type="text">{this.props.inputType}</input></td>
              
            </tr>
        
        </tbody>
      </table>
      </div>
     );
  }
}
 
export default Row;