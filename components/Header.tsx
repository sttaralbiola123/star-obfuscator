import { Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="animate-slideDown mb-12 text-center">
      <div className="flex justify-center mb-4">
        <Star
          size={64}
          className="text-neon-purple animate-glow"
          fill="currentColor"
        />
      </div>
      <h1 className="text-5xl font-bold text-white mb-2 animate-glow">
        Star Obfuscator
      </h1>
      <p className="text-neon-cyan text-lg font-semibold">
        5-Layer Lua Protection
      </p>
    </header>
  );
}
