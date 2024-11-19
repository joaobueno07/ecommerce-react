import burger from '/img/burguer.jpg';

import drink from '/img/bebida.jpg';
import snack from '/img/batata.jpg';
import pack from '/img/combo.jpg';


export default function Categories() {
    return (
        <div className="w-full flex justify-center mt-10 h-64 ">
            <div className="w-8/12 flex justify-between items-center">
                <div className=" w-40 h-40 flex justify-center flex-col border-2 rounded-lg items-center sm:w-40 h-40">
                    <h1 className='text-center'>Burgers </h1>

                    <a href=""> 
                        <img src={burger} alt="" className='max-w-24'/> 
                    </a>
                </div>

                <div className=" w-40 h-40 flex justify-center flex-col border-2 rounded-lg items-center sm: w-40 h-40">
                    <h1 className='text-center'>Combos</h1>

                    <a href="">
                        <img src={pack} alt=""  className='max-w-24'/>
                    </a>
                </div>

                <div className=" w-40 h-40 flex justify-center flex-col border-2 rounded-lg items-center sm: w-40 h-40">
                    <h1 className='text-center'>Porções</h1>

                    <a href="">
                        <img src={snack} alt=""  className='max-w-24'/>
                    </a>
                </div>

                <div className=" w-40 h-40 flex justify-center flex-col border-2 rounded-lg items-center sm: w-40 h-40">
                    <h1 className='text-center'>Bebidas</h1>

                    <a href="">
                        <img src={drink} alt=""  className='max-w-24'/>
                    </a>
                </div>
            </div>
        </div>
    );
}