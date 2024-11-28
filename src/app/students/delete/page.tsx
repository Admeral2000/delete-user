"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import DeleteForm from "@/app/components/DeleteForm";
import { sendDeleteCode, deleteStudent } from "@/lib/api";
import { toast } from "sonner";

export default function DeleteStudentPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Telefon raqamni +XXX (XX) XXX-XX-XX formatiga o'zgartiruvchi funksiya
  const formatPhoneNumber = (value: string) => {
    const onlyNums = value.replace(/\D/g, ""); // Faqat raqamlarni ajratib olish
    if (onlyNums.length <= 3) {
      return `+${onlyNums}`;
    } else if (onlyNums.length <= 5) {
      return `+${onlyNums.slice(0, 3)} (${onlyNums.slice(3)}`;
    } else if (onlyNums.length <= 8) {
      return `+${onlyNums.slice(0, 3)} (${onlyNums.slice(3, 5)}) ${onlyNums.slice(5)}`;
    } else if (onlyNums.length <= 10) {
      return `+${onlyNums.slice(0, 3)} (${onlyNums.slice(3, 5)}) ${onlyNums.slice(5, 8)}-${onlyNums.slice(8)}`;
    } else {
      return `+${onlyNums.slice(0, 3)} (${onlyNums.slice(3, 5)}) ${onlyNums.slice(5, 8)}-${onlyNums.slice(8, 10)}-${onlyNums.slice(10, 12)}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const handleSendCode = async () => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, ""); // Faqat raqamlarni API uchun olish

    const success = await sendDeleteCode(rawPhoneNumber);

    if (success) {
      toast.success("SMS Code Sent", {
        description: `A code has been sent to ${rawPhoneNumber}.`,
      });
      setIsModalOpen(true);
    } else {
      toast.error("Error", {
        description: "Failed to send SMS code. Please try again.",
      });
    }
  };

  const handleDelete = async (smsCode: string) => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, ""); // Faqat raqamlarni API uchun olish

    const success = await deleteStudent(rawPhoneNumber, smsCode);
    if (success) {
      toast.success("Student Deleted", {
        description: `Student with phone number ${rawPhoneNumber} deleted successfully!`,
      });
      setIsModalOpen(false);
    } else {
      toast.error("Error", {
        description: "Invalid SMS code or the code has expired.",
      });
    }
  };

  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center justify-center w-full max-w-xl drop-shadow-2xl bg-white rounded-md p-6">
          <h1 className="max-sm:text-xl max-sm:mb-4 text-2xl font-semibold mb-10">Delete Student</h1>

          <Input
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handleInputChange} // Formatlash uchun yangi handler
              className="mb-4"
          />
          <Button onClick={handleSendCode} className="bg-red-500 hover:bg-red-600 max-sm:mt-6 mt-14">
            Send SMS Code
          </Button>

          {isModalOpen && (
              <DeleteForm
                  phoneNumber={phoneNumber}
                  onDelete={handleDelete}
                  onClose={() => setIsModalOpen(false)}
              />
          )}
        </div>
      </main>
  );
}








// app/students/delete/page.tsx
// "use client";
//
// import React, { useState } from 'react';
// import { Button } from '@/app/components/ui/button';
// import { Input } from '@/app/components/ui/input';
// import DeleteForm from '@/app/components/DeleteForm';
// import { sendDeleteCode, deleteStudent } from '@/lib/api';
// import { toast } from "sonner"
//
// export default function DeleteStudentPage() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//
//   const handleSendCode = async () => {
//     const success = await sendDeleteCode(phoneNumber);
//     if (success) {
//       toast.success("SMS Code Sent",{
//         description: `A code has been sent to ${phoneNumber}.`,
//       });
//       setIsModalOpen(true);
//     } else {
//       toast.error("Error",{
//         description: "Failed to send SMS code. Please try again.",
//       });
//     }
//   };
//
//   const handleDelete = async (smsCode: string) => {
//     const success = await deleteStudent(phoneNumber, smsCode);
//     if (success) {
//       toast.success("Student Deleted",{
//         description: `Student with phone number ${phoneNumber} deleted successfully!`,
//       });
//       setIsModalOpen(false);
//     } else {
//       toast.error("Error",{
//         description: "Invalid SMS code or the code has expired.",
//       });
//     }
//   };
//
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-4">
//
//       <div className='flex flex-col items-center justify-center w-full max-w-xl drop-shadow-2xl bg-white rounded-md p-6'>
//       <h1 className="max-sm:text-xl max-sm:mb-4 text-2xl font-semibold mb-10">Delete Student</h1>
//
//       <Input
//         type="text"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         className="mb-4"
//       />
//       <Button onClick={handleSendCode} className="bg-red-500 hover:bg-red-600 max-sm:mt-6 mt-14">
//         Send SMS Code
//       </Button>
//
//       {isModalOpen && (
//         <DeleteForm phoneNumber={phoneNumber} onDelete={handleDelete} onClose={() => setIsModalOpen(false)} />
//       )}
//       </div>
//     </main>
//   );
// }





