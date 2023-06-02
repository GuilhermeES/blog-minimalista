import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styled/Global.styled'

import {router} from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle/>
        <RouterProvider router={router} />
    </>
)
