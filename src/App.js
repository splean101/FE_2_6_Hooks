import React, { useState, useEffect } from 'react';

function App() {
  const [product, setProduct] = useState({
    coffe: 0,
    sugar: 0,
  });

  const { coffe, sugar } = product;

  const save = () => {
    localStorage.setItem('coffe', coffe);
    localStorage.setItem('sugar', sugar);
  };

  const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setProduct({ coffe: 0, sugar: 0 });
  };

  useEffect(() => {
    if (localStorage.getItem('coffe')) {
      setProduct({ ...product, coffe: +localStorage.getItem('coffe') });
      setProduct({ ...product, coffe: +localStorage.getItem('sugar') });
    }
  }, []);

  const removeCoffe = () => {
    if (coffe > 0) {
      setProduct({ ...product, coffe: product.coffe - 1 });
    }
  };

  const removeSugar = () => {
    if (sugar > 0) {
      setProduct({ ...product, sugar: product.sugar - 1 });
    }
  };

  const [delButton, setDelButton] = useState({
    coffeButton: true,
    sugarButton: true,
  });

  useEffect(() => {
    coffe === 0
      ? setDelButton({ ...delButton, coffeButton: false })
      : setDelButton({ ...delButton, coffeButton: true });
  }, [coffe]);

  useEffect(() => {
    sugar === 0
      ? setDelButton({ ...delButton, sugarButton: false })
      : setDelButton({ ...delButton, sugarButton: true });
  }, [sugar]);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffe: ${coffe}`}</span>
          <button
            onClick={() =>
              setProduct({ ...product, coffe: product.coffe + 1 })
            }>
            Add
          </button>
          {delButton.coffeButton && (
            <button onClick={removeCoffe}>Remove</button>
          )}
        </div>
        <div className="product">
          <span>{`Sugar: ${sugar}`}</span>
          <button
            onClick={() =>
              setProduct({ ...product, sugar: product.sugar + 1 })
            }>
            Add
          </button>
          {delButton.sugarButton && (
            <button onClick={removeSugar}>Remove</button>
          )}
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
