import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, DollarSign, Briefcase, GraduationCap, Building, BookOpen, Clock, MapPin } from 'lucide-react';

interface ResultPageProps {
  result: any;
  formData: any;
  onBack: () => void;
  onNewPrediction: () => void;
}

export function ResultPage({ result, formData, onBack, onNewPrediction }: ResultPageProps) {
  const formatJobType = (jobType: string) => {
    const jobTypeMap: { [key: string]: string } = {
      'JANITOR': 'Janitor',
      'JUNIOR': 'Junior',
      'SENIOR': 'Senior',
      'MANAGER': 'Manager',
      'VICE_PRES': 'Vice President',
      'CFO': 'CFO',
      'CTO': 'CTO',
      'CEO': 'CEO'
    };
    return jobTypeMap[jobType] || jobType;
  };

  const formatDegree = (degree: string) => {
    const degreeMap: { [key: string]: string } = {
      'NONE': 'None',
      'HIGH_SCHOOL': 'High School',
      'BACHELORS': 'Bachelor\'s',
      'MASTERS': 'Master\'s',
      'DOCTORAL': 'Doctoral'
    };
    return degreeMap[degree] || degree;
  };

  const formatMajor = (major: string) => {
    const majorMap: { [key: string]: string } = {
      'COMPSCI': 'Computer Science',
      'MATH': 'Mathematics',
      'ENGINEERING': 'Engineering',
      'PHYSICS': 'Physics',
      'CHEMISTRY': 'Chemistry',
      'BUSINESS': 'Business',
      'LITERATURE': 'Literature',
      'BIOLOGY': 'Biology'
    };
    return majorMap[major] || major;
  };

  const formatIndustry = (industry: string) => {
    const industryMap: { [key: string]: string } = {
      'TECH': 'Technology',
      'FINANCE': 'Finance',
      'HEALTH': 'Healthcare',
      'EDUCATION': 'Education',
      'AUTO': 'Automotive',
      'OIL': 'Oil & Gas',
      'WEB': 'Web Services'
    };
    return industryMap[industry] || industry;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={onBack}
                className="mr-4 hover:bg-white/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
              <h1 className="text-3xl font-bold text-slate-800">Prediction Result</h1>
            </div>
            <Button
              onClick={onNewPrediction}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              New Prediction
            </Button>
          </div>

          {/* Result Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl animate-in slide-in-from-top duration-500">
              <CardContent className="p-8 text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h2 className="text-2xl font-semibold mb-2 opacity-90">Predicted Salary</h2>
                <div className="text-5xl font-bold mb-2">
                  {result.predicted_salary}
                </div>
                <p className="text-blue-100">Based on your profile and market data</p>
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-in slide-in-from-bottom duration-500 delay-200">
              <CardHeader>
                <CardTitle className="text-slate-800 text-center">Your Profile Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Job Type</p>
                        <p className="font-semibold text-slate-800">{formatJobType(formData.jobType)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-indigo-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Degree</p>
                        <p className="font-semibold text-slate-800">{formatDegree(formData.degree)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <BookOpen className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Major</p>
                        <p className="font-semibold text-slate-800">{formatMajor(formData.major)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <Building className="w-5 h-5 text-purple-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Industry</p>
                        <p className="font-semibold text-slate-800">{formatIndustry(formData.industry)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Experience</p>
                        <p className="font-semibold text-slate-800">{formData.yearsExperience} years</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-600">Distance from City</p>
                        <p className="font-semibold text-slate-800">{formData.milesFromMetropolis} miles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}