import { lazy } from 'react'



export const routes = [   
  { path:"/AllProducts", Component: lazy(() => import('../pages/Allproducts/AllProducts')) },
  { path:"/ManagePayers", Component: lazy(() => import('../pages/e-pay/ManagePayers')) }, 
  { path:"/ProductionServices", Component: lazy(() => import('../pages/e-pay/ProductionServices')) }, 
  { path:"/ManageSalaries", Component: lazy(() => import('../pages/manage-salaries/ManageSalaries')) }, 
  { path:"/Transfers", Component: lazy(() => import('../pages/transfers/Transfers')) }, 
]

export default routes
