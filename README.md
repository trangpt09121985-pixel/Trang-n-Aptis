# Aptis Dashboard – Ôn thi chứng chỉ Aptis General

Website tĩnh (HTML/CSS/JavaScript thuần, không cần máy chủ) hỗ trợ **Phạm Thị Thu Trang** ôn thi Aptis General (British Council) theo đủ 5 thành phần: Speaking, Writing, Reading, Listening, Grammar & Vocabulary.

## Nội dung

| Mục | Nội dung |
|---|---|
| 🎤 Speaking | 14 đề hoàn chỉnh (4 phần, 42 hình ảnh) + 4 bộ Part 3 bổ sung + 7 bài học. Mô phỏng phòng thi: máy đọc câu hỏi, đồng hồ 30″/45″/2′ (Part 4 có 1′ chuẩn bị), ghi âm, chuyển giọng nói thành chữ, **chấm điểm AI** theo 5 tiêu chí Aptis, checklist tả tranh 8 bước, phát hiện lỗi ngữ pháp, bài mẫu đọc karaoke. |
| ✍️ Writing | 32 đề có đáp án mẫu (đủ 4 phần), bấm giờ 50 phút, đếm từ, chấm bố cục email thân mật/trang trọng, lưu bài làm tự động. 4 bài học khung câu và email. |
| 📖 Reading | 2 đề hoàn chỉnh (Part 1–4, 29 câu/đề), giải thích tiếng Việt, tô vàng câu bằng chứng trong bài đọc. |
| 🎧 Listening | 2 đề hoàn chỉnh, giọng đọc nam/nữ bằng Text-to-Speech, giới hạn 2 lượt nghe, lời thoại tô vàng câu chứa đáp án; bảng ghi nhớ Part 3 (Man/Woman/Both) theo 15 chủ đề. |
| 🧩 Grammar & Vocab | 2 đề 50 câu (25 ngữ pháp + 25 từ vựng) có giải thích quy tắc; 3 bài học (tính từ, từ vựng 9 chủ đề, cảm xúc -ed/-ing). |
| 💡 Mẹo thi | Tổng hợp mẹo theo từng kỹ năng + liên kết tài liệu chính thức của British Council. |
| 📚 Tài liệu gốc | 40 tài liệu ôn tập (docx/pdf/ảnh) chuyển sang trang web để đọc trực tiếp, chia theo 2 đợt. |
| 🏛️ Ngân hàng đề thật (cập nhật đợt 2) | **Speaking**: 27 câu Part 1, 39 tranh Part 2, 42 cặp tranh Part 3, 45 đề Part 4 (có ảnh, bài mẫu, gợi ý câu chuyện, luyện & chấm AI từng câu). **Reading**: 12 bộ Part 1, 25 bài sắp xếp câu, 13 chủ đề Part 3, 13 chủ đề Part 4. **Listening**: 145 câu Part 1, 12 chủ đề Part 2 và 10 hội thoại Part 3 có bài nghe, 23 chủ đề Part 4; bảng đối chiếu đáp án Part 3 hai nguồn. **Writing**: thêm 7 đề (Beautiful Homes, Gardening, Cinema, English v3–v4, Design, Exercise). Bài học mới: mệnh đề quan hệ, mẫu câu tả tranh, công thức Part 3. |
| 📊 Tổng quan | Tiến độ từng kỹ năng, điểm tốt nhất so với ngưỡng B1/B2, đếm ngược ngày thi, lộ trình 4 tuần. |

Ngưỡng CEFR dùng trong dashboard lấy từ *Aptis Scoring System v2.1* (British Council). Mọi điểm trong dashboard là **điểm ước lượng để luyện tập**, không phải điểm chính thức.

## Cập nhật lên GitHub (đã có repo từ lần trước)

1. Giải nén gói mới, mở repo trên GitHub → **Add file → Upload files**.
2. Kéo thả **toàn bộ nội dung** thư mục `aptis-dashboard` mới (ghi đè file cũ cùng tên) → **Commit changes**. GitHub Pages tự cập nhật sau 1–2 phút.
3. Tiến độ học lưu trong trình duyệt nên **không bị mất** khi cập nhật.

## Đưa lên GitHub Pages lần đầu (khoảng 5 phút)

1. Đăng nhập GitHub → **New repository** → đặt tên, ví dụ `aptis-dashboard` → chọn *Public* (GitHub Pages miễn phí cho repo public) → **Create repository**.
2. Trong repo vừa tạo: **Add file → Upload files** → kéo thả **toàn bộ nội dung** bên trong thư mục `aptis-dashboard` (gồm `index.html`, các thư mục `css`, `js`, `data`, `assets`, `docs`, tệp `.nojekyll`) → **Commit changes**.
   - Nếu dùng Git: `git init && git add . && git commit -m "Aptis dashboard" && git branch -M main && git remote add origin https://github.com/<tài-khoản>/aptis-dashboard.git && git push -u origin main`
