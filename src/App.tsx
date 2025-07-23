import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { PredictionForm } from './components/PredictionForm';
import { ResultPage } from './components/ResultPage';
import './App.css';

type Page = 'landing' | 'form' | 'result';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [formData, setFormData] = useState<any>(null);

  const handleStartPrediction = () => {
    setCurrentPage('form');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleBackToForm = () => {
    setCurrentPage('form');
  };

  const handleResult = (result: any, data: any) => {
    setPredictionResult(result);
    setFormData(data);
    setCurrentPage('result');
  };

  const handleNewPrediction = () => {
    setPredictionResult(null);
    setFormData(null);
    setCurrentPage('form');
  };

  return (
    <div className="App">
      {currentPage === 'landing' && (
        <LandingPage onStartPrediction={handleStartPrediction} />
      )}
      
      {currentPage === 'form' && (
        <PredictionForm 
          onBack={handleBackToLanding}
          onResult={handleResult}
        />
      )}
      
      {currentPage === 'result' && predictionResult && (
        <ResultPage
          result={predictionResult}
          formData={formData}
          onBack={handleBackToForm}
          onNewPrediction={handleNewPrediction}
        />
      )}
    </div>
  );
}

export default App;