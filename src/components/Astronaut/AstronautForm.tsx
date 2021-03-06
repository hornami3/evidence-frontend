import { useEffect, useState, useContext } from 'react';
import useInput from '../../hooks/use-input';
import { AstronautContext } from '../../store/astronaut-context';
import { AstronautData } from '../../types/astronaut';
import Modal from '../UI/Modal';
import FormInput from '../UI/FormInput';

import classes from './AstronautForm.module.css';

interface Props {
  onCloseModal: () => void,
  edit?: true,
  defaultData?: AstronautData,
  astronautId?: string
};

const AstronautForm: React.FC<Props> = props => {
  const { onCloseModal, edit, defaultData, astronautId } = props;

  const astronautCtx = useContext(AstronautContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    isValid: firstNameIsValid,
    hasError: firstNameHasError, 
    enteredValue: firstNameValue, 
    inputChangedHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurredHandler
  } = useInput(defaultData?.firstName);
  const {
    isValid: lastNameIsValid,
    hasError: lastNameHasError, 
    enteredValue: lastNameValue, 
    inputChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurredHandler
  } = useInput(defaultData?.lastName);
  const {
    isValid: dateIsValid,
    hasError: dateHasError, 
    enteredValue: dateValue, 
    inputChangedHandler: dateChangedHandler,
    inputBlurHandler: dateBlurredHandler
  } = useInput(defaultData?.dateOfBirth);
  const {
    isValid: superpowerIsValid,
    hasError: superpowerHasError, 
    enteredValue: superpowerValue, 
    inputChangedHandler: superpowerChangedHandler,
    inputBlurHandler: superpowerBlurredHandler
  } = useInput(defaultData?.superpower);

  useEffect(() => {
    if (firstNameIsValid && lastNameIsValid && dateIsValid && superpowerIsValid)
      setFormIsValid(true);
    else
      setFormIsValid(false);
    
  }, [firstNameIsValid, lastNameIsValid, dateIsValid, superpowerIsValid]);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const data: AstronautData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      dateOfBirth: dateValue,
      superpower: superpowerValue
    };

    if (edit && astronautId)
      astronautCtx.updateAstronaut(astronautId, data);
    else
      astronautCtx.addAstronaut(data);

    onCloseModal();
  };

  return (
    <Modal onConfirm={onCloseModal} title={edit ? 'Upravit Astronauta' : 'P??idat Astronauta'} >
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <FormInput
          label='Jm??no'
          value={firstNameValue}
          type='text'
          id='firstName'
          hasError={firstNameHasError}
          errorMessage='Pros??m zadejte jm??no'
          changeHandler={firstNameChangedHandler}
          blurHandler={firstNameBlurredHandler}
        />           
        <FormInput
          label='P????jmen??'
          value={lastNameValue}
          type='text'
          id='lastName'
          hasError={lastNameHasError}
          errorMessage='Pros??m zadejte p????jmen??'
          changeHandler={lastNameChangedHandler}
          blurHandler={lastNameBlurredHandler}
        />                      
        <FormInput
          label='Datum narozen??'
          value={dateValue}
          type='date'
          id='date'
          hasError={dateHasError}
          errorMessage='Pros??m zadejte datum narozen??'
          changeHandler={dateChangedHandler}
          blurHandler={dateBlurredHandler}
        />                                 
        <FormInput
          label='Superschopnost'
          value={superpowerValue}
          type='text'
          id='superpower'
          hasError={superpowerHasError}
          errorMessage='Pros??m zadejte superschopnost'
          changeHandler={superpowerChangedHandler}
          blurHandler={superpowerBlurredHandler}
        />
        <input type='submit' value='Potvrdit' className={classes.button} disabled={!formIsValid} />
      </form>
    </Modal>
  );
};

export default AstronautForm;