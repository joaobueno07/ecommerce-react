export default function Menu() {
    return (
        <div className="bg-white max-w-full h-20 flex justify-evenly items-center">
            <div className="w-8/12 h-20 flex justify-between items-center">
                <div className=" w-1/2 sm: pl-8 ">
                    <a href="/">
                        <img src="/icons/vite.svg" />
                    </a>
                </div>

                <ul className=" md:lg: w-96 flex justify-evenly items-center text-black">
                    <a href="/">  
                        <li className=" text-black cursor-pointer">Home</li> 
                    </a>

                    <a href="/cardapio"> 
                        <li className=" text-black cursor-pointer">Cardápio</li>
                    </a>
                    <a href="/carrinho">
                        <li className=" text-black cursor-pointer">Carrinho</li>
                    </a>

                    <a href="/login">
                        <li className=" text-black cursor-pointer">Login</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}