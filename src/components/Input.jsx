import { useState } from "react";

const Input = ({links, setLinks}) => {

  const [alertInput, setAlertInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(e.target.url.value.trim() === ''){
      setAlertInput(true);
      setErrorMessage('Please add a link');
      return;
    }

    setAlertInput(false);
    setErrorMessage('');

    const url = e.target.url.value;

    const API_URL = 'https://api.shrtco.de/v2/shorten?url=' + url;
    fetch(API_URL)
    .then( response => response.json())
    .then( objeto => {

      if(!objeto.ok){
        setAlertInput(true);
        setErrorMessage("Something went wrong");
        return;
      }

      const {short_link , original_link } = objeto.result;

      const link = {
        short_link,
        original_link,
        isCopied : false,
        id: generarId()
      }
      setLinks([...links, link]);

    })
  }

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }

  return (
    <div className="absolute -top-[76px] lg:-top-[84px] input-bg bg-darkViolet p-6 w-11/12 lg:w-5/6 rounded-lg lg:p-14">
        <form className="flex flex-col lg:flex-row lg:justify-between " onSubmit={handleSubmit}>
            <div className="flex flex-col flex-grow">
              <input 
                type="text" name="url" id="url" 
                placeholder="Shorten a link here ..." 
                className={`py-4 pl-4 rounded-md lg:flex-grow lg:mr-5  ${alertInput ? 'alerta_input' : ''} `}
              />
              <p className={`${errorMessage==='' ? 'hidden' : 'alerta'}`}>{errorMessage}</p>
            </div>
            <input type="submit" value="Shorten It!" className="btn-primary rounded-md h-14 mt-2 lg:mt-0 lg:px-14 lg:py-4"/>
        
        </form>

    </div>
  )};

export default Input;
