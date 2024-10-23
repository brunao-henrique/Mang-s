function Header({texto, imagem}){
  return(
    <>
      <h1>{texto}</h1>
      <img src={imagem}/>
    </>
  );
}
export default Header;