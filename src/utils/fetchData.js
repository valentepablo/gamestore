const fetchData = (response) => {
  const data = new Promise((resolve, reject) => {
    if (response) {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    } else {
      setTimeout(() => {
        reject({
          error: 'No se encontraron productos.',
        });
      }, 2000);
    }
  });
  return data;
};

export default fetchData;
