import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "../article";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const [news, setNews] = useState(1);
  const [categories, setCategories] = useState("everything");

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${categories}&from=2022-10-30&sortBy=popularity&apiKey=8f1287f811594a0e943aa778fb3b3cc0`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, [categories]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredNews = articles.filter((article) => {
    return article.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div className={styles.category}>
        <h2 onClick={() => setCategories("sports")}>Sport</h2>
        <h2 onClick={() => setCategories("technology")}>Technology</h2>
        <h2 onClick={() => setCategories("film")}>Film</h2>
        <h2 onClick={() => setCategories("travel")}>Travel</h2>
        <h2 onClick={() => setCategories("future")}>Future</h2>
        <h2 onClick={() => setCategories("culture")}>Culture</h2>
      </div>
      <div className={styles.search}>
        <h1 className={styles.text}>Search</h1>
        <form>
          <input
            className={styles.inputtext}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredNews
        .slice((news - 1) * 10, (news - 1) * 10 + 10)
        .map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
    </div>
  );
};

export default NewsList;
