import React from 'react'
import GlobalContextProvider from './GlobalContext'
import Props from './Props'
import UseGlobalContext from './UseGlobalContext'

const Main = () => {
    return (
        <>
              <Props text={"hello"} user={"Kishor"}>
              </Props>

              <GlobalContextProvider>
                  <UseGlobalContext/>
              </GlobalContextProvider>
        </>
    )
}

export default Main
