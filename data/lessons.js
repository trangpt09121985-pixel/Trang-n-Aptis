/* Bài học tổng hợp từ tài liệu ôn tập của học viên (buổi 1, 2, 5, 6; mẹo Speaking; miêu tả tranh;
   9 places; 4 câu chuyện Part 4; forms; letters; mẹo nâng điểm viết; 10 easy suggestions).
   Câu có class "ex" sẽ có nút 🔊 để nghe phát âm mẫu. */
window.LESSONS = [
/* ================= SPEAKING ================= */
{ id: "sp-overview", skill: "speaking", icon: "🗺️", title: "Tổng quan Speaking & cách chấm",
  html: `
<p>Bài thi Speaking làm trên máy tính, khoảng <b>12 phút</b>, gồm 4 phần. Câu trả lời được ghi âm và giám khảo của British Council chấm.</p>
<table class="tbl"><thead><tr><th>Phần</th><th>Nhiệm vụ</th><th>Thời gian nói</th><th>Thang điểm phần</th></tr></thead><tbody>
<tr><td>Part 1</td><td>3 câu hỏi về bản thân</td><td>30 giây/câu</td><td>0–5</td></tr>
<tr><td>Part 2</td><td>Tả 1 bức tranh + 2 câu hỏi liên quan</td><td>45 giây/câu</td><td>0–5</td></tr>
<tr><td>Part 3</td><td>So sánh 2 bức tranh + 2 câu hỏi</td><td>45 giây/câu</td><td>0–5</td></tr>
<tr><td>Part 4</td><td>3 câu hỏi về trải nghiệm & chủ đề trừu tượng, trả lời liền một lượt</td><td>1 phút chuẩn bị, 2 phút nói</td><td>0–6</td></tr>
</tbody></table>
<div class="callout">🎯 <b>Tiêu chí chấm:</b> hoàn thành nhiệm vụ (trả lời đúng câu hỏi), ngữ pháp, từ vựng, phát âm, độ trôi chảy và tính liên kết. Lạc đề hoặc bỏ trống là nguyên nhân mất điểm phổ biến nhất.</div>
<h4>Công thức chung cho mọi câu trả lời</h4>
<div class="formula"><span>Trả lời trực tiếp</span>➜<span>Lý do (It is + adj / It helps me…)</span>➜<span>Thông tin thêm (với ai, khi nào, ở đâu)</span>➜<span>Cảm xúc / ý kiến</span></div>
<p class="ex">I often travel by motorbike. It is fast and convenient. Sometimes I travel by bus because it is affordable. I really like it.</p>` },

{ id: "sp-5tips", skill: "speaking", icon: "🌱", title: "5 mẹo phát triển ý (Part 1 – 4)",
  html: `
<p>Nguồn: <i>Buổi 6 – 5 mẹo phát triển ý</i> và <i>Mẹo trả lời Speaking (1)</i>. Mục tiêu là kéo dài câu trả lời đủ 30–45 giây mà không lạc đề.</p>
<h4>Mẹo 1 – Đưa thêm thông tin: làm gì, với ai, khi nào, ở đâu, tại sao, cảm xúc</h4>
<p class="ex">I often watch TV with my family. It is fun and useful. It helps me relax after a long day at work and reduce stress. Also, it allows me to share happy moments with my family. I really like it.</p>
<h4>Mẹo 2 – Nhân đôi thông tin (nói thêm một hoạt động/lựa chọn thứ hai)</h4>
<p class="ex">In my free time, I play sports. I often play tennis with my wife at the weekend. It's fun and useful. Sometimes I go to a café with my friends. Here we can drink coffee, listen to music and chat about everything.</p>
<h4>Mẹo 3 – Đưa thêm mặt đối lập (However…)</h4>
<p class="ex">I like travelling by car because it is fast and convenient. However, it is not affordable for people with low income. Sometimes I travel by bus because it is cheap. However, it is slow.</p>
<h4>Mẹo 4 – Đưa thêm thông tin cá nhân</h4>
<p class="ex">In my city, people often travel by motorbike because it is fast and convenient. For me, I prefer to travel by bicycle because it is healthy and good for the environment.</p>
<h4>Mẹo 5 – Nêu ý kiến người khác rồi đến ý kiến của mình</h4>
<p class="ex">Most people like to live in big cities because it is exciting and convenient. For me, I prefer to live in the countryside. First, the air is fresh. Second, the people are friendly and kind. Last, the food is delicious and healthy.</p>
<h4>Ví dụ 4 bậc nâng cấp một câu trả lời</h4>
<ol class="steps">
<li><span class="ex">I often travel by motorbike. It is fast and convenient.</span> <em>(miêu tả hành động)</em></li>
<li><span class="ex">Sometimes I travel by bus. It is affordable and suitable for students and people with limited budgets.</span> <em>(nhân đôi thông tin)</em></li>
<li><span class="ex">However, it is slow and not convenient if we do not live near a bus stop.</span> <em>(thông tin đối lập)</em></li>
<li><span class="ex">I live near a bus stop, so it is really convenient for me. It takes me only five minutes to walk there.</span> <em>(thông tin cá nhân)</em></li>
</ol>
<h4>Câu hỏi luyện tập</h4>
<ul class="cols"><li>How often do you go shopping?</li><li>What kind of music do you like?</li><li>What do you do to relax?</li><li>What's your hobby?</li><li>Should we encourage people to use public transport?</li><li>Which do you prefer, travelling by air or by train?</li><li>Do you think smartphones make people less social?</li><li>How do people in your country get daily news?</li><li>Tell me about the last time you went on holiday.</li><li>Tell me about the last time you went shopping for clothes.</li></ul>` },

{ id: "sp-reasons", skill: "speaking", icon: "💡", title: "Ngân hàng lý do & khung câu Part 2",
  html: `
<p>Nguồn: <i>10 easy suggestions – Speaking Part 2</i> và <i>Buổi 2 – Từ vựng theo chủ đề</i>. Khi được hỏi "Why…?" hoặc phải chọn phương án, hãy lấy lý do từ 9 nhóm dưới đây.</p>
<h4>Khung câu dễ dùng</h4>
<ol class="steps">
<li class="ex">I am going to talk about this situation.</li>
<li class="ex">People may have different ideas about this.</li>
<li class="ex">Some people choose the first option. Some others go for the second option.</li>
<li class="ex">For me, I believe that the last option is the best choice.</li>
<li class="ex">There are some reasons why I choose this option.</li>
<li class="ex">The first reason is that I like outdoor activities.</li>
<li class="ex">Another reason is that playing sports brings us a lot of benefits.</li>
<li class="ex">One more reason is that people can share happy moments together.</li>
<li class="ex">In short, playing sports is the most suitable option for me.</li>
</ol>
<div class="grid3">
<div class="mini"><b>❤️ Sở thích</b><p class="ex">I am really interested in travelling.</p><p class="ex">I am passionate about reading books.</p></div>
<div class="mini"><b>😌 Tinh thần</b><p class="ex">It helps me relax after a busy day at work.</p><p class="ex">I can share happy moments with my family and friends.</p></div>
<div class="mini"><b>💪 Sức khỏe</b><p class="ex">It helps me stay healthy and keep fit.</p><p class="ex">It is the best way to prevent health problems.</p></div>
<div class="mini"><b>💰 Chi phí</b><p class="ex">It is affordable and suitable for students or people with low income.</p><p class="ex">It helps me save money for other things.</p></div>
<div class="mini"><b>📚 Kiến thức</b><p class="ex">It helps me update information.</p><p class="ex">I can broaden my knowledge of the world.</p></div>
<div class="mini"><b>🛠️ Kỹ năng</b><p class="ex">It helps me improve many skills, such as communication and language skills.</p><p class="ex">I can become more confident and independent.</p></div>
<div class="mini"><b>⚡ Thuận tiện</b><p class="ex">It is fast and convenient. People can learn anywhere at any time.</p><p class="ex">They don't have to go out.</p></div>
<div class="mini"><b>🌳 Môi trường</b><p class="ex">It can reduce the number of cars and motorbikes on the road.</p><p class="ex">Therefore, it can reduce air pollution and traffic jams.</p></div>
<div class="mini"><b>⭐ Tầm quan trọng</b><p class="ex">It is really important in our lives. It helps me get a good job.</p><p class="ex">I can communicate with people around the world.</p></div>
</div>
<h4>Câu trả lời mẫu</h4>
<p><b>Why do you learn English?</b></p><p class="ex">Because it is very important in our lives. It helps people get good jobs and communicate with people from different countries. Besides, it helps connect people all over the world.</p>
<p><b>Why should we encourage children to do volunteer work?</b></p><p class="ex">Because it is really useful. It helps children improve many skills such as communication or language skills. They know how to manage their time. They can become more confident and independent. Besides, it can make the world better.</p>` },

{ id: "sp-describe", skill: "speaking", icon: "🖼️", title: "Miêu tả tranh Part 2 – checklist 8 bước",
  html: `
<p>Nguồn: <i>Bài 12 – Cách miêu tả tranh P2 (Ms Mai Hien)</i>. Hệ thống chấm AI trong dashboard dùng đúng 8 bước này để kiểm tra câu trả lời của bạn.</p>
<figure class="fig"><img src="assets/img/lessons/describe-park.jpg" alt="Gia đình chơi bóng trong công viên"><figcaption>Từ khóa: family, park, play football, casual, happy, background, weather, feeling</figcaption></figure>
<table class="tbl"><thead><tr><th>#</th><th>Nội dung</th><th>Câu mẫu</th></tr></thead><tbody>
<tr><td>1</td><td>👥 Người: thấy ai, đoán quan hệ</td><td class="ex">In the picture, I can see two people, a man and a child. I guess they are father and son.</td></tr>
<tr><td>2</td><td>📍 Họ ở đâu</td><td class="ex">They are in the park.</td></tr>
<tr><td>3</td><td>🏃 Đang làm gì (be + V-ing), trang phục</td><td class="ex">They are playing football. They are wearing casual clothes.</td></tr>
<tr><td>4</td><td>🙂 Trông họ thế nào</td><td class="ex">They look happy, so I think they are enjoying their time.</td></tr>
<tr><td>5</td><td>🪑 Đồ vật xung quanh</td><td class="ex">Behind them, I can see some trees. On the ground, I can see a ball.</td></tr>
<tr><td>6</td><td>🏞️ Background</td><td class="ex">In the background of the picture, I can see many trees.</td></tr>
<tr><td>7</td><td>☀️ Thời tiết</td><td class="ex">The weather is very nice. It is sunny and perfect for outdoor activities.</td></tr>
<tr><td>8</td><td>💬 Cảm xúc người nói</td><td class="ex">I really like this picture because it reminds me of my childhood.</td></tr>
</tbody></table>
<div class="callout">🧩 Mẫu cảm xúc hay dùng: <i>because it shows the happiness of a family · because it shows love between father and son · because it reminds me of my friends</i>.</div>
<h4>Bài mẫu hoàn chỉnh</h4>
<p class="ex">In the picture, I can see some people. I think they are a family. They are in the park. They are playing football together. They are wearing casual clothes and they look happy, so I think they are enjoying their time. Around them, I can see many trees. The weather is very nice. It is sunny and perfect for outdoor activities. I really like this picture because it reminds me of my father. When I was small, I usually played football with him.</p>` },

{ id: "sp-compare", skill: "speaking", icon: "🔀", title: "So sánh 2 tranh Part 3 & khung 'Both…'",
  html: `
<p>Nguồn: <i>Part 3 Speaking</i>, <i>Part 3 practice</i>, <i>Mẹo trả lời Speaking Part 3</i>.</p>
<h4>Câu 1 – Tả hai bức tranh</h4>
<div class="formula"><span>The two pictures show people (V-ing) in different places.</span>➜<span>In the first picture, I can see… They are… They look…</span>➜<span>In the second picture, I can see…</span></div>
<p class="ex">The two pictures show people playing music in different places. In the first picture, I can see a family. They are playing the piano together at home. They look happy. In the second picture, I can see two people in a live concert. They are performing on the stage.</p>
<h4>Câu 2–3 – Câu hỏi lựa chọn/so sánh: khung "Both… For me…"</h4>
<div class="callout">🧩 <b>Both places (activities, kinds of food…) have different attractions, depending on people's interests. Some people like… because… For me, I prefer… because…</b></div>
<p><b>Where do you like to eat? At home or in a restaurant?</b></p>
<p class="ex">Both places have different attractions, depending on people's preferences and budgets. Most people like to eat in a restaurant because the food is delicious. For me, I prefer to eat at home because it is healthy and affordable. It helps me improve my health and save money.</p>
<p><b>Some people prefer living in a small community while others prefer a big city. What are your thoughts?</b></p>
<p class="ex">Both places have different attractions, depending on people's preferences. Most people like to live in a small community because the air is fresh and the people are friendly. For me, I prefer to live in a big city because it is convenient and I can find a good job.</p>
<h4>Câu hỏi quan điểm (Should…? Do you agree…?)</h4>
<p class="ex">People may have different ideas about this. Some people think that… In my opinion, … There are some reasons for this. First, … Second, …</p>` },

{ id: "sp-places", skill: "speaking", icon: "📍", title: "Từ vựng 9 địa điểm hay gặp",
  html: `
<p>Nguồn: <i>9 places – Từ vựng chủ đề hay xuất hiện trong Aptis Speaking (đặc biệt Part 3)</i>.</p>
<div class="grid3">
<div class="mini"><b>🏝️ Quê hương / địa danh nổi tiếng</b><p class="ex">It's Halong Bay, in Quang Ninh, about 100 kilometres from Hanoi. It is stunning and famous. Here we can swim in the sea, eat seafood and climb the mountain.</p></div>
<div class="mini"><b>🌾 Nông thôn</b><p class="ex">I like to live in the countryside because it is quiet and peaceful. The air is fresh and good for my health. However, it is boring.</p></div>
<div class="mini"><b>🏙️ Thành phố</b><p class="ex">A big city is exciting and convenient. I can get a good job and enjoy good healthcare and education. However, it is noisy and polluted.</p></div>
<div class="mini"><b>🏖️ Biển</b><p class="ex">I love to swim in the sea and eat seafood. Besides, I like sunbathing and walking along the beach.</p></div>
<div class="mini"><b>⛰️ Núi</b><p class="ex">It is quiet and peaceful. I love to climb the mountain and explore nature with green trees and many kinds of flowers.</p></div>
<div class="mini"><b>🏠 Trong nhà</b><p class="ex">I like to work indoors because it is quiet, so I can focus on my work. Working outdoors depends on the weather.</p></div>
<div class="mini"><b>🌤️ Ngoài trời</b><p class="ex">I can enjoy fresh air. Besides, I can meet people, so I can improve my communication skills.</p></div>
<div class="mini"><b>🏢 Văn phòng</b><p class="ex">An office is quiet, so I can focus on my work. I feel more comfortable.</p></div>
<div class="mini"><b>🏭 Nhà máy / xưởng</b><p class="ex">A factory is noisy and polluted. The work is physically demanding; people have to stand for long hours.</p></div>
</div>` },

{ id: "sp-part4", skill: "speaking", icon: "📖", title: "Part 4: kể chuyện quá khứ & 4 câu chuyện 'đa năng'",
  html: `
<p>Nguồn: <i>Buổi 5 – Miêu tả cảm xúc</i> và <i>4 câu chuyện Aptis Part 4</i>. Part 4 có 1 phút chuẩn bị, nói 2 phút liền cho cả 3 câu hỏi. <b>Không miêu tả tranh</b> ở Part 4.</p>
<h4>Dàn ý 2 phút</h4>
<div class="formula"><span>Q1 – Kể chuyện (quá khứ đơn): khi nào, ở đâu, với ai, chuyện gì</span>➜<span>Q2 – Cảm xúc: At first… but then… When… I felt…</span>➜<span>Q3 – Ý kiến chung: I think… because… For example…</span>➜<span>Kết: Although this happened a long time ago, everything is still in my mind.</span></div>
<h4>Từ vựng cảm xúc</h4>
<p class="tags"><span>happy</span><span>excited</span><span>delighted</span><span>relaxed</span><span>on cloud nine</span><span>upset</span><span>worried</span><span>nervous</span><span>scared</span><span>disappointed</span><span>stressed</span><span>proud of</span><span>relieved</span><span>thrilled</span><span>surprised</span><span>grateful</span></p>
<h4>Lý do cho cảm xúc</h4>
<ul class="cols"><li class="ex">because I had never been there before</li><li class="ex">because it was beyond my expectation</li><li class="ex">because I hadn't seen her for a long time</li><li class="ex">because I had been waiting for a long time</li><li class="ex">because I had tried my best</li><li class="ex">because the landscape was so beautiful</li></ul>
<p class="ex">At first, I felt really nervous because I had never spoken in front of many people. But after a few minutes, I felt better. When I finished my talk, everyone applauded. I felt so happy and proud of myself because I had tried my best. Although this happened a long time ago, everything is still in my mind and I will never forget it.</p>
<h4>4 câu chuyện "đa năng" – học 1 chuyện, dùng cho nhiều đề</h4>
<details open><summary>Câu chuyện 1: Ngày tôi đi thi Aptis</summary><p class="ex">Last year, I wanted to change myself, so I decided to take the Aptis test. Before the test, I was very busy and often in a hurry. The test was difficult, but I tried my best. Every day, I practised speaking with AI. On the test day, I went to Hanoi to take the test. I didn't know the way, so I asked a man. One week later, I got good news: I passed the exam! I felt happy and proud of myself because I had tried my best.</p><p class="tags"><span>wanted to change yourself</span><span>was very busy</span><span>was in a hurry</span><span>faced a difficult challenge</span><span>tried hard to achieve something</span><span>used technology to solve a problem</span><span>asked a question</span><span>completed a task</span><span>received good news</span></p></details>
<details><summary>Câu chuyện 2: Thăm bà</summary><p class="ex">Last month, I visited my grandma. I was so excited because I hadn't seen her for a long time. On the way, a man ran into me and hit me, so I had to call the police. On that day, I wore a special dress that my grandma gave me on my birthday last year. It was valuable because it was expensive and meaningful.</p><p class="tags"><span>someone helped you</span><span>had something valuable</span><span>met an impolite person</span><span>did something you didn't want to</span><span>received a gift</span><span>wore an important outfit</span><span>visited someone</span></p></details>
<details><summary>Câu chuyện 3: Một ngày đặc biệt</summary><p class="ex">Last weekend, I visited a museum. I saw an impressive painting there. At the gift shop, I couldn't buy the book I wanted because it was too expensive. Later, I watched a memorable sports event on TV – it was an extreme sport, rock climbing. I met new people, including a friendly foreigner from England. We talked about books and travel. That evening, I read an interesting book she gave me. It was a wonderful and memorable day.</p><p class="tags"><span>saw an impressive work of art</span><span>couldn't buy what you wanted</span><span>attended a memorable sports event</span><span>watched an extreme sport</span><span>met new people</span><span>talked to a foreigner</span><span>read an interesting book</span></p></details>
<details><summary>Câu chuyện 4: Chuyến đi Đà Nẵng</summary><p class="ex">Last summer, I visited an amusement park in Da Nang with my family. It was very big, with green trees and many swimming pools. My husband taught me how to swim. I was very excited because I had never been there. In the evening, I used the internet to send all my photos to my mother by email. It was amazing.</p><p class="tags"><span>was surrounded by nature</span><span>visited a new place</span><span>visited an amusement park</span><span>learned a new skill</span><span>used the Internet</span></p></details>` },

{ id: "sp-p2-phrases", skill: "speaking", icon: "🧩", title: "Mẫu câu tả tranh Part 2 theo nhóm",
  html: `
<p>Nguồn: <i>Speaking Part 2 – Sp P2 picture (Ms Mai Hien)</i> và <i>speaking P2 thực hành</i>. Học thuộc 1–2 câu mỗi nhóm là đủ để tả mọi bức tranh trong 45 giây.</p>
<div class="grid2">
<div class="mini"><b>👥 Tả người (ai, tuổi, quan hệ)</b><p class="ex">In the picture, I can see some people. They are about 20 years old. I think they are friends.</p><p class="ex">In the picture, I can see two people, a man and a woman. They are about 40 years old. I think they are a couple.</p><p class="ex">In the picture, I can see a girl. She is about 20 years old. She looks young and beautiful.</p></div>
<div class="mini"><b>🏃 Hành động + nơi chốn</b><p class="ex">They are relaxing on the beach.</p><p class="ex">They are playing sports in the park.</p><p class="ex">They are sitting at the table and talking.</p><p class="ex">They are having a meeting.</p></div>
<div class="mini"><b>👕 Trang phục</b><p class="ex">They are wearing casual clothes.</p><p class="ex">They are wearing formal clothes.</p><p class="ex">He is wearing a T-shirt and a pair of jeans.</p><p class="ex">They are wearing uniforms.</p></div>
<div class="mini"><b>🙂 Cảm xúc người trong tranh</b><p class="ex">They look excited.</p><p class="ex">He looks happy.</p><p class="ex">She looks focused.</p></div>
<div class="mini"><b>🪑 Đồ vật xung quanh</b><p class="ex">On the table, I can see some food and drink.</p><p class="ex">On the wall, I can see some pictures.</p><p class="ex">Behind them, I can see some plants and decorations.</p><p class="ex">Around them, I can see many trees.</p></div>
<div class="mini"><b>☀️ Thời tiết</b><p class="ex">The weather is very nice. It is sunny and perfect for outdoor activities.</p><p class="ex">The weather is very hot. The sun is shining.</p><p class="ex">The weather is very cold because I can see a lot of snow and the people are wearing warm clothes.</p></div>
<div class="mini"><b>🏞️ Background</b><p class="ex">In the background of the picture, I can see many people.</p><p class="ex">In the background of the picture, I can see mountains and trees.</p><p class="ex">In the background of the picture, I can see some buildings.</p></div>
<div class="mini"><b>💬 Cảm xúc của người nói</b><p class="ex">I like this picture because it reminds me of my childhood. When I was small, I liked playing games with my friends.</p><p class="ex">I like this picture because it reminds me of my friends. We often go out together.</p></div>
</div>
<h4>Bài mẫu từ “Sp P12 practice” (Test 1)</h4>
<figure class="fig"><img src="assets/img/real/mh1.jpg" alt="Đồng nghiệp họp trong văn phòng"></figure>
<p class="ex">In the picture, I can see some people. They are about 40. I think they are co-workers. They are having a meeting in an office. Some of them are sitting at a table. Some of them are standing. They are wearing formal clothes. They look happy. On the table, I can see some laptops. Behind them, I can see a whiteboard. I like this picture because they look professional.</p>` },

{ id: "sp-p3-formula", skill: "speaking", icon: "🏝️", title: "Công thức trả lời Part 3 (địa điểm)",
  html: `
<p>Nguồn: <i>Part 3 – công thức trả lời</i>. Dạng đề so sánh 2 địa điểm rất hay gặp.</p>
<div class="grid2"><figure class="fig"><img src="assets/img/lessons/p3-island.jpg" alt="Hòn đảo"><figcaption>Tranh 1: hòn đảo</figcaption></figure><figure class="fig"><img src="assets/img/lessons/p3-snow.jpg" alt="Phố tuyết"><figcaption>Tranh 2: con phố có tuyết</figcaption></figure></div>
<h4>Câu 1 – Tell me what you see in the two pictures</h4>
<p class="ex">The two pictures show different places. In the first picture, I can see an island. It is beautiful and quiet. There are some buildings surrounded by many trees. The water is clear and the sky is blue. The weather is very nice. It is sunny. In the second picture, I can see a street and buildings. There are two cars parking on the street. The weather is very cold because I can see a lot of snow on the ground.</p>
<p class="tags"><span>beautiful</span><span>quiet</span><span>peaceful</span><span>exciting</span><span>busy</span><span>convenient</span><span>expensive</span><span>noisy</span><span>crowded</span><span>air / weather / people / food / cost of living</span></p>
<h4>Câu 2 – Where do you prefer to live? / What are the attractions (benefits, differences) of these places?</h4>
<p class="ex">Both places have different attractions, depending on people's interests, budgets and situations. Some people like to live in a big city because it is convenient. For me, I prefer to live on the island because it is stunning and peaceful. The air is fresh. The people are friendly and kind. The food is delicious, healthy and cheap.</p>
<h4>Câu 3 – People like to live in different places. What do you think?</h4>
<p class="ex">People may have different ideas about this. For me, I strongly agree with the idea. People like to live in different places because it is convenient for them. Besides, they have different interests, budgets and situations. For example, young people like to live in big cities because they can find good jobs. Old people like to live in the countryside because it is quiet and good for their health.</p>` },
/* ================= WRITING ================= */
{ id: "wr-overview", skill: "writing", icon: "🗺️", title: "Tổng quan Writing & thang điểm",
  html: `
<p>Bài Writing dài <b>50 phút</b>, 4 phần cùng một chủ đề câu lạc bộ (club). Thời gian dưới đây là khuyến nghị.</p>
<table class="tbl"><thead><tr><th>Phần</th><th>Nhiệm vụ</th><th>Độ dài</th><th>Thời gian</th><th>Thang</th></tr></thead><tbody>
<tr><td>Part 1</td><td>Trả lời 5 tin nhắn ngắn</td><td>1–5 từ/câu</td><td>3 phút</td><td>0–3</td></tr>
<tr><td>Part 2</td><td>Điền form thông tin</td><td>20–30 từ</td><td>7 phút</td><td>0–5</td></tr>
<tr><td>Part 3</td><td>Trả lời 3 câu hỏi trong phòng chat</td><td>30–40 từ/câu</td><td>10 phút</td><td>0–5</td></tr>
<tr><td>Part 4</td><td>Email thân mật cho bạn + email trang trọng cho quản lý</td><td>~50 từ + 120–150 từ</td><td>30 phút</td><td>0–6</td></tr>
</tbody></table>
<div class="callout">⚠️ Viết thiếu số từ, viết quá dài nhiều lỗi, dùng chữ viết tắt kiểu tin nhắn (u, r, gonna…) và lạc đề đều bị trừ điểm. Luôn chừa 1–2 phút đọc lại bài.</div>` },

{ id: "wr-p123", skill: "writing", icon: "✍️", title: "Part 1 – 3: mẫu câu nhanh & 'chống cháy'",
  html: `
<h4>Part 1 (1–5 từ) – trả lời ngắn, đúng trọng tâm</h4>
<table class="tbl"><tbody>
<tr><td>What's the weather like today?</td><td class="ex">Sunny and warm.</td></tr>
<tr><td>How did you come here?</td><td class="ex">By car.</td></tr>
<tr><td>What are you wearing today?</td><td class="ex">A T-shirt and jeans.</td></tr>
<tr><td>What did you do last night?</td><td class="ex">I watched TV.</td></tr>
<tr><td>What is your job?</td><td class="ex">I am a teacher.</td></tr>
</tbody></table>
<h4>Part 2 (20–30 từ) – công thức: Trả lời + lý do + thông tin thêm</h4>
<p><b>Why do you want to join the club?</b></p>
<p class="ex">I want to join the club because I love gardening and I want to meet people who have the same hobby. I can also learn many useful things.</p>
<p><b>When and where do you usually listen to music?</b></p>
<p class="ex">I usually listen to music in my room in the evening. Sometimes I listen to music in a café near my house at the weekend. It is relaxing.</p>
<h4>Part 3 (30–40 từ) – mở đầu thân thiện + ý kiến + lý do</h4>
<ul><li class="ex">Hi. It's nice to talk to you.</li><li class="ex">Thank you for your interesting question.</li><li class="ex">Oh, I like your question.</li><li class="ex">I strongly agree with the idea that… because…</li><li class="ex">I think you should… Besides, you can…</li></ul>
<div class="callout">🧯 <b>Chống cháy</b> (khi bí ý tưởng – chỉ dùng khi thực sự không nghĩ ra): <span class="ex">To be honest, I have no idea about this. I think I need more time to think about the question, and I will get back to you later.</span></div>` },

{ id: "wr-p4", skill: "writing", icon: "📧", title: "Part 4: khung email thân mật & trang trọng (3 dạng đề)",
  html: `
<p>Nguồn: <i>Writing P4 – Forms</i>, <i>Informal, Formal letters</i>, <i>5 writing tests</i>.</p>
<div class="grid2">
<div class="mini"><b>📨 Email cho bạn (~50 từ)</b><pre class="tpl">Hi Jane,
It's me, Mary. How's it going? Did you hear about [thông tin trong đề]? I was so [excited/sad] to hear that. I think we should [gợi ý]. What do you think? Let's talk about it over coffee.
See you soon,
Mary</pre></div>
<div class="mini"><b>🏛️ Email cho quản lý (120–150 từ)</b><pre class="tpl">Dear Manager,
My name is Mary. I have been an active member of the club for 6 months. I am writing this email to share my opinions about the [plan/event/problem] mentioned in the recent email from our club.
As stated in the email, [thông tin trong đề]. I was truly delighted to hear the news because I believe this plan will be very useful for both our club and the community.
To make this plan more successful, I would like to share a few ideas. First, [ý 1 + lý do]. Second, [ý 2 + lý do].
I hope my ideas will be useful for our club. Thank you for your consideration. I look forward to hearing your thoughts.
Best regards,
Mary</pre></div></div>
<h4>3 dạng đề thường gặp</h4>
<table class="tbl"><thead><tr><th>Dạng</th><th>Câu cảm xúc</th><th>Câu chuyển ý</th></tr></thead><tbody>
<tr><td>🎉 Sự kiện / kế hoạch / thay đổi</td><td class="ex">I was truly delighted to hear the news.</td><td class="ex">To make this plan more successful, I would like to share a few ideas.</td></tr>
<tr><td>⚠️ Vấn đề cần giải quyết</td><td class="ex">I was really disappointed to hear the news because this problem can badly affect club members.</td><td class="ex">To address the problem, I would like to share a few ideas.</td></tr>
<tr><td>⚖️ Chọn 1 trong 2 phương án</td><td class="ex">I was a little sad to hear the news, and I think most members share my feelings.</td><td class="ex">Among the two options, I believe that the first option is the better choice because…</td></tr>
</tbody></table>
<h4>10 gợi ý "dùng cho mọi đề"</h4>
<ol class="steps">
<li class="ex">We should have a face-to-face or an online meeting for members to express their ideas directly. It is fast and easy to carry out.</li>
<li class="ex">We should ask for help from an expert who has experience to deal with this.</li>
<li class="ex">We should have a talk show and invite a famous author to talk about the benefits of reading books.</li>
<li class="ex">We should educate people about the importance of protecting the environment. It is the most effective in the long term.</li>
<li class="ex">We should ask for help from the local government and organisations.</li>
<li class="ex">We should work with local schools to introduce the club to young people.</li>
<li class="ex">We should promote the event on social networking sites such as Facebook because it can reach more people.</li>
<li class="ex">We should offer free tickets for local people. It is practical and easy to carry out.</li>
<li class="ex">We should not change anything because it can cause a lot of inconvenience and may discourage members.</li>
<li class="ex">We should set clear rules about these behaviours. It is the most effective in the long term.</li>
</ol>
<h4>Mẫu câu đề xuất (thay cho "I think we should" lặp lại)</h4>
<p class="tags"><span>It is a good idea for us to…</span><span>It is better for us to…</span><span>It is advisable for us to…</span><span>I suggest + V-ing…</span><span>I highly recommend…</span></p>` },

{ id: "wr-upgrade", skill: "writing", icon: "🚀", title: "Mẹo nâng điểm viết: nâng cấp câu đơn",
  html: `
<p>Nguồn: <i>Mẹo nâng điểm viết (Ms Mai Hien)</i>. Ý tưởng: giữ ý đơn giản nhưng dùng mệnh đề quan hệ, liên từ và từ vựng chính xác hơn.</p>
<table class="tbl"><thead><tr><th>Câu cơ bản</th><th>Câu nâng cấp</th></tr></thead><tbody>
<tr><td>I like English.</td><td class="ex">I am really interested in English, which is the most popular language in the world.</td></tr>
<tr><td>I like English.</td><td class="ex">I am really interested in English although it is challenging to learn.</td></tr>
<tr><td>I travel by bus because it is cheap so I can save money. It is suitable for poor students.</td><td class="ex">I often travel by bus because it is affordable. Therefore, I can save transportation costs for other things such as healthcare or education. It is suitable for people with limited budgets.</td></tr>
<tr><td>Online learning is good for students.</td><td class="ex">Online learning is beneficial for students who are busy or have limited budgets.</td></tr>
<tr><td>I really like to go to Halong Bay.</td><td class="ex">I love visiting Halong Bay, which is one of the most popular travel destinations in Vietnam.</td></tr>
</tbody></table>` },

/* ================= GRAMMAR & VOCAB ================= */
{ id: "gv-adj", skill: "core", icon: "🎨", title: "Buổi 1 – Tính từ & cấu trúc S + be + adj",
  html: `
<p>Hai vị trí của tính từ: <b>S + be + adj</b> (She is beautiful) và <b>adj + N</b> (She is a beautiful girl).</p>
<div class="grid3">
<div class="mini"><b>😊 Người</b><p class="tags"><span>friendly</span><span>kind</span><span>hard-working</span><span>honest – thật thà</span><span>reliable – đáng tin cậy</span><span>hospitable – hiếu khách</span><span>humorous – hài hước</span></p></div>
<div class="mini"><b>🏞️ Nơi chốn</b><p class="tags"><span>quiet</span><span>peaceful – yên bình</span><span>famous</span><span>stunning</span><span>popular</span><span>crowded – đông đúc</span><span>noisy</span><span>polluted – ô nhiễm</span></p></div>
<div class="mini"><b>🍜 Đồ ăn</b><p class="tags"><span>delicious</span><span>tasty</span><span>healthy</span><span>fresh</span><span>cheap</span><span>affordable – vừa túi tiền</span></p></div>
<div class="mini"><b>🚌 Phương tiện</b><p class="tags"><span>fast</span><span>safe</span><span>convenient</span><span>comfortable</span><span>economical</span></p></div>
<div class="mini"><b>💡 Ý tưởng / giải pháp</b><p class="tags"><span>practical – thực tế</span><span>feasible – khả thi</span><span>effective</span><span>meaningful</span><span>useful</span><span>beneficial</span></p></div>
<div class="mini"><b>⭐ Mức độ quan trọng</b><p class="tags"><span>important</span><span>necessary</span><span>essential</span><span>harmful to – có hại</span><span>good for</span></p></div>
</div>
<p class="ex">Halong Bay is a popular destination. The people are hospitable and kind. The food is delicious, healthy and cheap.</p>
<p class="ex">I don't like living in a big city because it is expensive, crowded, noisy and polluted. It is not good for our health.</p>
<div id="adj-exercise"></div>` },

{ id: "gv-relative", skill: "core", icon: "🔗", title: "Mệnh đề quan hệ (who / which / where) – nâng điểm Writing & Speaking",
  html: `
<p>Nguồn: <i>Relative clauses (Ms Mai Hien)</i>. Mệnh đề quan hệ giúp gộp hai câu đơn thành một câu phức – tiêu chí “range of grammar” khi chấm Writing và Speaking.</p>
<table class="tbl"><thead><tr><th>Đại từ</th><th>Dùng cho</th><th>Câu cơ bản → câu nâng cấp</th></tr></thead><tbody>
<tr><td><b>who</b></td><td>người</td><td><span class="ex">We should invite an artist who is famous.</span><br>→ <span class="ex">It is advisable for us to invite a famous artist who is really interested in this project.</span></td></tr>
<tr><td><b>who</b></td><td>người</td><td><span class="ex">She is a beautiful girl who comes from England.</span><br>→ <span class="ex">She is a gorgeous girl who has long hair and black eyes.</span></td></tr>
<tr><td><b>which</b></td><td>vật, sự việc</td><td><span class="ex">I like the photo which is on the wall.</span><br>→ <span class="ex">I really like the photo which was taken two months ago.</span></td></tr>
<tr><td><b>, which</b></td><td>bổ sung thông tin (có dấu phẩy)</td><td><span class="ex">We should promote the event on Facebook, which is popular.</span><br>→ <span class="ex">I suggest promoting the event on social networking sites, especially Facebook, which is the most popular with people of all ages.</span></td></tr>
<tr><td><b>which</b></td><td>nơi chốn (như vật)</td><td><span class="ex">Halong Bay is a famous place which is beautiful.</span><br>→ <span class="ex">Halong Bay is a well-known travel destination which attracts millions of people to come here on holiday.</span></td></tr>
<tr><td><b>where</b></td><td>nơi chốn (= in which)</td><td><span class="ex">I love my hometown which is peaceful.</span><br>→ <span class="ex">I really love my hometown, where I was born and grew up with my beloved people.</span></td></tr>
<tr><td><b>, which</b></td><td>thay cho cả mệnh đề trước</td><td><span class="ex">I won the first prize, which surprised everyone.</span></td></tr>
</tbody></table>
<div class="callout">✍️ Mẹo dùng trong email Part 4: <i>We should invite Mr David, <b>who</b> won the first prize this year.</i> · <i>We can post photos on Facebook, <b>which</b> can reach more people.</i></div>
<div id="rel-quiz"></div>` },
{ id: "gv-topics", skill: "core", icon: "🧠", title: "Buổi 2 – Từ vựng theo 9 chủ đề",
  html: `
<table class="tbl"><thead><tr><th>Chủ đề</th><th>Cụm từ</th><th>Câu mẫu</th></tr></thead><tbody>
<tr><td>😌 Tinh thần</td><td>relax after a long day at work; reduce stress; share happy moments; forget all the worries</td><td class="ex">Travelling allows me to forget all the worries and troubles.</td></tr>
<tr><td>💪 Sức khỏe</td><td>stay active; keep fit; burn calories; prevent / cause health problems (obesity, heart disease, eye strain)</td><td class="ex">Fast food is harmful to our health. It can cause problems such as obesity or heart disease.</td></tr>
<tr><td>💰 Chi phí</td><td>save money for other important things; waste money on; people with limited budgets</td><td class="ex">Travelling by bus is affordable. It is suitable for students or people with limited budgets.</td></tr>
<tr><td>📚 Kiến thức</td><td>improve knowledge; broaden my mind; update information; provide valuable lessons</td><td class="ex">Reading books helps me broaden my mind and update information about the world.</td></tr>
<tr><td>🛠️ Kỹ năng</td><td>communication / leadership / language skills; manage time; become more independent</td><td class="ex">Volunteer work helps young people develop communication skills and become more confident.</td></tr>
<tr><td>⚡ Thuận tiện</td><td>can stay at home; don't have to go out; anywhere at any time</td><td class="ex">Online shopping is convenient. I can buy things anywhere at any time.</td></tr>
<tr><td>📍 Nơi chốn</td><td>one of the most popular travel destinations; cool all year round</td><td class="ex">Dalat is one of the most popular travel destinations in Vietnam. It is cool all year round.</td></tr>
<tr><td>🎤 Người</td><td>strong and sweet voice; kind-hearted; I really admire her</td><td class="ex">My Tam has a strong and sweet voice. She is friendly and kind-hearted. I really admire her.</td></tr>
<tr><td>🎾 Sở thích</td><td>In my free time, I like…; It is fun and useful</td><td class="ex">In my free time, I like playing sports. It allows me to stay healthy and keep fit.</td></tr>
</tbody></table>` },

{ id: "gv-feelings", skill: "core", icon: "😊", title: "Buổi 5 – Tính từ cảm xúc -ed / -ing",
  html: `
<div class="grid2">
<div class="mini"><b>-ed: cảm xúc của NGƯỜI</b><p class="ex">I felt tired and stressed.</p><p class="ex">I am interested in the story.</p></div>
<div class="mini"><b>-ing: tính chất của SỰ VIỆC gây ra cảm xúc</b><p class="ex">The exam was tiring and stressful.</p><p class="ex">The story is interesting.</p></div></div>
<p class="tags"><span>tired – tiring</span><span>excited – exciting</span><span>surprised – surprising</span><span>disappointed – disappointing</span><span>relaxed – relaxing</span><span>stressed – stressful</span><span>bored – boring</span><span>interested – interesting</span></p>
<div class="callout">⚠️ Lỗi rất hay gặp khi nói: <b>"I am boring"</b> (tôi là người nhàm chán) thay vì <b>"I am bored"</b> (tôi thấy chán). Hệ thống chấm Speaking trong dashboard sẽ cảnh báo lỗi này.</div>
<div id="eding-quiz"></div>` }
];

