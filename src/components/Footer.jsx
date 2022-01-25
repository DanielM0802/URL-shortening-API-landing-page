import facebook from '../img/icon-facebook.svg';
import twitter from '../img/icon-twitter.svg';
import pinterest from '../img/icon-pinterest.svg';
import instagram from '../img/icon-instagram.svg';


const Footer = () => {
  return (

    <footer className="text-center bg-veryDarkBlue text-gray py-8 lg:py-12 lg:flex lg:text-left">
        <div className="lg:flex justify-between lg:w-5/6 mx-auto">
            <a href='#' className="text-3xl font-bold text-white mb-8 lg:m-0">Shortly</a>
            <div className="lg:flex gap-20">
                <div className="flex flex-col mb-8 lg:mb-0">
                    <h4 className="text-white font-bold mb-4">Features</h4>
                    <a className="mb-2" href="">Link Shortening</a>
                    <a className="mb-2" href="">Branded Links</a>
                    <a className="mb-2" href="">Analytics</a>
                </div>
                <div className="flex flex-col mb-8 lg:mb-0">
                    <h4 className="text-white font-bold mb-4">Resources</h4>
                    <a className="mb-2" href="">Blog</a>
                    <a className="mb-2" href="">Developers</a>
                    <a className="mb-2" href="">Support</a>
                </div>
                <div className="flex flex-col mb-8 lg:mb-0">
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <a className="mb-2" href="">About</a>
                    <a className="mb-2" href="">Our Team</a>
                    <a className="mb-2" href="">Careers</a>
                    <a className="mb-2" href="">Contact</a>
                </div>
                <div className="flex justify-center lg:block">
                    <div className="flex gap-6">
                        <img className="cursor-pointer" src={facebook} alt="facebook" />
                        <img className="cursor-pointer" src={twitter} alt="twitter" />
                        <img className="cursor-pointer" src={pinterest} alt="pinterest" />
                        <img className="cursor-pointer" src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  

)};

export default Footer;
