import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

import SideBar from "../../components/CategoryPage/Sidebar/Sidebar";
import {
  ShippingInformation,
  ProductList,
  Breadcrumb
} from "../../components/shared";
import SortingDropDown from "../../components/CategoryPage/SortingDropDown/SortingDropDown";
import PerPageDropDown from "../../components/CategoryPage/PerPageDropDown/PerPageDropDown";
// import PageNavigationBar from '../../components/CategoryPage/PageNavigationBar/PageNavigationBar';

import products from "../../services/data/products";

import { fetchCategories } from "../../actions/CategoryActions";
import config from "../../config";

import "./CategoryPage.css";
import FilterByPrice from "../../components/CategoryPage/Sidebar/FilterByPrice/FilterByPrice";

const perPageValues = [6, 12, 24];
const bouncePrice = {
  min: 0,
  max: 1000
};
const sortOptions = [
  {
    name: "Default",
    pattern: null
  },
  {
    name: "Price",
    pattern: "salePrice DESC"
  },
  // {
  //   name: 'Price ASC',
  //   pattern: "salePrice ASC"
  // },
  {
    name: "Name",
    pattern: "name ASC"
  }
];

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    const searchParams = queryString.parse(this.props.location.search);
    const { limit, page, minPrice, maxPrice, category, sort } = searchParams;

    this.state = {
      products: products,
      pagination: {
        skip: 0,
        limit: 6,
        total: 0
      },
      loading: false,
      error: null
    };

    this.filterAndSort = {
      limit: limit || perPageValues[0],
      selectedCategoryId: category || "all",
      currentPage: page || 1,
      filterPrice: {
        min: minPrice || 0,
        max: maxPrice || 600
      },
      selectedOption: sort
        ? sortOptions.find(value => {
            if (value.name === sort) {
              return value;
            }
          })
        : sortOptions[0]
    };

    this.onPerPageValueChange = this.onPerPageValueChange.bind(this);
    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
    this.onPageChanged = this.onPageChanged.bind(this);
    this.onSortOptionChanged = this.onSortOptionChanged.bind(this);
    this.onFilterPriceChanged = this.onFilterPriceChanged.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.updateProductList();
  }

  updateProductList() {
    const filter = {
      limit: +this.filterAndSort.limit,
      skip: this.filterAndSort.limit * (this.filterAndSort.currentPage - 1),
      where: {
        salePrice: {
          gt: +this.filterAndSort.filterPrice.min,
          lt: +this.filterAndSort.filterPrice.max
        }
      }
    };

    if (
      this.filterAndSort.selectedCategoryId !== "" &&
      this.filterAndSort.selectedCategoryId !== "all"
    ) {
      filter.where.categoryId = this.filterAndSort.selectedCategoryId;
    }
    if (this.filterAndSort.selectedOption.pattern) {
      filter.order = [this.filterAndSort.selectedOption.pattern];
    }

    this.generateQueryString();
    this.fetchProducts(filter);
  }

  fetchProducts(filter) {
    let url = config.url.product;
    if (filter) {
      url += `?filter=${JSON.stringify(filter)}`;
    }
    fetch(url)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: json.body,
          pagination: json.pagination
        });
      })
      .catch(error => this.setState({ error }));
  }

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  generateQueryString() {
    let queryString = "?";

    queryString += `limit=${this.filterAndSort.limit}`;
    queryString += `&page=${this.filterAndSort.currentPage}`;
    queryString += `&minPrice=${this.filterAndSort.filterPrice.min}`;
    queryString += `&maxPrice=${this.filterAndSort.filterPrice.max}`;
    queryString += `&category=${this.filterAndSort.selectedCategoryId}`;
    queryString += `&sort=${this.filterAndSort.selectedOption.name}`;

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: queryString
    });
  }

  onPerPageValueChange(value) {
    if (!value) return;

    this.filterAndSort.limit = value;
    this.updateProductList();
  }

  onSelectedCategoryChanged(category) {
    if (!category || !category.id) return;

    this.filterAndSort.selectedCategoryId = category.id;
    this.updateProductList();
  }

  onPageChanged(value) {
    if (!value) return;

    this.filterAndSort.currentPage = value;
    this.updateProductList();
  }

  onSortOptionChanged(option) {
    if (!option) return;

    this.filterAndSort.selectedOption = option;
    this.updateProductList();
  }

  onFilterPriceChanged(value) {
    if (!value) return;

    this.filterAndSort.filterPrice = value;
    this.updateProductList();
  }

  render() {
    const { loading, products, pagination } = this.state;

    return (
      <div>
        <div className="container product_section_container">
          <div className="row">
            <div className="col product_section clearfix">
              <Breadcrumb />
              <SideBar
                onSelectedCategoryChanged={this.onSelectedCategoryChanged}
                categories={this.props.categories}
                bounce={bouncePrice}
                filterPrice={this.filterAndSort.filterPrice}
                onFilterPriceChanged={this.onFilterPriceChanged}
              />

              <div className="main_content">
                <div className="products_iso">
                  <div className="row">
                    <div className="col">
                      <div className="product_sorting_container product_sorting_container_top">
                        <ul className="product_sorting">
                          <SortingDropDown
                            options={sortOptions}
                            selectedOption={this.filterAndSort.selectedOption}
                            onSortOptionChanged={this.onSortOptionChanged}
                          />
                          <PerPageDropDown
                            selectedValue={this.filterAndSort.limit}
                            values={perPageValues}
                            onPerPageValueChange={this.onPerPageValueChange}
                          />
                        </ul>
                        {/* {pagination && (
                          <PageNavigationBar
                            total={Math.ceil(
                              pagination.total / pagination.limit
                            )}
                            current={this.filterAndSort.currentPage}
                            onPageChanged={this.onPageChanged}
                          />
                        )} */}
                      </div>

                      {!loading && <ProductList products={products} />}

                      <div className="product_sorting_container product_sorting_container_bottom clearfix">
                        <ul className="product_sorting">
                          <PerPageDropDown
                            selectedValue={this.filterAndSort.limit}
                            values={perPageValues}
                            onPerPageValueChange={this.onPerPageValueChange}
                          />
                        </ul>
                        {/* {pagination && (
                          <PageNavigationBar
                            total={Math.ceil(
                              pagination.total / pagination.limit
                            )}
                            current={this.filterAndSort.currentPage}
                            onPageChanged={this.onPageChanged}
                          />
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShippingInformation />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  loadingCategories: state.categories.loading,
  errorCategories: state.categories.error
});

export default withRouter(connect(mapStateToProps)(CategoryPage));
