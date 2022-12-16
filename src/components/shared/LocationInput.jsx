import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

const LocationInput = ({ text, name, apiKey, onPlaceSelected, defaultValue = "" }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-80 rounded-md">
        <span className="pointer-events-none text-white font-cougrette">
          {text}
        </span>
        <ReactGoogleAutocomplete
          className="loc w-full p-3 border border-solid hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          apiKey={apiKey}
          onPlaceSelected={onPlaceSelected}
          name={name}
          placeholder="Select location"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default LocationInput;
