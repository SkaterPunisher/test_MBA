'use server';

export async function getCourses() {
  const response = await fetch('https://api.moscow.mba/products');
  const data = await response.json();
  return data;
}
