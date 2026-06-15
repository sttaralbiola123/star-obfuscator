import { Copy, Download, RotateCcw, Zap } from 'lucide-react';

interface ResultSectionProps {
  code: string;
  originalSize: number;
  obfuscatedSize: number;
  ratio: number;
  onCopy: () => void;
  onDownload: () => void;
  onAgain: () => void;
}

export default function ResultSection({
  code,
  originalSize,
  obfuscatedSize,
  ratio,
  onCopy,
  onDownload,
  onAgain,
}: ResultSectionProps) {
  return (
    <div className="animate-fadeInUp w-full mt-8">
      <div className="bg-gradient-to-b from-red-900/20 to-transparent border border-neon-red p-6 rounded-lg shadow-2xl">
        <div className="flex items-center gap-2 mb-3">
          <Zap size={20} className="text-neon-red" />
          <label className="text-white font-semibold">
            OBFUSCATED CODE (ROBLOX READY)
          </label>
        </div>
        <textarea
          value={code}
          readOnly
          className="w-full h-48 md:h-64 bg-black/60 border border-neon-red rounded-lg px-4 py-3 text-white text-xs md:text-sm resize-none focus:outline-none cursor-text selection:bg-neon-red/50 font-mono"
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
          <div className="bg-black/40 border border-neon-cyan/30 rounded px-3 py-2">
            <p className="text-gray-400 text-xs">Original Size</p>
            <p className="text-neon-cyan font-bold">{originalSize} B</p>
          </div>
          <div className="bg-black/40 border border-neon-red/30 rounded px-3 py-2">
            <p className="text-gray-400 text-xs">Obfuscated</p>
            <p className="text-neon-red font-bold">{obfuscatedSize} B</p>
          </div>
          <div className="bg-black/40 border border-neon-purple/30 rounded px-3 py-2">
            <p className="text-gray-400 text-xs">Size Ratio</p>
            <p className="text-neon-purple font-bold">{ratio}x</p>
          </div>
        </div>

        {/* 5-Layer Protection Info */}
        <div className="mt-4 bg-black/40 border border-neon-purple/30 rounded p-3">
          <p className="text-xs text-gray-400 mb-2">✓ 5-Layer Protection Applied:</p>
          <ul className="text-xs text-neon-purple space-y-1">
            <li>• Function Renaming</li>
            <li>• Variable Obfuscation</li>
            <li>• HEX String Encoding</li>
            <li>• XOR Encryption</li>
            <li>• Base64 Encoding</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={onCopy}
            className="flex-1 bg-neon-purple hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Copy size={20} />
            <span>COPY</span>
          </button>
          <button
            onClick={onDownload}
            className="flex-1 bg-neon-red hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Download size={20} />
            <span>DOWNLOAD</span>
          </button>
          <button
            onClick={onAgain}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            <span>AGAIN</span>
          </button>
        </div>
      </div>
    </div>
  );
}