/* Bài luyện tính từ – Buổi 1 Ex1 (đáp án gợi ý, có nhiều đáp án đúng) */
window.ADJ_EXERCISE = [
 { s: "I love living in the countryside because it is ___ . The air is ___ . The people are ___ and ___ .", a: "quiet / fresh / friendly / kind" },
 { s: "My favourite movie is Tom and Jerry. It is very ___ . It is about a cat and a mouse.", a: "funny / interesting" },
 { s: "I love eating seafood. It is ___ and ___ , although it is quite ___ .", a: "delicious / healthy / expensive" },
 { s: "Travelling by car is ___ and ___ , while travelling by public transport is really ___ . It is ___ for students or people with low income.", a: "fast / convenient / affordable (economical) / suitable" },
 { s: "In my free time, I often play sports. It is ___ and ___ . It helps me relax after work and stay active.", a: "fun / good for my health (healthy)" },
 { s: "Halong Bay is one of the most ___ travel destinations in Vietnam. The landscapes are ___ .", a: "popular / stunning (beautiful)" },
 { s: "Online learning is becoming more and more ___ . First, it is really ___ ; students can stay at home and learn. Second, it is ___ as online courses are often cheap.", a: "popular / convenient / affordable" }
];
window.EDING_QUIZ = [
 { q: "I was so ___ when I heard the news.", options: ["excited", "exciting"], answer: 0, ex: "Chủ ngữ 'I' là người cảm nhận cảm xúc → excited." },
 { q: "The football match was really ___ .", options: ["exciting", "excited"], answer: 0, ex: "Trận đấu là sự việc GÂY RA cảm xúc → exciting." },
 { q: "After the long exam, I felt ___ .", options: ["tired", "tiring"], answer: 0, ex: "felt + tính từ chỉ cảm giác của người → tired." },
 { q: "Listening to music is ___ .", options: ["relaxing", "relaxed"], answer: 0, ex: "Việc nghe nhạc mang lại sự thư giãn → relaxing." },
 { q: "He is ___ in history books.", options: ["interested", "interesting"], answer: 0, ex: "be interested in = quan tâm, thích (cảm xúc của người)." },
 { q: "The result was ___ . We expected more.", options: ["disappointing", "disappointed"], answer: 0, ex: "Kết quả là sự việc gây thất vọng → disappointing." }
];
window.REL_QUIZ = [
 { q: "We should invite an expert ___ has a lot of experience.", options: ["who", "which", "where"], answer: 0, ex: "Thay cho người (an expert) → who." },
 { q: "I really like the photo ___ was taken last summer.", options: ["which", "who", "where"], answer: 0, ex: "Thay cho vật (the photo) → which." },
 { q: "Hoi An is the town ___ I spent my childhood.", options: ["where", "which", "who"], answer: 0, ex: "Nơi chốn + mệnh đề đầy đủ (I spent…) → where." },
 { q: "We can promote the event on Facebook, ___ is popular with young people.", options: ["which", "that", "who"], answer: 0, ex: "Mệnh đề không xác định (sau dấu phẩy) không dùng that → which." },
 { q: "My mother, ___ is a teacher, always supports me.", options: ["who", "which", "whose"], answer: 0, ex: "Người + mệnh đề bổ sung có dấu phẩy → who." },
 { q: "I passed the exam, ___ made my parents very proud.", options: ["which", "who", "that"], answer: 0, ex: "', which' thay cho cả mệnh đề trước (việc tôi thi đỗ)." }
];
