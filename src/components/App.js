import React from "react";
import blogData from "../data/blog";

function Header(blogData) {
  const { name } = blogData

  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

function About(blogData) {
  const imageUrl = blogData.image || "https://via.placeholder.com/215";
  const { about } = blogData
  
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>
        {about}
      </p>    
    </aside>
  )
}

function ArticleList(props) {
  const { articles } = props;

  const articleItems = articles.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      date={article.date || "January 1, 1970"}
      preview={article.preview}
    />
  ));

  return <main>{articleItems}</main>;
}

function Article(props) {
  const { title, date, preview } = props;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} />

      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>

  );
}


export default App;
