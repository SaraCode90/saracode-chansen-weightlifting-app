import React from 'react';
import PropTypes from 'prop-types';

export default function Save({ handleChange }) {
  return (
    <>
      <div>
        <button
          type="button"
          className="save-button"
          onClick={handleChange}
        >
          Save
        </button>
      </div>

      <style>
        {`
              .save-button {
                background-color: rgba(113, 162, 146, 0.822);
                padding: 0.25rem 0.5rem;
                margin: 0.5rem;
                border-radius: 0.25rem;
                border: 0.07rem solid black;
                box-shadow: rgba(153, 151, 151, 0.703) 0.1rem 0.1rem;
                cursor: pointer;
                font-size: 0.7rem;
                color: black;
                width: 3.2rem;
              }
            `}
      </style>
    </>
  );
}

Save.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
