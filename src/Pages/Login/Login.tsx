import fb from '../../assets/fb.png'
import gg from '../../assets/gg.png'
import { TextField } from '../../components/TextField/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLoginRegister } from '../../components/HeaderLoginRegister/HeaderLoginRegister'
import { toast } from 'react-toastify'

export function Login() {
  const navigate = useNavigate()

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleSubmit = (): void => {
    navigate('/home')
    toast("Bem-vindo Ferisso")
  }

  return (
    <>
      <HeaderLoginRegister text='Entrar na conta' />
      <form className='pt-6 px-8'>
        <TextField type='email' placeholder='E-mail' model={setInputEmail} icon="email" />
        <TextField type='password' placeholder='Senha' model={setInputPassword} icon="senha" />
        <button
          className='bg-primary text-white p-4 w-full mt-2 rounded-xl hover:bg-primary-600 transition-all'
          onClick={handleSubmit}
        >
          Entrar
        </button>
        <span className='flex justify-center mt-4 font-light text-sm'>
          Ou Continue Com
        </span>
      </form>
      <div className='grid grid-cols-2 gap-4 mt-4 w-full px-8'>
        <button className='bg-zinc-800 p-4 rounded-xl col-span-1 hover:bg-zinc-900 transition-all'>
          <div className='flex justify-center'>
            <img src={fb} className="mr-2" />
            Facebook
          </div>
        </button>
        <button className='bg-zinc-800 p-4 rounded-xl col-span-1 hover:bg-zinc-900 transition-all'>
          <div className='flex justify-center'>
            <img src={gg} className="mr-2" />
            Google
          </div>
        </button>
      </div>
      <small className='flex justify-center mt-3 font-light'>
        Não possui uma conta?
        <a
          className='ml-1 underline hover:text-primary cursor-pointer'
          onClick={() => navigate('/cadastro')}
        >
          Cadastre-se aqui
        </a>
      </small>
    </>
  )
}