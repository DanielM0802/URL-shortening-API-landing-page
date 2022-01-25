import Input from "./Input";
import Stat from "./Stat";
import recognition from '../img/icon-brand-recognition.svg';
import records from '../img/icon-detailed-records.svg';
import customizable from '../img/icon-fully-customizable.svg';
import {useState} from 'react';
import Link from "./Link";


const Info = () => {

  const [links, setLinks] = useState([]);

  return <main className="bg-grayBG mt-28 lg:mt-40 xl:mt-64 relative">
      
        <section className="w-11/12 lg:w-5/6 mx-auto">
            <Input
                links={links}
                setLinks={setLinks}
            />
            
            <div className="pt-32">
                    {
                        links.map( objeto => (
                            <Link
                            key={objeto.id}
                            objeto = {objeto}
                            links={links}
                            setLinks={setLinks}
                            />
                        ))
                    }
            </div>
            
            <div className="pt-16 lg:w-2/5 mx-auto mb-20">
                <h2 className="text-center text-2xl font-bold lg:text-3xl" >Advanced Statistics</h2>
                <h3 className="text-center text-grayishViolet mt-3" >Track how your links are performing across the web with our advanced statistics dashboard.</h3>
            </div>
            <div className="lg:flex">
                <div className="lg:flex items-center">
                    <Stat 
                    source={recognition}
                    title="Brand Recognition" 
                    text="Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content."/>
                    <div className="h-12 w-2 lg:h-2 lg:w-32  bg-cyan mx-auto mb-10 lg:mb-0"></div>
                </div>

                <div className="lg:flex items-center mt-11">
                    <Stat 
                    source={records}
                    title="Detailed Records"
                    text="Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions."
                    />
                    <div className="h-12 w-2 lg:h-2 lg:w-32 bg-cyan mx-auto mb-10 lg:mb-0"></div>
                </div>

                <div className="lg:mt-24">
                    <Stat 
                    source={customizable}
                    title="Fully Customizable"
                    text=" Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement."
                    />
                </div>
            </div>
        </section>
        <div className="bg-darkViolet py-24  text-center boost-bg mt-20 lg:mt-28 lg:py-[80px]">
            <h4 className="text-3xl lg:text-4xl text-white mb-5 font-bold">Boost your links today</h4>
            <button className="btn-primary py-4 px-12 rounded-full">Get Started</button>    
        </div>
  </main>;
};

export default Info;
