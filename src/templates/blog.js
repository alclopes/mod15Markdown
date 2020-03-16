// 9

import React from 'react'
import {graphql, Link} from 'gatsby'
import Seo from '../../components/Seo'
import Img from 'gatsby-image'

const Blog = props => {
    const { data, pageContext } = props
    const pages = Array.from({ length: pageContext.numPages})
    return (
        <div>
            <Seo  title='Blog' />
            <h1>Blog</h1>
            {/* <pre>{JSON.stringify(pageContext)}</pre> */}
            { data.posts.edges.map(post => {
                return(
                    <div>
                        { post.node.frontmatter.banner && 
                            <Img fluid={post.node.frontmatter.banner.childImageSharp.fluid} />}
                        <h3>
                            <Link to = {post.node.frontmatter.path}>
                            {post.node.frontmatter.title}</Link>
                        </h3>
                        <p>{post.node.frontmatter.description}</p>
                    </div>
                )
            })}
            <p>
                <Link to='/'>Index</Link>
            </p>
            {pages.map((_, page) => {
                return <Link to={'/blog'+ (page === 0 ? '' : '/' + page)}>
                {pageContext.currentPage === page ? ' < ' : '  '}
                {page+1}
                {pageContext.currentPage === page ? ' > ' : '  '}
                </Link>
            })}
        </div>
    )
}

// skip e limit são parametros passados 
    // inteiros e obrigatorios => Int!
export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        posts: allMarkdownRemark(
            skip: $skip,
            limit: $limit
        ) {
            edges {
                node {
                    frontmatter {
                        description
                        path
                        title
                        banner{
                            childImageSharp{
                                fluid{
                                    ...GatsbyImageSharpFluid
                                }
                            } 
                        }
                    }
                }
            }
        }
    }
`

export default Blog