import React, { Component } from 'react';

class FilterByColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "Pink"
    }
  }

  onValueChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  }
  render() {
    const colors = ["Pink", "Purple", "Orange", "Black", "White"];
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Color</h5>
        </div>
        {
          colors.map((e) => (
            <div style={{display: 'flex', flexDirection:'row'}}>
              <input type="radio"
                value={e}
                checked={this.state.selectedColor === e}
                onChange={this.onValueChange} />
                <div style={{backgroundColor: e.toLowerCase(), width: 50}}>{e}</div>
            </div>

          ))
        }
      </div>
    )
  }
}

export default FilterByColor;