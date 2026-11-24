/* Dữ liệu dùng chung. Có thể sửa bằng Notepad.
   FILMS: danh sách link phim (YouTube, OneDrive/SharePoint hoặc đường dẫn tệp .mp4 trong assets/phim) cho từng thời kỳ.
   Mỗi thời kỳ là một danh sách trong ngoặc vuông; mỗi phim ghi {"url": "link", "title": "tên phim"} hoặc chỉ ghi link.
   1 = trước 1911, 2 = 1911–1920, 3 = 1921–1930, 4 = 1930–1945, 5 = 1945–1969 */
window.FILMS = {
 1: [{"url": "assets/phim/tk1-1.mp4", "poster": "assets/phim/tk1-1.jpg", "title": "Phim tư liệu thời kỳ trước năm 1911"}],
 2: [{"url": "assets/phim/tk2-1.mp4", "poster": "assets/phim/tk2-1.jpg", "title": "Hồ Chí Minh – Một nét danh nhân"}],
 3: [{"url": "assets/phim/tk3-1.mp4", "poster": "assets/phim/tk3-1.jpg", "title": "Phim tư liệu 1920 – 1930"}],
 4: [{"url": "assets/phim/tk4-1.mp4", "poster": "assets/phim/tk4-1.jpg", "title": "Bác Hồ đọc Tuyên ngôn độc lập 2/9/1945"},
     {"url": "assets/phim/tk4-2.mp4", "poster": "assets/phim/tk4-2.jpg", "title": "Đoạn cuối Tuyên ngôn độc lập"},
     {"url": "assets/phim/tk4-3.mp4", "poster": "assets/phim/tk4-3.jpg", "title": "Phim tư liệu kỷ niệm 100 năm Chủ tịch Hồ Chí Minh (1911 – 1945)"}],
 5: [{"url": "assets/phim/tk5-1.mp4", "poster": "assets/phim/tk5-1.jpg", "title": "Tư tưởng Hồ Chí Minh về xây dựng Nhà nước của dân, do dân và vì dân"},
     {"url": "assets/phim/tk5-2.mp4", "poster": "assets/phim/tk5-2.jpg", "title": "Bác Hồ trở lại Pháp sau 31 năm"},
     {"url": "assets/phim/tk5-3.mp4", "poster": "assets/phim/tk5-3.jpg", "title": "Lời kêu gọi toàn quốc kháng chiến"},
     {"url": "assets/phim/tk5-4.mp4", "poster": "assets/phim/tk5-4.jpg", "title": "Không có gì quý hơn độc lập, tự do – Hồ Chí Minh"}]
};

