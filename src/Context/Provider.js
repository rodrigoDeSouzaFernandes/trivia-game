import React, { useState } from 'react';

import GlobalContext from './GlobalContext'; 

function Provider({children}) {

  const [userInfo, setUserInfo] = useState({})

  const context = {
    userInfo,
    setUserInfo,
  }

  return(
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider;