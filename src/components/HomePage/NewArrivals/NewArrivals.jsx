import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import memoize from 'memoize-one';
import { ProductList } from '../../shared';
import CategoryOptions from './CategoryOptions/CategoryOptions';


import './NewArrivals.css';

class NewArrivals extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filteredProducts: [],
      selectedCategoryId: ''
    }

    this.onCategoriesChange = memoize(
      (categories) => {
        if (this.state && this.state.selectedCategoryId) {
          if (_.find(categories, (category) => {
            if (category.id === this.state.selectedCategoryId) {
              return true;
            }
          })) {
            return;
          }
        }

        this.setState((prevState) => ({
          filteredProducts: prevState.filteredProducts,
          selectedCategoryId: categories.length > 0 ? categories[0].id : ''
        }));
      }
    )

    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
  }

  filterProduct(){
    return this.props.products.filter(item=> item.salePrice < item.originalPrice)
  }

  componentDidMount() {
    this.setState({
      filteredProducts: this.filterProduct()
    })
  }

  onSelectedCategoryChanged(category) {
    if (!category || !category.id) return;

    const filteredProducts = category.id === 'all' 
      ? this.props.products : _.filter(this.props.products, { categoryId: category.id });
    this.setState({
      filteredProducts,
      selectedCategoryId: category.id
    });
  }

  render() {
    this.onCategoriesChange(this.props.categories);

    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>Sale Products</h2>
              </div>
            </div>
          </div>
          {/* {<CategoryOptions
            categories={this.props.categories}
            selectedCategoryId={this.state.selectedCategoryId}
            onSelectedCategoryChanged={this.onSelectedCategoryChanged}>
          </CategoryOptions>} */}

          <ProductList products={this.state.filteredProducts}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  categories: state.categories.items,
});

export default connect(mapStateToProps)(NewArrivals);