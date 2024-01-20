const Movies = require("../models/moviesList");
const paging = require("../utils/paging");
// Tiêu chí số 5: 	Lấy các phim có Rating cao
exports.topRate = (req, res, next) => {
  const page = Number(req.query.page);
  Movies.getMovies((movies) => {
    movies.sort((a, b) => b.vote_average - a.vote_average);
    // phân trang
    paging.paging(movies, (result) => {
      res.status(200).send({
        results: result[page],
        page: page,
        total_pages: result.length - 1,
        check: true,
      });
    });
  });
};
