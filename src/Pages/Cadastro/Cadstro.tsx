import { useNavigate, useNavigation } from "react-router-dom";
import { HeaderLoginRegister } from "../../components/HeaderLoginRegister/HeaderLoginRegister";
import { TextField } from "../../components/TextField/TextField";

export function Cadastro() {
  const navigate = useNavigate()
  return (
    <>
      <HeaderLoginRegister text="Crie sua conta" />
      <form className="px-8 py-6">
        <TextField type="text" placeholder="Usuário" icon="person" />
        <TextField type="email" placeholder="Usuário" icon="email" />
        <TextField type="password" placeholder="Senha" icon="senha" />
        <TextField type="password" placeholder="Confirmar senha" icon="senha" />
        <div className="my-6">
          <input type="checkbox" className="w-6 h-6 rounded-full outline-none text-primary ring-0 focus:ring-0" />
          <label className="text-sm ml-4">
            Aceito os
            <span className="underline cursor-pointer ml-1 hover:text-primary">
              termos de privacidade
            </span>
          </label>
        </div>
        <button
          className='bg-primary text-white p-4 w-full mt-2 rounded-xl hover:bg-primary-600 transition-all'
          onClick={() => navigate('/')}
        >
          Criar conta
        </button>
      </form>
    </>
  )
}