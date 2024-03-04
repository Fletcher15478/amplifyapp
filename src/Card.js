import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Card = () => {
  return (
    <div className="d-flex justify-content-around">
      <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Green Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Black Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card" style={{ maxWidth: '18rem', backgroundColor: 'brown' }}>
        <div className="card-body text-white">
          <h5 className="card-title">Brown Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

