import React from 'react';
import clientAvatar from '../img/client.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';
import '../stylesheets/testimonial.scss';

export default ({ name = 'Juhi Jayaram', review = 'Default' }) => (
  <div className="testimonial">
    {/* <div className="horizontal-center is-flex">
      <figure className="has-text-centered image is-128x128 margin-bottom-2">
        <img src={clientAvatar} alt="client avatar" className="img-circle" />
      </figure>
    </div> */}
    <div className="has-text-centered margin-bottom-2">
      <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
    </div>
    <p className="has-text-justified margin-bottom-2">{review}</p>
    <p className="has-text-centered">
      <strong>{name}</strong>
    </p>
  </div>
);
