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
{ id: "sp-p4-form", skill: "speaking", icon: "🧯", title: "Part 4: khung trả lời, bài chống cháy & 4 câu chuyện vạn năng (bản B1)",
  html: `
<p>Nguồn: <i>Speaking P4 – khung</i>, <i>sp-p4 form chống cháy</i>, <i>Speaking Part 4</i>, <i>Tổng hợp Speaking Part 4</i> (Ms Mai Hien). Part 4: 1 phút chuẩn bị, 2 phút nói liền cho 3 câu hỏi.</p>
<h4>🧱 Khung trả lời (học thuộc)</h4>
<ol class="steps">
<li class="ex">To be honest, I'm so nervous now because this is the most difficult part of the test. However, I will try my best and I hope you can understand what I am saying.</li>
<li class="ex">Regarding the first question, today I am going to talk about a time I …</li>
<li><em>Kể chi tiết: thời gian, làm gì, với ai, ở đâu, như thế nào, cảm xúc.</em></li>
<li class="ex">Turning to the second question, “How did you feel?” I felt …</li>
<li class="ex">Although this happened a long time ago, everything is still in my mind and I will never forget it.</li>
<li class="ex">About the last question, “…” I think …</li></ol>
<div class="callout">💡 Câu mở đầu “To be honest, I'm so nervous…” chỉ dùng khi gặp đề chưa chuẩn bị; nếu thuộc câu chuyện thì vào thẳng “Regarding the first question…”.</div>
<h4>Ví dụ hoàn chỉnh</h4>
<p class="small"><b>Tell me a time you played an extreme sport. / How did you feel? / Only adults are allowed to play extreme sports. What do you think about it?</b></p>
<p class="ex">Regarding the first question, today I am going to share with you about a time I played an extreme sport. Last year, my class went to Halong Bay. Here we swam in the sea and climbed the mountain. It was so high and looked dangerous. But after one hour of trying hard, I reached the top of the mountain. Turning to the second question, “How did you feel?” At first, I felt very nervous because it was my first time. But later on, I felt more confident. About the last question, I think it is a good idea because extreme sports can be dangerous. Adults usually know how to keep safe and make smart choices. Young people should learn and practise before trying extreme sports.</p>
<p class="small"><b>Tell me a time when you got a gift.</b></p>
<p class="ex">Regarding the first question, now I'm going to talk about a time I received a gift. As far as I can remember, it was ten years ago when I was a student. I got a gift from my father on my birthday. It was a MacBook. It was very expensive, about 40 million dong. It was really useful. I could learn online, play games and so on. I felt very happy because it helped me a lot.</p>
<h4>😊 Mẫu câu cảm xúc</h4>
<p class="ex">On that day, I had many different feelings. At first, I felt so nervous because I had never been in this situation before. But after that, I felt so happy and proud of myself because I had tried my best.</p>
<p class="ex">I felt happy. I could relax after a busy day and share happy moments with my family and friends.</p>
<h4>🧯 Bài chống cháy (dành cho mục tiêu B1, chỉ dùng khi bất đắc dĩ)</h4>
<p class="ex">To be honest, I have never been in this situation, so I cannot share about this experience. If possible, I will tell you about a time I tried hard to do something. Ten years ago, I had an important exam. It was very difficult, so I had to study day and night. Sometimes I felt very stressed and tired. But I tried my best and finally I passed the exam. I felt so happy and proud of myself.</p>
<h4>⏳ Ngữ pháp: thì quá khứ đơn</h4>
<table class="tbl"><tbody>
<tr><td><b>to be</b></td><td>I/He/She/It <b>was</b> · They/You/We <b>were</b></td><td class="ex">I was happy. They were at home.</td></tr>
<tr><td><b>Động từ có quy tắc</b></td><td>+ ed: cleaned, visited, cooked</td><td class="ex">I visited my best friend last week.</td></tr>
<tr><td><b>Bất quy tắc</b></td><td>go – went, have – had, feel – felt, take – took, buy – bought, teach – taught, hear – heard, tell – told, say – said</td><td class="ex">I felt excited when I heard the news.</td></tr>
<tr><td><b>Khuyết thiếu</b></td><td>can – could, have to – had to, will – would</td><td class="ex">I could not understand the lesson because it was difficult.</td></tr></tbody></table>
<h4>🗺️ Lập dàn ý nhanh (ví dụ)</h4>
<div class="grid2"><div class="mini"><b>When was the last time you travelled by car?</b><p class="small">Thời gian → làm gì → đi đâu, với ai → trên đường làm gì → mất bao lâu → cảm xúc</p><p class="ex">Last week, I travelled by car. I went to Halong Bay with my family. During the trip, we talked and listened to music. It took us two hours to travel from Hanoi to Halong Bay. I felt very happy because I could share happy moments with my family.</p></div>
<div class="mini"><b>When was the last time you ate out with your friends?</b><p class="small">Khi nào → ở đâu → chỗ ăn thế nào → đồ ăn thế nào → ăn gì, thích món gì → cảm xúc</p><p class="ex">Last week, I ate out with my friends in a restaurant near my house. It was big and beautiful. The food was delicious, healthy and cheap. We ate seafood, salad and soup. I really liked the soup because it was tasty. I felt very happy because I could relax and share happy moments with my friends.</p></div></div>
<h4>📚 4 câu chuyện vạn năng (bản B1, khoảng 100 từ)</h4>
<p class="small">Học chắc 4 câu chuyện, đổi vài chi tiết (địa điểm, người, đồ vật) để trả lời nhiều tình huống. Ngân hàng đề Part 4 gắn nhãn “Câu chuyện vạn năng 1–4” cho từng đề.</p>
<details open><summary>Câu chuyện 1 – Về quê cùng gia đình</summary><p class="ex">Last summer, I visited my grandparents in the countryside with my family. It was a new place for my children, so they were very excited. We walked near a lake and enjoyed the fresh air. In the afternoon, we had a picnic and played games. My father told funny stories, and we all laughed a lot. I felt really happy and relaxed. Being surrounded by nature helped me forget my stressful work, and I also felt closer to my family.</p><p class="tags"><span>visited someone</span><span>spent time with friends/family</span><span>surrounded by nature</span><span>visited a new place</span><span>laughed a lot</span><span>last holiday</span></p></details>
<details><summary>Câu chuyện 2 – Giúp một người lạ gặp khó khăn</summary><p class="ex">Last year, my friend and I met a foreign tourist near the train station. He looked confused and couldn't speak Vietnamese, so we knew he needed help. Together, we used an app on my phone to understand him. It was difficult at first, but we worked as a team and finally helped him find his hotel. He was very thankful and we felt proud. Through this experience, I learned some new words in his language, and it taught me that helping others is often easier when you're not alone.</p><p class="tags"><span>helped someone</span><span>someone helped you</span><span>used technology to solve a problem</span><span>met or talked to a foreigner</span><span>solved a problem</span><span>worked in a team</span></p></details>
<details><summary>Câu chuyện 3 – Mua váy gấp cho đám cưới bạn</summary><p class="ex">Last month, I was in a hurry to buy a new dress for my friend's wedding. I went to a shop, but they didn't have my size, so I couldn't buy the dress I wanted. I felt worried and sad. Then my sister gave me a beautiful dress as a gift. I wore it to the wedding, and I felt happy and confident. I was very grateful to my sister for her kindness.</p><p class="tags"><span>couldn't buy what you wanted</span><span>wore an important outfit</span><span>received a gift</span><span>were in a hurry</span></p></details>
<details><summary>Câu chuyện 4 – Cố gắng để đạt mục tiêu</summary><p class="ex">Last year, I decided to take an Aptis test to get a good job. I was very busy because I had to study day and night, and I often felt tired. It was difficult for me at first, but I learned a lot of new words and skills. I practised English every day before the test. Finally, I received the good news that I had passed with a high score. I felt very happy and proud of myself.</p><p class="tags"><span>tried hard to achieve your goal</span><span>received good news</span><span>completed a task</span><span>faced a difficult challenge</span><span>learned something new</span><span>felt tired</span><span>were very busy</span></p></details>
<div class="callout">🎧 Gợi ý của giáo viên: có thể gộp nhiều tình huống vào 1 câu chuyện rồi học thuộc; luyện nghe – nói lại từng câu chuyện bằng nút 🔊 hoặc mục <a href="#/drill">Luyện phản xạ</a>.</div>` },
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
<h4>Khung email bản cập nhật (Ms Mai Hien)</h4>
<div class="grid2"><div class="mini"><b>📨 Cho bạn</b><pre class="tpl ex">Hi Jane,
How's it going? I just heard that (thông tin trong đề). I think we should … What do you think? Let's talk about it over lunch.
See you later.
Mary</pre></div>
<div class="mini"><b>🏛️ Cho quản lý / chủ tịch</b><pre class="tpl ex">Dear Manager,
My name is Mary. I have been an active member of the club for the last 6 months. I am writing this email to express my opinions about the upcoming (event / meeting / plan / exhibition) / problem mentioned in the recent email from our club.
I have been informed that (…). To be honest, I was truly delighted (sad / worried / disappointed) to hear that news.
Being a member of the club, I would like to offer some ideas. First, (idea 1 + explanation). Second, (idea 2 + explanation).
I hope my ideas will be useful to our club.
Best regards</pre></div></div>
<h4>Giới thiệu người được mời & lý do</h4>
<p class="tags"><span>He is the best author / MC / chef…</span><span>He is good at traditional dishes.</span><span>He is handsome and humorous.</span><span>He can speak English very well.</span><span>He has a lot of experience and expertise in this field.</span><span>He has organised many events like this.</span><span>He has solved many problems like this.</span></p>
<p class="ex">We should ask for help from an expert who has experience to deal with this. I highly recommend Mr Tran Thanh because he has hosted many talk shows. Therefore, he has a lot of experience and expertise in this sector.</p>
<h4>Gợi ý bổ sung</h4>
<ol class="steps"><li class="ex">We should promote the event on social networking sites to reach more people. I highly recommend Facebook because it is popular with people of all ages.</li>
<li class="ex">We should offer free tickets or discounts for families or groups. I would say 50 percent.</li>
<li class="ex">We should design many interesting activities which are suitable for people of all ages. They can play games, sing or dance.</li>
<li class="ex">We should offer a free cooking class for young people. It is practical to carry out.</li>
<li class="ex">We should install a device to reduce the noise.</li>
<li class="ex">We should educate people about the importance of the environment and traffic safety.</li></ol>
<div class="callout">✅ Ba việc cần làm với Part 4: <b>thuộc form</b> · <b>thuộc 10 gợi ý</b> · <b>dịch được đề</b> (32 đề Writing trong dashboard đều có bản dịch tiếng Việt Part 4).</div>
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

