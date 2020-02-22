import React, { Component } from "react";
import PropTypes from "prop-types";

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost;

        return (
            <>
                <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                <h1 dangerouslySetInnerHTML={{__html: post.content}}/>
            </>
        )
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostTemplate;


export const postQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
           siteMetadata {
               title
           } 
        }
    }`
