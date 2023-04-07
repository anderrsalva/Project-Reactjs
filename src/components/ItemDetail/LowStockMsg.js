import React from 'react'

export const LowStockMsg = ({stock}) => {
    return (
            <p><strong>

                {
                    stock === 1
                        ? `¡Queda sólo 1 unidad!`
                        : `¡Quedan sólo ${stock} unidades!`
                }
            </strong></p>

    )
}


