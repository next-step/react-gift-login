import { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'
import NavBar from './components/NavBar'

function Login() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <NavBar></NavBar>
            </Layout>
        </ThemeProvider>
    )
}
export default Login