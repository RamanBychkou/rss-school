const deleteSlash = (str) => {
  if (str !== undefined) {
    const tempSymbol = str.charAt(str.length - 1);
    if (tempSymbol === '/') {
      str = str.slice(0, str.length - 1).replace('http', 'https').toLowerCase();
      return str;
    } if (str !== undefined) {
      str = str.replace('http', 'https').toLowerCase();
      return str;
    }
  }
};

module.exports = deleteSlash;
