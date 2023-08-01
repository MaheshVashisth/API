import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const [apiData, setApiData] = useState(null);
  const [dataId, setDataId] = useState(0);
 
useEffect(() => {callAPI1();}, []);  

  const callAPI1 = () => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('API 1 response:', data);
        // setApiData(data);
        // setDataId(data.id);
        })
      .catch(error => console.error('Error calling API 1:', error));
  };

  const callAPI2 = () => {
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${dataId + 1}`)
      .then(response => response.json())
      .then(data => {
       
        console.log('API 2 response:', data);
        setApiData(data);
        setDataId(data.id);
        setCounter(prevCounter => prevCounter + 1);
      })
      .catch(error => console.error('Error calling API 2:', error));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={callAPI2}>Hit Button</button>
      {apiData && (
        <div>
          <h2>API Data:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CounterComponent;
   

