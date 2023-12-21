interface ButtonProps {
  text: string
  action?: () => void
  top?: boolean
  large?: boolean
}

const Button = ({ text, action, top, large }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`relative z-30 inline-flex items-center justify-center w-auto overflow-hidden font-semibold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white 
      ${top && 'mt-3.5'}
      ${large ? 'px-8 py-3' : 'px-5 py-2.5'}
      `}
    >
      <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
      <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
      {text}
    </button>
  )
}

export default Button
