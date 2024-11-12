// app/page.tsx

import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Student Management System</h1>
      <p className="text-lg text-gray-600 mb-4 text-center">
        Manage your students efficiently. You can delete a student by phone number and SMS code verification.
      </p>
      <Link href="/students/delete" className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
        Delete a Student
      </Link>
    </main>
  );
}







// app/page.tsx

// import React from 'react';
// import StudentsTable from './components/StudentsTable';

// export default function HomePage() {
//   return (
//     <main className="flex flex-col items-center p-4">
//       <h1 className="text-2xl font-bold mb-4">Student List</h1>
//       <StudentsTable />
//     </main>
//   );
// }
