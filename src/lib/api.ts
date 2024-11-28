// lib/api.ts
const URL = process.env.NEXT_PUBLIC_GLOBAL_API_URL;

export async function sendDeleteCode(phoneNumber: string): Promise<boolean> {
  try {
    const response = await fetch(`${URL}/students/delete/${phoneNumber}`, { method: 'POST' });
    return response.ok;
  } catch {
    return false;
  }
}

export async function deleteStudent(phoneNumber: string, code: string): Promise<boolean> {
  try {
    const response = await fetch(`${URL}/students/delete/${phoneNumber}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    return response.ok;
  } catch {
    return false;
  }
}




// lib/api.ts

// interface Student {
//   id: string;
//   name: string;
//   phoneNumber: string;
// }

// export async function fetchStudents(): Promise<Student[]> {
//   const response = await fetch('/api/students/all');
//   return response.ok ? await response.json() : [];
// }

// export async function sendDeleteCode(phoneNumber: string): Promise<boolean> {
//   const response = await fetch(`/api/students/delete/${phoneNumber}`, { method: 'POST' });
//   return response.ok;
// }

// export async function deleteStudent(phoneNumber: string, code: string): Promise<boolean> {
//   const response = await fetch(`/api/students/delete/${phoneNumber}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ code }),
//   });
//   return response.ok;
// }
