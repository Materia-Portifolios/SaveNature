import logo from '../../assets/logo.png'

interface HeaderLoginRegisterProps {
  text: string
}

export function HeaderLoginRegister({ text }: HeaderLoginRegisterProps) {
  return (
    <>
      <div className="w-[100%] flex justify-center align-center mt-10">
        <img src={logo} alt="logo do aplicativo" className="w-22" />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-primary text-4xl font-semibold flex justify-center'>
          Save Nature
        </h2>
        <span className='flex justify-center mt-[-7px] text-md'>
          Denuncie crimes ambientais
        </span>
      </div>
      <span className='flex justify-center mt-10 text-xl font-thin'>
        {text}
      </span>
    </>
  )
}