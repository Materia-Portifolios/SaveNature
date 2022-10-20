import flora from '../../assets/flora.png'
import fauna from '../../assets/fauna.png'
import { CardPrincipal } from '../../components/CardPrincipal/CardPrincipal';
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormEnvioCrime } from '../../components/FormEnvioCrime/FormEnvioCrime';
import { MapComponent } from '../../components/MapComponent/MapComponent';


export function Home() {
  const navigate = useNavigate()
  const [crimeType, setCrimeType] = useState<number>(0)

  function navigation() {
    crimeType
      ? setCrimeType(0)
      : navigate(-1)
  }

  return (
    <>
      <HeaderPrincipal
        title={crimeType ? 'Descreva o crime' : 'Denunciar crime'}
        handleNavigation={navigation}
      />
      {
        crimeType
          ? (
            <FormEnvioCrime handleBack={() => setCrimeType(0)} />
          )
          :
          <div className="justify-center h-[60vh] flex flex-col items-center p-5">
            <CardPrincipal label='Crimes contra flora' imagem={flora} click={() => setCrimeType(1)} />
            <CardPrincipal label='Crimes contra fauna' imagem={fauna} click={() => setCrimeType(2)} />
          </div>
      }
    </>
  )
}