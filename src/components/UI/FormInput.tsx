import classes from './FormInput.module.css';

interface Props {
  label: string,
  value: string,
  type: string,
  id: string,
  hasError: boolean,
  errorMessage: string,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  blurHandler: () => void
};

const FormInput: React.FC<Props> =  props => {
  const { label, value, type, id, hasError, errorMessage, changeHandler, blurHandler } = props;

  return (
    <div className={[classes.row, hasError ? classes.error : ''].join(' ')}>
        <label htmlFor={id}>{label}</label>
        <input 
          type={type} 
          id={id}
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        {hasError && <p>{errorMessage}</p>}
      </div>
  );
};

export default FormInput;