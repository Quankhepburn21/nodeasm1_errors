import React, { useState } from "react"; //import thư viện react
import NavBar from "../../pages/browse/NavBar/NavBar"; // import component navbar để tái sử dụng cho page search
import SearchForm from "./SearchForm/SearchForm"; //import component searform
import ResultList from "./ResultList/ResultList"; //import component resultList

const Search = () => {
  const [data, setData] = useState([]);
  const getData = (data) => {
    console.log(data);
    setData((data && data.length)? {results: data} : {results: []});
  };
  // tại đây ta sẽ thực hiện hiển thị các component tương ứng
  return (
    <div className="app">
      <NavBar></NavBar>
      <SearchForm getData={getData}></SearchForm>
      <ResultList sendData={data}></ResultList>
    </div>
  );
};

export default Search; // xuất đữ liệu ra ngoài
