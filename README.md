# CV-JS

個人履歷作品集，使用純 HTML、CSS、JavaScript 開發（無框架）。

#說明
分享個人經歷以及未來規劃
用來練手的vibe coding專案
- 極簡
- 簡約的黑白色調設計
- 橙色作為強調色
- 響應式設計，支援行動裝置

## 專案結構

```
CV-JS/
├── index.html      # 主頁面
├── styles.css      # 樣式表
├── script.js       # JavaScript 功能
├── profile.JPG     # 個人照片
├── package.json    # 專案配置
└── README.md       # 說明文件
```

## 功能特色

- **About 區塊**：顯示個人基本資訊與照片（左上角）
- **Experience 區塊**：依年份分類的經驗時間軸，hover 年份時顯示黑底白字 popup 詳情
- **Future 區塊**：未來規劃與目標（Long Term、Mid Term、Short Term），hover 項目時顯示黑底白字 popup 詳情
- **橫式布局**：完全依照圖片設計的橫式排版

## 使用方式

### 安裝依賴（可選）

如果系統已安裝 yarn：
```bash
yarn install
```

### 啟動專案

使用任何靜態檔案伺服器開啟 `index.html`，例如：

```bash
# 使用 npx serve（需先安裝 Node.js）
npx serve .

# 或使用 Python
python -m http.server 8000

# 或直接使用瀏覽器開啟 index.html
```

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


