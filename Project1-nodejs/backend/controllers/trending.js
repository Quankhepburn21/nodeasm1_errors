const Movies = require("../models/moviesList");
const paging = require("../utils/paging");
// Tiêu chí số 4: Lấy các phim đang Trending
exports.trending = (req, res, next) => {
  const page = Number(req.query.page);
  Movies.getMovies((movies) => {
    movies.sort((a, b) => b.popularity - a.popularity);
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
