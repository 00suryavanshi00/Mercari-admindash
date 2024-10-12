import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Suspense, lazy } from "react"
import Loader from "./components/loader"

const Dashboard = lazy(() => import("./pages/dashboard"))
const Customers = lazy(() => import("./pages/customers"))
const Products = lazy(() => import("./pages/products"))
const Transactions = lazy(() => import("./pages/transactions"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/transaction" element={<Transactions />} />

      </Routes>  
        </Suspense>  
    </Router>
  )
}

export default App