3. Vào **Settings → Pages** → mục *Build and deployment*: Source = **Deploy from a branch**, Branch = **main**, thư mục **/ (root)** → **Save**.
4. Sau 1–2 phút, trang chạy tại `https://<tài-khoản>.github.io/aptis-dashboard/`.

Có thể mở thử ngay trên máy bằng cách nhấp đúp `index.html` (mọi chức năng chạy được; riêng ghi âm/nhận dạng giọng nói hoạt động ổn định nhất khi chạy qua `https://` trên GitHub Pages).

## Yêu cầu trình duyệt

- **Nhận dạng giọng nói (Speaking)**: Google Chrome hoặc Microsoft Edge trên máy tính/Android. Safari/Firefox vẫn dùng được bằng cách gõ câu trả lời để chấm.
- **Giọng đọc Listening**: dùng giọng tiếng Anh có sẵn trên thiết bị (Windows/Chrome có "Google UK English", Mac/iPhone có "Daniel", "Serena"…). Chỉnh tốc độ trong **Cài đặt**.
- Lần đầu ghi âm, trình duyệt sẽ hỏi quyền dùng micro – chọn **Cho phép**.

## Chấm điểm AI

- **Mặc định (không cần mạng, miễn phí)**: bộ chấm chạy trên trình duyệt, phân tích bản ghi lời nói/bài viết theo 5 tiêu chí của Aptis (hoàn thành nhiệm vụ, độ dài & trôi chảy, ngữ pháp, từ vựng, liên kết), đối chiếu checklist nội dung từng dạng câu, phát hiện ~15 nhóm lỗi ngữ pháp phổ biến của người Việt và gợi ý sửa.
- **Tuỳ chọn – Claude API**: nhập API key trong **Cài đặt** để hiện thêm nút “✨ Chấm bằng Claude” (nhận xét chi tiết hơn, có bài viết lại). Key chỉ lưu trong trình duyệt. **Tuyệt đối không ghi API key vào mã nguồn khi đẩy lên GitHub.**

## Cấu trúc thư mục

```
aptis-dashboard/
├── index.html            # Ứng dụng một trang (điều hướng bằng #/…)
├── .nojekyll             # Để GitHub Pages phục vụ nguyên trạng
├── css/style.css
├── js/
│   ├── core.js           # Router, lưu tiến độ, Text-to-Speech, tiện ích
│   ├── scorer.js         # Bộ chấm Speaking/Writing + Claude API + ghi âm
│   ├── speaking.js       # Phòng thi Speaking
│   ├── writing.js        # Phòng thi Writing
│   ├── quiz.js           # Reading, Listening, Grammar & Vocab
│   └── pages.js          # Tổng quan, cấu trúc đề, mẹo, tài liệu, cài đặt, bài học
├── data/                 # Ngân hàng đề & bài học (sửa/ thêm đề tại đây)
├── assets/img/           # Hình ảnh đề Speaking và bài học
└── docs/                 # Tài liệu gốc dạng web + PDF
```

### Thêm đề mới

- Speaking: thêm phần tử vào `window.SPEAKING_TESTS` trong `data/speaking-tests.js` (cùng cấu trúc `p1`, `p2`, `p3`, `p4`), đặt ảnh vào `assets/img/speaking/`.
- Writing: thêm vào `window.WRITING_TESTS` trong `data/writing-tests.js`.
- Reading / Listening / Core: theo mẫu trong `data/reading-tests.js`, `data/listening-tests.js`, `data/core-tests.js` (đáp án đúng ghi ở `answer`; thứ tự phương án được xáo trộn tự động khi hiển thị).

## Lưu ý về bản quyền

- Đề Speaking/Writing, bài mẫu và hình ảnh lấy từ tài liệu ôn tập do học viên cung cấp; một số ảnh có nguồn từ các trang ảnh trên Internet (có thể còn watermark). Nếu đặt repo ở chế độ **Public**, hãy cân nhắc quyền sử dụng ảnh/tài liệu, hoặc để repo *Private* (GitHub Pages cho repo private cần gói trả phí).
- Đề Reading, Listening, Grammar & Vocabulary do giáo viên biên soạn mới theo cấu trúc đề thật, không sao chép đề chính thức.
- Bảng ghi nhớ Listening Part 3 là mẹo do học viên sưu tầm, không phải tài liệu chính thức của British Council.
- Ngân hàng “đề thật” được chuyển từ tài liệu tổng hợp của học viên. Bài nghe Listening Part 2–3 trong ngân hàng do giáo viên viết lại theo đáp án để luyện nghe bằng giọng máy, không phải băng ghi âm gốc. Một số câu hỏi tiếng Việt/thiếu câu hỏi đã được dịch hoặc bổ sung (gắn nhãn “GV bổ sung”).

## Nguồn tham khảo chính thức

- British Council – Aptis ESOL General Candidate Guide (2023)
- British Council – Aptis Scoring System v2.1 (ngưỡng điểm CEFR)
- British Council – Prepare for Aptis General; LearnEnglish
