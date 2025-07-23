import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Briefcase, Calculator } from 'lucide-react';

interface LandingPageProps {
  onStartPrediction: () => void;
}

export function LandingPage({ onStartPrediction }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Card className="relative p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <div className="flex items-center justify-center space-x-4">
                    <TrendingUp className="w-12 h-12 text-blue-600" />
                    <Calculator className="w-10 h-10 text-indigo-500" />
                    <Briefcase className="w-12 h-12 text-slate-600" />
                  </div>
                </Card>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Predict Your Salary
              <span className="block text-blue-600">with Ease</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get accurate salary predictions based on your experience, education, and industry. 
              Our AI-powered tool analyzes market data to provide personalized insights.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Accurate Predictions</h3>
              <p className="text-slate-600 text-sm">Machine learning powered predictions based on real market data</p>
            </Card>
            
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Calculator className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Easy to Use</h3>
              <p className="text-slate-600 text-sm">Simple form with just a few inputs to get your salary estimate</p>
            </Card>
            
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Briefcase className="w-8 h-8 text-slate-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Industry Insights</h3>
              <p className="text-slate-600 text-sm">Tailored predictions across different industries and job roles</p>
            </Card>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={onStartPrediction}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Prediction
          </Button>
        </div>
      </div>
    </div>
  );
}