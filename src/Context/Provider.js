import React from 'react';

import GlobalContext from './GlobalContext'; 

function Provider({Children}) {

  const context = {
    
  }

  return(
    <GlobalContext.Provider value={ context }>
      {Children}
    </GlobalContext.Provider>
  )
}

export default Provider;