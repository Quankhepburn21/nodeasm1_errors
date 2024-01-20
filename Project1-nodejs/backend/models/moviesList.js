const fs = require("fs");
const path = require("path");
const { encode } = require("punycode");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "datas",
  "movieList.json"
);

module.exports = class Movies {
  static async getMovies(cb) {
    // return await fs.readFileSync(p, {encoding: "utf-8"});
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};
