import '../App.css';

function BookCard({img}) {
  return (
    <>
        <div className="cardBook">
            <img src={img} alt='capa do livro' className="displaying"></img>
            <p className="resumoLivro">Clique abaixo para comprar</p>
            <hr style={{width: 250}}></hr>
            <button>Comprar ou alugar agora!</button>
        </div>
    </>
  );
}

export default BookCard;