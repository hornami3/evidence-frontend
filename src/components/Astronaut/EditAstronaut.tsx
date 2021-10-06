import { Fragment, useState, useContext } from 'react';
import { AstronautContext } from '../../store/astronaut-context';
import Button from '../UI/Button';
import AstronautForm from './AstronautForm';

interface Props {
  id: string
};

const EditAstronaut: React.FC<Props> = props => {
  const { id } = props;

  const astronautCtx = useContext(AstronautContext);
  const [editFormIsVisible, setEditFormIsVisible] = useState(false);
  
  const showEditFormHandler = () => {
    setEditFormIsVisible(true);
  };
  
  const hideEditFormHandler = () => {
    setEditFormIsVisible(false);
  };

  const foundAstronaut = astronautCtx.astronauts.find(astronaut => astronaut.id === id);

  return (
    <Fragment>
      <Button clickHandler={showEditFormHandler} type='default'>Upravit</Button>
      {
        editFormIsVisible && 
        <AstronautForm 
          onCloseModal={hideEditFormHandler} 
          edit 
          astronautId={id} 
          defaultData={foundAstronaut} 
        />
      }
    </Fragment>
  );
};

export default EditAstronaut;