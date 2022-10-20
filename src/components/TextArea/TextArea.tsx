import { InputProps } from "../TextField/TextField"

interface TextAreaProps extends InputProps {
  height?: string
}

export function TextArea({ type, placeholder, icon, model, height }: TextAreaProps) {
  return (
    <textarea
      className="bg-zinc-800 p-4 w-full border-none rounded-xl outline-none focus:bg-zinc-900 transition-all my-2 ring-0 focus:ring-0 resize-none"
      placeholder={placeholder}
      maxLength={3000}
      style={{ height: height }}
      onChange={e => model && model(e.target.value)}
    />
  )
}