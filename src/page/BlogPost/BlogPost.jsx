import React, {Component} from "react";
import CardBlogComponent from "../../component/CardBlogComponent";
import axios, {post} from "axios";

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                this.setState({
                    post:res.data
                })
            })
    }

    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Best Product</h1>
                </div>
                <div className="row">
                {
                    this.state.post.map(post => {
                        return  <div className="col-md-3" key={post.id}>
                                <CardBlogComponent title={post.title} text={post.body}/>
                            </div>
                    })
                }
                </div>

            </>
        );
    }
}

export default BlogPost;