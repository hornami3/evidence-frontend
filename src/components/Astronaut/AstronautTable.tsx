import { Fragment, useContext } from 'react';
import DataTable from 'react-data-table-component';
import { AstronautContext } from '../../store/astronaut-context';
import { Astronaut } from '../../types/astronaut';
import Button from '../UI/Button';
import EditAstronaut from './EditAstronaut';

import classes from './AstronautTable.module.css';

const AstronautTable = () => {
  const astronautCtx = useContext(AstronautContext);

  const removeAstronautHandler = (id: string) => {
    astronautCtx.removeAstronaut(id);
  };

  const tableColumns = [
    {
      name: 'Jméno',
      selector: (row: Astronaut) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: 'Datum narození',
      selector: (row: Astronaut) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Superschopnost',
      selector: (row: Astronaut) => row.superpower,
      sortable: true,
    },
    {
      cell: (row: Astronaut) => (
        <Fragment>
          <Button clickHandler={() => removeAstronautHandler(row.id)} type='danger'>Odstranit</Button>
          <EditAstronaut id={row.id} />
        </Fragment>
      )
    }
  ];

  return (
    <div className={classes.table}>
      <DataTable 
        columns={tableColumns}
        data={astronautCtx.astronauts}
      />
    </div>
  );
};

export default AstronautTable;