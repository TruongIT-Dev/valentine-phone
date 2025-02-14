import '../assets/css/phone.css'

const Phone = () => {

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

                    {/* Popup tin nhắn */}
                    <div className="popup">
                        <p className="title">Bạn có tin nhắn từ Crush! 💌</p>
                        <p>💖Chúc Ngày Valentine Vui Vẻ!</p>
                    </div>

                    <div className="popup">
                        <p className="title">Bạn có tin nhắn từ Crush! 💌</p>
                        <p>Em đã ăn Cơm chưa 🍚?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Phone;
