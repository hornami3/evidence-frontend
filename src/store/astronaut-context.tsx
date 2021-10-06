import React, { useState, useEffect } from 'react';
import { Astronaut, AstronautData, httpAstronaut } from '../types/astronaut';
import * as astronautService from '../services/astronaut.service';

type AstronautContextObj = {
  astronauts: Astronaut[],
  addAstronaut: (data: AstronautData) => void,
  removeAstronaut: (id: string) => void,
  updateAstronaut: (id: string, data: AstronautData) => void,
  setAstronauts: (astronauts: Astronaut[]) => void,
};

export const AstronautContext = React.createContext<AstronautContextObj>({
  astronauts: [],
  addAstronaut: () => {},
  removeAstronaut: () => {},
  updateAstronaut: () => {},
  setAstronauts: () => {},
});

const AstronautContextProvider: React.FC = props => {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);

  const convertData = (data: httpAstronaut) => {
    return {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      superpower: data.superpower,
      dateOfBirth: (new Date(data.dateOfBirth)).toISOString().split('T')[0],
    }
  };

  useEffect(() => {
    const getAstronauts = async () => {
      const res = await astronautService.getAll();
      const astronauts = res.data.data.astronauts.map(astronaut => convertData(astronaut));
      setAstronauts(astronauts);
    }

    getAstronauts();
  }, []);

  const addAstronautHandler = async (data: AstronautData) => {
    const res = await astronautService.create(data);
    const resData = res.data.data.astronaut;

    setAstronauts(prevAstronauts => {
      return prevAstronauts.concat(convertData(resData));
    });
  };

  const removeAstronautHandler = async (id: string) => {
    await astronautService.remove(id);

    setAstronauts(prevAstronauts => {
      return prevAstronauts.filter(astronaut => astronaut.id !== id);
    });
  };

  const updateAstronautHandler = async (id: string, data: AstronautData) => {
    await astronautService.update(id, data);

    setAstronauts(prevAstronauts => {
      const astronauts = [...prevAstronauts];
      const astronautIndex = astronauts.findIndex(astronaut => astronaut.id === id);

      if (astronautIndex !== -1) {
        const updatedAstronaut = {
          ...astronauts[astronautIndex],
          ...data
        }
        astronauts[astronautIndex] = updatedAstronaut;
      }

      return astronauts;
    });
  };

  const setAstronautsHandler = (items: Astronaut[]) => {
    setAstronauts(items);
  };

  const contextValue: AstronautContextObj = {
    astronauts: astronauts,
    addAstronaut: addAstronautHandler,
    removeAstronaut: removeAstronautHandler,
    updateAstronaut: updateAstronautHandler,
    setAstronauts: setAstronautsHandler
  };

  return <AstronautContext.Provider value={contextValue}>{props.children}</AstronautContext.Provider>
}

export default AstronautContextProvider;