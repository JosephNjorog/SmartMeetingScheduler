export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  export const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    return `${hour}:${minute}`;
  };
  