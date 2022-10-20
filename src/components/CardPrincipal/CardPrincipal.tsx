
interface CardPrincipalProps {
  label: string,
  imagem: string,
  click?: () => void;
}

export function CardPrincipal({ label, imagem, click }: CardPrincipalProps) {
  return (
    <button className="flex justify-center flex-col w-full h-32 bg-zinc-800 items-center rounded-2xl mb-4" onClick={click}>
      <span className="mb-2 text-zinc-400 text-xs">
        {label}
      </span>
      <img src={imagem} />
    </button>
  )
}