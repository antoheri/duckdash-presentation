export default function Article({ header, data }) {
  return (
    <article>
      <h2>{header}</h2>
      <div>{data}</div>
    </article>
  );
}
