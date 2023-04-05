const { promisify } = require("util") 

// fungsi callback-based
function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

// ubah promise based dengan promisify
const getProvincesPromisify = promisify(getProvinces)
getProvincesPromisify("id")
 .then(data => console.log(data))
 .catch(error => console.log(error.message)) ;