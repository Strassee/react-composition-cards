function Card({ img = '', children }) {
  return (
    <div className="card" style={{width: '18rem'}}>
    {img !== '' ? <img src={img} className="card-img-top" alt="image" /> : ''}
    <div className="card-body">
      {children}
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card;
