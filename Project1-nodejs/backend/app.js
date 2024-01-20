// Tiêu chí số 1 - Assemble and create a Nodejs project
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const genreRouter = require("./routers/genre");
const authenticationRouter = require("./middleware/authentication");

// Tắt urlencoded, configure đẩy data dạng json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Number 2: ExpressJS and server creation
app.use(cors());
// số 9: thêm có chế xác thực user bằng token
//app.use(authenticationRouter);


const movieRouters = require("./routers/genre");

app.use(movieRouters);
// midleware này sẽ chạy khi nào xác thực được hoàn tất và token trùng nhau
// app.use("/api/movies", genreRouter);

// Tiêu chí số 10: Bổ sung kết quả trả về khi sai Endpoint: trả về kết quả trang lỗi nếu url bị sai
app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});
// Tạo port
app.listen(5000, () =>
console.log("Server on 5000"));
