const Article = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </>
  );
}

export default Article;