const ApiService = {
    getMeetings: async () => {
      const response = await fetch('/api/meetings');
      const data = await response.json();
      return data;
    },
  
    createMeeting: async (meeting) => {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meeting),
      });
      const data = await response.json();
      return data;
    },
  
    updateMeeting: async (id, meeting) => {
      const response = await fetch(`/api/meetings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meeting),
      });
      const data = await response.json();
      return data;
    },
  
    deleteMeeting: async (id) => {
      const response = await fetch(`/api/meetings/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    },
  };
  
  export default ApiService;
  