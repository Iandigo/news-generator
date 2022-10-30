class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;

  constructor(
    title: string,
    description: string,
    url: string,
    urlToImage: string
  ) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
  }
}

export default Article;
