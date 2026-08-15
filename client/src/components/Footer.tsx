import React from '../assets/icons/React.svg'
import Typescript from '../assets/icons/TypeScript.svg'
import { Copyright } from 'lucide-react';
import { Heart } from 'lucide-react';
const Footer = () => {
  return (
    <>
      <div className="grid grid-rows-2 items-center justify-center text-secondary-text m-4 p-4">
        <div className='flex gap-x-2 items-center'>
          Made with <Heart height={15} width={15} color='red' fill='red'/> using
          <img src={React} alt="" className="h-5 w-5" />
          <img src={Typescript} alt="" className="h-5 w-5" />
        </div>
        <div className='flex items-center gap-x-2'>
            <Copyright height={10} width={10}/>
            2026
            All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
