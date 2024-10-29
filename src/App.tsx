import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<div>Página Principal</div>} />
        {/* Aquí puedes agregar más rutas según necesites */}
      </Routes>
    </div>
  );
};

export default App; 