const path = require("path");

// Modern approach that works with all Node.js versions
module.exports = path.dirname(
  require.main ? require.main.filename : process.argv[1]
);
