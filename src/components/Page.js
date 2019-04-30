import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    const { year, photos } = this.props;

    return (
      <p>
        У тебя {photos ? photos.length : '?'} фотографий за {year ? year : '?'}{' '}
        год
      </p>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};

export default Page;
