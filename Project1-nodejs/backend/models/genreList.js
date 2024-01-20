// Tiêu chí số 3: Sử dụng module fs để đọc dữ liệu từ file (MVC)
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "datas",
  "genreList.json"
);
// không dùng hàm
module.exports = class Genre {
  static getGenreById = (genreId, cb) => {
    fs.readFile(p, (err, fileContnet) => {
      if (err) {
        cb([]);
      } else {
        const genres = JSON.parse(fileContnet);
        const genre = genres.find((item) => item.id === genreId);
        cb(genre);
      }
    });
  };

  static getGenreByName = (genreName, cb) => {
    const genres = fs.readFileSync(p, "utf8");
    if (genres) {
      const jsonGenres = JSON.parse(genres);
      const genre = jsonGenres.find(
        (item) => item.name.toLowerCase() === genreName.toLowerCase()
      );
      if (genre) {
        cb(genre);
      } else {
        cb([]);
      }
    } else {
      cb([]);
    }
  };

  static async getGenereIdByName(name = "") {
    let generes = await fs.readFileSync(p, {encoding: "utf-8"});
    generes = JSON.parse(generes);
    return generes.find((elm) => elm.name.toLowerCase() === name.toLocaleLowerCase());
  }
};
