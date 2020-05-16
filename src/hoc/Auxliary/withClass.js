// Instead component, withClass return's function
// This wrapper provides option for JS code 
// Good experience for analylics/testing/supporting

// Requare to provide a copy of the props for the WrappedComponent
// Because of our wrapper(div) lose all props that were related 
// to the WrapperComponent


import React from 'react'

const withClass = (WrapperComponent, classes) => {
    return props => {
        return(
            <div className={classes}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default withClass