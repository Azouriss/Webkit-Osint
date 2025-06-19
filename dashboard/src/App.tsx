import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';// exemple

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
