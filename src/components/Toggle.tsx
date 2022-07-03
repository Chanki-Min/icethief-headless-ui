import {
  createContext,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
} from 'react'
import useControllableState from '../hooks/useControllableState'

interface ToggleContextProps {
  on: boolean
  setOn: React.Dispatch<React.SetStateAction<boolean>>
  disabled?: boolean
}

const ToggleContext = createContext<ToggleContextProps | undefined>(undefined)

function useToggleContext() {
  const context = useContext(ToggleContext)

  if (typeof context === 'undefined') {
    throw new Error('Toggle context should be accessed in ToogleProvider')
  }
  return context
}

/**
 * Toggle
 */
interface ToggleCompound {
  On: FC<PropsWithChildren>
  Off: FC<PropsWithChildren>
  Button: FC<ButtonProps>
}
interface ToggleProps extends PropsWithChildren {
  defaultToggle?: boolean
  toggle?: boolean
  onToggle?: (toggled: boolean) => void
  disabled?: boolean
}

const Toggle: FC<ToggleProps> & ToggleCompound = (props) => {
  const {
    defaultToggle: defaultToggleProp,
    toggle: toggleProp,
    onToggle: onToggleProp,
    children,
    disabled,
  } = props

  const [toggle = false, setToggle] = useControllableState({
    defaultValue: defaultToggleProp,
    onChange: onToggleProp,
    value: toggleProp,
  })

  return (
    <ToggleContext.Provider
      value={{ on: toggle, disabled: disabled, setOn: setToggle }}
    >
      {children}
    </ToggleContext.Provider>
  )
}
/**
 * Toggle.On
 */
const On: FC<PropsWithChildren> = ({ children }) => {
  const { on } = useToggleContext()
  if (on) {
    return <>{children}</>
  }
  return null
}
/**
 * Toggle.Off
 */
const Off: FC<PropsWithChildren> = ({ children }) => {
  const { on } = useToggleContext()
  if (!on) {
    return <>{children}</>
  }
  return null
}
/**
 * Toggle.Button
 */
interface ButtonProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLButtonElement> {}
const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const { on, setOn, disabled } = useToggleContext()

  const handleClick = () => setOn((b) => !b)

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      data-state={on ? 'on' : 'off'}
      {...rest}
    >
      {children}
    </button>
  )
}

Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button
export default Toggle
/**
 * <Toggle default, on, onChange>
 *      <Toggle.Value>
 *      <Toggle.Trigger>
 */
