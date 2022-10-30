import React from "react";
import styles from "./NewsItem.module.css";

const NewsItem: React.FC<{
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}> = (props) => {
  return (
    <div className={styles.newsapp}>
      <div className={styles.newsitem}>
        <img
          className={styles.newsimg}
          src={props.urlToImage}
          alt={props.urlToImage}
        />
        <h3>
          <a href={props.url}>{props.title}</a>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
