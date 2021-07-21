import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProductList, setProductPagination, SET_LIST_PRODUCT_PAGINATION, RESET_LIST_PRODUCT_PAGINATION } from "../../actions/ProductActions";
import Filter from "../../components/CategoryPage/Sidebar/Filter";
import productsData from "../../services/data/products";
import "./CategoryPage.css";
import {
  ShippingInformation,
  ProductList,
  Breadcrumb
} from "../../components/shared";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      selectedPage: 0,
    };
    this.refFilter = React.createRef();
  }

  getProductByPageIndex(selectedPage, data) {
    if (!data || (data && !data.length)) {
      this.setState({
        products: []
      })
      return;
    }
    this.setState({
      products: data[selectedPage].productList
    })
  }

  componentDidMount() {
    const { products } = this.props;
    const { selectedPage } = this.state;
    this.getProductByPageIndex(selectedPage, products);
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: RESET_LIST_PRODUCT_PAGINATION
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.products !== nextProps.products) {
      this.getProductByPageIndex(this.state.selectedPage, nextProps.products)
    }
  }

  onFilterClicked = () => {
    const refFilterState = this.refFilter.current.state;
    const filteredProduct = filterProductList({ filterPrice: refFilterState.rangePrice, filterCategory: refFilterState.selectedCategory, filterColor: refFilterState.selectedColor })
    const paginationProductData = setProductPagination(filteredProduct);
    this.setState({
      selectedPage: 0
    }, () => this.props.dispatch({
      type: SET_LIST_PRODUCT_PAGINATION,
      payload: { listProductPagination: paginationProductData }
    }));
  }

  onChangeSelectedPage = (selectedPage) => {
    if (selectedPage === this.state.selectedPage) {
      return;
    }
    const { products } = this.props;
    window.scrollTo(0, 0)
    this.setState({ selectedPage }, () => this.getProductByPageIndex(selectedPage, products));
  }

  renderPagination = () => {
    const { selectedPage } = this.state;
    const { products } = this.props;
    if (!products || (products && !products.length)) {
      return null;
    }
    const arr = [];
    for (let index = 0; index < products.length; index++) {
      let selectedPageStyle = 'selected-page-style';
      if (index !== selectedPage) {
        selectedPageStyle = ''
      }
      const btn = <button onClick={() => { this.onChangeSelectedPage(index) }}
        className={`button-pagination ${selectedPageStyle}`} key={index}>{index + 1}</button>
      arr.push(btn);
    }
    return (
      <div className="pagination" style={{ marginTop: "10px" }}> { arr} </div>
    )

  }

  renderProductList() {
    const { products } = this.state;
    if (!products || (products && !products.length)) {
      return (<h4 style={{textAlign: "center"}}>
         No products!
      </h4>)
    }
    return (
      <div className="main_content">
        <div className="product_sorting_container product_sorting_container_top" style={{ marginBottom: 10 }} >
        </div>
        <ProductList products={products} />
      </div>
    )
  }

  scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { categories } = this.props;
    return (
      <div>

        <div className="container product_section_container">
          <div className="col product_section clearfix" style={{ marginTop: 10 }}>
            <Breadcrumb ></Breadcrumb>
            <Filter
              ref={this.refFilter}
              onSelectedCategoryChanged={this.onSelectedCategoryChanged}
              categories={categories}
              filterProduct={this.onFilterClicked}
            />
            {
              this.renderProductList()
            }
          </div>
          {this.renderPagination()}
        </div>
        <a className="scroll_top" style={{ width:"30px",height:"30px",backgroundColor:"#f3f3f3", textAlign:"center", borderRadius:"50%", float:"right",marginTop:"-40px", marginRight:"50px"}} onClick={() => { this.scrollToTop() }}>
          <i class="fa fa-arrow-up" aria-hidden="true" style={{ marginTop:"5px", fontSize: 20, opacity: 0.5 }}></i>
        </a>
        <ShippingInformation />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  products: state.products.listProductPagination,

});

export default connect(mapStateToProps)(CategoryPage);
