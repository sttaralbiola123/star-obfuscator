import { useEffect, useState } from 'react';

interface InputSectionProps {
  value: string;
  onChange: (value: string) => void;
  onObfuscate: () => void;
  isLoading: boolean;
}

export default function InputSection({
  value,
  onChange,
  onObfuscate,
  isLoading,
}: InputSectionProps) {
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    setCharacterCount(value.length);
  }, [value]);

  return (
    <div className="animate-fadeInUp w-full">
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-neon-purple p-6 rounded-lg shadow-2xl">
        <label className="block text-white font-semibold mb-3">
          LUA CODE INPUT
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste your Lua code here..."
          className="w-full h-48 md:h-64 bg-black/60 border border-neon-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 resize-none transition-all duration-300"
        />
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-400 text-sm">
            Characters: <span className="text-neon-cyan">{characterCount}</span>
          </span>
        </div>
        <button
          onClick={onObfuscate}
          disabled={!value.trim() || isLoading}
          className={`w-full mt-4 py-3 font-bold rounded-lg transition-all duration-300 ${
            value.trim() && !isLoading
              ? 'bg-neon-purple hover:bg-purple-600 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 cursor-pointer animate-pulse'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Obfuscating...
            </span>
          ) : (
            'OBFUSCATE'
          )}
        </button>
      </div>
    </div>
  );
}