/* Ngân hàng câu hỏi: gd = thời kỳ (1–5), lv = mức độ, q = câu hỏi, o = 4 phương án, a = vị trí đáp án đúng (0=A,1=B,2=C,3=D) */
window.QS = [
 {
  "gd": 1,
  "lv": "M1",
  "q": "Chủ tịch Hồ Chí Minh sinh ngày, tháng, năm nào và ở đâu?",
  "o": [
   "19/5/1890, tại Kim Liên, Nam Đàn, Nghệ An",
   "19/5/1891, tại Kim Liên, Nam Đàn, Nghệ An",
   "19/5/1890, tại Thanh Chương, Nghệ An",
   "5/6/1890, tại Kim Liên, Nam Đàn, Nghệ An"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 1,
  "lv": "M1",
  "q": "Thân phụ của Chủ tịch Hồ Chí Minh là ai?",
  "o": [
   "Cụ Hoàng Xuân Đường",
   "Phó bảng Nguyễn Sinh Sắc",
   "Cụ Nguyễn Sinh Khiêm",
   "Chí sĩ yêu nước Phan Chu Trinh"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 1,
  "lv": "M1",
  "q": "Năm 1908, khi đang học tại Trường Quốc học Huế, Nguyễn Tất Thành đã tham gia phong trào đấu tranh nào?",
  "o": [
   "Phong trào Cần Vương",
   "Phong trào chống thuế của nông dân ở Trung Kỳ",
   "Phong trào Đông Du",
   "Khởi nghĩa nông dân Yên Thế"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 1,
  "lv": "M2",
  "q": "Truyền thống quê hương và gia đình đã hình thành ở Nguyễn Tất Thành điều gì?",
  "o": [
   "Lập trường giai cấp công nhân và tư tưởng cộng sản chủ nghĩa",
   "Khuynh hướng dựa vào ngoại viện để giành độc lập",
   "Chí lớn, lòng yêu nước nhiệt thành, thương dân sâu sắc",
   "Chủ trương cải cách ôn hòa, không dùng bạo lực"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 1,
  "lv": "M3",
  "q": "Một giáo viên mầm non thiết kế hoạt động kể chuyện “Tuổi thơ Bác Hồ”, muốn chọn chi tiết thể hiện ảnh hưởng của người mẹ đối với nhân cách của Bác. Chi tiết nào phù hợp nhất?",
  "o": [
   "Đức tính nhân hậu, đảm đang, giàu đức hy sinh của bà Hoàng Thị Loan",
   "Tư tưởng thân dân, lấy dân làm hậu thuẫn của cụ Nguyễn Sinh Sắc",
   "Truyền thống anh hùng của Mai Thúc Loan, Nguyễn Biểu, Đặng Dung nơi quê nhà",
   "Ý chí vượt khó, kiên trì học tập để đỗ Phó bảng của thân phụ"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 1,
  "lv": "M4",
  "q": "Nguyễn Tất Thành khâm phục các bậc tiền bối như Phan Bội Châu, Phan Chu Trinh, Hoàng Hoa Thám nhưng đã tự định ra hướng đi mới. Đánh giá nào đúng nhất về ý nghĩa của lựa chọn đó?",
  "o": [
   "Kế thừa nguyên vẹn đường lối cứu nước của Phan Bội Châu, Phan Chu Trinh",
   "Phủ nhận hoàn toàn giá trị của các phong trào yêu nước trước đó",
   "Xác định ngay con đường cách mạng vô sản từ khi ra đi năm 1911",
   "Mở ra khả năng tiếp cận con đường cứu nước mới, khác lớp người đi trước"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.1"
 },
 {
  "gd": 2,
  "lv": "M1",
  "q": "Năm 1919, thay mặt những người Việt Nam yêu nước, Nguyễn Ái Quốc đã gửi văn kiện nào đến Hội nghị Véc-xây?",
  "o": [
   "Tác phẩm Bản án chế độ thực dân Pháp",
   "Văn kiện Chính cương vắn tắt của Đảng",
   "Bản yêu sách 8 điểm của nhân dân An Nam",
   "Bản tuyên ngôn về quyền dân tộc tự quyết"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.2"
 },
 {
  "gd": 2,
  "lv": "M2",
  "q": "Qua quá trình bôn ba khắp các châu lục (1911–1920), Nguyễn Ái Quốc nhận thấy trên thế giới chỉ có:",
  "o": [
   "hai hạng người: người áp bức bóc lột và người bị áp bức bóc lột",
   "hai hạng người: người thuộc chủng tộc da trắng và người thuộc da màu",
   "hai loại quốc gia: chính quốc giàu có và thuộc địa nghèo khổ",
   "hai loại dân tộc: dân tộc văn minh và dân tộc còn lạc hậu"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.2"
 },
 {
  "gd": 2,
  "lv": "M2",
  "q": "Việc tiếp xúc với Luận cương của Lênin về vấn đề dân tộc và thuộc địa (7/1920) có ý nghĩa gì đối với Nguyễn Ái Quốc?",
  "o": [
   "Chính thức trở thành đảng viên của Đảng Cộng sản Pháp",
   "Hoàn chỉnh cương lĩnh chính trị đầu tiên của Đảng ta",
   "Từ bỏ mục tiêu giải phóng dân tộc để tập trung đấu tranh giai cấp",
   "Tìm thấy con đường cứu nước theo con đường cách mạng vô sản"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.2"
 },
 {
  "gd": 2,
  "lv": "M3",
  "q": "Một bạn cho rằng việc Nguyễn Ái Quốc dự Đại hội Tua (12/1920) chỉ là một hoạt động đối ngoại thông thường. Căn cứ giáo trình, luận điểm nào phản bác đúng nhất ý kiến này?",
  "o": [
   "Sự kiện đánh dấu việc Người chính thức trở về nước trực tiếp lãnh đạo cách mạng",
   "Sự kiện đánh dấu bước chuyển về chất: từ giác ngộ dân tộc đến giác ngộ giai cấp",
   "Sự kiện đánh dấu sự ra đời của Đảng Cộng sản Việt Nam trên đất Pháp",
   "Sự kiện đánh dấu việc Chính phủ Pháp công nhận các quyền tự do cho Việt Nam"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.2"
 },
 {
  "gd": 2,
  "lv": "M4",
  "q": "Từ thất bại của Yêu sách 8 điểm (1919) đến các sự kiện năm 1920, nhận định nào khái quát đúng nhất logic phát triển tư tưởng Nguyễn Ái Quốc trong giai đoạn này?",
  "o": [
   "Từ đấu tranh vũ trang chuyển hẳn sang đấu tranh nghị trường, hòa bình",
   "Từ con đường cách mạng vô sản quay trở về con đường cải lương",
   "Từ nhận thức phải tự lực cứu nước đến chọn con đường cách mạng vô sản",
   "Từ giác ngộ giai cấp đi đến giác ngộ dân tộc và lòng yêu nước"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.2"
 },
 {
  "gd": 3,
  "lv": "M1",
  "q": "Khi hoạt động ở Pháp (1921–1923), Nguyễn Ái Quốc cùng các chiến sĩ thuộc địa xuất bản tờ báo nào?",
  "o": [
   "Thanh Niên",
   "Người cùng khổ",
   "Công Nông",
   "Thân Ái"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.3"
 },
 {
  "gd": 3,
  "lv": "M1",
  "q": "Tại Quảng Châu (Trung Quốc), Nguyễn Ái Quốc đã thành lập tổ chức nào?",
  "o": [
   "Hội Liên hiệp thuộc địa",
   "Mặt trận Dân chủ Đông Dương",
   "Mặt trận Việt Nam độc lập đồng minh",
   "Hội Việt Nam Cách mạng Thanh niên"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.3"
 },
 {
  "gd": 3,
  "lv": "M2",
  "q": "Luận điểm nào sau đây thuộc nội dung tư tưởng Hồ Chí Minh được hình thành cơ bản trong giai đoạn 1921–1930?",
  "o": [
   "Cách mạng thuộc địa có thể thắng lợi trước cách mạng vô sản ở chính quốc",
   "Cách mạng thuộc địa phải chờ cách mạng vô sản ở chính quốc thắng lợi trước",
   "Cách mạng là sự nghiệp của một số ít người có tài năng, có học thức",
   "Nhiệm vụ hàng đầu của cách mạng thuộc địa là đấu tranh giai cấp"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.3"
 },
 {
  "gd": 3,
  "lv": "M3",
  "q": "Chi đoàn lớp muốn phát động phong trào giữ gìn vệ sinh môi trường. Vận dụng luận điểm “cách mạng là sự nghiệp của quần chúng” (1921–1930), cách làm nào phù hợp nhất?",
  "o": [
   "Giao toàn bộ công việc cho Ban chấp hành chi đoàn tự thực hiện",
   "Chờ nhà trường cấp đủ kinh phí, phương tiện rồi mới bắt đầu triển khai",
   "Tuyên truyền, giác ngộ, tổ chức đoàn viên làm từ việc nhỏ đến việc lớn",
   "Yêu cầu mọi đoàn viên tham gia ngay với quy mô lớn nhất có thể"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.3"
 },
 {
  "gd": 3,
  "lv": "M4",
  "q": "Trong giai đoạn 1921–1930, Hồ Chí Minh nêu sự cần thiết phải bổ sung, hoàn chỉnh chủ nghĩa Mác – Lênin bằng thực tiễn các dân tộc phương Đông. Điều này phản ánh rõ nhất phẩm chất nào của Người?",
  "o": [
   "Phủ nhận giá trị phổ biến của chủ nghĩa Mác – Lênin ở phương Đông",
   "Tư duy độc lập, sáng tạo; vận dụng lý luận gắn với thực tiễn cụ thể",
   "Tiếp thu lý luận một cách giáo điều, máy móc, không cần điều chỉnh",
   "Đề cao kinh nghiệm phương Đông hơn so với lý luận khoa học cách mạng"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.3"
 },
 {
  "gd": 4,
  "lv": "M1",
  "q": "Sau khi về nước năm 1941, Hồ Chí Minh triệu tập Hội nghị Trung ương lần thứ Tám vào thời gian nào?",
  "o": [
   "Tháng 5/1941",
   "Tháng 2/1930",
   "Tháng 10/1930",
   "Tháng 8/1945"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.4"
 },
 {
  "gd": 4,
  "lv": "M2",
  "q": "Vì sao Quốc tế Cộng sản phê phán Hồ Chí Minh có tư tưởng “hữu khuynh”?",
  "o": [
   "Vì Người chủ trương khởi nghĩa vũ trang ngay khi vừa thành lập Đảng",
   "Vì Người từ chối hợp tác và chịu sự chỉ đạo của Quốc tế Cộng sản",
   "Vì Người nhấn mạnh vấn đề dân tộc trong cách mạng dân tộc dân chủ",
   "Vì Người đề cao vấn đề giai cấp hơn vấn đề dân tộc ở thuộc địa"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.4"
 },
 {
  "gd": 4,
  "lv": "M2",
  "q": "Nội dung cốt lõi của chủ trương chuyển hướng chiến lược do Hồ Chí Minh hoàn chỉnh tại Hội nghị Trung ương 8 (5/1941) là gì?",
  "o": [
   "Đặt cách mạng ruộng đất lên hàng đầu, tạm gác nhiệm vụ giải phóng dân tộc",
   "Thành lập Mặt trận Dân chủ Đông Dương để đòi dân sinh, dân chủ, hòa bình",
   "Thực hiện kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính",
   "Đặt giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.4"
 },
 {
  "gd": 4,
  "lv": "M3",
  "q": "Sự kiện nào trong giai đoạn 1930–1945 được giáo trình xác định là “thực chất là sự trở lại với tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc”?",
  "o": [
   "Quốc tế Cộng sản phê chuẩn Chính cương vắn tắt ngay trong năm 1930",
   "Đảng công bố Chính sách mới (1936), lập Mặt trận Dân chủ Đông Dương",
   "Đảng đặt cách mạng ruộng đất lên hàng đầu trong Chính sách mới (1936)",
   "Quốc tế Cộng sản phê phán xu hướng “hữu” khuynh tại Đại hội VII"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.4"
 },
 {
  "gd": 4,
  "lv": "M4",
  "q": "Vì sao có thể khẳng định giai đoạn 1930–1945 vừa là thời kỳ thử thách gay go nhất, vừa là thời kỳ khẳng định mạnh mẽ nhất giá trị tư tưởng Hồ Chí Minh?",
  "o": [
   "Vì tư tưởng của Người từng bị phê phán nhưng được Cách mạng tháng Tám chứng minh đúng",
   "Vì Người hoạt động ở nước ngoài suốt cả giai đoạn, không trực tiếp lãnh đạo cách mạng",
   "Vì Quốc tế Cộng sản đã ủng hộ hoàn toàn đường lối của Người ngay từ năm 1930",
   "Vì trong giai đoạn này cách mạng đã hoàn thành xây dựng chủ nghĩa xã hội cả nước"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.4"
 },
 {
  "gd": 5,
  "lv": "M1",
  "q": "Đường lối chiến tranh nhân dân trong kháng chiến chống thực dân Pháp (1946–1954) được xác định là:",
  "o": [
   "Toàn dân, toàn diện, thần tốc, dựa vào ngoại viện là chính",
   "Toàn quân, toàn diện, lâu dài, dựa vào đồng minh là chính",
   "Toàn dân, từng phần, nhanh gọn, dựa vào sức mình là chính",
   "Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.5"
 },
 {
  "gd": 5,
  "lv": "M2",
  "q": "Trong giai đoạn 1945–1946, phương châm đối ngoại “dĩ bất biến, ứng vạn biến” của Hồ Chí Minh có nghĩa là:",
  "o": [
   "Thay đổi mục tiêu chiến lược cho phù hợp với từng đối tác cụ thể",
   "Giữ vững mục tiêu không đổi, ứng xử mềm dẻo trước tình huống thay đổi",
   "Kiên quyết không thương lượng, chỉ sử dụng biện pháp quân sự",
   "Giữ nguyên mọi sách lược, không điều chỉnh theo diễn biến của tình hình"
  ],
  "a": 1,
  "ref": "Giáo trình, Chương 1, mục 2.5"
 },
 {
  "gd": 5,
  "lv": "M2",
  "q": "Nội dung nào được Hồ Chí Minh bổ sung, phát triển và hoàn thiện trong thời kỳ 1954–1969?",
  "o": [
   "Tìm thấy con đường cứu nước theo con đường cách mạng vô sản",
   "Chuyển hướng chiến lược, đặt giải phóng dân tộc lên hàng đầu",
   "Tư tưởng về CNXH và con đường quá độ lên CNXH ở Việt Nam",
   "Hình thành chí hướng cứu nước, quyết định ra đi tìm đường"
  ],
  "a": 2,
  "ref": "Giáo trình, Chương 1, mục 2.5"
 },
 {
  "gd": 5,
  "lv": "M3",
  "q": "Trường mầm non chuẩn bị ban hành quy định mới về giờ đón, trả trẻ. Vận dụng tư tưởng Hồ Chí Minh về nhà nước “của dân, do dân, vì dân”, cách làm nào phù hợp nhất?",
  "o": [
   "Lấy ý kiến phụ huynh, giáo viên trước khi ban hành quy định",
   "Ban giám hiệu tự quyết định mọi việc để bảo đảm nhanh gọn",
   "Chỉ công khai quy định sau khi đã thực hiện được một thời gian",
   "Chỉ lấy ý kiến những người giữ chức vụ quản lý trong trường"
  ],
  "a": 0,
  "ref": "Giáo trình, Chương 1, mục 2.5"
 },
 {
  "gd": 5,
  "lv": "M4",
  "q": "Thời kỳ 1954–1969, tư tưởng Hồ Chí Minh “hợp thành một hệ thống quan điểm lý luận về cách mạng Việt Nam”. Nhận định nào đánh giá đúng nhất tính chất của sự hoàn thiện này?",
  "o": [
   "Là sự sao chép mô hình xây dựng CNXH của các nước đi trước",
   "Là điểm kết thúc của tư tưởng, không cần tiếp tục bổ sung, phát triển thêm",
   "Chỉ là sự lặp lại các luận điểm đã được nêu ra trước năm 1930",
   "Là kết quả tổng kết thực tiễn, phát triển sáng tạo chủ nghĩa Mác – Lênin"
  ],
  "a": 3,
  "ref": "Giáo trình, Chương 1, mục 2.5"
 }
];
