import React from 'react'
const img="https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11903.jpg"
const alt="Buono regalo Amazon 60$";
const Product = () => {
  return (
    <article>
      <div className="card">
        <img src={img} alt={alt}/>
        <h6>60$ Amazon</h6>
        <p>2,16$</p>
        <p>bamby000</p>
        <p>RIAPRE PRESTO</p>
      </div>
      

    </article>
  )
}

export default Product