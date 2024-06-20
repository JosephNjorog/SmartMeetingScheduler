export const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };
  
  export const formatTime = (time) => {
    const t = new Date(time);
    return `${t.getHours()}:${t.getMinutes()}`;
  };
  