import React, { ComponentPropsWithoutRef } from 'react'
type TVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
type TButton = ComponentPropsWithoutRef<"button"> & {
    variant?: TVariant
}
function Button({children ,variant,style , className,...rest} : TButton) {
  return (
    <button {...rest} className={className} style={{...style,...checkeVariant(variant)}} 
    >
      {children}
    </button>
  )
}

export default Button;
function checkeVariant(variant? : TVariant){
return (variant === 'primary') ? 
{backgroundColor : '#3a83f7' , color: '#fff'} :
(variant === 'secondary') ?
{backgroundColor : 'gray' , color: '#fff'} :
(variant === 'danger') ?
{backgroundColor : 'red' , color: '#fff'} :
(variant === 'warning') ?
{backgroundColor : '#d97000' , color: '#fff'} :
(variant === 'success') ?
{backgroundColor : 'green' , color: '#fff'} :
{backgroundColor : 'pink' , color: '#fff'} 
}