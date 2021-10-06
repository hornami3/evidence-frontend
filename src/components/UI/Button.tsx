import classes from './Button.module.css';

interface Props {
  clickHandler: () => void,
  type: 'default' | 'danger'
};

const Button: React.FC<Props> = props => {
  const { type, clickHandler } = props;

  return (
    <button 
      type='button' 
      className={[classes.button, type === 'danger' ? classes.danger : ''].join(' ')} 
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;