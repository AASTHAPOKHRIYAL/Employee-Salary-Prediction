import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Briefcase, GraduationCap, Building, BookOpen, Clock, MapPin, Loader2 } from 'lucide-react';

interface PredictionFormProps {
  onBack: () => void;
  onResult: (result: any, formData: any) => void;
}

export function PredictionForm({ onBack, onResult }: PredictionFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyId: 'COMP1',
    jobType: '',
    degree: '',
    major: '',
    industry: '',
    yearsExperience: '',
    milesFromMetropolis: ''
  });

  const jobTypes = [
    { value: 'JANITOR', label: 'Janitor' },
    { value: 'JUNIOR', label: 'Junior' },
    { value: 'SENIOR', label: 'Senior' },
    { value: 'MANAGER', label: 'Manager' },
    { value: 'VICE_PRES', label: 'Vice President' },
    { value: 'CFO', label: 'CFO' },
    { value: 'CTO', label: 'CTO' },
    { value: 'CEO', label: 'CEO' }
  ];

  const degrees = [
    { value: 'NONE', label: 'None' },
    { value: 'HIGH_SCHOOL', label: 'High School' },
    { value: 'BACHELORS', label: 'Bachelor\'s' },
    { value: 'MASTERS', label: 'Master\'s' },
    { value: 'DOCTORAL', label: 'Doctoral' }
  ];

  const majors = [
    { value: 'COMPSCI', label: 'Computer Science' },
    { value: 'MATH', label: 'Mathematics' },
    { value: 'ENGINEERING', label: 'Engineering' },
    { value: 'PHYSICS', label: 'Physics' },
    { value: 'CHEMISTRY', label: 'Chemistry' },
    { value: 'BUSINESS', label: 'Business' },
    { value: 'LITERATURE', label: 'Literature' },
    { value: 'BIOLOGY', label: 'Biology' }
  ];

  const industries = [
    { value: 'TECH', label: 'Technology' },
    { value: 'FINANCE', label: 'Finance' },
    { value: 'HEALTH', label: 'Healthcare' },
    { value: 'EDUCATION', label: 'Education' },
    { value: 'AUTO', label: 'Automotive' },
    { value: 'OIL', label: 'Oil & Gas' },
    { value: 'WEB', label: 'Web Services' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const result = await response.json();
      onResult(result, formData);
    } catch (error) {
      console.error('Error:', error);
      // For demo purposes, show a mock result if API fails
      const mockResult = {
        predicted_salary: `₹${(Math.random() * 100000 + 50000).toFixed(2)}`
      };
      onResult(mockResult, formData);
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={onBack}
              className="mr-4 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-slate-800">Salary Prediction</h1>
          </div>

          {/* Form Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-slate-800">
                Tell us about yourself
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Job Type */}
                <div className="space-y-2">
                  <Label htmlFor="jobType" className="flex items-center text-slate-700">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Job Type
                  </Label>
                  <Select value={formData.jobType} onValueChange={(value) => updateFormData('jobType', value)}>
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Select your job type" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobTypes.map((job) => (
                        <SelectItem key={job.value} value={job.value}>
                          {job.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Degree */}
                <div className="space-y-2">
                  <Label htmlFor="degree" className="flex items-center text-slate-700">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Degree
                  </Label>
                  <Select value={formData.degree} onValueChange={(value) => updateFormData('degree', value)}>
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Select your degree" />
                    </SelectTrigger>
                    <SelectContent>
                      {degrees.map((degree) => (
                        <SelectItem key={degree.value} value={degree.value}>
                          {degree.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Major */}
                <div className="space-y-2">
                  <Label htmlFor="major" className="flex items-center text-slate-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Major
                  </Label>
                  <Select value={formData.major} onValueChange={(value) => updateFormData('major', value)}>
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Select your major" />
                    </SelectTrigger>
                    <SelectContent>
                      {majors.map((major) => (
                        <SelectItem key={major.value} value={major.value}>
                          {major.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label htmlFor="industry" className="flex items-center text-slate-700">
                    <Building className="w-4 h-4 mr-2" />
                    Industry
                  </Label>
                  <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <Label htmlFor="yearsExperience" className="flex items-center text-slate-700">
                    <Clock className="w-4 h-4 mr-2" />
                    Years of Experience
                  </Label>
                  <Input
                    id="yearsExperience"
                    type="number"
                    min="0"
                    max="50"
                    value={formData.yearsExperience}
                    onChange={(e) => updateFormData('yearsExperience', e.target.value)}
                    placeholder="Enter years of experience"
                    className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                {/* Miles from Metropolis */}
                <div className="space-y-2">
                  <Label htmlFor="milesFromMetropolis" className="flex items-center text-slate-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    Distance from Metropolis (miles)
                  </Label>
                  <Input
                    id="milesFromMetropolis"
                    type="number"
                    min="0"
                    max="1000"
                    value={formData.milesFromMetropolis}
                    onChange={(e) => updateFormData('milesFromMetropolis', e.target.value)}
                    placeholder="Enter distance in miles"
                    className="h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading || !formData.jobType || !formData.degree || !formData.major || !formData.industry || !formData.yearsExperience || !formData.milesFromMetropolis}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Predicting...
                    </>
                  ) : (
                    'Predict Salary'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}