import Loader from '../loader/loader.component'

import './custom-buttom.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className={`custom-button${otherProps.google ? ' google' : ''}`} {...otherProps}>
    {otherProps.loading ? <Loader /> : children }
  </button>
);

export default CustomButton;
