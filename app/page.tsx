'use client'


import VideoItem from "@/components/VideoItem";
import DanceItem from "@/components/DanceItem";
import { useState } from "react";
import { Music, Users } from "lucide-react";

const songs = [
  {
    title: "Nhịp Tim Người Lính - Sư Đoàn 375",
    videoId: "zf7Q1ci8guI",
    videoId2: "zf7Q1ci8guI",
   lyrics: `Còn đẹp mãi trong tim người lính chúng tôi
Sư đoàn 375 khai sinh trên quê Bác
Dòng truyền thống vinh quang cha anh đã ghi
Thôi thúc thế hệ hôm nay và mai sau
Ghi thêm chiến công sáng ngời
Giữ đẹp bầu trời quê hương

Từ Lạng Sơn đến Sài Gòn
Từ thành phố đến hải đảo
Bước chân sư đoàn đã qua
Giữ đẹp bầu trời bao la

Từ Nghệ An yêu thương
Về miền Trung quê hương trung dũng kiên cường
Muôn đời ngời sáng non nước mây trời Quảng Nam
Đà Nẵng lung linh soi bóng Sư đoàn 375

Từ Điện Biên giữa Hà Nội
Về thành phố sáng rực cờ
Máu xương xây đẹp chiến công
Đất mẹ ngàn đời thiêng liêng

Vì đàn con yêu thương
Vì trời xanh quê hương
Nâng bước sư đoàn không ngừng dựng xây

Ghi nhớ muôn đời tiếng rung của đất
Con đi nghe tiếng tim mình
Vang bài ca...`
  },
  {
    title: "Tiến Quân Ca",
    videoId: "CqUKVxYRsVw",
    videoId2: "gy7_kS8PJHo",
    lyrics: `Đoàn quân Việt Nam đi

Chung lòng cứu quốc,

Bước chân dồn vang trên đường gập ghềnh xa,

Cờ in máu chiến thắng mang hồn nước,

Súng ngoài xa chen khúc quân hành ca,

Đường vinh quang xây xác quân thù,

Thắng gian lao cùng nhau lập chiến khu,

Vì nhân dân chiến đấu không ngừng,

Tiến mau ra sa trường.

Tiến lên! Cùng tiến lên!

Nước non Việt Nam ta vững bền.`
  },
  {
    title: "Quốc Tế Ca",
    videoId: "b2QLHQYmjIg",
    videoId2: "_DaDMvA_Gkw",
    lyrics: `Vùng lên hỡi các nô lệ ở thế gian!

Vùng lên hỡi ai cực khổ bần hàn!

Sục sôi nhiệt huyết trong tâm đầy chứa rồi

Quyết phen này sống chết mà thôi.

 

Chế độ xưa ta mau phá sạch tan tành

Toàn nô lệ vùng đứng lên đi

Nay mai cuộc đời của toàn dân khác xưa,

bao nhiêu quyền lợi tất qua tay mình.

 

Đấu tranh này là trận cuối cùng,

Kết đoàn lại để ngày mai

Lin-ter-na-ti-o-na le sẽ là xã hội tương lai.

 

Đấu tranh này là trận cuối cùng,

Kết đoàn lại để ngày mai

Lin-ter-na-ti-o-na le sẽ là xã hội tương lai.`
  },
  {
    title: "Chào Mừng Đảng Cộng Sản Việt Nam",
    videoId: "xIalBtA-VY8",
    videoId2: "Vq8gTyRE6wo",
    lyrics: `Vừng trời đông 
ánh hồng tươi sáng bừng lên
Đàn bồ câu trắng bay 
về trong nắng mới
Ngàn triệu dân 
siết tay nhau
Đứng quanh Đảng 
Cộng Sản Việt Nam
Khối kết đoàn 
công nông bền vững

Đời cần lao 
ấm tình yêu chói niềm tin
Vì ngày mai 
ấm no tự do hạnh phúc
Nào cầm tay sát vai nhau
Súng búa liềm 
trên đường tranh đấu
Tới hòa bình 
nhà máy búa rền
Lúa vàng ngập đồng

Đảng Cộng Sản Việt Nam
Vì nhân dân 
tiền phong đấu tranh`
  },
  {
    title: "Ca Ngợi Hồ Chủ Tịch",
    videoId: "fFwtr5VbTIE",
    videoId2: "Eemk8gn8G3Y",
    lyrics: `Sao vàng phấp phới ánh hồng sáng tươi 
Toàn Việt Nam đón chào ngày mới 
Hồ Chí Minh dắt toàn dân nước ta 
Vững bền tranh đấu cho đời chúng ta
Hồ Chí Minh muôn năm 
Giải phóng cho nhân dân 
Xây dựng non nước Việt Nam

Hồ Chí Minh dắt toàn dân nước ta 
Vững bền tranh đấu cho đời chúng ta
Hồ Chí Minh muôn năm 
Giải phóng cho nhân dân 
Xây dựng non nước Việt Nam

Tiếng người tha thiết kêu gọi bốn phương
Cờ vùng lên quân thù gục xuống
Hồ Chí Minh sáng ngời gương đấu tranh
Vững bền đưa chúng ta vượt khó khăn
Hồ Chí Minh muôn năm 
Chỉ lối cho nhân dân 
Đến ngày chiến thắng vẻ vang

Hồ Chí Minh sáng ngời gương đấu tranh
Vững bền đưa chúng ta vượt khó khăn
Hồ Chí Minh muôn năm 
Chỉ lối cho nhân dân 
Đến ngày chiến thắng vẻ vang

Muôn lòng sung sướng muôn lời hát ca
Trời Việt Nam hòa bình nở hoa
Hồ Chí Minh muốn toàn dân sướng vui 
Vững bền xây đắp nên đời thắm tươi
Hồ Chí Minh muôn năm 
Ngời sáng soi tương lai 
Ơn này ghi nhớ nào phai 

Hồ Chí Minh muốn toàn dân sướng vui 
Vững bền xây đắp nên đời thắm tươi
Hồ Chí Minh muôn năm 
Ngời sáng soi tương lai 
Ơn này ghi nhớ nào phai `
  },
  {
    title: "Vì Nhân Dân Quên Mình",
    videoId: "N6uBLlQkc6k",
    videoId2: "Ba4LEinB5-Q",
    lyrics: `Vì nhân dân quên mình, vì nhân dân hy sinh,

Anh em ơi, vì nhân dân quên mình,

Đoàn Vệ quốc chúng ta ở nhân dân mà ra,

Được dân mến, được dân tin muôn phần.

 

Thề vì dân suốt đời, thề tranh đấu không ngừng,

Vì đất nước thân yêu mà hy sinh,

Thề diệt hết đế quốc kia, giành tự do hòa bình,

Đoàn Vệ quốc quên mình vì nhân dân.

 

Thề noi gương Bác Hồ, vì nhân dân gian lao,

Trong bao năm Người tranh đấu không ngừng,

Người chỉ biết có dân, ngày ngày lo sao cho,

Toàn dân ấm, toàn dân no, được học hành.

 

Người chỉ vui khi nào toàn dân hết đau thương,

Người tranh đấu đem tương lai về cho dân,

Đoàn Vệ quốc chúng ta là con yêu của Người,

Thề noi gương suốt đời vì nhân dân.`
  },
  {
    title: "Tiến Bước Dưới Quân Kỳ",
    videoId: "6sBMr4UyUd0",
    videoId2: "Xn3jPF1_zgI",
    lyrics: `Vừng đông đã hửng sáng,
Núi non xanh ngàn trùng xa,
Tổ quốc bao la hiền hòa,
Tươi thắm bóng cờ vờn bay trên cao,
Muôn trái tim này hòa nhịp cùng ngàn lời ca trong sóng lúa,
Lấp lánh sao bay trên quân kỳ.

Nghe rung núi đồi từng bước ta đi,
Nhắc tới chiến công ngàn năm xưa,
Nhìn cờ hồng bay rực rỡ,
Gương bao anh hùng bừng cháy trong tim,
Quên thân mình một niềm tin trong phong ba,
Tô thắm tươi thêm màu cờ,
Giữ vững hòa bình, dựng xây tương lai,
Chân trời mới sáng ngời quân ta đi.

Ghi sâu trong lòng từng bước ta đi,
Mãi mãi vững tin Đảng tiên phong,
Bộ đội của ta đã mạnh lớn,
Lớp lớp sóng người vững bước dưới cờ,
Vinh quang này là đoàn quân ta chiến thắng,
Đây ánh quân kỳ chiếu sáng ngời.`
  },
  {
    title: "Giải Phóng Điện Biên",
    videoId: "AUTXWNd8WJE",
    videoId2: "FDndd71D4_Y",
    lyrics: `1- 
Giải phóng Điện Biên bộ đội ta tiến quân trở về,
Giữa mùa này hoa nở miền Tây Bắc tưng bừng vui.
Bản mường xưa nương lúa mới trồng,
Kìa đàn em bé giữa đồng nắm tay xòe hoa.

Dọc đường chiến thắng ta tiến về,
Đoàn dân công tiền tuyến vẫy chào pháo binh vượt qua.
Súng đại bác quấn lá ngụy trang,
Từng đàn bươm bướm trắng rỡn lá ngụy trang.

Xiết bao sướng vui từ ngày lên Tây Bắc,
Đồng bào nao nức mong đón ta trở về.
Giờ chiến thắng ta đã về, vui mừng đón chúng ta tiến về,
Núi sông bừng lên, đất nước ta sáng ngời,
Cánh đồng Điện Biên cờ chiến thắng tưng bừng trên trời.

2- 
Giải phóng miền Tây bộ đội ta đã mau trưởng thành,
Giữa trận Điện Biên Phủ càng tin quyết tâm ở trên.
Đổ mồ hôi phá núi bắc cầu,
Vượt rừng qua suối đắp đường thắng lợi về đây.

Phương châm đánh chắc ta tiến lên,
Lực lượng như bão táp, quân thù mấy cũng phải tan.
Vang lừng tiếng súng khi mừng công,
Thỏa lòng ta dâng Bác bấy lâu chờ mong.

Xiết bao sướng vui nhìn đồng quê phơi phới,
Nông dân hăng hái khi chúng ta trở về.
Ruộng đất chúng ta đã về vui mừng đón chúng ta tiến về,
Chiến sĩ Điện Biên, thế giới đang đón chờ,
Chiến dịch đại thắng lợi góp sức xây dựng hòa bình.`
  },
  {
    title: "Bác Cùng Chúng Cháu Hành Quân",
    videoId: "oggIKJx_BcE",
    videoId2: "biDND2XkDzM",
    lyrics: `Đêm nay trên đường hành quân ra mặt trận

Trùng trùng đoàn quân tiến bước theo con đường của Bác

Nở ngàn hoa chiến công ta dâng lên Người

Dâng lên tới Đảng cả niềm tin chiếu sáng ngời

Cờ sao quyết thắng lấp lánh soi sáng đường cháu đi.

Đi, ta đi giải phóng miền Nam

Khi quê hương nhà vẫn còn bóng quân xâm lược

Thì ta còn chiến đấu quét sạch nó đi

Lời bác thúc giục chúng ta

Chiến đấu cho quê nhà nam bắc hòa lời ca.

Năm xưa Bác cùng đoàn con đi chiến dịch

Núi rừng vẫn nhớ, suối vẫn trong in hình bóng Bác

Cả đoàn quân tiến theo Người như thác đổ

Điện Biên năm nào vọng lời Bác giữa chiến hào

Toàn quân hôm nay vẫn phất cao cờ đỏ Bác trao.

Đi ta đi giải phóng miền Nam

Khi quê hương nhà vẫn còn bóng quân xâm lược

Thì ta còn chiến đấu quét sạch nó đi

Lời Bác phát lịch tiến công

Bác kính yêu đang cùng chúng cháu hành quân.

`
  },
  {
    title: "Cuộc Đời Vẫn Đẹp Sao",
    videoId: "tJJ3HZ-kILo",
    videoId2: "_bac7kPHhzU",
    lyrics: `Cuộc đời vẫn đẹp sao, tình yêu vẫn đẹp sao,
Dù đạn bom man rợ thét gào,
Dù thân thể thiên nhiên mang đầy thương tích,
Dù xa cách hai ngả đường chiến dịch,
Ta vẫn còn chung nhau một ánh trăng ngần.

Một tiếng chim ngân, một làn gió biển,
Một sớm mai xuân trước cửa hầm dã chiến,
Thấy trời xanh xao xuyến ở trên đầu
Ta vẫn thầm hái hoa tặng nhau.

Ơi trái tim Việt Nam như mặt trời trước ngực,
Giữa thế kỷ hai mươi cháy rực, sáng ngàn năm, ngàn năm.`
  },
  {
    title: "Trái Tim Chiến Sĩ",
    videoId: "lN1Mx8WkIjs",
    videoId2: "hKI64mJW9zE",
    lyrics: `1-
Là người chiến sĩ nhiệm vụ đẹp biết bao,
Gìn giữ quê hương, gian khổ coi thường, vì nhân dân chiến đấu.
Là người chiến sĩ nhiệm vụ đẹp biết bao,
Lời Bác đinh ninh, vì nước quên mình, giành chiến thắng vinh quang.
Nêu cao truyền thống thời Trần - Đinh xưa,
Nay cháu Bác Hồ, Đảng cho anh một trái tim.

ĐK:
Một trái tim biết yêu tha thiết đất nước quê hương,
Một trái tim biết căm thù quân xâm lược,
Một trái tim rực lửa anh hùng.

Kết:
Có gì đẹp bằng trái tim, đẹp bằng trái tim người chiến sĩ,
Có gì đẹp bằng trái tim, đẹp bằng trái tim người chiến sĩ Việt Nam.

2-
Cuộc đời chiến sĩ giản dị thật đáng yêu,
Một chiếc ba lô, một khẩu súng trường, một ngôi sao trên mũ.
Cuộc đời chiến sĩ giản dị thật đáng yêu,
Một túi lương khô, một tấm vải dù, một đôi dép cao su.
Nhưng anh đẹp lắm, đẹp hồn nhiên như chân lý cuộc đời,
Vì anh có một trái tim.
(ĐK)

3-
Tình người chiến sĩ dệt đẹp nhiều ước mơ,
Và trái tim anh mang nặng nghĩa tình của quê hương yêu dấu.
Tình người chiến sĩ dệt đẹp nhiều ước mơ,
Và trái tim anh mang trái tim người mà anh nhớ, anh thương.
Vui sao đời lính vượt đường xa,
Anh có trái tim hồng, người chiến sĩ - một trái tim.
(ĐK)`
  },
  {
    title: "Như Có Bác Trong Ngày Đại Thắng",
    videoId: "j4b7GnGEOvA",
    videoId2: "3j2waJWKvEw",
    lyrics: `Như có Bác Hồ trong ngày vui đại thắng,
Lời Bác nay đã thành chiến thắng huy hoàng.
Ba mươi năm đấu tranh giành toàn vẹn non sông,
Ba mươi năm dân chủ cộng hoà kháng chiến đã thành công.

Việt Nam - Hồ Chí Minh!
Việt Nam - Hồ Chí Minh!
Việt Nam - Hồ Chí Minh!
Việt Nam - Hồ Chí Minh!`
  },
  {
    title: "Tổ Quốc Trong Tim",
    videoId: "fbcEN3YR6og",
    videoId2: "eQwb6HD_ID8",
    lyrics: `Ngàn trùng sóng bạt ngàn trùng khơi xa

Thềm lục địa của cha ông để lại

Trập trùng núi, gập ghềnh sông

Mẹ Việt Nam ta yêu dấu

Chúng con đi với tự hào truyền thống

Nòi giống rồng tiên, người lính của Bác Hồ

Việt Nam ơi, tổ quốc kính yêu

Khắc trong tim trên đường hành quân

Quyết giữ vững độc lập, quyết giữ vững biển trời

Của cha ông ngàn năm

Quyết giữ vững chủ quyền, quyết giữ vững biển đảo

Việt Nam ơi Việt Nam

Giữ vững hòa bình đát nước giàu mạnh

Vì tương lai tổ quốc

Súng chắc không sờn lòng, trái tim dâng mẹ hiền

Việt Nam ơi Việt Nam

Trùng trùng bước trùng trùng đoàn quân đi

Vì độc lập tự do ta không sờn lòng

Lời của Bác vọng về từ năm xưa

Mẹ Việt Nam ta yêu dấu

Chúng con đi với tự hào truyền thống anh hùng

Nòi giống rồng tiên, người lính của Bác Hồ

Việt Nam ơi, tổ quốc kính yêu

Khắc trong tim trên đường hành quân

Quyết giữ vững độc lập, quyết giữ vững biển trời

Của cha ông ngàn năm

Quyết giữ vững lời thề chiến đấu dâng mẹ hiền

Việt Nam ơi Việt Nam

Chiến đấu cho hòa bình, chiến đấu cho giàu mạnh

Vì tương lai tổ quốc

Súng chắc không sờn lòng trái tim dâng mẹ hiền

Việt Nam ơi Việt Nam

Súng chắc không sờn lòng trái tim dâng mẹ hiền

Việt Nam ơi Việt Nam`
  },
  {
    title: "Ước Mơ Chiến Sĩ",
    videoId: "1tRCtNj-IOQ",
    videoId2: "j-ifOc0e6Go",
    lyrics: `Nào cùng nhau ta hát lên chúng ta là chiến sĩ

Nào cùng nhau ta hát lên chúng ta yêu cuộc đời

Bạn hãy vui cùng những người lính trẻ

Rất yêu đời và luôn mơ ước

Ước mơ được giữ trong tim mình

Những tháng năm đồng đội bên nhau

Đời lính có khi thật nhớ nhà

Nhờ gió đem lời yêu thương

Gửi tới nơi quê nhà

Nơi có những vì sao đợi mong

Đời lính có cây đàn tâm tình

Hòa tiếng khi lòng buồn vui

Đàn theo ta đi khắp nơi

Theo bước chân hành quân suốt cuộc đời

Nào cùng nhau ta hát lên chúng ta là chiến sĩ

Nào cùng nhau ta hát lên chúng ta yêu cuộc đời.`
  },
  {
    title: "Thanh Niên Làm Theo Lời Bác",
    videoId: "QEuKBqfJu2k",
    videoId2: "wUG9ANcfNKw",
    lyrics: `Kết liên lại Thanh niên chúng ta cùng nhau đi lên,
Giơ nắm tay thề, gìn giữ hòa bình độc lập tự do.
Kết liên lại Thanh niên chúng ta cùng quyết tiến bước,
Đánh tan quân thù xây đắp cuộc đời hạnh phúc ấm no.

Đi lên Thanh niên chớ ngại ngần chi,
Đi lên Thanh niên làm theo lời Bác:
“Không có việc gì khó, chỉ sợ lòng không bền,
Đào núi và lấp biển, quyết chí ắt làm nên?.`
  },
  {
    title: "Hát Mãi Khúc Quân Hành",
    videoId: "2g3zIXfe8WE",
    videoId2: "rOuIld0ycuk",
   lyrics: `Đời mình là một khúc quân hành
Đời mình là bài ca chiến sĩ
Ta ca vang triền miên qua tháng ngày
Lượn bay trên núi đồi biên cương đến nơi đảo xa

Mãi mãi lòng chúng ta
Ca bài ca người lính
Mãi mãi lòng chúng ta
Vẫn hát khúc quân hành ca

Dù rằng đời ta thích hoa hồng
Kẻ thù buộc ta ôm cây súng
Ta yêu sao làng quê non nước mình
Tình quê hương vút thành thanh âm khúc quân hành ca

Mãi mãi lòng chúng ta
Ca bài ca người lính
Mãi mãi lòng chúng ta
Vẫn hát khúc quân hành ca`
  },
];
const dances = [
  { title: "Vũ điệu niềm tin", videoId: "V3WxXWC7fWE" },
  { title: "Vũ điệu quân dân", videoId: "XsrApYd3Eac" },
  { title: "Vũ điệu hành quân", videoId: "Go4Nb1VdN88" },
  { title: "Vũ điệu lính trẻ", videoId: "wIVvWWcXRRU" },
  { title: "Vũ điệu hòa bình", videoId: "FuNhMyLWaIY" },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
const [openType, setOpenType] = useState<string | null>(null);
  return (
    <div>
      <div className="unit-header rainbow-text-strong">
        <div className="floating-icons">
          <span>⭐</span>
          <span>🎖️</span>
          <span>🎵</span>
          <span>💃</span>
          <span>🔥</span>
          <span>🚀</span>
        </div>
  <span className="text">TIỂU ĐOÀN HLCSM2</span>
  <div className="text">ĐẠI ĐỘI 7</div>
      </div>

      <div className="container">
        <div className="column">
          <h2 className="section-title">
            <Music /> Bài Truyền Thống Sư Đoàn 375 và 15 bài hát quy định
          </h2>
         {songs.map((song, i) => (
  <VideoItem
   key={i}
  title={song.title}
  videoId={song.videoId}
    videoId2={song.videoId2}    // nhạc hát
  lyrics={song.lyrics}
  isOpen={openType === "song" && openIndex === i}
    onClick={() => {
      if (openIndex === i && openType === "song") {
        setOpenIndex(null);
        setOpenType(null);
      } else {
        setOpenIndex(i);
        setOpenType("song");
      }
    }}
  />
))}
        </div>

        <div className="column">
  <h2 className="section-title">
    <Users /> 5 Điệu Quân Vũ
  </h2>

  {dances.map((dance, i) => (
    <DanceItem
      key={i}
      title={dance.title}
      videoId={dance.videoId}
      isOpen={openType === "dance" && openIndex === i}
      onClick={() => {
        if (openIndex === i && openType === "dance") {
          setOpenIndex(null);
          setOpenType(null);
        } else {
          setOpenIndex(i);
          setOpenType("dance");
        }
      }}
    />
  ))}
</div>
      </div>
    </div>
  );
}
