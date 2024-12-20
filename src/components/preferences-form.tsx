'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { UserPreferences } from '@/types/challenge';

export function PreferencesForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<UserPreferences>();

  const onSubmit = async (data: UserPreferences) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to generate plan');
      
      const plan = await response.json();
      // Handle the generated plan (e.g., through global state or props)
      console.log('Generated plan:', plan);
    } catch (error) {
      console.error('Error generating plan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Difficulty Level</label>
        <select {...register('difficulty')} className="w-full p-2 border rounded focus:ring focus:ring-blue-300">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Focus Area</label>
        <select {...register('focus')} className="w-full p-2 border rounded focus:ring focus:ring-blue-300">
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="all">All</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Duration (days)</label>
        <input
          type="number"
          {...register('duration')}
          min="1"
          max="90"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:opacity-50 transition duration-300"
      >
        {isLoading ? 'Generating...' : 'Generate Study Plan'}
      </button>
    </form>
  );
}

