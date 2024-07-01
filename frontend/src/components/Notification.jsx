import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => (
  message ? <div className="notification">{message}</div> : null
);

Notification.propTypes = {
  message: PropTypes.string
};

export default Notification;
