import { useState } from "react";
import { toast } from "react-toastify";
import { MapComponent } from "../MapComponent/MapComponent";
import { TextArea } from "../TextArea/TextArea";
import { TextField } from "../TextField/TextField";

interface crimeProps {
  id?: number,
  handleBack: () => void
}

export function FormEnvioCrime({ id, handleBack }: crimeProps) {

  const [location, setLocation] = useState<boolean>()

  return (
    <>
      {
        location
          ?
          <form className='p-5'>
            <TextField placeholder='Possiveis suspeitos' type='text' />
            <TextArea placeholder='Detalhes do ocorrido' height='142px' />
            <TextField placeholder='Data do ocorrido' type='text' />
            <div className="my-6 px-1">
              <input type="checkbox" className="w-6 h-6 rounded-full outline-none border-none text-primary ring-0 focus:ring-0 bg-zinc-800" />
              <label className="text-sm ml-4">
                Denunciar anonimamente
              </label>
            </div>
            <button
              className='bg-primary text-white p-4 w-full mt-2 rounded-xl hover:bg-primary-600 transition-all'
              onClick={(e) => {
                e.preventDefault()
                toast.success("Denuncia enviada!")
                handleBack()
              }}
            >
              Enviar denuncia
            </button>
          </form>
          :
          <MapComponent
            handleBack={() => handleBack()}
            handleLocation={() => setLocation(true)}
          />
      }
    </>
  )
}
