// app/components/DeleteForm.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface DeleteFormProps {
  phoneNumber: string;
  onDelete: (smsCode: string) => void;
  onClose: () => void;
}

export default function DeleteForm({ onDelete, onClose }: DeleteFormProps) {
  const [smsCode, setSmsCode] = useState('');
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Enter SMS Code</h2>
        <p className="text-sm text-gray-500 mb-2">
          Time remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
        </p>
        <Input
          type="text"
          placeholder="Enter SMS Code"
          value={smsCode}
          onChange={(e) => setSmsCode(e.target.value)}
          className="mb-4"
        />
        <Button onClick={() => onDelete(smsCode)} className="bg-blue-500 hover:bg-blue-600">
          Confirm Delete
        </Button>
      </div>
    </div>
  );
}


// app/components/DeleteForm.tsx

// import React, { useState, useEffect } from 'react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';

// interface DeleteFormProps {
//   phoneNumber: string;
//   onDelete: (smsCode: string) => void;
//   onClose: () => void;
// }

// export default function DeleteForm({ onDelete, onClose }: DeleteFormProps) {
//   const [smsCode, setSmsCode] = useState('');
//   const [timer, setTimer] = useState(120);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(countdown);
//           onClose();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-lg font-semibold mb-4">Enter SMS Code</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           Time remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
//         </p>
//         <Input
//           type="text"
//           placeholder="Enter SMS Code"
//           value={smsCode}
//           onChange={(e) => setSmsCode(e.target.value)}
//           className="mb-4"
//         />
//         <Button onClick={() => onDelete(smsCode)} className="bg-blue-500 hover:bg-blue-600">
//           Confirm Delete
//         </Button>
//       </div>
//     </div>
//   );
// }
