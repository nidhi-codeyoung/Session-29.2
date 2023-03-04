import React from 'react';

function Car(props) {
  return <h2><b>She might love having { props.brand.model } :)</b></h2>;
}

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <> <h2><b> Hey, I'm Prince Harry</b></h2>
	    <h2>Which car should I gift to Princess Elina?</h2>
	    <Car brand={ carInfo } />
    </>
  );
}

export default App;