import React from 'react';

import GlobalContext from './GlobalContext'; 

function Provider({children}) {

  const context = {
    
  }

  return(
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider;