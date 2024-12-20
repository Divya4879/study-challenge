import { NextResponse } from 'next/server';
import { generateStudyPlan } from '@/lib/gemini';
import { scrapeMDN, scrapeJavaScriptInfo } from '@/lib/brightdata';
import { UserPreferences } from '@/types/challenge';

export async function POST(request: Request) {
  try {
    const preferences: UserPreferences = await request.json();
    
    // Generate initial plan using Gemini
    const plan = await generateStudyPlan(preferences);
    
    // Enrich plan with documentation content
    const mdnContent = await scrapeMDN(preferences.focus);
    const jsInfoContent = await scrapeJavaScriptInfo(preferences.focus);
    
    // Combine and process the content
    const enrichedPlan = {
      ...plan,
      resources: {
        mdn: mdnContent,
        javascriptInfo: jsInfoContent,
      },
    };

    return NextResponse.json(enrichedPlan);
  } catch (error) {
    console.error('Error generating study plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate study plan' },
      { status: 500 }
    );
  }
}

