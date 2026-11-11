/* Đề Reading do giáo viên biên soạn theo cấu trúc Aptis General (British Council):
   Part 1 Sentence comprehension (5 câu, 3 lựa chọn) · Part 2 Text cohesion (2 bài, sắp xếp câu)
   Part 3 Opinion matching (4 người, 7 câu) · Part 4 Long text (7 đoạn, 8 tiêu đề). */
window.READING_TESTS = [
{
 id: "R01", title: "Reading Test 1", time: 35,
 parts: [
  { type: "gap", title: "Part 1 – Sentence comprehension",
    instr: "Read the email from Mai to her friend. Choose one word from the list for each gap.",
    head: "Hi Hoa,", tail: "Love, Mai",
    items: [
     { pre: "I've just arrived in Da Lat. The hotel is very", post: ".", options: ["comfortable", "comfortably", "comfort"], answer: 0,
       explain: "Sau 'very' và động từ 'is' cần một TÍNH TỪ (S + be + very + adj). 'comfortably' là trạng từ, 'comfort' là danh từ/động từ." },
     { pre: "My room is on the third", post: ".", options: ["floor", "roof", "ground"], answer: 0,
       explain: "'on the third floor' = ở tầng ba. 'roof' (mái nhà) và 'ground' (mặt đất) không đi với số thứ tự." },
     { pre: "I can see the lake from the", post: ".", options: ["window", "door", "wall"], answer: 0,
       explain: "Ta nhìn ra hồ 'từ cửa sổ' (from the window). Không thể nhìn xuyên qua 'wall' (tường)." },
     { pre: "Tomorrow we are going to", post: "a flower garden.", options: ["visit", "visiting", "visited"], answer: 0,
       explain: "Cấu trúc tương lai dự định: be going to + ĐỘNG TỪ NGUYÊN MẪU → 'are going to visit'." },
     { pre: "Please", post: "me tonight if you are free.", options: ["call", "calls", "calling"], answer: 0,
       explain: "Câu mệnh lệnh / lời đề nghị lịch sự: Please + động từ nguyên mẫu → 'Please call me'." }
    ] },
  { type: "order", title: "Part 2 – Text cohesion (Task 1)",
    instr: "Put the sentences in the right order. The first sentence is done for you.",
    first: "Last summer, Nam decided to learn how to swim.",
    sentences: [
     "He found a swimming class at a sports centre near his house.",
     "The class started at six o'clock every morning, so he had to get up very early.",
     "At first, this was very difficult because he was always tired.",
     "However, after two weeks, he got used to the early mornings.",
     "By the end of the summer, he could swim fifty metres without stopping."
    ],
    clues: [
     "'He' thay cho Nam; 'a swimming class' là thông tin MỚI (mạo từ a) nên đứng trước.",
     "'The class' (mạo từ the) nhắc lại lớp học vừa nói ở câu trước.",
     "'this' thay cho việc 'phải dậy rất sớm' ở câu trước.",
     "'However' (tuy nhiên) tạo đối lập với khó khăn vừa nêu; 'the early mornings' nhắc lại 'get up very early'.",
     "'By the end of the summer' là mốc thời gian kết thúc câu chuyện → câu cuối."
    ] },
  { type: "order", title: "Part 2 – Text cohesion (Task 2)",
    instr: "Put the sentences in the right order. The first sentence is done for you.",
    first: "The city library is going to make some changes next month.",
    sentences: [
     "The most important change is that it will open on Sundays.",
     "On that day, it will open from 9 a.m. to 1 p.m. only.",
     "To pay for these extra hours, the library will close its café.",
     "Instead, visitors can buy drinks from a new machine near the entrance.",
     "The library manager hopes that these changes will help more people use the library."
    ],
    clues: [
     "'The most important change' triển khai từ 'some changes' ở câu mở đầu.",
     "'On that day' = Chủ nhật vừa nhắc đến.",
     "'these extra hours' = giờ mở cửa thêm vào Chủ nhật.",
     "'Instead' (thay vào đó) chỉ hợp lý sau khi biết quán café bị đóng.",
     "Câu tổng kết: 'these changes' gom lại toàn bộ thay đổi → đặt cuối."
    ] },
  { type: "opinion", title: "Part 3 – Opinion matching",
    instr: "Four people talk about working from home. Read the texts and answer the questions. Who…?",
    people: [
     { name: "Anna", text: "I started working from home two years ago and I would never go back to the office. I used to spend almost two hours a day in traffic, and now I use that time to exercise or cook proper meals. My company was worried that we would work less, but in fact our team finishes projects faster than before. The only thing I miss is chatting with colleagues at lunch." },
     { name: "Ben", text: "Working from home sounds wonderful, but it didn't suit me at all. I live in a small flat with two young children, so it was impossible to concentrate. I also found that I never really stopped working, because my laptop was always on the kitchen table. Now I go to the office four days a week, and I feel much less stressed." },
     { name: "Chi", text: "I think the best solution is a mix of both. When I need to write reports, I stay at home because it is quiet. But meetings and new ideas work much better face to face. Young employees especially need to be in the office, because they learn so much by watching experienced colleagues." },
     { name: "David", text: "As a manager, I am not against working from home, but companies need clear rules. Some staff answer emails late at night and then feel exhausted. In my department, nobody is allowed to send messages after 7 p.m. I also think the company should help pay for things like a good chair and a fast internet connection." }
    ],
    items: [
     { s: "says their family situation made working at home difficult?", answer: 1, ev: "I live in a small flat with two young children, so it was impossible to concentrate",
       explain: "Ben: sống trong căn hộ nhỏ với hai con nhỏ → không thể tập trung. 'family situation' là cách diễn đạt lại (paraphrase) của 'two young children'." },
     { s: "believes new workers benefit from being in the office?", answer: 2, ev: "Young employees especially need to be in the office",
       explain: "Chi: 'Young employees' = 'new workers'; họ học được nhiều khi quan sát đồng nghiệp có kinh nghiệm." },
     { s: "thinks employers should cover some home-office costs?", answer: 3, ev: "the company should help pay for things like a good chair and a fast internet connection",
       explain: "David: công ty nên hỗ trợ chi phí ghế, internet. 'cover costs' = 'help pay for'." },
     { s: "says that productivity has improved?", answer: 0, ev: "our team finishes projects faster than before",
       explain: "Anna: nhóm hoàn thành dự án nhanh hơn trước → năng suất (productivity) tăng. Bẫy: David cũng nói về làm việc từ xa nhưng không nói năng suất." },
     { s: "chooses where to work depending on the task?", answer: 2, ev: "When I need to write reports, I stay at home",
       explain: "Chi: viết báo cáo thì ở nhà, họp thì đến công ty → chọn nơi làm theo loại công việc." },
     { s: "has introduced a rule to protect staff's free time?", answer: 3, ev: "nobody is allowed to send messages after 7 p.m.",
       explain: "David đặt quy định không gửi tin nhắn sau 7 giờ tối. Bẫy: Ben cũng nói làm việc quá giờ nhưng không đặt ra quy định nào." },
     { s: "misses the social side of the workplace?", answer: 0, ev: "The only thing I miss is chatting with colleagues at lunch",
       explain: "Anna nhớ những lúc trò chuyện với đồng nghiệp buổi trưa = 'the social side'." }
    ] },
  { type: "headings", title: "Part 4 – Long text comprehension",
    instr: "Read the text 'Learning a language as an adult'. Choose the best heading for each paragraph. There is one heading you do not need.",
    textTitle: "Learning a language as an adult",
    headings: ["A common belief that is not entirely true", "The power of having a clear reason", "Little and often", "Digital tools: helpful but limited", "Overcoming the fear of looking foolish", "Learning through what you enjoy", "Setting realistic goals", "Children's natural advantage"],
    paragraphs: [
     { text: "Many adults believe it is too late to learn a new language. They remember how quickly children pick up words and assume that their own brains are no longer able to do the same. Research, however, tells a different story. Although children often develop better pronunciation, adults usually learn grammar and vocabulary faster in the early stages, because they can use their experience and their ability to think logically.", answer: 0,
       explain: "Đoạn nêu niềm tin phổ biến ('Many adults believe…') rồi phản bác ('Research, however, tells a different story'). Bẫy: 'Children's natural advantage' chỉ đúng một chi tiết nhỏ (phát âm), không phải ý chính." },
     { text: "One reason adults succeed is that they usually know exactly why they are learning. A nurse who wants to work abroad or a businessman who deals with foreign partners has a clear goal. This goal keeps them going when lessons become difficult. Teachers say that learners with a specific purpose are much less likely to give up than those who study simply because it seems like a good idea.", answer: 1,
       explain: "Từ khóa: 'know exactly why they are learning', 'clear goal', 'specific purpose' → sức mạnh của một lý do rõ ràng." },
     { text: "The biggest problem for most adult learners is not ability but time. Between work, family and other responsibilities, finding an hour a day can seem impossible. Experts suggest that short, regular practice is more effective than long sessions once a week. Fifteen minutes on the bus every morning, listening to a podcast or reviewing new words, can make a real difference over several months.", answer: 2,
       explain: "'short, regular practice is more effective than long sessions' = học ít nhưng đều đặn (Little and often)." },
     { text: "Technology has made this kind of practice much easier. Mobile apps send reminders, check pronunciation and turn vocabulary practice into a game. Video calls allow learners to talk to teachers in other countries without leaving home. However, teachers warn that apps alone are rarely enough. They are useful for building vocabulary, but learners still need real conversations to become confident speakers.", answer: 3,
       explain: "Đoạn nêu lợi ích của công nghệ, sau đó 'However… apps alone are rarely enough' → hữu ích nhưng có giới hạn." },
     { text: "Many adults are also afraid of making mistakes. At work they are experienced and respected, so feeling like a beginner again can be uncomfortable. Some stay silent in class because they do not want to look foolish. Good teachers create a relaxed atmosphere where errors are seen as a normal part of learning, and they remind students that even native speakers make mistakes.", answer: 4,
       explain: "Từ khóa 'afraid of making mistakes', 'do not want to look foolish' → vượt qua nỗi sợ bị trông ngớ ngẩn." },
     { text: "Another useful strategy is to connect the language with personal interests. Someone who loves cooking can follow recipes in English; a football fan can listen to match commentary. Because the content is enjoyable, learners spend more time with the language without feeling that they are studying. They also learn the exact words they are most likely to need.", answer: 5,
       explain: "'connect the language with personal interests', 'the content is enjoyable' → học qua điều mình yêu thích." },
     { text: "Finally, it is important to measure progress in a realistic way. Adults often compare themselves with fluent speakers and feel disappointed. A better approach is to set small, achievable targets, such as ordering a meal or writing a short email without help. Taking an official test every year or two can also provide motivation and show how far a learner has come.", answer: 6,
       explain: "'set small, achievable targets' = đặt mục tiêu thực tế. Tiêu đề thừa của bài là 'Children's natural advantage'." }
    ] }
 ]
},
{
 id: "R02", title: "Reading Test 2", time: 35,
 parts: [
  { type: "gap", title: "Part 1 – Sentence comprehension",
    instr: "Read the note from Linh to her colleague. Choose one word from the list for each gap.",
    head: "Hi Tom,", tail: "Thanks, Linh",
    items: [
     { pre: "The meeting has been", post: "to Thursday.", options: ["moved", "move", "moving"], answer: 0,
       explain: "Bị động thì hiện tại hoàn thành: has been + V3/ed → 'has been moved' (đã được dời)." },
     { pre: "It will start", post: "10 a.m. in room 205.", options: ["at", "on", "in"], answer: 0,
       explain: "Giới từ chỉ giờ cụ thể: AT + giờ (at 10 a.m.). ON dùng cho ngày, IN cho tháng/năm/buổi." },
     { pre: "Please", post: "the sales report with you.", options: ["bring", "bought", "brings"], answer: 0,
       explain: "Please + động từ nguyên mẫu. 'bring something with you' = mang theo." },
     { pre: "Mr Hai cannot come because he is", post: ".", options: ["ill", "illness", "illy"], answer: 0,
       explain: "Sau 'be' cần tính từ: 'ill' (ốm). 'illness' là danh từ; 'illy' không tồn tại." },
     { pre: "I'll", post: "you the agenda this afternoon.", options: ["send", "sent", "sending"], answer: 0,
       explain: "I'll = I will + động từ nguyên mẫu → 'I'll send'." }
    ] },
  { type: "order", title: "Part 2 – Text cohesion (Task 1)",
    instr: "Put the sentences in the right order. The first sentence is done for you.",
    first: "My grandfather opened a small bakery in our village in 1985.",
    sentences: [
     "At that time, he made only one kind of bread.",
     "It was so popular that people queued outside the shop every morning.",
     "Because of this success, he started to make cakes as well.",
     "Soon these cakes became even more famous than the bread.",
     "Today, my mother runs the bakery, but she still uses his original recipes."
    ],
    clues: [
     "'At that time' = năm 1985 ở câu mở đầu.",
     "'It' thay cho 'one kind of bread' – loại bánh mì duy nhất.",
     "'this success' tóm tắt việc mọi người xếp hàng mua bánh.",
     "'these cakes' nhắc lại 'cakes' vừa được giới thiệu.",
     "'Today' đưa câu chuyện về hiện tại → câu kết."
    ] },
  { type: "order", title: "Part 2 – Text cohesion (Task 2)",
    instr: "Put the sentences in the right order. The first sentence is done for you.",
    first: "If you want to join Green Fitness Club, please follow these steps.",
    sentences: [
     "First, fill in the online form on our website.",
     "After that, you will receive an email with your member number.",
     "Bring this number and a photo to the reception desk.",
     "The staff there will give you your membership card.",
     "With this card, you can use all the facilities from the following day."
    ],
    clues: [
     "'First' mở đầu chuỗi các bước.",
     "'After that' – bước tiếp theo sau khi điền form.",
     "'this number' = 'your member number' trong email.",
     "'there' = tại quầy lễ tân (reception desk).",
     "'this card' = 'membership card' vừa nhận."
    ] },
  { type: "opinion", title: "Part 3 – Opinion matching",
    instr: "Four people talk about children and smartphones. Read the texts and answer the questions. Who…?",
    people: [
     { name: "Mrs Hoa", text: "My son got his first phone when he was twelve, mainly because he travels to school by bus and I wanted to know he was safe. We agreed on rules from the start: no phone at the dinner table and no phone in the bedroom after nine. To be honest, it has been easier than I expected, and he often uses it to look up information for his homework." },
     { name: "Mr Peter", text: "In my classroom, phones cause more problems than they solve. Students check messages instead of listening, and some have been unkind to classmates on social media. Our school now asks pupils to leave their phones in a box at the start of the day. Since then, I have noticed that children talk to each other much more at break time." },
     { name: "Linh", text: "Adults always talk about the dangers, but for my generation a phone is how we stay in touch. My friends organise everything in group chats, so without a phone you are left out. I do agree that younger children don't need one, though. My little sister is eight and I think she should play outside instead." },
     { name: "Dr Tran", text: "My main concern is sleep. Many teenagers I see are tired because they use screens late at night, and the light from the screen makes it harder to fall asleep. I advise families to charge phones outside the bedroom. I would also like phone companies to make simpler phones for children, with only calls and messages." }
    ],
    items: [
     { s: "thinks phone makers should design special devices for young users?", answer: 3, ev: "phone companies to make simpler phones for children",
       explain: "Dr Tran muốn các hãng điện thoại làm điện thoại đơn giản cho trẻ em. 'phone makers' = 'phone companies'." },
     { s: "says that having a phone is necessary for a social life?", answer: 2, ev: "without a phone you are left out",
       explain: "Linh: không có điện thoại sẽ bị 'bỏ rơi' khỏi nhóm bạn → điện thoại cần cho đời sống xã hội." },
     { s: "reports a positive change after phones were banned?", answer: 1, ev: "Since then, I have noticed that children talk to each other much more",
       explain: "Mr Peter: sau khi trường thu điện thoại, học sinh nói chuyện với nhau nhiều hơn → thay đổi tích cực." },
     { s: "gave a child a phone for safety reasons?", answer: 0, ev: "I wanted to know he was safe",
       explain: "Mrs Hoa cho con dùng điện thoại vì muốn biết con an toàn khi đi xe buýt." },
     { s: "mentions that phones can help with school work?", answer: 0, ev: "he often uses it to look up information for his homework",
       explain: "Mrs Hoa: con dùng điện thoại tra cứu thông tin làm bài tập. Bẫy: Mr Peter nói về lớp học nhưng theo hướng tiêu cực." },
     { s: "believes there should be an age limit for owning a phone?", answer: 2, ev: "younger children don't need one",
       explain: "Linh cho rằng trẻ nhỏ không cần điện thoại (em gái 8 tuổi) → nên có giới hạn độ tuổi." },
     { s: "links phone use with a health problem?", answer: 3, ev: "the light from the screen makes it harder to fall asleep",
       explain: "Dr Tran nói về giấc ngủ – vấn đề sức khỏe. Bẫy: Mrs Hoa cũng nhắc 'bedroom after nine' nhưng không nói đến sức khỏe." }
    ] },
  { type: "headings", title: "Part 4 – Long text comprehension",
    instr: "Read the text 'Community gardens'. Choose the best heading for each paragraph. There is one heading you do not need.",
    textTitle: "Community gardens",
    headings: ["A growing trend in urban areas", "Cheaper, fresher food", "Bringing neighbours together", "Benefits for nature and the climate", "A classroom without walls", "The struggle for space", "Plans for the future", "How to grow vegetables on a balcony"],
    paragraphs: [
     { text: "In cities around the world, empty pieces of land are being turned into community gardens. These are spaces where local people share the work of growing vegetables, fruit and flowers. Twenty years ago they were rare, but today cities such as London, New York and Singapore have hundreds of them, and the number is still rising every year.", answer: 0,
       explain: "'the number is still rising every year', 'Twenty years ago they were rare' → một xu hướng đang tăng ở thành phố." },
     { text: "For many families, the most obvious benefit is what they can put on the table. Vegetables picked in the morning and eaten the same evening taste far better than those that have travelled hundreds of kilometres. In poorer neighbourhoods, gardeners say they can save a significant amount of money during the summer months, when the gardens produce the most.", answer: 1,
       explain: "Từ khóa: 'taste far better' (tươi hơn) và 'save a significant amount of money' (rẻ hơn)." },
     { text: "The gardens also have a strong social role. In large apartment buildings, people often live next door to each other for years without speaking. Working side by side in a garden changes this. Older residents who live alone say the garden is often the only place where they have a real conversation during the week.", answer: 2,
       explain: "'people… live next door… without speaking. Working side by side… changes this' → gắn kết hàng xóm." },
     { text: "Environmental experts are equally enthusiastic. Green spaces help to cool streets during hot summers, and soil absorbs rainwater that would otherwise flood the roads. Gardens also provide food and shelter for bees and birds, which have been disappearing from many city centres.", answer: 3,
       explain: "Làm mát đường phố, hấp thụ nước mưa, nơi ở cho ong và chim → lợi ích cho thiên nhiên và khí hậu." },
     { text: "Many schools have started to use nearby gardens for lessons. Children who have never seen a carrot growing learn where their food comes from, and science lessons about plants and insects become much more memorable. Teachers report that pupils who find it hard to sit still in class are often the most enthusiastic gardeners.", answer: 4,
       explain: "Trường học dùng vườn để dạy học ngoài trời → 'A classroom without walls'." },
     { text: "However, finding land is a constant problem. In growing cities, land is extremely valuable, and builders are always looking for new places to build offices and flats. Many gardens only have short contracts, and some have been closed after years of hard work because the owner decided to sell the land.", answer: 5,
       explain: "'finding land is a constant problem', bị đóng cửa vì chủ đất bán → cuộc đấu tranh giành không gian." },
     { text: "Some city councils now want to make gardens a permanent part of city life. New housing projects in several countries must include shared green space, and architects are designing rooftop gardens for schools and hospitals. If these plans succeed, the next generation of city children may grow up with a garden just a few minutes from home.", answer: 6,
       explain: "Các dự án mới, kiến trúc sư thiết kế vườn trên mái, 'If these plans succeed' → kế hoạch tương lai. Tiêu đề thừa: 'How to grow vegetables on a balcony'." }
    ] }
 ]
}
];
