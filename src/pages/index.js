import React from 'react';
import Link from 'gatsby-link';
import { Testimonial, EmbedVideo, Carousel } from '../components';

export default () => (
  <section>
    <EmbedVideo url="https://www.youtube.com/embed/NHAKai0Z6sA" />
    <section className="section carousel-section">
      <Carousel>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Carousel>
    </section>
  </section>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
