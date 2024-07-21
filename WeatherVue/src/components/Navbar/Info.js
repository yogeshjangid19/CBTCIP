import React from 'react';
import { useMainContext } from '../../context/MainContext';
import sunIcon from '../../icons/01d.svg';
import moonIcon from '../../icons/01n.svg';

function Info() {
  const { isDark, setIsDark, isCelcius, setIsCelcius } = useMainContext();

  return (
    <div className="flex justify-end items-center">
      <div className="flex items-center mr-6">
        <label
          htmlFor="toggle"
          className="inline-block toggle-label pr-2 font-semibold text-xl text-gray-700 dark:text-gray-200 cursor-pointer"
        >
          °C
        </label>
        <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
          <input
            checked={isCelcius === 'metric' ? false : true}
            onChange={() => {}}
            onClick={() =>
              setIsCelcius(isCelcius === 'metric' ? 'standart' : 'metric')
            }
            type="checkbox"
            id="toggle"
            className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white dark:bg-gray-900 border-4 border-sky-300 dark:border-gray-500 appearance-none cursor-pointer checked:right-0"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-7 rounded-full bg-sky-300 dark:bg-gray-500 cursor-pointer"
          ></label>
        </div>
        <label
          htmlFor="toggle"
          className="inline-block toggle-label pl-2 font-semibold text-xl text-gray-700 dark:text-gray-200 cursor-pointer"
        >
          °F
        </label>
      </div>
      <button
        onClick={() => setIsDark(isDark === '' ? 'dark' : '')}
        className="group dark:bg-gray-600 border border-gray-300 hover:border-gray-400 p-0.5 dark:border-gray-600 dark:hover:border-gray-500 rounded-full transition-all mr-5"
      >
        {isDark ? (
          <figure>
            <img
              className="w-8 dark:bg-gray-600 rounded-full"
              src={sunIcon}
              alt="sun"
              title="Light Mode"
            />
          </figure>
        ) : (
          <figure>
            <img
              className="w-8"
              src={moonIcon}
              alt="moon"
              title="Dark Mode"
            />
          </figure>
        )}
      </button>

     
    </div>
  );
}

export default Info;
