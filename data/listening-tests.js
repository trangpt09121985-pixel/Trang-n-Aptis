/* Đề Listening do giáo viên biên soạn theo cấu trúc Aptis General.
   Âm thanh được đọc bằng giọng máy (Text-to-Speech) của trình duyệt; mỗi đoạn được nghe tối đa 2 lần như thi thật.
   sp: "M" = giọng nam, "W" = giọng nữ. ev = chỉ số câu thoại chứa đáp án (để tô sáng khi giải thích). */
window.LISTENING_TESTS = [
{
 id: "L01", title: "Listening Test 1", time: 40,
 parts: [
  { type: "mcq", title: "Part 1 – Information recognition (Questions 1–13)",
    instr: "Listen to each recording and choose the correct answer. You can listen twice.",
    items: [
     { q: "What time is the new appointment?", options: ["2:15 p.m.", "9:30 a.m.", "2:45 p.m."], answer: 0, ev: [1],
       script: [{sp:"W",t:"Hello, this is City Dental Clinic. Your appointment on Monday at nine thirty has been changed."},{sp:"W",t:"The dentist is busy in the morning, so could you come at a quarter past two in the afternoon instead?"}],
       explain: "'a quarter past two' = 2 giờ 15. 9:30 là giờ CŨ (bẫy). 'quarter to three' mới là 2:45." },
     { q: "How will the woman travel to work tomorrow?", options: ["By bike", "By bus", "By car"], answer: 0, ev: [2],
       script: [{sp:"M",t:"Are you driving to work tomorrow?"},{sp:"W",t:"No, my car's at the garage. I thought about taking the bus, but it's so slow."},{sp:"W",t:"My sister's lending me her bike, so I'll cycle."}],
       explain: "Xe ô tô đang sửa, xe buýt bị loại vì chậm → 'I'll cycle' (đi xe đạp). Cả 3 phương tiện đều được nhắc đến – đây là bẫy thường gặp." },
     { q: "Which item do they already have enough of?", options: ["Milk", "Bread", "Apples"], answer: 0, ev: [0],
       script: [{sp:"W",t:"Hi Dad, could you get some things on your way home? We've got plenty of milk and eggs, but we need bread for breakfast."},{sp:"W",t:"Oh, and don't forget the apples."}],
       explain: "'We've got plenty of milk' = đã có đủ sữa. Bánh mì và táo là thứ cần mua." },
     { q: "What is the man's phone number?", options: ["0912 457 386", "0912 475 386", "0921 457 386"], answer: 0, ev: [0,1],
       script: [{sp:"M",t:"Hi, it's Kevin. Please call me back on 0 9 1 2, 4 5 7, 3 8 6."},{sp:"M",t:"That's 0 9 1 2, 4 5 7, 3 8 6. Thanks."}],
       explain: "Nghe từng nhóm số: 0912 – 457 – 386. Các phương án sai đảo vị trí hai chữ số – lỗi nghe phổ biến." },
     { q: "Where will the training session take place?", options: ["In room 12", "In the main hall", "In the library"], answer: 0, ev: [0],
       script: [{sp:"M",t:"The training session won't be in the main hall because it's being painted. We'll use room twelve on the first floor, next to the library."}],
       explain: "'won't be in the main hall' (loại), 'next to the library' chỉ là vị trí tham chiếu. Địa điểm đúng: room 12." },
     { q: "What will the weather be like tomorrow afternoon?", options: ["Rainy", "Sunny", "Cloudy"], answer: 0, ev: [0],
       script: [{sp:"W",t:"Tomorrow will start cloudy, with rain in the afternoon. It'll be much sunnier on Sunday."}],
       explain: "Buổi sáng nhiều mây (cloudy), CHIỀU có mưa (rain in the afternoon). Nắng là Chủ nhật." },
     { q: "How much does a student ticket cost?", options: ["£12", "£7.50", "£15"], answer: 0, ev: [0],
       script: [{sp:"M",t:"Tickets are fifteen pounds for adults. Children under twelve pay half price, and students get three pounds off."}],
       explain: "Sinh viên được giảm 3 bảng: 15 − 3 = 12 bảng. £7.50 là giá trẻ em (half price)." },
     { q: "What did the man do at the weekend?", options: ["He went to the cinema", "He went to the beach", "He stayed at home"], answer: 0, ev: [1],
       script: [{sp:"W",t:"Did you go to the beach at the weekend?"},{sp:"M",t:"We planned to, but it rained all day, so we went to the cinema instead."}],
       explain: "'We planned to, but…' = dự định nhưng không đi. 'instead' xác nhận họ đi xem phim." },
     { q: "When can you visit the library in the evening?", options: ["On Wednesday", "On Monday", "On Saturday"], answer: 0, ev: [0],
       script: [{sp:"W",t:"The library is closed on Mondays. From Tuesday to Saturday it opens at nine and closes at five, except on Wednesday, when it stays open until eight p.m."}],
       explain: "Chỉ thứ Tư mở đến 8 giờ tối. Thứ Hai đóng cửa; thứ Bảy đóng lúc 5 giờ chiều." },
     { q: "Why is the woman calling the shop?", options: ["To exchange a jacket", "To get her money back", "To complain about the price"], answer: 0, ev: [1],
       script: [{sp:"W",t:"Hello, I'm calling about the jacket I bought last week. The zip is broken."},{sp:"W",t:"I don't want my money back, I'd just like to change it for another one."}],
       explain: "'I don't want my money back' loại phương án hoàn tiền; 'change it for another one' = đổi hàng (exchange)." },
     { q: "What is the speaker's job?", options: ["A nurse", "A doctor", "A receptionist"], answer: 0, ev: [0,1],
       script: [{sp:"W",t:"I start work at six in the morning. First I check on the patients and give them their medicine."},{sp:"W",t:"Then I tell the doctors if anyone's condition has changed."}],
       explain: "Chăm sóc bệnh nhân, phát thuốc và báo cáo cho bác sĩ → y tá (nurse). Người nói nhắc đến 'doctors' như một người khác." },
     { q: "What did the woman dislike about the film?", options: ["It was too long", "The acting", "The music"], answer: 0, ev: [1],
       script: [{sp:"M",t:"So, what did you think of the film?"},{sp:"W",t:"The actors were great and I loved the music, but the story was far too long. I nearly fell asleep."}],
       explain: "Khen diễn viên và nhạc; chê 'far too long' (quá dài). Từ 'but' báo hiệu ý chính." },
     { q: "What does the speaker recommend?", options: ["Watching films with English subtitles first", "Watching films with Vietnamese subtitles", "Only listening to the radio"], answer: 0, ev: [0,1],
       script: [{sp:"M",t:"If you want to improve your listening, don't just watch films with subtitles in Vietnamese."},{sp:"M",t:"Try English subtitles first, and later, none at all."}],
       explain: "'Try English subtitles first' – lời khuyên chính. 'don't just watch… in Vietnamese' là điều không nên." }
    ] },
  { type: "match", title: "Part 2 – Information matching (Question 14)",
    instr: "Four people talk about how they relax. Match each speaker with the correct information. Two pieces of information are not needed.",
    options: ["It helps them sleep better.", "They do it with family members.", "It costs nothing.", "They learned it from a teacher.", "They do it at work.", "It makes them more creative."],
    speakers: [
     { name: "Speaker 1", answer: 2, script: [{sp:"M",t:"I go for a long walk by the river every evening. I don't need any special equipment or a gym membership, which is great because I'm saving money for a new flat."}],
       explain: "Không cần thiết bị hay thẻ tập gym, đang tiết kiệm tiền → hoạt động không tốn tiền (It costs nothing)." },
     { name: "Speaker 2", answer: 1, script: [{sp:"W",t:"On Sundays, my parents, my brother and I cook a big lunch together. Everyone has a job, and we chat and laugh the whole time."}],
       explain: "'my parents, my brother and I' → làm cùng các thành viên gia đình." },
     { name: "Speaker 3", answer: 0, script: [{sp:"M",t:"I do fifteen minutes of yoga before bed. Since I started, I fall asleep much faster and wake up feeling fresh."}],
       explain: "'fall asleep much faster' → ngủ ngon hơn. Không nhắc đến giáo viên (bẫy với phương án D)." },
     { name: "Speaker 4", answer: 5, script: [{sp:"W",t:"I paint at home in the evenings. I'm not very good, but after an hour of painting, I always come up with new ideas for my design projects."}],
       explain: "'come up with new ideas' → sáng tạo hơn. Cô vẽ ở NHÀ, không phải ở chỗ làm (loại E)." }
    ] },
  { type: "opinion", title: "Part 3 – Opinion matching (Questions 15–16)",
    instr: "Listen to two people discussing a topic. Decide whose opinion matches each statement: the man, the woman, or both.",
    dialogs: [
     { topic: "The Internet", mnemonic: "Woo Bin Mới Bệnh → W B M B",
       script: [
        {sp:"M",t:"Did you see that report? Children now spend about six hours a day online."},
        {sp:"W",t:"I'm not surprised. Honestly, I think the internet has made people less patient. Everyone wants answers in two seconds."},
        {sp:"M",t:"Maybe. But you can't deny it's an amazing tool for learning. I taught myself to fix my motorbike from online videos."},
        {sp:"W",t:"Oh, I agree with you there. I've learned so much from online courses too."},
        {sp:"M",t:"What worries me is privacy. Companies collect so much information about us, and most people never read the rules."},
        {sp:"W",t:"Hmm, I don't really mind that, as long as the service is free."},
        {sp:"M",t:"Still, parents should set limits for young children."},
        {sp:"W",t:"Absolutely. Little kids definitely need rules about screen time."}],
       items: [
        { s: "The internet has made people less patient.", answer: "W", ev: [1,2], explain: "Người nữ nêu ý kiến; người nam chỉ nói 'Maybe. But…' – không đồng ý mà chuyển ý → chỉ NỮ (Woman)." },
        { s: "The internet is a valuable way to learn.", answer: "B", ev: [2,3], explain: "Nam: 'an amazing tool for learning'; nữ: 'I agree with you there' → CẢ HAI (Both)." },
        { s: "Online privacy is a serious concern.", answer: "M", ev: [4,5], explain: "Nam lo về quyền riêng tư; nữ 'I don't really mind that' → chỉ NAM (Man)." },
        { s: "Young children need limits on internet use.", answer: "B", ev: [6,7], explain: "Nam: 'parents should set limits'; nữ: 'Absolutely' → CẢ HAI." } ] },
     { topic: "Art", mnemonic: "Vẽ Một Ban Mới → W M B M",
       script: [
        {sp:"W",t:"I went to the new modern art exhibition yesterday. I thought the paintings were really exciting."},
        {sp:"M",t:"Really? I saw some photos online. To me, they looked like something a child could do."},
        {sp:"W",t:"Well, I suppose everyone sees art differently."},
        {sp:"M",t:"True. But what I do think is that schools should spend more time on art. My son only has one art lesson a week."},
        {sp:"W",t:"I couldn't agree more. Children need to be creative, not just do maths."},
        {sp:"M",t:"And the tickets for that exhibition cost twenty pounds! Museums should be free, so everyone can go."},
        {sp:"W",t:"Oh, I think that's fair. Artists need to earn money."}],
       items: [
        { s: "The exhibition was exciting.", answer: "W", ev: [0,1], explain: "Chỉ người nữ khen triển lãm; người nam nghi ngờ ('Really?')." },
        { s: "Some modern art looks too simple.", answer: "M", ev: [1], explain: "Nam: 'looked like something a child could do' = trông quá đơn giản. Nữ không đồng ý." },
        { s: "Art should get more time at school.", answer: "B", ev: [3,4], explain: "Nam đề xuất, nữ 'I couldn't agree more' (hoàn toàn đồng ý) → CẢ HAI." },
        { s: "Art exhibitions should be free.", answer: "M", ev: [5,6], explain: "Nam muốn miễn phí; nữ cho rằng giá vé hợp lý ('I think that's fair') → chỉ NAM." } ] }
    ] },
  { type: "monologue", title: "Part 4 – Monologue comprehension (Questions 17–18)",
    instr: "Listen to each speaker and answer the two questions.",
    items: [
     { intro: "A woman talks about her first job.",
       script: [
        {sp:"W",t:"When I left university, I got a job in a large hotel. To be honest, I wasn't excited about it at all."},
        {sp:"W",t:"I'd studied marketing, and I thought working at the reception desk was beneath me."},
        {sp:"W",t:"But within a few months, my opinion completely changed. I was dealing with people from all over the world and solving problems every day."},
        {sp:"W",t:"Some guests were very rude, and at first I took it personally. My manager told me something I've never forgotten: they're not angry with you, they're angry with the situation."},
        {sp:"W",t:"That helped me stay calm, and I think the ability to stay calm under pressure is the most valuable thing I learned. It has helped me in every job since."}],
       questions: [
        { q: "How did she feel about the job at the beginning?", options: ["Disappointed, because it was not related to her studies", "Nervous, because she had no experience", "Excited to meet international guests"], answer: 0, ev: [0,1],
          explain: "'I wasn't excited about it at all' + học marketing nên nghĩ làm lễ tân là 'beneath me' (không xứng) → thất vọng. Gặp khách quốc tế là điều cô thích VỀ SAU." },
        { q: "What does she say was the most important thing she learned?", options: ["How to stay calm under pressure", "How to speak to foreign guests", "How to do marketing"], answer: 0, ev: [4],
          explain: "'the ability to stay calm under pressure is the most valuable thing I learned' – câu trả lời trực tiếp." } ] },
     { intro: "A man talks about a car-free day in his town.",
       script: [
        {sp:"M",t:"Last month our town introduced a car-free day on the first Sunday of every month."},
        {sp:"M",t:"Many shop owners were worried that they would lose customers. Actually, the opposite happened: families came to walk around the centre, and the cafés were full."},
        {sp:"M",t:"Personally, I think it's a great start, but one day a month isn't enough to make a real difference to air pollution."},
        {sp:"M",t:"If the council is serious, it should also improve the buses, because many people who live outside the town simply have no other way to get here."}],
       questions: [
        { q: "What happened to local businesses?", options: ["They got more customers", "They lost customers", "They closed on Sundays"], answer: 0, ev: [1],
          explain: "'the opposite happened… the cafés were full' – ngược với lo lắng mất khách → đông khách hơn." },
        { q: "What is the speaker's opinion of the car-free day?", options: ["It is a good idea, but it should go further", "It should be cancelled", "It has solved the pollution problem"], answer: 0, ev: [2,3],
          explain: "'a great start, but one day a month isn't enough' + đề xuất cải thiện xe buýt → cần làm thêm. Thái độ ủng hộ nhưng có điều kiện." } ] }
    ] }
 ]
},
{
 id: "L02", title: "Listening Test 2", time: 40,
 parts: [
  { type: "mcq", title: "Part 1 – Information recognition (Questions 1–13)",
    instr: "Listen to each recording and choose the correct answer. You can listen twice.",
    items: [
     { q: "What time will the train leave?", options: ["9:00", "8:40", "8:20"], answer: 0, ev: [0],
       script: [{sp:"W",t:"Attention please. The eight forty train to Hai Phong is delayed by twenty minutes. We apologise for the delay."}],
       explain: "Giờ gốc 8:40 + trễ 20 phút = 9:00. Đây là dạng câu cần tính toán nhanh." },
     { q: "Where will they meet?", options: ["At the café opposite the bank", "At the station", "At the bank"], answer: 0, ev: [1],
       script: [{sp:"M",t:"Shall we meet at the station?"},{sp:"W",t:"Not there, it's always too crowded. How about the café opposite the bank?"},{sp:"M",t:"Perfect."}],
       explain: "Ga tàu bị loại ('Not there'). 'the bank' chỉ là mốc chỉ đường – nơi gặp là quán café." },
     { q: "What will the man buy for his sister?", options: ["Concert tickets", "A scarf", "A book"], answer: 0, ev: [0],
       script: [{sp:"M",t:"I was going to buy my sister a scarf, but she's got lots. A book is a bit boring, so I'll get her two concert tickets."}],
       explain: "Khăn bị loại (cô ấy có nhiều), sách bị chê nhàm chán → mua vé hòa nhạc." },
     { q: "What is the woman's room number?", options: ["314", "340", "413"], answer: 0, ev: [0],
       script: [{sp:"M",t:"Here's your key. Your room is three one four, on the third floor. Breakfast is from six thirty."}],
       explain: "'three one four' = 314. Tầng ba (third floor) cũng khớp với số phòng bắt đầu bằng 3." },
     { q: "What is the problem with the flat?", options: ["It is noisy", "The rent is too high", "It is far from the city centre"], answer: 0, ev: [1],
       script: [{sp:"W",t:"So, are you going to rent the flat?"},{sp:"M",t:"I'm not sure. It's in a great location and the rent's fine, but it's really noisy at night."}],
       explain: "Vị trí tốt, giá thuê ổn; vấn đề sau 'but' là ồn ào vào ban đêm." },
     { q: "How many lessons are there in the course in total?", options: ["12", "6", "8"], answer: 0, ev: [0],
       script: [{sp:"W",t:"The course lasts six weeks, with two lessons every week, on Tuesday and Thursday evenings."}],
       explain: "6 tuần × 2 buổi/tuần = 12 buổi." },
     { q: "What does the woman do?", options: ["She designs gardens", "She sells flowers", "She builds hotels"], answer: 0, ev: [0],
       script: [{sp:"W",t:"In my job, I design gardens for hotels and offices. I draw the plans, choose the plants, and then the builders do the rest."}],
       explain: "'I design gardens' – thiết kế sân vườn. 'hotels and offices' là khách hàng của cô." },
     { q: "When will the party be?", options: ["On Sunday afternoon", "On Friday evening", "On Saturday"], answer: 0, ev: [1],
       script: [{sp:"M",t:"Can we have the party on Friday evening?"},{sp:"W",t:"I'm working late on Friday, and Saturday is my brother's wedding. Let's make it Sunday afternoon."}],
       explain: "Thứ Sáu và thứ Bảy đều bận → chốt chiều Chủ nhật." },
     { q: "What does the woman order?", options: ["A salad and an orange juice", "Chicken soup", "Chicken soup and a salad"], answer: 0, ev: [1],
       script: [{sp:"M",t:"Are you ready to order?"},{sp:"W",t:"I'll have the chicken soup… actually, no, I'm not very hungry. Just a salad and an orange juice, please."}],
       explain: "'actually, no' – cô đổi ý, bỏ súp gà. Món cuối cùng: salad và nước cam." },
     { q: "Why was the man late?", options: ["He forgot his wallet", "There was a lot of traffic", "He missed the bus"], answer: 0, ev: [0],
       script: [{sp:"M",t:"Sorry I'm late. It wasn't the traffic this time. I left my wallet at home and had to go back for it."}],
       explain: "'It wasn't the traffic' loại kẹt xe; lý do thật: quên ví ở nhà." },
     { q: "How much do they pay in total?", options: ["85,000 dong", "60,000 dong", "55,000 dong"], answer: 0, ev: [0],
       script: [{sp:"W",t:"Two coffees at thirty thousand each, and one cake for twenty-five thousand. That's eighty-five thousand dong, please."}],
       explain: "2 × 30.000 + 25.000 = 85.000 đồng; người nói cũng xác nhận tổng." },
     { q: "What does the doctor advise?", options: ["Rest and drink plenty of water", "Take some medicine", "Go back to work"], answer: 0, ev: [0],
       script: [{sp:"M",t:"It's just a cold. You don't need any medicine. Stay at home for a couple of days, rest, and drink plenty of water."}],
       explain: "'You don't need any medicine' loại uống thuốc; lời khuyên: nghỉ ngơi, uống nhiều nước." },
     { q: "How does the woman feel about the news?", options: ["Pleased", "Disappointed", "Angry"], answer: 0, ev: [0,1],
       script: [{sp:"W",t:"I didn't get the manager's job in the end."},{sp:"W",t:"But they offered me a different position with better hours, so actually I'm quite pleased."}],
       explain: "Mở đầu tưởng thất vọng, nhưng 'actually I'm quite pleased' → hài lòng. Chú ý từ 'actually'/'but' đảo cảm xúc." }
    ] },
  { type: "match", title: "Part 2 – Information matching (Question 14)",
    instr: "Four people talk about learning English. Match each speaker with the correct information. Two pieces of information are not needed.",
    options: ["They practise with an app every day.", "They learned a lot from watching TV.", "They need English for their job.", "They find grammar difficult.", "They studied abroad.", "They prefer learning in a group."],
    speakers: [
     { name: "Speaker 1", answer: 2, script: [{sp:"W",t:"I work for a logistics company, and half of our clients are in Singapore and Australia, so I have to write emails in English every day."}],
       explain: "Khách hàng ở nước ngoài, phải viết email tiếng Anh hằng ngày → cần tiếng Anh cho công việc." },
     { name: "Speaker 2", answer: 1, script: [{sp:"M",t:"Honestly, I picked up most of my English from American TV series. I watched them with subtitles first, and then without."}],
       explain: "'picked up most of my English from American TV series' → học qua xem phim truyền hình." },
     { name: "Speaker 3", answer: 5, script: [{sp:"W",t:"I tried learning alone at home with books, but I always gave up. Now I go to an evening class with ten other people, and it's much more fun."}],
       explain: "Tự học thì bỏ cuộc; học lớp cùng 10 người vui hơn → thích học theo nhóm." },
     { name: "Speaker 4", answer: 3, script: [{sp:"M",t:"Speaking was never a problem for me, but tenses, oh dear! I still mix up the present perfect and the past simple."}],
       explain: "Nhầm lẫn các thì (tenses) → thấy ngữ pháp khó." }
    ] },
  { type: "opinion", title: "Part 3 – Opinion matching (Questions 15–16)",
    instr: "Listen to two people discussing a topic. Decide whose opinion matches each statement: the man, the woman, or both.",
    dialogs: [
     { topic: "Studying at home", mnemonic: "Vừa Mệt Mà Bổ → W M M B",
       script: [
        {sp:"W",t:"My company is offering online courses now instead of classroom training. I think studying from home saves so much time."},
        {sp:"M",t:"That's true for you, but I find it really hard to concentrate at home. There's always something to distract me."},
        {sp:"W",t:"Really? I'm the opposite. My house is quieter than any classroom."},
        {sp:"M",t:"And honestly, I miss having a teacher in front of me. You can ask questions immediately."},
        {sp:"W",t:"Well, you can send questions by email. That works fine for me."},
        {sp:"M",t:"Anyway, online courses should be much cheaper than classroom ones."},
        {sp:"W",t:"Definitely. There's no classroom to pay for."}],
       items: [
        { s: "Studying at home saves time.", answer: "W", ev: [0,1], explain: "Nữ nêu ý; nam nói 'That's true for you' (đúng với chị thôi) → chỉ NỮ." },
        { s: "It is difficult to concentrate at home.", answer: "M", ev: [1,2], explain: "Nam khó tập trung; nữ 'I'm the opposite' → chỉ NAM." },
        { s: "Having a teacher present is important.", answer: "M", ev: [3,4], explain: "Nam nhớ việc có giáo viên trực tiếp; nữ cho rằng gửi email là đủ → chỉ NAM." },
        { s: "Online courses should cost less.", answer: "B", ev: [5,6], explain: "Nam đề xuất, nữ 'Definitely' → CẢ HAI." } ] },
     { topic: "Beauty", mnemonic: "Muốn Vào Bệnh Viện → M W B W",
       script: [
        {sp:"M",t:"My sister spends a fortune on beauty products. I think most of them are a complete waste of money."},
        {sp:"W",t:"Some are, I suppose. But good skincare really does make a difference, especially sun cream. My skin is much better since I started using it."},
        {sp:"M",t:"If you say so. In my opinion, though, the best beauty treatment is free: enough sleep and healthy food."},
        {sp:"W",t:"Oh, I completely agree with that. No cream can fix a bad diet."},
        {sp:"W",t:"And by the way, I think more men should look after their skin too."},
        {sp:"M",t:"Hmm, I'm not sure that's for me."}],
       items: [
        { s: "Many beauty products are a waste of money.", answer: "M", ev: [0,1], explain: "Nam khẳng định; nữ chỉ nói 'Some are, I suppose. But…' rồi bảo vệ quan điểm khác → chỉ NAM." },
        { s: "Skincare can make a real difference.", answer: "W", ev: [1,2], explain: "Nữ khẳng định; nam 'If you say so' (tùy chị) – không đồng ý → chỉ NỮ." },
        { s: "Sleep and diet are the best beauty treatments.", answer: "B", ev: [2,3], explain: "Nam nêu ý, nữ 'I completely agree' → CẢ HAI." },
        { s: "Men should take care of their skin.", answer: "W", ev: [4,5], explain: "Nữ đề xuất; nam 'I'm not sure that's for me' → chỉ NỮ." } ] }
    ] },
  { type: "monologue", title: "Part 4 – Monologue comprehension (Questions 17–18)",
    instr: "Listen to each speaker and answer the two questions.",
    items: [
     { intro: "A manager talks about a four-day working week.",
       script: [
        {sp:"W",t:"Six months ago, our company tried a four-day week. Staff worked thirty-two hours instead of forty, for the same pay."},
        {sp:"W",t:"I expected that we would fall behind, but in fact we completed the same amount of work, and the number of sick days went down by almost half."},
        {sp:"W",t:"People came back on Monday with more energy."},
        {sp:"W",t:"However, I'm not ready to say this should be permanent. Our customer service team found it very hard, because customers still call five days a week."},
        {sp:"W",t:"Before we decide, we need to find a solution for teams like that."}],
       questions: [
        { q: "What was one result of the trial?", options: ["Staff took fewer sick days", "Staff completed more work", "Staff earned more money"], answer: 0, ev: [1],
          explain: "'the number of sick days went down by almost half' → ít ngày nghỉ ốm hơn. Khối lượng công việc chỉ 'the same', lương 'the same pay'." },
        { q: "What is the speaker's attitude to making the change permanent?", options: ["She is cautious", "She is completely in favour", "She is strongly against it"], answer: 0, ev: [3,4],
          explain: "'I'm not ready to say… Before we decide, we need to find a solution' → thận trọng (cautious), chưa ủng hộ hoàn toàn cũng không phản đối." } ] },
     { intro: "A man talks about a trip that went wrong.",
       script: [
        {sp:"M",t:"Two years ago I was flying to Bangkok for a friend's wedding. I'd checked the time on my ticket three times, but I'd forgotten one thing: my passport was in my other jacket."},
        {sp:"M",t:"By the time I got home and back to the airport, the plane had gone. I was furious with myself, and the new ticket cost me a fortune."},
        {sp:"M",t:"But I got a seat on the evening flight, and on that plane I sat next to a woman who is now my business partner."},
        {sp:"M",t:"So these days, when I tell the story, I just laugh. It was the luckiest mistake I've ever made."}],
       questions: [
        { q: "Why did he miss his flight?", options: ["He left his passport at home", "He got the time wrong", "There was heavy traffic"], answer: 0, ev: [0],
          explain: "Anh kiểm tra giờ 3 lần (không nhầm giờ), nhưng hộ chiếu để ở áo khoác khác → quên hộ chiếu." },
        { q: "How does he feel about the event now?", options: ["He sees it as lucky", "He still regrets it", "He is angry about the cost"], answer: 0, ev: [3],
          explain: "'these days… I just laugh. It was the luckiest mistake' → bây giờ thấy may mắn. Tức giận là cảm xúc LÚC ĐÓ." } ] }
    ] }
 ]
}
];

