import React from 'react';
import thermometerWarmerIcon from '../../icons/thermometer-warmer.svg';
import thermometerColderIcon from '../../icons/thermometer-colder.svg';

function Tempratures({ tempMax, tempMin }) {
  return (
    <div>
      <div className="flex items-center">
        <figure>
          <img
            className="w-24"
            src={thermometerWarmerIcon}
            alt="sunrise"
          />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
          <span className="font-semibold">Max: </span>
          <span className="font-normal">{tempMax}°</span>
        </span>
      </div>
      <div className="flex items-center">
        <figure>
          <img
            className="w-24"
            src={thermometerColderIcon}
            alt="sunrise"
          />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
          <span className="font-semibold pr-1">Min: </span>
          <span className="font-normal">{tempMin}°</span>
        </span>
      </div>
    </div>
  );
}

export default Tempratures;
