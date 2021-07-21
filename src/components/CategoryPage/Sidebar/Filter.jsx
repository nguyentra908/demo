import React, { Component } from 'react';
import { Button } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Filter.css';
export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
      selectedSize: [false, false, false, false],
      rangePrice: {
        min: +0,
        max: +1000
      },
      selectedCategory: null
    }
  }

  onColorChanged = (e) => {
    this.setState({ selectedColor: e.target.value }, ()=>this.filterClicked());
  }

  resetFilter = () => {
    this.setState({
      selectedColor: null,
      rangePrice: {
        min: +0,
        max: +1000
      },
      selectedCategory: null
    }, ()=>this.filterClicked())
    
  }

  renderFilterColor = () => {
    const colors = ["Pink", "Purple", "Orange", "Black", "White"];
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5 style={{textTransform:"uppercase",fontWeight:"bold"}}>Color</h5>
        </div>
        {
          colors.map((e) => (
            <label class="container-radio">{e}
              <input
                type="radio"
                value={e}
                checked={this.state.selectedColor === e}
                onChange={(e) => this.onColorChanged(e)} />
              <span class="checkmark-radio" style={{ backgroundColor: e.toLowerCase() }}></span>
            </label>
          ))
        }
      </div>
    )
  }

  filterClicked = () => {
    
    this.props.filterProduct();
  }

  changeValueRange(value){
    this.setState({ rangePrice: value }, ()=>this.filterClicked())
  }

  renderFilterPriceRange() {
    const { rangePrice } = this.state;
    const min = 0;
    const max = 1000;
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5 style={{textTransform:"uppercase",fontWeight:"bold"}}>Price</h5>
        </div>
        <InputRange
          maxValue={+max}
          minValue={+min}
          value={rangePrice}
          onChange={value => this.changeValueRange(value)} />
        <div id="slider-range"></div>
      </div>
    );
  }

  renderCategories() {
    const { categories } = this.props;
    const { selectedCategory } = this.state;
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5 style={{textTransform:"uppercase",fontWeight:"bold"}}>Categories</h5>
        </div>
         
        <ul className="sidebar_categories">
          {categories.map((category) => {
            const temp = category.id === selectedCategory ? 'active-class': ''
            return (
              <li style={{ width:"90%" , height:"40px", marginBottom:"10px",  border: "1px solid rgb(224, 224, 224)",borderRadius:"3px"}}
                key={category.id}
                onClick={() => this.onChangeSelectedCategory(category)}
                className={temp}>
                <span style={{ fontSize:"16px", fontFamily:"sans-serif",fontWeight:"400",display:"block",margin:"8px 10px"}} >{category.name}</span></li>
            )
          })}
        </ul>
      </div>)
  }

  onChangeSelectedCategory(category) {
    this.setState({
      selectedCategory: category.id
    }, ()=>this.filterClicked())
  }


  render() {
    return (
        <div className="filter_sidebar">
          <h4 style={{textTransform:"uppercase",fontWeight:"bold",fontSize:"18px",textAlign:"center",marginBottom:"20px",height:"40px", paddingTop:"10px"}}>Filter </h4>
     
        <div className="sidebar_title">
        
        </div>
        {this.renderCategories()}
        {this.renderFilterPriceRange()}
        {this.renderFilterColor()}
        <Button style={{ display:"flex",margin:"15px auto"}} onClick={this.resetFilter} color="secondary">Reset</Button>
      </div>
    );
  }
}
