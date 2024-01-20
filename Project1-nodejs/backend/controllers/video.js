const Video = require("../models/videoList");
// Tiêu chí số 7: Lấy trailer của một bộ phim	(tao route trailer)
exports.video = (req, res, next) => {
  const filmId = Number(req.query.film_id);
  Video.getMovie(filmId, (movie) => {
    if (!filmId) {
      res.status(400).send({ message: "Not found film_id parram" });
    } else if (!movie) {
      res.status(404).send({ message: "Not found video" });
    } else {
      res.status(200).send({ message: "thành công", result: movie });
    }
  });
};
