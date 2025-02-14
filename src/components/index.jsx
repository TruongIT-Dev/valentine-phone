import { useEffect, useRef, useState } from "react";
import "../assets/css/phone.css";

const songs = [
    {
        title: "Hẹn em dưới ánh trăng",
        src: "/audio/hen-em-duoi-anh-trang.mp3",
        cover: "/images/hen-em-duoi-anh-trang.jpg"
    },
    {
        title: "Ôi Mất Rìu",
        src: "/audio/oi-mat-riu.mp3",
        cover: "/images/oi-mat-riu.jpg"
    },
    {
        title: "Em là nhất",
        src: "/audio/em-la-nhat.mp3",
        cover: "/images/em-la-nhat.jpg"
    },
    {
        title: "Người yêu không đá",
        src: "/audio/nguoi-yeu-ko-da.mp3",
        cover: "/images/nguoi-yeu-ko-da.jpg"
    },
    {
        title: "Định mệnh tình yêu",
        src: "/audio/dinh-menh-tinh-yeu.mp3",
        cover: "/images/dinh-menh-tinh-yeu.jpg"
    }
];

const Phone = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    // const audioRef = useRef(new Audio(songs[currentSongIndex].src));

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(songs[currentSongIndex].src);
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex, isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const changeSong = (direction) => {
        audioRef.current.pause();
        let newIndex = currentSongIndex + direction;
        if (newIndex < 0) newIndex = songs.length - 1;
        if (newIndex >= songs.length) newIndex = 0;

        setCurrentSongIndex(newIndex);
        audioRef.current = new Audio(songs[newIndex].src);
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="card relative">

                    {/* Biểu tượng thông báo tin nhắn */}
                    <div className="absolute top-4 right-4 bg-pink-300 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        Có tin nhắn chưa đọc!
                    </div>

                    {/* Thời gian và ngày tháng */}
                    <div className="card__date">
                        <span className="time">00:01</span>
                        <span className="date">Thứ 6, 14 Tháng 2</span>
                    </div>

                    {/* Trình phát nhạc */}
                    <div className="popup">
                        <div className="audio-player">
                            <img src={songs[currentSongIndex].cover} alt="Album Cover" className="album-cover" />
                            <div className="player-controls">
                                <div className="song-info">
                                    <div className="song-title">{songs[currentSongIndex].title}</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <div className="buttons">
                                    {/* <button className="prev-btn" onClick={() => changeSong(-1)}>⏮</button> */}
                                    <button className="play-btn" onClick={togglePlay}>
                                        {isPlaying ? "⏸" : "▶"}
                                    </button>
                                    <button className="next-btn" onClick={() => changeSong(1)}>⏭</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popup tin nhắn */}
                    <div className="popup">
                        <p className="title">Bạn có tin nhắn từ Crush! 💌</p>
                        <p>💖 Chúc Ngày Valentine Vui Vẻ!</p>
                    </div>

                    <div className="popup">
                        <p className="title">Bạn có tin nhắn từ Crush! 💌</p>
                        <p>Em ăn Cơm chưa 🍚?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Phone;
