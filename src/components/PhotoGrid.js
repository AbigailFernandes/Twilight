import React from 'react';
import Lightbox from 'react-images';
import { images } from '../img/gallery';
import '../stylesheets/photo-grid.scss';

const Photo = ({ src, caption = '', ...otherProps }) => (
  <div className="photo-container" {...otherProps}>
    <figure className="image">
      <img className="photo" src={src} />
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  </div>
);

class PhotoGrid extends React.Component {
  state = {
    galleryOpen: false,
    currentImage: 0,
  };

  constructor() {
    super();

    this.toggleGallery = this.toggleGallery.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
  }

  goToNext() {
    this.setState({
      currentImage: (this.state.currentImage + 1) % images.length,
    });
  }

  goToPrevious() {
    this.setState({
      currentImage: (this.state.currentImage - 1) % images.length,
    });
  }

  selectImage(index) {
    this.setState({ currentImage: index, galleryOpen: true });
  }

  toggleGallery() {
    this.setState({ galleryOpen: !this.state.galleryOpen });
  }

  render() {
    const { currentImage, galleryOpen } = this.state;

    return (
      <div>
        <div className="container photo-grid">
          {images.map((img, i) => (
            <Photo key={i} {...img} onClick={() => this.selectImage(i)} />
          ))}
        </div>
        <Lightbox
          currentImage={currentImage}
          isOpen={galleryOpen}
          images={images}
          onClose={this.toggleGallery}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
        />
      </div>
    );
  }
}

export default PhotoGrid;
