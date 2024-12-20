'use client';

import { useState } from 'react';
import type { StudyChallenge } from '@/types/challenge';
import { PDFDownloadButton } from './pdf-download-button';

export function StudyPlanDisplay() {
  const [plan, setPlan] = useState<StudyChallenge | null>(null);

  if (!plan) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">{plan.title}</h2>
        <PDFDownloadButton plan={plan} />
      </div>

      <div className="space-y-6">
        {plan.topics.map((topic, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">{topic.name}</h3>
            <ul className="space-y-2">
              {topic.subtopics.map((subtopic, subIndex) => (
                <li key={subIndex} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={topic.completed}
                    className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                    readOnly
                  />
                  <span>{subtopic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

