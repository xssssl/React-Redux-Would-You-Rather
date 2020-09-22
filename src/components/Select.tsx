import React from 'react'

interface SelectOption {
  optionValue: string,
  optionText: string
}

export type SelectOptions = Array<SelectOption>

const Select = (props: any) => {
  const { options, ...rest } = props

  return (
    <select {...rest} >
      {options.map(({optionValue, optionText}: SelectOption) => <option key={optionValue} value={optionValue} disabled={!optionValue}>{optionText}</option>)}
    </select>
  )
}

export default Select