import { NextRequest, NextResponse } from 'next/server';
import FormDataModel from '@/models/FormData';

async function saveFormData(req) {
  const body = await req.json();
  
  try {
    const collection = await getCollection('form_data');
    
    const result = await collection.insertOne(body);
    
    return NextResponse.json({ 
      message: 'Form data saved successfully', 
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Failed to save form data' }, { status: 500 });
  }
}

export async function POST(request) {
  return saveFormData(request);
}
