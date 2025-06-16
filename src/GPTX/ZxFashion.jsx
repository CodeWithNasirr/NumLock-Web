import React from 'react'

function ZxFashion() {
 return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ZX Fashion</h1>
            <p className="text-lg text-gray-600 mb-2">
              Welcome to ZX Fashion, your one-stop destination for trendy clothing and accessories.
            </p>
            <p className="text-md text-gray-500 italic">
              ZX Fashion is proudly managed by Numlock IT Solutions (GPTX).
            </p>
            <p className="text-sm text-gray-400 mt-4">
              For inquiries, contact us at: <a href="mailto:support@numlockitsolutions.co.in" className="text-blue-500 hover:underline">support@numlockitsolutions.co.in</a>
            </p>
          </div>
         
        </div>
      );
}

export default ZxFashion