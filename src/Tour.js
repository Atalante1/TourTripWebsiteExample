import React, { useState } from 'react';
//apideki isimleri ile yazdık id , name , info, image
const Tour = ({ id, image, info, price, name, removeTour }) => {

  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>

        </div>

        <p>{readMore ? info : `${info.substring(0, 200)}...`
        }
          {/* Eğer readMore true is tüm metni göster yoksa 200 karakter göster */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
            {/* readMore true ise showless göstericek false ise button "read more" olucak */}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>not intereseddd</button>
      </footer>
    </article>

  );

};

export default Tour;