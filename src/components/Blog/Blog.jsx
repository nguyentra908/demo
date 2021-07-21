import './Blog.css'
import React, { Component } from 'react';
import blogs from '../../services/data/blogs';
import history from '../../history';
class Blog extends Component {

  onClickBlog(id){
    history.push(`/blog-detail/${id}`)
  }
	onRouteChanged = (url) => {
		window.scrollTo(0, 0)
		history.push(url);
	  }
  render() {
    return (
      <div className="container">
       
        <div className="blog">
        <div className="row">
					<div className="breadcrumbs d-flex flex-row align-items-center" >
						<ul>
							<li><a onClick={() => { this.onRouteChanged('/') }} >Home</a></li>
							<li  className="active"><a onClick={() => { this.onRouteChanged('/blog') }}  ><i className="fa fa-angle-right" aria-hidden="true"></i>Blogs</a></li>
						</ul>
					</div>
				</div>
          <div className="row">
            <div className="col-md-3 blog-slide">
              <h5 style={{ textTransform: "uppercase", marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>New Bogs</h5>
              <div className="blog_slidebar">
                <div className=" blog_new_contain">
                  {
                    blogs.map(item => {
                      return (
                        <div>
                          <div className="row blog_new" onClick={()=>this.onClickBlog(item.id)}>
                            <div className="col-md-3 blog_new_img">
                              <img style={{ width: '50px', height: "50px", borderRadius: '50%' }} src={`assets/images/${item.image}`} />
                            </div>
                            <div className="col-md-9">
                              {item.titleBrief}
                            </div>

                          </div>
                          <hr className="line_separate"></hr>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {
                  blogs.map(item => {
                    return (
                      <div className=" col-md-4 card-item  " onClick={()=>this.onClickBlog(item.id)}>
                        <div className="card-contain">
                          <div className="image_card">
                            <img src={`assets/images/${item.image}`} />
                          </div>
                          <div className="card_info">
                            <h5 className="card_info_title">
                              {item.title}
                            </h5>
                            <hr className="line_separate"></hr>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                          </span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );


  }
}

export default Blog;


