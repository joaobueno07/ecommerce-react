import Menu from "../menu/Menu";


export default function Login() {
    return (
        <div>
            <Menu />
            <hr />

            <div className=" w-full h-96 flex justify-center items-center ">
                <div className="w-8/12 h-5/6  flex justify-center items-center flex-col">
                    <h1 className="font-bold text-4xl">Cadastre-se ou faça o Login</h1>

                    <form action="" className="flex justify-center flex-col mt-8">
                        <label htmlFor="">Email</label>
                        <input type="text"  className="border-stone-700 border-2 rounded"/>

                        <label htmlFor="" className="mt-4"> Senha </label>
                        <input type="text"  className="border-stone-700 border-2 rounded"/>

                        <button className="mt-8 border-2 border-green-500 rounded">Entrar na conta</button>
                    </form>
                </div>
            </div>
        </div>
    );
}