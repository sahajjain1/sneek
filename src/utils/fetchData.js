export const fetchData = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };