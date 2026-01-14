# CV-JS

個人履歷作品集，使用純 HTML、CSS、JavaScript 開發（無框架）。

## 專案結構

```
CV-JS/
├── index.html      # 主頁面
├── styles.css      # 樣式表
├── script.js       # JavaScript 功能
├── profile.JPG     # 個人照片
├── cover01.png     # Works 封面圖片
├── cover02.png     # Works 封面圖片
├── cover03.jpg     # Works 封面圖片
├── cover04.jpg     # Works 封面圖片
├── inlife_*.jpg    # InLife 作品集圖片（11張）
├── koselig_*.jpg   # Koselig 作品集圖片（12張）
├── resort_*.jpg    # 瑞穗作品集圖片（12張）
├── other_*.jpg     # 其他作品圖片（9張）
├── package.json    # 專案配置
└── README.md       # 說明文件
```

## 功能特色

- **About 區塊**：顯示個人基本資訊與照片（左上角）
- **Experience 區塊**：依年份分類的經驗時間軸，hover 年份時顯示黑底白字 popup 詳情
- **Works 區塊**：作品集展示，點擊封面圖片可開啟全螢幕大圖檢視，支援左右箭頭切換圖片
- **Future 區塊**：未來規劃與目標（Long Term、Mid Term、Short Term），hover 項目時顯示黑底白字 popup 詳情
- **橫式布局**：完全依照圖片設計的橫式排版

## 使用方式

### 本地開發

#### 安裝依賴（可選）

如果系統已安裝 yarn：
```bash
yarn install
```

#### 啟動本地伺服器

```bash
# 使用 yarn（推薦）
yarn start

# 或使用 npx serve
npx serve .

# 或使用 Python
python -m http.server 8000
```

啟動後，在瀏覽器開啟 `http://localhost:3000`（或終端顯示的網址）

## 部署到線上（讓網頁可透過網址瀏覽）

### 方法一：GitHub Pages（推薦，完全免費）

1. **將專案推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/你的倉庫名.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 進入 GitHub 倉庫頁面
   - 點擊 Settings → Pages
   - Source 選擇 `main` 分支，資料夾選擇 `/ (root)`
   - 點擊 Save
   - 幾分鐘後，你的網站會在 `https://你的用戶名.github.io/你的倉庫名/` 上線

### 方法二：Netlify（簡單快速，免費）

1. **方式 A：透過 Netlify 網站**
   - 前往 [netlify.com](https://www.netlify.com)
   - 註冊/登入帳號
   - 點擊 "Add new site" → "Deploy manually"
   - 將整個專案資料夾拖放到頁面上
   - 部署完成後會獲得一個網址（如 `https://your-site.netlify.app`）

2. **方式 B：透過 Netlify CLI**
   ```bash
   # 安裝 Netlify CLI
   npm install -g netlify-cli
   
   # 登入
   netlify login
   
   # 部署
   netlify deploy --prod
   ```

### 方法三：Vercel（簡單快速，免費）

1. **方式 A：透過 Vercel 網站**
   - 前往 [vercel.com](https://vercel.com)
   - 註冊/登入帳號（可使用 GitHub 帳號）
   - 點擊 "Add New Project"
   - 匯入你的 GitHub 倉庫或上傳專案資料夾
   - 部署完成後會獲得一個網址（如 `https://your-site.vercel.app`）

2. **方式 B：透過 Vercel CLI**
   ```bash
   # 安裝 Vercel CLI
   npm install -g vercel
   
   # 部署
   vercel --prod
   ```

### 方法四：Surge.sh（簡單快速，免費）

```bash
# 安裝 Surge
npm install -g surge

# 部署（首次需要註冊）
surge

# 之後部署
surge .
```

### 部署注意事項

- 所有圖片和資源檔案都會自動上傳
- 確保所有檔案路徑都是相對路徑（已符合）
- 部署後，任何人都可以透過你提供的網址訪問網站

## Git 管理

初始化 Git 儲存庫（如果尚未初始化）：
```bash
git init
git add .
git commit -m "Initial commit"
```

## 技術棧

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- 無框架依賴

## 設計特色

- 簡約的黑白色調設計
- 橙色 (#ff6b35) 作為強調色
- 響應式設計，支援行動裝置
- 流暢的動畫效果
