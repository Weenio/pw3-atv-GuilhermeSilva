import '../App.css';

function BookCard({ img }) {
  return (
    <>
      <div className="cardBook">
        <img src={img} alt='capa do livro' className="bookImage"></img>
        <spam>Imagem meramente ilustrativa</spam>
        <hr></hr>
        <button>Comprar ou alugar agora!</button>
      </div>
    </>
  );
}

export default BookCard;