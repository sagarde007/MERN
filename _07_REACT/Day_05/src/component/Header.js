export default function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4qLGL1VttQkbSFm1dcaq28xrY5weD8hTRP4QiClSqg&s"
        height={40}
        width={40}
      />
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input
        placeholder="search for product brands and more"
        className="searchbar"
      ></input>

      <div className="profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">more</button>
      </div>
    </div>
  );
}
