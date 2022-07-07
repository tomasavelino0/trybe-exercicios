const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius = getMarsTemperature() * 9/5) + 32;

const temperatureInFahrenheit = () =>
  console.log(`It is currently ${toFahrenheit(getMarsTemperature())}ºF at Mars`);

const greet = () =>
  console.log(`Hi there! Curiosity here. Right now is ${getMarsTemperature()}ºC at Mars`);

  const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

  const sendMarsTemperature = (callback1,callback2) => {
    setTimeout(() => {
        if(callback2 !== undefined){
          return  handleError('robo is busy')
        }
       callback1()
    }, messageDelay());
}


sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);