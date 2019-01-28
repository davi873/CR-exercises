import React from 'react'

/**
 * Propaga atributos de um elemento pai para o elemento filho 
 * @param {*} props propiedades do elemento pai
 */
function childrenWithProps(props){
    return React.Children.map(props.children, 
        child => React.cloneElement(child, {...props}))
}

export {childrenWithProps}