{ id: "wr-p12-bank", skill: "writing", icon: "🗂️", title: "Ngân hàng câu hỏi Writing Part 1 & 2 (có đáp án)",
  html: `<p>Nguồn: <i>Writing Part 1-2 (Ms Mai Hien)</i>. Part 1 trả lời 1–5 từ; Part 2 viết 20–30 từ theo công thức <b>Trả lời → It is enjoyable and useful → It helps me…</b>.</p>
<h4>Part 1 – 24 câu hỏi thường gặp</h4><table class="tbl"><thead><tr><th>Câu hỏi</th><th>Trả lời gọn</th><th>Các cách trả lời</th></tr></thead><tbody><tr><td>What’s your favourite sport?</td><td class="ex">It’s tennis.</td><td class="small muted">I love tennis. / Tennis./ It’s tennis.</td></tr><tr><td>How many people are there in your family?</td><td class="ex">There are four people.</td><td class="small muted">Four people/ There are four people.</td></tr><tr><td>What did you do yesterday?</td><td class="ex">I stayed at home.</td><td class="small muted">I stayed at home.</td></tr><tr><td>How do you go to school?</td><td class="ex">I go to school by bus.</td><td class="small muted">By bus./ I go to school by bus.</td></tr><tr><td>What’s your hobby?</td><td class="ex">I love reading books.</td><td class="small muted">I love reading books.</td></tr><tr><td>What do you like to do in the evening?</td><td class="ex">I like to watch TV.</td><td class="small muted">I like to watch TV.</td></tr><tr><td>What is your favorite device?</td><td class="ex">I love my iPhone.</td><td class="small muted">I love my iPhone.</td></tr><tr><td>Where would you like to live?</td><td class="ex">In China.</td><td class="small muted">I would like to live in China. / In China.</td></tr><tr><td>Do you often use Facebook?</td><td class="ex">I use Facebook every day.</td><td class="small muted">Yes, I do/ I use Facebook every day.</td></tr><tr><td>What do you do?</td><td class="ex">I am a teacher.</td><td class="small muted">A teacher/ I am a teacher.</td></tr><tr><td>Where do you live?</td><td class="ex">I live in Vietnam.</td><td class="small muted">In Vietnam/ I live in Vietnam.</td></tr><tr><td>What do you do to keep fit?</td><td class="ex">I play sports.</td><td class="small muted">I play sports.</td></tr><tr><td>What’s your favourite kind of music?</td><td class="ex">I love pop music.</td><td class="small muted">I love pop music.</td></tr><tr><td>What do you often do in your free time?</td><td class="ex">I read books.</td><td class="small muted">I read books.</td></tr><tr><td>What is your surname?</td><td class="ex">My surname is Nguyen.</td><td class="small muted">My surname is Nguyen.</td></tr><tr><td>What is your favourite animal?</td><td class="ex">I love cats.</td><td class="small muted">I love cats.</td></tr><tr><td>What time do you get up every day?</td><td class="ex">At 6AM.</td><td class="small muted">At 6AM.</td></tr><tr><td>What language do you speak?</td><td class="ex">I speak Vietnamese.</td><td class="small muted">I speak Vietnamese.</td></tr><tr><td>Do you like to drink coffee?</td><td class="ex">yes, I do.</td><td class="small muted">yes, I do.</td></tr><tr><td>What’s your favourite color?</td><td class="ex">I love blue.</td><td class="small muted">I love blue.</td></tr><tr><td>What are you wearing today?</td><td class="ex">I am wearing a dress.</td><td class="small muted">A beautiful dress/ I am wearing a dress.</td></tr><tr><td>What’s the weather like today?</td><td class="ex">It’s sunny.</td><td class="small muted">Sunny/ It’s sunny.</td></tr><tr><td>How is the room you are in?</td><td class="ex">It’s big.</td><td class="small muted">It’s big.</td></tr><tr><td>How did you come here?</td><td class="ex">I came here by car.</td><td class="small muted">By car/ I came here by car.</td></tr></tbody></table>
<h4>Part 2 – 11 câu hỏi theo câu lạc bộ</h4><div class="q"><div class="qt">What do you often do in your free time? <span class='pill'>Book Club</span></div><p class="ex">In my free time, I often read books. It is enjoyable and useful. It helps me relax after work and broaden my mind.</p><p class="ex">In my free time, I often read books. It is really enjoyable and useful. It helps me relax after a busy day and broaden my mind.</p></div><div class="q"><div class="qt">Please tell me about the last time you listened to music. <span class='pill'>Music Club</span></div><p class="ex">Last week I listened to music. It was enjoyable and useful. It helped me relax after a busy day and share happy moments with my friends.</p></div><div class="q"><div class="qt">Please tell me about the last time you went to the/a museum? <span class='pill'>Museum Club</span></div><p class="ex">Last week I went to HMC Museum. It was enjoyable and useful. It helped me relax and understand more about Uncle Ho.</p></div><div class="q"><div class="qt">Do you usually watch TV? <span class='pill'>Television Club</span></div><p class="ex">Yes. I watch TV every day. It is enjoyable and useful. It helps me relax after a busy day and broaden my mind. Besides, I can share happy moments with my family.</p></div><div class="q"><div class="qt">Please tell us about the days and times you can attend courses and what you would like to study? <span class='pill'>College Club</span></div><p class="ex">I would like to study English. I can attend the course on Monday mornings and Friday afternoons or at the weekend.</p></div><div class="q"><div class="qt">When and where do you use a computer? <span class='pill'>Computer Club</span></div><p class="ex">I often use my computer in the evening. I learn English online. It’s really convenient because I can stay at home and learn with a computer.</p></div><div class="q"><div class="qt">What do you usually use your laptop for? <span class='pill'>Technology Club</span></div><p class="ex">I usually use my laptop for work and study. For example, I learn English online. It’s really convenient because I can stay at home and learn with a computer.</p></div><div class="q"><div class="qt">Do you like science? <span class='pill'>science club</span></div><p class="ex">Yes. I find a lot of interest in science because it is really interesting and useful. It helps me understand more about the world around me.</p></div><div class="q"><div class="qt">Describe where you live <span class='pill'>Home Living Club</span></div><p class="ex">I live in a house in a big city. It is small but very nice. There are five rooms in my house. I like my bedroom best because I can do many things there.</p></div><div class="q"><div class="qt">Why are you interested in travel? <span class='pill'>Travel Club</span></div><p class="ex">I am interested in travel because it is enjoyable and useful. It helps me relax after busy days and broaden my mind. Besides, I can share happy moments with my family and friends.</p></div><div class="q"><div class="qt">Why did you decide to join the club? <span class='pill'>Cooking Club</span></div><p class="ex">I decided to join the club because I like cooking and I want to learn new dishes. Besides, I want to meet members who have the same hobbies.</p><p class="ex">I decided to join the club because I am really interested in cooking and I would like to learn new dishes. Besides, I wish to meet members who share the same hobbies.</p></div>
<div class="callout">🔁 Thay cho “like”: <b>be interested in · enjoy · be fond of · be keen on · find a lot of interest in</b>.</div>` },
{ id: "wr-p3-bank", skill: "writing", icon: "💬", title: "Writing Part 3: Food Club & Home Living Club (nhiều đáp án mẫu)",
  html: `<p>Nguồn: <i>Writing Part 3 – Food, Home living</i>. Mỗi câu 30–40 từ; nhiều câu có 2–3 phiên bản từ đơn giản đến nâng cao để chọn theo trình độ.</p>
<h4>🍲 Food Club</h4><div class="q"><div class="qt">💬 Hi! Welcome to the club. Who did you have dinner with yesterday? and where?</div><p class="ex">I had dinner with my friends at/in a restaurant near my house. It was big and beautiful. We ate seafood and salad. The food was delicious and healthy. I was happy with food and the service here.</p><p class="ex">I had dinner with my friends at/in a restaurant near my house. It was really fun. I could relax after a busy day and share happy moments with my friends. Besides, I could enjoy many kinds of food here. It was really delicious.</p><p class="ex">I had dinner with my best friend at/in a restaurant which was located in the city centre. We ate seafood and salad which were so delicious and healthy. I was satisfied with the food and the service here</p></div><div class="q"><div class="qt">💬 Hi! Do you prefer eating out or eating at home?</div><p class="ex">I prefer eating at home because it is healthy and affordable. It helps me improve my health and save money for other important things. Besides, I can share happy moments with my family. I don’t like eating out because it is expensive and noisy.</p></div><div class="q"><div class="qt">💬 Should a tax be imposed on unhealthy food?</div><p class="ex">In my opinion, a tax should be imposed on unhealthy food because it is not good for our health. It can cause some health problems such as cancer, obesity and heart diseases.</p></div><h4>🏠 Home Living Club</h4><div class="q"><div class="qt">💬 You have to stay in the bedroom but have to share with your brother. How do you feel?</div><p class="ex">I feel happy because it is interesting and convenient. We can talk and help each other. Besides, we can save money for other important things such as healthcare or education.</p><p class="ex">Hi. My name is Mary. I am a new member. I like your question. I feel happy because it is interesting and convenient. We can talk and help each other. Besides, we can save money for other important things such as healthcare or education.</p></div><div class="q"><div class="qt">💬 It is better to live in a big city than in the countryside. Do you agree? Why?</div><p class="ex">I strongly agree with the idea because it is exciting and convenient to live in a big city. People can get good jobs with high salary in big companies and enjoy many kinds of entertainments.</p><p class="ex">I don’t agree with the idea because in the countryside, the air is fresh. The people are friendly and kind. The food is delicious and healthy. A big city is noisy, polluted and expensive.</p></div><div class="q"><div class="qt">💬 Nowadays, old buildings are demolished and replaced with modern buildings. I feel we should protect historic buildings. What do you think?</div><p class="ex">I think that old buildings should be demolished and replaced with modern buildings which are safe, convenient and comfortable (with good facilities). However, we should protect historic buildings because young people can learn about the history and the people in the past.</p><p class="ex">I believe that old buildings should be demolished and replaced with modern buildings which are much safer, more convenient and comfortable (with good facilities). However, it is necessary to protect historic buildings because young people can learn about the history and the people in the past.</p></div>
<h4>➕ Các câu giúp tăng số từ</h4><div class="grid2"><div class="mini"><b>Chào hỏi đơn giản</b><p class="ex">Hi! That’s an interesting question.</p><p class="ex">Hello! Thanks for your question.</p><p class="ex">Hi everyone! Here’s what I think. (hỏi ý kiến cá nhân)</p><p class="ex">That’s a great question!</p></div><div class="mini"><b>Chuyển sang ý kiến của mình (với những câu hỏi hỏi ý kiến)</b><p class="ex">Personally, I think…</p><p class="ex">In my opinion,…</p><p class="ex">From my point of view,…</p><p class="ex">As far as I’m concerned,…</p><p class="ex">If you ask me,…</p></div><div class="mini"><b>Thể hiện đồng tình trước (với câu hỏi ý kiến)</b><p class="ex">I agree with you to some extent, but…</p><p class="ex">I completely/totally/strongly agree with you because…</p><p class="ex">You make a good point. However,…</p><p class="ex">That’s true, but I also think…</p></div><div class="mini"><b>Chống cháy (k hiểu câu hỏi, k trả lời dc - viết và Nói)</b><p class="ex">Hi! My name is Mary. I am a new member. To be honest, this question/topic is not familiar to me so I don’t have any ideas. I will get back to you later</p></div></div>` },
{ id: "wr-vocab-p4", skill: "writing", icon: "📒", title: "Từ vựng Writing Part 4 (người, sự kiện, hành động, giải pháp)",
  html: `<p>Nguồn: <i>Words for Writing P4</i> và <i>Từ vựng Writing P4 (1)</i>. Bấm 🔊 để nghe phát âm.</p>
<table class="tbl"><thead><tr><th>Từ / cụm từ</th><th>Nghĩa</th></tr></thead><tbody><tr><td class="ex"><b>Member</b></td><td class="muted">thành viên</td></tr><tr><td class="ex"><b>Club member</b></td><td class="muted">thành viên clb</td></tr><tr><td class="ex"><b>Manager</b></td><td class="muted">quản lý</td></tr><tr><td class="ex"><b>President</b></td><td class="muted">chủ tịch</td></tr><tr><td class="ex"><b>Expert</b></td><td class="muted">chuyên gia</td></tr><tr><td class="ex"><b>Chef</b></td><td class="muted">đầu bếp</td></tr><tr><td class="ex"><b>Designer</b></td><td class="muted">nhà thiết kế</td></tr><tr><td class="ex"><b>Writer = author</b></td><td class="muted">tác giả</td></tr><tr><td class="ex"><b>Inventor</b></td><td class="muted">nhà phát minh</td></tr><tr><td class="ex"><b>Scientist</b></td><td class="muted">nhà khoa học</td></tr><tr><td class="ex"><b>Organization</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Businesses</b></td><td class="muted">các doanh nghiệp</td></tr><tr><td class="ex"><b>Local goevernment</b></td><td class="muted">chính quyền địa phương</td></tr><tr><td class="ex"><b>Community</b></td><td class="muted">cộng đồng</td></tr><tr><td class="ex"><b>Individual</b></td><td class="muted">cá nhân</td></tr><tr><td class="ex"><b>Resident</b></td><td class="muted">cư dân</td></tr><tr><td class="ex"><b>Old people = the elderly</b></td><td class="muted"></td></tr><tr><td class="ex"><b>Children = kid</b></td><td class="muted">trẻ con</td></tr><tr><td class="ex"><b>Adult</b></td><td class="muted">người lớn</td></tr><tr><td class="ex"><b>Teenager</b></td><td class="muted">thanh thiếu niên</td></tr><tr><td class="ex"><b>Customer</b></td><td class="muted">khách hàng</td></tr><tr><td class="ex"><b>Meeting</b></td><td class="muted">cuộc họp</td></tr><tr><td class="ex"><b>Anual meeting</b></td><td class="muted">cuộc họp thường niên</td></tr><tr><td class="ex"><b>Event</b></td><td class="muted">sự kiện</td></tr><tr><td class="ex"><b>Exhibition</b></td><td class="muted">triển lãm</td></tr><tr><td class="ex"><b>Contest</b></td><td class="muted">cuộc thi</td></tr><tr><td class="ex"><b>Competition</b></td><td class="muted">cuộc thi</td></tr><tr><td class="ex"><b>Concert</b></td><td class="muted">buổi biểu diễn trực tiếp</td></tr><tr><td class="ex"><b>Project</b></td><td class="muted">dự án</td></tr><tr><td class="ex"><b>Playground</b></td><td class="muted">sân chơi</td></tr><tr><td class="ex"><b>Plan (n,v)</b></td><td class="muted">kế hoạch, lên kế hoạch</td></tr><tr><td class="ex"><b>Activity</b></td><td class="muted">hoạt động</td></tr><tr><td class="ex"><b>Community activities = social activities</b></td><td class="muted"></td></tr><tr><td class="ex"><b>Talk show</b></td><td class="muted">buổi nói chuyện</td></tr><tr><td class="ex"><b>Workshop</b></td><td class="muted">buổi tập huấn, xưởng</td></tr><tr><td class="ex"><b>Attraction (n)</b></td><td class="muted">sự thu hút</td></tr><tr><td class="ex"><b>Promote</b></td><td class="muted">quảng bá</td></tr><tr><td class="ex"><b>(solve = address = fix = deal with)</b></td><td class="muted"></td></tr><tr><td class="ex"><b>Join = take part in = participate</b></td><td class="muted">tham gia</td></tr><tr><td class="ex"><b>Attend</b></td><td class="muted">tham dự</td></tr><tr><td class="ex"><b>Organize</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Organize a science exhibition</b></td><td class="muted">tổ chức triển lãm khoa học</td></tr><tr><td class="ex"><b>Have = hold</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Facility</b></td><td class="muted">trang thiết bị (facilities): tiện ích</td></tr><tr><td class="ex"><b>Equipment</b></td><td class="muted">trang thiết bị</td></tr><tr><td class="ex"><b>Fee</b></td><td class="muted">phí</td></tr><tr><td class="ex"><b>Entry fee = entrance fee</b></td><td class="muted">phí vào cửa</td></tr><tr><td class="ex"><b>Raise fund</b></td><td class="muted">gây quỹ</td></tr><tr><td class="ex"><b>Charity</b></td><td class="muted">từ thiện</td></tr><tr><td class="ex"><b>Cut costs</b></td><td class="muted">cắt giảm chi phí</td></tr><tr><td class="ex"><b>Complain</b></td><td class="muted">phàn nàn</td></tr><tr><td class="ex"><b>Raise your voice</b></td><td class="muted">lên tiếng</td></tr><tr><td class="ex"><b>Annoy people around</b></td><td class="muted">làm những người xung quanh khó chịu</td></tr><tr><td class="ex"><b>Idea = opinion</b></td><td class="muted">ý kiến</td></tr><tr><td class="ex"><b>Suggestion</b></td><td class="muted">gợi ý</td></tr><tr><td class="ex"><b>Proposal</b></td><td class="muted">đề xuất</td></tr><tr><td class="ex"><b>Solution</b></td><td class="muted">giải pháp</td></tr><tr><td class="ex"><b>Technology</b></td><td class="muted">công nghệ</td></tr><tr><td class="ex"><b>Comment</b></td><td class="muted">bình luận</td></tr><tr><td class="ex"><b>Negative things</b></td><td class="muted">điều tiêu cực</td></tr><tr><td class="ex"><b>Post (n, v)</b></td><td class="muted">đăng, bài đăng</td></tr><tr><td class="ex"><b>Identify</b></td><td class="muted">xác định, tìm ra</td></tr><tr><td class="ex"><b>Debate club</b></td><td class="muted">clb hùng biện</td></tr><tr><td class="ex"><b>home living club</b></td><td class="muted">clb nhà ở</td></tr><tr><td class="ex"><b>beautiful house club</b></td><td class="muted">clb nhà đẹp</td></tr><tr><td class="ex"><b>demolish</b></td><td class="muted">xoá bỏ</td></tr><tr><td class="ex"><b>Chairman</b></td><td class="muted">chủ tịch</td></tr><tr><td class="ex"><b>Local government</b></td><td class="muted">chính quyền địa phương</td></tr><tr><td class="ex"><b>Organize (v)</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Organization (n)</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Business (n)</b></td><td class="muted">kinh doanh, doanh nghiệp</td></tr><tr><td class="ex"><b>Old people = elderly people = the elderly</b></td><td class="muted"></td></tr><tr><td class="ex"><b>Guest speaker</b></td><td class="muted">khách mời làm diễn giả</td></tr><tr><td class="ex"><b>Audience</b></td><td class="muted">khán giả</td></tr><tr><td class="ex"><b>Author = writer</b></td><td class="muted">nhà văn</td></tr><tr><td class="ex"><b>Science</b></td><td class="muted">khoa học</td></tr><tr><td class="ex"><b>Representative (n)</b></td><td class="muted">người đại diện</td></tr><tr><td class="ex"><b>Organize an event</b></td><td class="muted">tổ chưcs 1 sự kiện</td></tr><tr><td class="ex"><b>Have/hold</b></td><td class="muted">tổ chức</td></tr><tr><td class="ex"><b>Encourage (v)</b></td><td class="muted">khuyến khích</td></tr><tr><td class="ex"><b>Join = take part in = participate in</b></td><td class="muted">tham gia</td></tr><tr><td class="ex"><b>Join our club</b></td><td class="muted">tham gia clb</td></tr><tr><td class="ex"><b>Attend (v)</b></td><td class="muted">tham gia</td></tr><tr><td class="ex"><b>Idea = opinion = suggestion = proposal</b></td><td class="muted">ý kiến, đề xuất</td></tr><tr><td class="ex"><b>Suggest (v)</b></td><td class="muted">gợi ý + V-ing</td></tr><tr><td class="ex"><b>Attract (v)</b></td><td class="muted">thu hút</td></tr><tr><td class="ex"><b>Promote (v)</b></td><td class="muted">quảng bá</td></tr><tr><td class="ex"><b>Support (n,v)</b></td><td class="muted">ủng hộ</td></tr><tr><td class="ex"><b>Behave (v)</b></td><td class="muted">cư xử</td></tr><tr><td class="ex"><b>Behavior (n)</b></td><td class="muted">hành vi</td></tr><tr><td class="ex"><b>Online behavior</b></td><td class="muted">hành vi online</td></tr><tr><td class="ex"><b>Negative (adj)</b></td><td class="muted">tiêu cực</td></tr><tr><td class="ex"><b>Positive (adj)</b></td><td class="muted">tích cực</td></tr><tr><td class="ex"><b>Comment (n)</b></td><td class="muted">bình luận</td></tr><tr><td class="ex"><b>Give/offer your idea</b></td><td class="muted">đưa ra/đề ra ý kiến</td></tr><tr><td class="ex"><b>Offer (v)</b></td><td class="muted">tặng</td></tr><tr><td class="ex"><b>Unrealistic (adj)</b></td><td class="muted">k thực tế</td></tr><tr><td class="ex"><b>Practical (adj)</b></td><td class="muted">thực tế</td></tr><tr><td class="ex"><b>Easy to carry out</b></td><td class="muted">dễ thực hiện</td></tr><tr><td class="ex"><b>Feasible (adj)</b></td><td class="muted">khả thi</td></tr><tr><td class="ex"><b>Effective (adj)</b></td><td class="muted">hiệu quả</td></tr></tbody></table>
<h4>Câu ví dụ</h4><p class="ex">Our club is going to organize a meeting with club members</p><p class="ex">Our club is planning to organize a meeting with members?</p><p class="ex">What do you think about the plan?</p><p class="ex">Our club is planning to encourage young people to learn how cook.</p><p class="ex">We can promote the event on social networking sites such as Facebook.</p><p class="ex">Residents complain about the noise from our concerts</p><p class="ex">Our club is planning to have a meeting</p><p class="ex">Our club is planning to encourage young people to cook at home</p><p class="ex">Why did you decide to join the club?</p><p class="ex">I suggest having a talk show and inviting a famous artist</p><p class="ex">I suggest we should have a talk show and invite a famous artist</p><p class="ex">To attract more members, we should promote the event on social networking sites such as Facebook</p><p class="ex">What are the attractions of these activities?</p><p class="ex">Being a member of the club, I would like to offer some ideas</p><p class="ex">We should offer free tickets</p><p class="ex">We should offer free cooking course</p><p class="ex">It is the most effective solution in the long term.</p>` },
{ id: "wr-vocab-value", skill: "writing", icon: "✨", title: "Từ vựng diễn đạt sở thích & giá trị (Writing/Speaking)",
  html: `<p>Nguồn: <i>Vocab for Writing (1)</i>. Dùng khi nói về sự yêu thích và giá trị mà câu lạc bộ/hoạt động mang lại cho cá nhân và cộng đồng.</p>
<table class="tbl"><thead><tr><th>Cấu trúc</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>like / love / enjoy + V-ing</td><td class="ex">I love reading books.</td></tr>
<tr><td>be interested in / be into</td><td class="ex">I am into reading books.</td></tr>
<tr><td>find a lot of interest in…</td><td class="ex">I find a lot of interest in reading books.</td></tr>
<tr><td>find (sth) + adj</td><td class="ex">I find reading books enjoyable and useful for children.</td></tr>
<tr><td>… is my cup of tea</td><td class="ex">Reading books is my cup of tea.</td></tr>
<tr><td>be passionate about…</td><td class="ex">I am passionate about sports.</td></tr>
<tr><td>… is one of the best ways to…</td><td class="ex">Playing sports is one of the best ways to improve both my mental and physical health.</td></tr>
<tr><td>improve = enhance; health = well-being</td><td class="ex">Reading books helps me enhance my mental well-being and broaden my mind.</td></tr>
<tr><td>stay updated / update information</td><td class="ex">Watching TV helps me stay updated.</td></tr>
<tr><td>affordable for people with low income and limited budgets</td><td class="ex">It is affordable for people with low income and limited budgets. It helps people save money for other important things.</td></tr>
<tr><td>improve many skills such as…</td><td class="ex">Community activities help children improve many skills such as communication and language skills.</td></tr>
<tr><td>inspire / motivate sb to do sth</td><td class="ex">The talk show can inspire young people to read books.</td></tr>
<tr><td>be beneficial for…</td><td class="ex">I believe that this activity is beneficial for people who are interested in music.</td></tr>
<tr><td>socialize with other members</td><td class="ex">I can socialize with other members, and we can share our experiences.</td></tr>
<tr><td>be perfect for those who…</td><td class="ex">It is perfect for people who would like to improve their vocabulary and learn new things.</td></tr>
</tbody></table>
<h4>Nâng cấp một câu trả lời</h4>
<p><b>Do you like reading books?</b></p>
<p class="ex">Yes, I do. I really love reading books because it is enjoyable and useful. It helps me relax after work and improve my knowledge.</p>
<p class="ex">Yes, I do. I am really interested in reading books, especially science books. It is one of the best ways to enhance my mental well-being and broaden my mind. It is perfect for people who would like to improve their vocabulary and learn new things.</p>
<div class="callout">🗣️ Luyện nói các cụm này theo chủ đề tại mục <a href="#/drill">Luyện phản xạ theo chủ đề</a>.</div>` },
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
