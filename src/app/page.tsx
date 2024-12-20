import { PreferencesForm } from '../components/preferences-form';
import { StudyPlanDisplay } from '../components/study-plan-display';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Dev Study Challenge Generator</h1>
        <PreferencesForm />
        <StudyPlanDisplay />
      </div>
    </main>
  );
}

