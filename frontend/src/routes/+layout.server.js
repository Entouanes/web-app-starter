export const load = async ({ fetch }) => {
    try {
      const response = await fetch('http://api:8000/'); // Replace with your API URL
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }
      const data = await response.json();
  
      return {
        healthStatus: response.ok, // Pass the API response to the page
      };
    } catch (error) {
      console.error('Failed to fetch health status:', error);
      return {
        healthStatus: { error: 'Failed to fetch health status' }, // Handle errors gracefully
      };
    }
  };
