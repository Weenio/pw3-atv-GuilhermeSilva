import '../App.css';

function BookDesc({ descLivro }) {
  return (
    <>
      <div className="descText">
        <p>{descLivro}</p>
        <hr></hr>
      </div>
    </>
  );
}

export default BookDesc;