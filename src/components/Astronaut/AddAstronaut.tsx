import { Fragment, useState } from 'react';
import Button from '../UI/Button';
import AstronautForm from './AstronautForm';

const AddAstronaut = () => {
  const [addFormIsVisible, setAddFormIsVisible] = useState(false);
  
  const showAddFormHandler = () => {
    setAddFormIsVisible(true);
  };
  
  const hideAddFormHandler = () => {
    setAddFormIsVisible(false);
  };

  return (
    <Fragment>
      <Button clickHandler={showAddFormHandler} type='default'>Přidat Astronauta</Button>
      {addFormIsVisible && <AstronautForm onCloseModal={hideAddFormHandler} />}
    </Fragment>
  );
};

export default AddAstronaut;