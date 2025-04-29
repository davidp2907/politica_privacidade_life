import React, { useState } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';
import { ChevronRight } from 'lucide-react';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  if (showPrivacyPolicy) {
    return <PrivacyPolicy />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 sm:p-8 transition-all hover:shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Lifenergy App</h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo ao Lifenergy App. Antes de continuar, leia nossa política de privacidade para entender como tratamos seus dados.
        </p>
        
        <button
          onClick={togglePrivacyPolicy}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center group"
        >
          <span>Ver Política de Privacidade</span>
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default App;