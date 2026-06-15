# Star Obfuscator - Roblox Edition

🎮 **Premium Lua Code Obfuscator for Roblox Executors**

Compatible with: **Delta** • **Gyrocopter** • **Synapse X** • **Script-Ware** • **And More!**

## 🌟 Features

### ✨ 5-Layer Obfuscation
1. **Function Renaming** - Rename all functions to random identifiers
2. **Variable Obfuscation** - Obfuscate local variable names
3. **HEX String Encoding** - Encode all strings with HEX values
4. **XOR Encryption** - Military-grade XOR encryption (key-based)
5. **Base64 Encoding** - Safe transmission and storage

### 🔥 Roblox-Specific Features
- ✅ Works with **all major Roblox executors**
- ✅ Automatic `loadstring()` support detection
- ✅ Safe for restricted Roblox environments
- ✅ Error handling and fallbacks
- ✅ Comment removal for reduced file size
- ✅ Optimized for Roblox Lua syntax

### 🎨 Premium Design
- Black background with neon accents
- Purple (#8B00FF), Red (#FF0000), Cyan (#00FFFF)
- Smooth animations and glow effects
- Fully responsive (mobile & desktop)

### ⚡ Easy to Use
- Single-page application
- Copy to clipboard (mobile-friendly)
- Download as `.lua` file with random name
- Character counter
- Size statistics & compression ratio
- Real-time toast notifications

## 🚀 How It Works

### 1. Paste Your Script
```lua
local function attack(target)
  print("Attacking: " .. target)
  -- Your code here
end

attack("enemy")
```

### 2. Click Obfuscate
The system applies all 5 layers of protection:
- Removes comments
- Renames functions and variables
- Encodes strings
- Encrypts the entire code
- Adds automatic decoder

### 3. Copy or Download
- **Copy** to paste into your executor
- **Download** as a `.lua` file
- Works immediately in Delta, Gyrocopter, Synapse X, etc.

### 4. Execute in Roblox
Just paste the obfuscated code into any Roblox executor:
```
Open Executor → Paste Code → Execute
```

## 🎯 Executor Compatibility

### Supported Executors
| Executor | Support | Notes |
|----------|---------|-------|
| Delta | ✅ Full | Works perfectly |
| Gyrocopter | ✅ Full | Works perfectly |
| Synapse X | ✅ Full | Works perfectly |
| Script-Ware | ✅ Full | Works perfectly |
| Oxygen U | ✅ Full | Works perfectly |
| Fluxus | ✅ Full | Works perfectly |

All executors that support `loadstring()` are compatible!

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Runtime**: Node.js v18+

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/sttaralbiola123/star-obfuscator.git
cd star-obfuscator
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Render

### Step-by-Step Deployment

1. **Push to GitHub** (already done ✓)

2. **Go to Render**
   - Visit [render.com](https://render.com)
   - Sign in with GitHub

3. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect `star-obfuscator` repository

4. **Configure Settings**
   - **Name**: `star-obfuscator`
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 18

5. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Your site: `star-obfuscator.onrender.com`

### Deploy to Other Platforms

**Vercel** (Recommended for speed)
```bash
npm i -g vercel
vercel
```

**Netlify**
- Connect GitHub repo
- Build: `npm run build`
- Publish: `.next`

**Railway**
- Connect GitHub
- Deploy automatically

## 📁 Project Structure

```
star-obfuscator/
├── pages/
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # Document wrapper
│   └── index.tsx             # Main page
├── components/
│   ├── Header.tsx            # Header with star
│   ├── InputSection.tsx      # Input area
│   ├── ResultSection.tsx     # Results display
│   └── Toast.tsx             # Notifications
├── lib/
│   ├── obfuscation.ts        # 5-layer engine
│   ├── download.ts           # Download helper
│   └── clipboard.ts          # Clipboard helper
├── styles/
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind config
└── package.json
```

## 🎨 Color Scheme

| Color | Hex | Use |
|-------|-----|-----|
| Background | `#000000` | Main background |
| Purple | `#8B00FF` | Primary buttons |
| Red | `#FF0000` | Secondary actions |
| Cyan | `#00FFFF` | Borders & accents |
| White | `#FFFFFF` | Text |

## 🔐 Security Notes

- **Local Processing**: All obfuscation happens in the browser
- **No Server Storage**: Your code is never stored on servers
- **No Tracking**: No analytics or user tracking
- **Open Source**: Code is transparent and verifiable

## 📊 What Gets Protected

✅ Function names  
✅ Variable names  
✅ String content  
✅ Code structure  
✅ Comments (removed)  
✅ Whitespace (optimized)  

## ⚙️ Obfuscation Levels

All scripts get **maximum protection** (5 layers):

1. **Naming Obfuscation** - Makes code unreadable
2. **String Encoding** - Hides string literals
3. **Encryption** - XOR cipher for data
4. **Compression** - Removes unnecessary content
5. **Base64 Wrap** - Safe transmission format

## 🐛 Troubleshooting

### "Code won't execute in my executor"
- Make sure executor supports `loadstring()`
- Try pasting in executor's console
- Check for network issues

### "Error after obfuscating"
- Try with a simpler script first
- Check script syntax before obfuscating
- Ensure Roblox Lua compatibility

### "File won't download"
- Check browser download settings
- Try copy instead
- Clear browser cache

## 📞 Support

Need help? Check:
- [GitHub Issues](https://github.com/sttaralbiola123/star-obfuscator/issues)
- Visit the website: star-obfuscator.onrender.com

## 📝 License

MIT License - Free for personal and commercial use

## 👨‍💻 Author

**Sttar Albiola**
- GitHub: [@sttaralbiola123](https://github.com/sttaralbiola123)
- Made with ❤️ and ✨ neon magic

---

**Star Obfuscator** - The #1 Choice for Roblox Script Protection 🌟
