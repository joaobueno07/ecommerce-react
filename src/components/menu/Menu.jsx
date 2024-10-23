export default function Menu() {
    return (
        <div className="bg-teal-800 max-w-full h-20 flex justify-evenly items-center">
            <div className=" w-1/2 sm: pl-8 ">
                <img src="/icons/vite.svg" />
            </div>

            <ul className=" md:lg: w-96 flex justify-evenly items-center">
                <li>Home</li>
                <li>Sobre</li>
                <li>Contato</li>
                <li>Login</li>
            </ul>

        </div>
    );
}