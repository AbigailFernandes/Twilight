import React from 'react';
import Link from 'gatsby-link';
import { Testimonial, EmbedVideo, Carousel, AboutSection } from '../components';
import { marilynQuote } from '../img/home';

const testimonials = [
  {
    name: 'Samantha',
    review: `Shikha actually understood my requirement and did exactly what I wanted and was
    comfortable wearing. She is very neat and works in a very systematic manner. She was in
    time for the order and her charges was worth the effort she put in. I got a lot of
    compliments as she blended the makeup very well and it went great with my outfit as well. I
    would surely recommend Shikha and will hire her myself again and again.`,
    avatar: true,
  },
  {
    name: 'Siddhi H.',
    review: `Shikha is a very professional and talented MUA. She understood our requirements perfectly
    and the end result was perfect. Her team for hair styling and saree draping are fantastic and
    very talented too. Over a great experience and will surely book again for any party or
    wedding function.`,
    avatar: true,
  },
  {
    name: 'Haneeta Shenoy',
    review: `I wish I could give her more than 5 stars. She is excellent artist. She is far ahead of a lot of
    experienced and well-known artists from the industry. She was on time even though I had a
    last-minute booking. I thank Urban Clap for giving me such a terrific artist. I would definitely
    recommend her to all. Superb job.`,
    avatar: true,
  },
  {
    name: 'Deboja',
    review: `Excellent service for makeup and hair. Shikha did a great job, she gave me the exact look I
    wanted for the event. The cost was worth everything. The team came on time and wrapped
    up well in time too. I am highly satisfied with their service.`,
    avatar: true,
  },
  {
    name: 'Hena Mehta',
    review: `Shikha Jaiswal is very punctual. She works as per client’s feedback which is the best
    feedback. She uses latest well-known brands in this industry. From now on she’s my go-to
    make-up artist for everything. It was a great experience.`,
    avatar: true,
  },
  {
    name: 'Neta',
    review: `I hired Miss Shikha, for a close friend’s wedding party. I needed a natural make-up look and
    Shikha did a great job which exceeded my expectation. She was on time and well prepared.
    She is very professional. Her charges are very reasonable compared to the quality of make-
    up. She makes sure she gives a worthwhile experience. Thank you.`,
    avatar: true,
  },
  {
    name: 'Jyoti',
    review: `Shikha is really good with her work and I am completely satisfied with her makeup skills and
    products. She makes sure she is on time and gives her client the desired result.`,
    avatar: true,
  },
];

export default () => (
  <section>
    <figure className="image">
      <img src={marilynQuote} />
    </figure>
    <EmbedVideo url="https://www.youtube.com/embed/NHAKai0Z6sA" />
    <AboutSection />
    <section className="section carousel-section">
      <Carousel>
        {testimonials.map(item => <Testimonial key={item.name} {...item} />)}
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
