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
  const [addFormIsVisible, setAddFormIsVisible] = useState(false);
  
  const showAddFormHandler = () => {
    setAddFormIsVisible(true);
  };
  
  const hideAddFormHandler = () => {
    setAddFormIsVisible(false);
  };

  const foundAstronaut = astronautCtx.astronauts.find(astronaut => astronaut.id === id);

  return (
    <Fragment>
      <Button clickHandler={showAddFormHandler} type='default'>Upravit</Button>
      {
        addFormIsVisible && 
        <AstronautForm 
          onCloseModal={hideAddFormHandler} 
          edit 
          astronautId={id} 
          defaultData={foundAstronaut} 
        />
      }
    </Fragment>
  );
};

export default EditAstronaut;