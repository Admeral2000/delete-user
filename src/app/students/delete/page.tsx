// app/students/delete/page.tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import DeleteForm from '@/app/components/DeleteForm';
import { sendDeleteCode, deleteStudent } from '@/lib/api';
import { toast } from "sonner"

export default function DeleteStudentPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendCode = async () => {
    const success = await sendDeleteCode(phoneNumber);
    if (success) {
      toast.success("SMS Code Sent",{
        description: `A code has been sent to ${phoneNumber}.`,
      });
      setIsModalOpen(true);
    } else {
      toast.error("Error",{
        description: "Failed to send SMS code. Please try again.",
      });
    }
  };

  const handleDelete = async (smsCode: string) => {
    const success = await deleteStudent(phoneNumber, smsCode);
    if (success) {
      toast.success("Student Deleted",{
        description: `Student with phone number ${phoneNumber} deleted successfully!`,
      });
      setIsModalOpen(false);
    } else {
      toast.error("Error",{
        description: "Invalid SMS code or the code has expired.",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">

      <div className='flex flex-col items-center justify-center w-full max-w-xl drop-shadow-2xl bg-white rounded-md p-6'>
      <h1 className="max-sm:text-xl max-sm:mb-4 text-2xl font-semibold mb-10">Delete Student</h1>

      <Input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleSendCode} className="bg-red-500 hover:bg-red-600 max-sm:mt-6 mt-14">
        Send SMS Code
      </Button>

      {isModalOpen && (
        <DeleteForm phoneNumber={phoneNumber} onDelete={handleDelete} onClose={() => setIsModalOpen(false)} />
      )}
      </div>
    </main>
  );
}





// app/students/delete/page.tsx

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import DeleteForm from '@/components/DeleteForm';
// import { sendDeleteCode, deleteStudent } from '@/lib/api';

// export default function DeleteStudentPage() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSendCode = async () => {
//     const success = await sendDeleteCode(phoneNumber);
//     if (success) {
//       setIsModalOpen(true);
//     } else {
//       alert('Failed to send SMS code.');
//     }
//   };

//   const handleDelete = async (smsCode: string) => {
//     const success = await deleteStudent(phoneNumber, smsCode);
//     if (success) {
//       alert('Student deleted successfully!');
//       setIsModalOpen(false);
//     } else {
//       alert('Invalid SMS code.');
//     }
//   };

//   return (
//     <main className="flex flex-col items-center p-4">
//       <h1 className="text-xl font-semibold mb-4">Delete Student</h1>

//       <Input
//         type="text"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         className="mb-4"
//       />
//       <Button onClick={handleSendCode} className="bg-red-500 hover:bg-red-600">
//         Send SMS Code
//       </Button>

//       {isModalOpen && (
//         <DeleteForm phoneNumber={phoneNumber} onDelete={handleDelete} onClose={() => setIsModalOpen(false)} />
//       )}
//     </main>
//   );
// }
