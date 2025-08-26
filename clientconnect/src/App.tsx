import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Clientes from './pages/Clientes'
import Interacoes from './pages/Interacoes'
import Tarefas from './pages/Tarefas'
import Pipeline from './pages/Pipeline'
import Relatorios from './pages/Relatorios'
import Configuracoes from './pages/Configuracoes'
import Login from './pages/Login'
import { useCRM } from './lib/store'

type Usuario = {
  id: string
  nome: string
  email: string
  role: 'gerente' | 'vendedor'
}

function PrivateRoutes() {
  const user = useCRM((s) => s.usuario as Usuario | undefined)
  if (!user) return <Navigate to="/login" replace />
  return <Outlet />
}

export default function App() {
  return (
    <Routes>
      {/* Rotas privadas */}
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="interacoes" element={<Interacoes />} />
          <Route path="tarefas" element={<Tarefas />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
      </Route>

      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
