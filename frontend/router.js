import React from 'react'
import { useRoutes } from 'react-router-dom'

import GuestBook_jiwon from './guestBook-components/guestBook_jiwon';

const Router = () => {
  return useRoutes([
    {
        path: "/",
        element: <GuestBook_jiwon/>
        // children: [
        //     {
        //     }
        // ]
    }
  ])
}

export default Router