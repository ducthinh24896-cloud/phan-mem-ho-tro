'use client'


import VideoItem from "@/components/VideoItem";
import { useState } from "react";
import { Music, Users } from "lucide-react";

const songs = [
  { title: "Nhịp Tim Người Lính", videoId: "zf7Q1ci8guI" },
  { title: "Tiến Quân Ca", videoId: "CqUKVxYRsVw" },
  { title: "Quốc Tế Ca", videoId: "b2QLHQYmjIg" },
  { title: "Chào Mừng Đảng Cộng Sản Việt Nam", videoId: "xIalBtA-VY8" },
  { title: "Ca Ngợi Hồ Chí Minh", videoId: "V8bGv5lXk0E" },
  { title: "Vì Nhân Dân Quên Mình", videoId: "N6uBLlQkc6k" },
  { title: "Tiến Bước Dưới Quân Kỳ", videoId: "6sBMr4UyUd0" },
  { title: "Giải Phóng Điện Biên", videoId: "AUTXWNd8WJE" },
  { title: "Bác Cùng Chúng Cháu Hành Quân", videoId: "oggIKJx_BcE" },
  { title: "Cuộc Đời Vẫn Đẹp Sao", videoId: "tJJ3HZ-kILo" },
  { title: "Trái Tim Người Chiến Sĩ", videoId: "lN1Mx8WkIjs" },
  { title: "Như Có Bác Trong Ngày Đại Thắng", videoId: "j4b7GnGEOvA" },
  { title: "Tổ Quốc Trong Tim", videoId: "fbcEN3YR6og" },
  { title: "Ước Mơ Chiến Sĩ", videoId: "1tRCtNj-IOQ" },
  { title: "Thanh Niên Làm Theo Lời Bác", videoId: "QEuKBqfJu2k" },
  { title: "Hát Mãi Khúc Quân Hành", videoId: "2g3zIXfe8WE" },
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
        🏅 TIỂU ĐOÀN HLCSM2
        <div>ĐẠI ĐỘI 7</div>
      </div>

      <div className="container">
        <div className="column">
          <h2>
            <Music /> Bài Truyền Thống Sư Đoàn 375 và 15 bài hát quy định
          </h2>
         {songs.map((song, i) => (
  <VideoItem
    key={i}
    title={song.title}
    videoId={song.videoId}
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
          <h2>
            <Users /> 5 Điệu Quân Vũ
          </h2>
        {dances.map((dance, i) => (
  <VideoItem
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
