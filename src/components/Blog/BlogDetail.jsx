import React from 'react';
import blogData from '../../services/data/blogs';
import history from '../../history';
import './Blog.css'
class BlogDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }

    }

    onRouteChanged = (url) => {
        window.scrollTo(0, 0)
        history.push(url);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        if (!id) {
            history.push("/");
        }
        const blogDetail = blogData.find(e => e.id === id);
        this.setState({
            data: blogDetail
        })
    }

    render() {

        const { data } = this.state;
        if (!data) {
            return <div>No data!</div>
        }
        console.log(data);
        return (

            <div className="container single_product_container">

                <div className="row">
                    <div className="breadcrumbs d-flex flex-row align-items-center" >
                        <ul>
                            <li><a onClick={() => { this.onRouteChanged('/') }} >Home</a></li>
                            <li ><a onClick={() => { this.onRouteChanged('/blog') }}  ><i className="fa fa-angle-right" aria-hidden="true"></i>Blogs</a></li>
                            <li className="active"><a ><i className="fa fa-angle-right" aria-hidden="true"></i>{data.title}</a></li>


                        </ul>
                    </div>
                </div>

                <div className="row" >
                    <div  >
                        <img style={{ width: "1140px", height: "350px", marginBottom: "20px" }} src={`../../../assets/images/${data.image}`} />
                    </div>

                </div>
                <h3 style={{ fontWeight: "bold" }}>{data.title}</h3>
                <div className="row">
                    <div >
                        <b style={{ fontSize: "20px" }}>L</b>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                 
                </div>
            </div>

        );
    }
}

export default BlogDetail;