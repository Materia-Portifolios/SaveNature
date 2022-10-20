import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { useMemo, useState } from 'react'
import { ChevronLeft, MapPin } from 'react-feather'
import { TextField } from '../TextField/TextField'

interface MapProps {
  handleBack?: () => void
  handleLocation?: () => void
}

export function MapComponent({ handleBack, handleLocation }: MapProps) {
  const [lat, setLat] = useState<number>(-25.45001)
  const [lng, setLng] = useState<number>(-49.25304)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCivz6u-Sl1tQ8XpFyH9qWq8xMfcQhVcdU',
  })

  const handleMarker = (event: any) => {
    setLat(event.latLng.lat())
    setLng(event.latLng.lng())
  }

  const center = useMemo(() => ({ lat: -25.45001, lng: -49.25304 }), [])
  const options = useMemo(() => ({
    mapId: '8d455acc8006827d',
    clickableIcons: false,
    disableDefaultUI: true
  }), [])

  return (
    <>
      {
        !isLoaded
          ?
          <div className='flex items-center justify-center h-4/5 text-primary'>
            Carregando mapa...
          </div>
          :
          <div className='max-w-full  overflow-y-hidden'>
            <GoogleMap
              id='map'
              zoom={12}
              center={center}
              options={options}
              mapContainerClassName='w-full h-[105vh] absolute top-0 right-0 z-10'
              onClick={(e) => handleMarker(e)}
            >
              <MarkerF position={{ lat: lat, lng: lng }} />
            </GoogleMap>
            <div className='absolute top-0 z-20 w-full pl-4 pr-6 mt-4'>
              <div className='flex items-center'>
                <button
                  className='bg-[#0e0e0eeb] p-2 mr-2 rounded-3xl h-1/5'
                  onClick={handleBack}
                >
                  <ChevronLeft size={32} className="text-primary ml-[-3px]" />
                </button>
                <TextField type='text' placeholder='Pesquise seu endereço' icon='search' color='#0e0e0eeb' />
              </div>
            </div>
            <div className='absolute bottom-0 w-full p-6 right-0 left-0 z-20'>
              <div className='w-full bg-[#0e0e0eeb] rounded-3xl p-6'>
                <small className='text-sm text-zinc-400'>
                  Sua localização
                </small>
                <div className='py-2 flex'>
                  <MapPin />
                  <span className='ml-2'>
                    R. Imac. Conceição, 1154-1262 - Rebouças
                  </span>
                </div>
                <button
                  className='bg-primary text-white p-4 w-full mt-2 rounded-xl hover:bg-primary-600 transition-all'
                  onClick={handleLocation}
                >
                  Adicionar localização
                </button>
              </div>
            </div>
          </div>
      }
    </>
  )
}