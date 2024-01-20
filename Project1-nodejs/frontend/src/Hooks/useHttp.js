import { useEffect, useState } from "react";
// Tiêu chí số 11: Chỉnh sửa lại Frontend

function useHttp(url, check) {
  // tạo custom hook request API tái sử dụng đơn giản
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  // hiện yêu cầu API request
  useEffect(() => {
    // let isMounted = true;
    const test = async () => {
      if (check) {
        const res = await fetch(`http://localhost:5000/api/movies${url}`,{mode:"cors"});
        const data = await res.json();
        try {
          setMovies(data);
          setIsLoading(false);
          setError(null);
        } catch (error) {
          setError(error);
          setMovies(null);
          setIsLoading(false);
        }
      } else {
        const res = await fetch(`https://api.themoviedb.org/3${url}`,{mode:"cors"});
        const data = await res.json();
        try {
          data.check = true;
          setMovies(data);
          setIsLoading(false);
          setError(null);
        } catch (error) {
          setError(error);
          setMovies(null);
          setIsLoading(false);
        }
      }
    };
    test();
    // return () => {
    //   isMounted = false;
    // };
  }, [url,check]);
  // trả về 1 object chứa 3 dữ liệu cần
  return { isLoading, error, movies };
}
export default useHttp;
