import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../App.css";
export default function Gallery() {
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [init, setinit] = useState({});
  const [data, setData] = useState({});
  //two api fetching used here one for the search and one for the initial list of books
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=PrideandPrejudice`)
      .then((res) => res.json())
      .then((data) => {
        setinit(data);
        setLoad(true);
      })
      .catch((err) => {
        <h1>
          Oops Item not Found <br /> {err}
        </h1>;
      });
  }, []);

  console.log(data);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "20px" }}>
          Search Your Favourite Book Here
        </h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search a book"
          style={{
            padding: "8px 35px",
            border: "1px solid grey",
            borderRadius: "3px",
            outline: "none",
            margin: "20px",
          }}
        />
      </div>
      {/* 
if the the user not typing in the input filed it will display initial state of book fetched fronm the Api 
if the user searched the inital will be discard and new data will be render fetched from api according to the search
*/}
      {load ? (
        search === "" ? ( //returns initial state of books if there is nothing typed in the input field
          <div className="grid-container">
            {init?.items?.map((item) => {
              return (
                <Card
                  title={item.volumeInfo?.title}
                  img={item.volumeInfo?.imageLinks?.smallThumbnail}
                  author={item.volumeInfo?.authors?.map((author) => {
                    return author;
                  })}
                  type={item.volumeInfo?.categories}
                  publisher={item.volumeInfo?.publisher}
                  link={item.volumeInfo?.previewLink}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid-container">
            {data?.items?.map((item) => {
              //returns books according to the search
              return (
                <>
                  <Card
                    title={item.volumeInfo?.title}
                    img={item.volumeInfo?.imageLinks?.smallThumbnail}
                    author={item.volumeInfo?.authors?.map((author) => {
                      return author;
                    })}
                    type={item.volumeInfo?.categories}
                    publisher={item.volumeInfo?.publisher}
                    link={item.volumeInfo?.previewLink}
                  />
                </>
              );
            })}
          </div>
        )
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}
