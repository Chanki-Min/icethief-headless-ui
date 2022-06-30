import { renderHook } from '@testing-library/react'
import { useState } from 'react'
import { act } from 'react-dom/test-utils'

import useControllableState from './useControllableState'

describe('useControllableState hooks with UNCONTROLLED maner', () => {
  it('will represent initial state', () => {
    const props = {
      defaultValue: 1,
    }
    const { result } = renderHook(() => useControllableState(props))
    expect(result.current[0]).toBe(1)
  })

  it('will change state when call setState function', () => {
    const props = {
      defaultValue: 1,
    }
    const { result } = renderHook(() => useControllableState(props))
    act(() => {
      result.current[1](2)
    })
    expect(result.current[0]).toBe(2)
  })
})

describe('useControllableState hooks with CONTROLLED maner', () => {
  it('will represent initial state', () => {
    const { result } = renderHook(() => {
      const [open, setOpen] = useState(1)
      const [openInner, setOpenInner] = useControllableState({
        onChange: setOpen,
        value: open,
      })

      return {
        innerState: {
          open: openInner,
          setOpen: setOpenInner,
        },
        outerState: {
          open: open,
          setOpen: setOpen,
        },
      }
    })

    expect(result.current.innerState.open).toBe(1)
  })

  it('will change state when call setState function', () => {
    const { result } = renderHook(() => {
      const [open, setOpen] = useState(1)
      const [openInner, setOpenInner] = useControllableState({
        onChange: setOpen,
        value: open,
      })

      return {
        innerState: {
          open: openInner,
          setOpen: setOpenInner,
        },
        outerState: {
          open: open,
          setOpen: setOpen,
        },
      }
    })

    act(() => {
      result.current.innerState.setOpen(2)
    })
    expect(result.current.innerState.open).toBe(2)
    expect(result.current.outerState.open).toBe(2)
  })
})
