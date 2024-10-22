function Card({ img = '', children }) {
  return (
    <div className="card" style={{width: '18rem'}}>
    {img !== '' ? <img src={img} className="card-img-top" alt="images" /> : ''}
    <div className="card-body">
      {children}
      <a href="#1" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card;
