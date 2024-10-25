import burger from '/img/3.png';
import drink from '/img/drink.png';
import snack from '/img/snacks.png';
import pack from '/img/pack.png';

export default function Categories() {
    return (
        <div className="max-w-full flex justify-center mt-10 h-80">
            <div className="w-4/6 flex justify-evenly items-center">
                <div>
                    <h1 className='text-center'>Burgers Artesanais</h1>
                    <img src={burger} alt="" width={200}/>
                </div>

                <div>
                    <h1 className='text-center'>Combos</h1>
                    <img src={pack} alt="" width={200}/>
                </div>

                <div>
                    <h1 className='text-center'>Porções</h1>
                    <img src={snack} alt="" width={200}/>
                </div>

                <div>
                    <h1 className='text-center'>Bebidas</h1>
                    <img src={drink} alt="" width={200}/>
                </div>
            </div>
        </div>
    );
}