
export interface InputProps {
  type?: string,
  placeholder: string,
  icon?: string,
  color?: string,
  model?: (value: string) => void
}

import { Mail, User, Lock, Search } from "react-feather"

export function TextField({ type, placeholder, icon, color, model }: InputProps) {

  let iconType: string = icon ? icon : '0'

  color = color ? `[${color}]` : 'zinc-800'

  const icone = {
    'email': <Mail className="text-primary" />,
    'person': <User className="text-primary" />,
    'senha': <Lock className="text-primary" />,
    'search': <Search className="text-primary" />
  }[iconType]

  return (
    <>
      {
        icone ?
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              {icone}
            </div>
            <input
              className={`bg-${color} py-4 pl-12 w-full border-none rounded-xl outline-none focus:bg-zinc-900 transition-all my-2 ring-0 focus:ring-0`}
              type={type}
              placeholder={placeholder}
              onChange={e => model && model(e.target.value)}
            />
          </div>
          :
          <input
            className='bg-zinc-800 py-4 px-4 w-full border-none rounded-xl outline-none focus:bg-zinc-900 transition-all my-2 ring-0 focus:ring-0'
            type={type}
            placeholder={placeholder}
            onChange={e => model && model(e.target.value)}
          />
      }
    </>
  )
}