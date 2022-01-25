import background from '../img/illustration-working.svg'

const Hero = () => {
  return <section className="lg:flex flex-row-reverse pt-32">
      <div style={{ backgroundImage: `url(${background})`}}
           className="h-80 xl:h-[480px] lg:w-3/6 bg-center bg-no-repeat bg-contain lg:absolute desktop-position"
      ></div>
          
      <div className="w-5/6 lg:w-5/6 mx-auto text-center lg:text-left lg:flex flex-col justify-center lg:mt-16">
        <div className="lg:w-3/6">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-veryDarkBlue mb-5">More than just shorter links</h1>
            <h2 className="text-gray text-lg mb-5 px-10 lg:text-xl lg:p-0 xl:pr-14">  Build your brand’s recognition and get detailed insights 
            on how your links are performing.</h2>
            <button className="btn-primary py-4 px-12 rounded-full">Get Started</button>    
        </div>
      </div>    

      
  </section>;
};

export default Hero;
