# GitHub Pages 圖片遺失問題解決方案

## 🔍 問題原因

GitHub Pages 在處理包含中文字元和特殊字元的檔案路徑時可能會出現問題，導致圖片無法正確載入。

## ✅ 已解決

**所有圖片已移到根目錄**：所有 Works 圖片已重新命名並移到專案根目錄（如 `inlife_01.jpg`, `cover01.png` 等），避免資料夾路徑問題。

## ✅ 解決方案

### 方案一：確保所有檔案都已推送到 GitHub（最常見問題）

1. **檢查檔案是否在 Git 中**
   ```bash
   git status
   ```

2. **確認所有圖片檔案都已加入**
   ```bash
   # 檢查所有圖片檔案是否被追蹤
   git ls-files | grep -E "\.(jpg|png|JPG|PNG)$"
   
   # 檢查 profile.JPG 是否被追蹤
   git ls-files | grep profile
   
   # 檢查封面圖片
   git ls-files | grep cover
   ```

3. **如果檔案沒有被追蹤，加入並推送**
   ```bash
   # 加入所有圖片檔案
   git add *.jpg *.png *.JPG *.PNG
   git add profile.JPG
   
   # 提交
   git commit -m "Add all image files"
   
   # 推送到 GitHub
   git push
   ```

### 方案二：檢查檔案大小限制

GitHub 對單一檔案有 100MB 的限制。如果圖片太大，需要壓縮：

```bash
# 檢查檔案大小
ls -lh Works/**/*.jpg Works/**/*.png profile.JPG
```

如果檔案太大，建議使用圖片壓縮工具（如 TinyPNG）壓縮後再上傳。

### 方案三：URL 編碼問題（中文字元）

GitHub Pages 需要正確的 URL 編碼。檢查瀏覽器開發者工具：

1. 打開網站
2. 按 F12 開啟開發者工具
3. 切換到 "Network" 標籤
4. 重新載入頁面
5. 查看哪些圖片請求失敗（紅色）
6. 檢查失敗的 URL 是否正確編碼

### 方案四：檢查檔案名稱和路徑

確保：
- 檔案名稱沒有特殊字元（除了 `-` 和 `_`）
- 路徑中沒有多餘的空格
- 檔案副檔名正確（.jpg, .png, .JPG 等）

## 🛠️ 快速修復步驟

### ⚠️ 最重要：確認所有檔案都已推送到 GitHub

**這是導致圖片遺失最常見的原因！**

### 步驟 1：確認所有檔案都在 Git 中

```bash
# 在專案根目錄執行
git add .
git status  # 確認所有檔案都在暫存區
```

### 步驟 2：檢查 .gitignore

確認 `.gitignore` 沒有忽略圖片檔案：

```bash
# 檢查 .gitignore 內容
cat .gitignore

# 如果 Works/ 或 *.jpg, *.png 被忽略，需要移除這些規則
```

### 步驟 3：強制加入所有檔案

```bash
# 強制加入所有檔案（包括被 .gitignore 忽略的）
git add -f Works/
git add -f profile.JPG

# 提交
git commit -m "Force add all image files"

# 推送
git push
```

### 步驟 4：驗證檔案已上傳

1. 前往 GitHub 倉庫頁面
2. 檢查 `Works/` 資料夾是否存在
3. 檢查每個子資料夾中的圖片檔案
4. 檢查 `profile.JPG` 是否存在

### 步驟 5：清除瀏覽器快取

有時候是瀏覽器快取問題：

1. 按 `Ctrl + Shift + R`（Windows）或 `Cmd + Shift + R`（Mac）強制重新載入
2. 或清除瀏覽器快取後重新載入

## 🔧 進階修復：使用 URL 編碼

如果問題持續，可以在 JavaScript 中對路徑進行編碼。但通常不需要，因為現代瀏覽器會自動處理。

## 📝 檢查清單

- [ ] 所有圖片檔案都已推送到 GitHub
- [ ] `.gitignore` 沒有忽略圖片檔案
- [ ] 檔案大小沒有超過 100MB
- [ ] 檔案路徑使用相對路徑（已確認 ✓）
- [ ] 瀏覽器開發者工具中沒有 404 錯誤
- [ ] 已清除瀏覽器快取

## 🔍 檢查圖片是否正確載入

### 方法一：使用檢查腳本

1. 打開你的 GitHub Pages 網站
2. 按 `F12` 開啟開發者工具
3. 切換到 "Console" 標籤
4. 複製並執行 `check-images.js` 中的程式碼
5. 查看哪些圖片載入失敗

### 方法二：手動檢查

1. 打開網站
2. 按 `F12` 開啟開發者工具
3. 切換到 "Network" 標籤
4. 重新載入頁面
5. 篩選 "Img" 類型
6. 查看哪些圖片請求返回 404 或失敗

## 🆘 如果問題仍然存在

1. **檢查 GitHub 倉庫中的實際檔案結構**
   - 前往 GitHub 倉庫
   - 點擊進入 `Works/` 資料夾
   - 確認所有圖片檔案都存在

2. **檢查實際的 URL**
   - 在瀏覽器中右鍵點擊遺失的圖片
   - 選擇 "檢查" 或 "Inspect"
   - 查看 `src` 屬性的實際值
   - 手動訪問該 URL 看是否能載入

3. **使用 GitHub 的 Raw 連結測試**
   - 在 GitHub 倉庫中找到圖片檔案
   - 點擊檔案，然後點擊 "Raw" 按鈕
   - 複製 Raw URL
   - 在瀏覽器中測試是否能訪問

4. **檢查檔案權限**
   - 確認倉庫是 Public（GitHub Pages 免費版需要）

## 💡 預防措施

1. **使用英文檔名**（如果可能）
   - 將資料夾名稱改為英文
   - 將檔案名稱改為英文

2. **統一檔案格式**
   - 統一使用小寫副檔名（.jpg 而不是 .JPG）

3. **定期檢查**
   - 每次推送後檢查網站是否正常
   - 使用瀏覽器開發者工具檢查資源載入情況
