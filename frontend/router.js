// ========================================================================
import React from 'react'
import { useRoutes } from 'react-router-dom'

import GuestBook_jiwon from './guestBook-components/guestBook_jiwon';
import GuestBook_list from './guestBook-components/guestBook_list';

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <GuestBook_list />,
      children: [
        {
          path: "jiwon",
          element: <GuestBook_jiwon />
        }
      ]
    }
  ])
}

export default Router
// ========================================================================