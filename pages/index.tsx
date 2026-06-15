import { useState, useCallback } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import ResultSection from '@/components/ResultSection';
import Toast from '@/components/Toast';
import { obfuscateCode } from '@/lib/obfuscation';
import { downloadFile, generateFilename } from '@/lib/download';
import { copyToClipboard } from '@/lib/clipboard';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function Home() {
  const [inputCode, setInputCode] = useState('');
  const [obfuscatedCode, setObfuscatedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    originalSize: 0,
    obfuscatedSize: 0,
    ratio: 0,
  });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [executorInfo, setExecutorInfo] = useState('');

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleObfuscate = useCallback(async () => {
    if (!inputCode.trim()) {
      addToast('Enter code to obfuscate', 'error');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const result = obfuscateCode(inputCode);
      setObfuscatedCode(result.code);
      setStats({
        originalSize: result.originalSize,
        obfuscatedSize: result.obfuscatedSize,
        ratio: result.ratio,
      });
      setExecutorInfo('Compatible with: Delta • Gyrocopter • Synapse X • Script-Ware');
      addToast('✓ Code obfuscated! Works with all Roblox executors', 'success');
    } catch (error) {
      console.error('Obfuscation error:', error);
      addToast('Failed to obfuscate code', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [inputCode]);

  const handleCopy = useCallback(async () => {
    try {
      const success = await copyToClipboard(obfuscatedCode);
      if (success) {
        addToast('✓ Copied to clipboard!', 'success');
      } else {
        addToast('Failed to copy, try manual select', 'error');
      }
    } catch (error) {
      console.error('Copy error:', error);
      addToast('Failed to copy, try manual select', 'error');
    }
  }, [obfuscatedCode]);

  const handleDownload = useCallback(() => {
    try {
      const filename = generateFilename();
      downloadFile(obfuscatedCode, filename);
      addToast('✓ Downloaded!', 'success');
    } catch (error) {
      console.error('Download error:', error);
      addToast('Failed to download', 'error');
    }
  }, [obfuscatedCode]);

  const handleObfuscateAgain = useCallback(() => {
    setInputCode('');
    setObfuscatedCode('');
    setStats({
      originalSize: 0,
      obfuscatedSize: 0,
      ratio: 0,
    });
    setExecutorInfo('');
  }, []);

  return (
    <>
      <Head>
        <title>Star Obfuscator - Roblox Script Protection</title>
        <meta
          name="description"
          content="Star Obfuscator - Premium 5-Layer Lua Obfuscation for Roblox Executors (Delta, Gyrocopter, Synapse X, Script-Ware)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Roblox, obfuscator, Lua, script, Delta, Gyrocopter, Synapse X" />
        <meta property="og:title" content="Star Obfuscator" />
        <meta property="og:description" content="Premium Roblox Lua Script Obfuscator" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Header />

          {/* Executor Compatibility Badge */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-900/30 to-red-900/30 border border-neon-cyan rounded-full px-6 py-2">
              <p className="text-neon-cyan text-sm font-semibold">
                🔥 Works with: Delta • Gyrocopter • Synapse X • Script-Ware
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <InputSection
              value={inputCode}
              onChange={setInputCode}
              onObfuscate={handleObfuscate}
              isLoading={isLoading}
            />

            {obfuscatedCode && (
              <>
                {executorInfo && (
                  <div className="text-center text-neon-cyan text-sm font-semibold animate-fadeInUp">
                    ✓ {executorInfo}
                  </div>
                )}
                <ResultSection
                  code={obfuscatedCode}
                  originalSize={stats.originalSize}
                  obfuscatedSize={stats.obfuscatedSize}
                  ratio={stats.ratio}
                  onCopy={handleCopy}
                  onDownload={handleDownload}
                  onAgain={handleObfuscateAgain}
                />
              </>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-600 text-sm border-t border-gray-800 pt-8">
            <p>Star Obfuscator • Made by Sttar Albiola</p>
            <p className="mt-2">Secure Lua Protection for Roblox Scripts</p>
          </footer>
        </div>
      </main>

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </>
  );
}
