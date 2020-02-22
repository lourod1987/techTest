import React, { Component } from "react";
import { graphql } from "gatsby";

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata;
        const currentPage = this.props.data.wordpressPage;

        return (
            <>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            </>
        )
    }
}


export default PageTemplate;


export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            date(formatString: "MMMM DD, YYYY")
        }
        site {
           id
           siteMetadata {
               title
           } 
        }
    }`