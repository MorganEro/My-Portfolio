import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { GetState, GetCity } from 'react-country-state-city';

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    GetState(233).then(result => {
      setStateList(result);
    });
  }, []);

  useEffect(() => {
    if (stateId) {
      GetCity(233, stateId).then(result => {
        setCityList(result);
      });
    }
  }, [stateId]);

  const handleStateChange = event => {
    const stateInput = event.target.value.toLowerCase();
    const state = stateList.find(
      state =>
        state.name.toLowerCase() === stateInput ||
        state.state_code.toLowerCase() === stateInput
    );
    if (state) {
      setStateId(state.id);
    }
  };

  const handleCityChange = event => {
    const cityInput = event.target.value.toLowerCase();
    const city = cityList.find(city => city.name.toLowerCase() === cityInput);
    if (city) {
      setCityId(city.id);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        cityId,
        stateId,
        stateList,
        cityList,
        handleStateChange,
        handleCityChange,
      }}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContext, LocationProvider };