/* Bảng ghi nhớ Listening Part 3 (từ ảnh tài liệu học viên cung cấp).
   Quy ước giải mã: chữ cái đầu mỗi từ → M = Man, W/V = Woman, B = Both. */
window.LISTENING_MNEMONIC = [
 { n: "1, 2", topic: "Internet / Singer", phrase: "Woo Bin Mới Bệnh", key: "W B M B" },
 { n: "3, 4", topic: "University / Volunteering", phrase: "xe BMW Mới", key: "B M W M" },
 { n: "5", topic: "Actor", phrase: "Miule Vừa Bị Bắt", key: "M W B B" },
 { n: "6", topic: "Children and technology", phrase: "Bé Bin Muốn Wà", key: "B B M W" },
 { n: "7", topic: "Art – Vẽ tranh", phrase: "Vẽ Một Ban Mới", key: "W M B M" },
 { n: "8", topic: "Thiết kế (Design)", phrase: "Ban Muốn Vẽ Bóng", key: "B M W B" },
 { n: "9", topic: "Làm nông (Farming)", phrase: "Vui Bởi Mùa Bội", key: "W B M B" },
 { n: "10", topic: "Chính trị (Politics)", phrase: "Bàn Về Mặt Bằng", key: "B W M B" },
 { n: "11", topic: "Học ở nhà (Studying at home)", phrase: "Vừa Mệt Mà Bổ", key: "W M M B" },
 { n: "12", topic: "Văn hoá địa phương (Local culture)", phrase: "Mở Bán Vé Vào", key: "M B W W" },
 { n: "13", topic: "Công nghệ thông tin (IT)", phrase: "Mà Vẫn Vô Bổ", key: "M W W B" },
 { n: "14", topic: "Thay đổi nơi làm (Changing workplace)", phrase: "Mệt Với Bố Mẹ", key: "M W B M" },
 { n: "15", topic: "Làm đẹp (Beauty)", phrase: "Muốn Vào Bệnh Viện", key: "M W B W" }
];
