import { useState } from 'react';
import PropTypes from 'prop-types';
import './MeetingForm.css';

const MeetingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, time });
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Schedule Meeting</button>
    </form>
  );
};

MeetingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MeetingForm;
