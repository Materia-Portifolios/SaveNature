import { ChevronLeft } from "react-feather"

interface HeaderPrincipalProps {
  title: string
  handleNavigation: () => void
}

export function HeaderPrincipal({ title, handleNavigation }: HeaderPrincipalProps) {
  return (
    <>
      <div className='bg-pattern h-[180px] bg-no-repeat bg-right opacity-25' />
      <div className='px-5 py-7 z-10 absolute top-0'>
        <button
          className='p-2 bg-buttonMain rounded-2xl'
          onClick={handleNavigation}
        >
          <ChevronLeft color='#DA6317' size={24} />
        </button>
        <div className='py-5 px-1'>
          <span className='font-medium text-2xl'>
            {title}
          </span>
        </div>
      </div>
    </>
  )
}