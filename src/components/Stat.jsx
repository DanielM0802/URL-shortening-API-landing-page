
const Stat = ({source, title, text}) => {
  return (
    <div className="bg-white px-8 pb-8 rounded-md text-center lg:pr-[45px]">
      
      <div className="relative flex justify-center lg:justify-start">
        <div 
        style={{ backgroundImage: `url(${source})`}}
        className="icon -top-[45px]"></div>
      </div>
      
      <h3 className="text-xl font-bold mt-20 lg:text-left mb-5" >{title}</h3>
      <p className="text-gray lg:text-left">{text}</p>
    </div>
  )};

export default Stat;
