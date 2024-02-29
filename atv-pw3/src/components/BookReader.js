import '../App.css';

function BookReader({ nomeLivro, descBLivro, autorLivro, editoraLivro, notaLivro }) {
  return (
    <>
      <div className="centerCol">
        <h1 className="marginCorrection">{nomeLivro}<spam className="textColor1"> {descBLivro}</spam></h1>
        <p className="marginCorrection"><spam className="destaque">{autorLivro}</spam> (autor),<spam className="destaque">{editoraLivro}</spam> (Editora/Publicadora)</p>
        <p><spam className="destaque">{notaLivro}</spam>/5</p>
        <hr></hr>
      </div>
    </>
  );
}

export default BookReader;