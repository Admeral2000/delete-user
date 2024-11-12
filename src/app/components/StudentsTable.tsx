// // app/components/StudentsTable.tsx
// "use client"
// import React, { useEffect, useState } from 'react';
// import { fetchStudents } from '@/lib/api';

// interface Student {
//   id: string;
//   name: string;
//   phoneNumber: string;
// }

// export default function StudentsTable() {
//   const [students, setStudents] = useState<Student[]>([]);

//   useEffect(() => {
//     async function loadStudents() {
//       const students = await fetchStudents();
//       setStudents(students);
//     }
//     loadStudents();
//   }, []);

//   return (
//     <table className="min-w-full bg-white border border-gray-200">
//       <thead>
//         <tr>
//           <th className="px-4 py-2 border-b">Name</th>
//           <th className="px-4 py-2 border-b">Phone Number</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student) => (
//           <tr key={student.id}>
//             <td className="border px-4 py-2">{student.name}</td>
//             <td className="border px-4 py-2">{student.phoneNumber}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
