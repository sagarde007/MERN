function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://tse2.mm.bing.net/th/id/OIF.sqw4ErBCvOe472lSML2F6w?pid=Api&P=0&h=180"
        height={200}
        width={200}
      ></img>
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop now</h2>
        <h2>Price: {props.price}</h2>
      </div>
    </div>
  );
}

export default Card;