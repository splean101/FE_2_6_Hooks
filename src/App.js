import React, { useState, useEffect } from 'react';

function App() {
  const [product, setProduct] = useState({
    coffe: 0,
    sugar: 0,
  });

  const{coffe, sugar} = product
 
  const save = () => {
    localStorage.setItem('coffe', coffe);
    localStorage.setItem('sugar', sugar);
  };

  const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setCoffe(0);
    setSugar(0);
  };

  useEffect(() => {
    if (localStorage.getItem('coffe')) {
      setCoffe(+localStorage.getItem('coffe'));
      setSugar(+localStorage.getItem('sugar'));
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffe: ${coffe}`}</span>
          <button onClick={() => setProduct({...product, coffe: product.coffe + 1})}>Add</button>
          <button onClick={() => setProduct({...product, coffe: product.coffe - 1})}>Remove</button>
        </div>
        <div className="product">
          <span>{`Sugar: ${sugar}`}</span>
          <button onClick={() => setProduct({...product, sugar: product.sugar + 1})}>Add</button>
          <button onClick={() => setProduct({...product, sugar: product.sugar - 1})}>Remove</button>
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
