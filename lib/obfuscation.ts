/**
 * 5-Layer Lua Obfuscation Engine - Roblox Executor Compatible
 * Works with: Delta, Gyrocopter, Synapse X, Script-Ware, and other Roblox executors
 * Layers: Function Renaming, ASCII Escape, HEX Escape, XOR Encryption, Variable Obfuscation
 */

interface ObfuscationResult {
  code: string;
  originalSize: number;
  obfuscatedSize: number;
  ratio: number;
}

// Layer 1: Remove comments and whitespace
function cleanCode(code: string): string {
  return code
    .split('\n')
    .map((line) => {
      const commentIdx = line.indexOf('--');
      if (commentIdx !== -1) {
        return line.substring(0, commentIdx);
      }
      return line;
    })
    .filter((line) => line.trim().length > 0)
    .join('\n');
}

// Layer 2: Function Renaming - Safe for Roblox
function renameFunction(code: string): string {
  const functionPattern = /function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
  const functionMap = new Map<string, string>();
  let counter = 0;

  return code.replace(functionPattern, (match, funcName) => {
    if (!functionMap.has(funcName)) {
      functionMap.set(funcName, `_f${counter++}`);
    }
    return `function ${functionMap.get(funcName)} (`;
  });
}

// Layer 3: Variable Name Obfuscation
function obfuscateVariables(code: string): string {
  const varPattern = /local\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
  const varMap = new Map<string, string>();
  let varCounter = 0;

  // First pass: map all variables
  let processed = code.replace(varPattern, (match, varName) => {
    if (!varMap.has(varName) && varName.length < 10) {
      varMap.set(varName, `__v${varCounter++}`);
    }
    return match;
  });

  // Second pass: replace all occurrences
  varMap.forEach((newName, oldName) => {
    const regex = new RegExp(`\\b${oldName}\\b`, 'g');
    processed = processed.replace(regex, newName);
  });

  return processed;
}

// Layer 4: HEX String Encoding - Roblox safe
function hexEncodeStrings(code: string): string {
  const stringPattern = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
  let offset = 0;

  return code.replace(stringPattern, (match) => {
    const str = match.slice(1, -1);
    const quote = match[0];
    const hexEncoded = Array.from(str)
      .map((char) => `\\x${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
      .join('');
    return `${quote}${hexEncoded}${quote}`;
  });
}

// Layer 5: XOR Encryption - Works in all executors
function xorEncrypt(str: string, key: number = 42): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) ^ key);
  }
  return result;
}

// Helper to convert to Base64 for safe transmission
function toBase64(str: string): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  let i = 0;

  while (i < str.length) {
    const a = str.charCodeAt(i++);
    const b = i < str.length ? str.charCodeAt(i++) : 0;
    const c = i < str.length ? str.charCodeAt(i++) : 0;

    const bitmap = (a << 16) | (b << 8) | c;
    result += chars.charAt((bitmap >> 18) & 63);
    result += chars.charAt((bitmap >> 12) & 63);
    if (i - 2 < str.length) result += chars.charAt((bitmap >> 6) & 63);
    if (i - 1 < str.length) result += chars.charAt(bitmap & 63);
  }

  return result;
}

// Generate Roblox-compatible decoder
function generateRobloxDecoder(encodedData: string, encryptionKey: number): string {
  return `local _StarObfuscator = {}
_StarObfuscator.key = ${encryptionKey}
_StarObfuscator.encoded = "${encodedData}"

_StarObfuscator.decode = function(data, key)
  local result = ""
  for i = 1, #data do
    result = result .. string.char(string.byte(data, i) ~ key)
  end
  return result
end

_StarObfuscator.execute = function()
  local decoded = _StarObfuscator.decode(_StarObfuscator.encoded, _StarObfuscator.key)
  if loadstring then
    local success, err = pcall(function()
      loadstring(decoded)()
    end)
    if not success then
      warn("[Star Obfuscator] Execution error: " .. tostring(err))
    end
  else
    warn("[Star Obfuscator] Loadstring not available in this executor")
  end
end

_StarObfuscator.execute()
`;
}

// Main obfuscation function - Roblox optimized
export function obfuscateCode(inputCode: string): ObfuscationResult {
  const header = `--[[ Made by: Sttar Albiola ]]
-- Star Obfuscator - Roblox Compatible
-- Obfuscated by: Sttar
-- Works with: Delta, Gyrocopter, Synapse X, Script-Ware

`;

  const encryptionKey = 42;

  // Step 1: Clean code (remove comments)
  let processed = cleanCode(inputCode);

  // Step 2: Rename functions
  processed = renameFunction(processed);

  // Step 3: Obfuscate variables
  processed = obfuscateVariables(processed);

  // Step 4: Encode strings with HEX
  processed = hexEncodeStrings(processed);

  // Step 5: XOR encrypt the entire code
  const encrypted = xorEncrypt(processed, encryptionKey);

  // Convert to Base64 for safe storage
  const encoded = toBase64(encrypted);

  // Generate the final obfuscated code with decoder
  const decoderCode = generateRobloxDecoder(encoded, encryptionKey);
  const finalCode = header + decoderCode;

  const originalSize = inputCode.length;
  const obfuscatedSize = finalCode.length;
  const ratio = Math.round((obfuscatedSize / originalSize) * 100) / 100;

  return {
    code: finalCode,
    originalSize,
    obfuscatedSize,
    ratio,
  };
}
