import React from "react";
import Container from "../Container/Container";

function ProductItem() {
  return (
    <div className="flex flex-col rounded shadow-md py-2">
      <img
        className="rounded"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      />
      <div className="flex justify-between p-3">
        <h2>عنوان محصول</h2>
        <span>500 تومان</span>
      </div>
      <div className="line-clamp-3">
        <p className="px-3">
          بیست سال بعد شما از کارهایی که انجام نداده‌اید ناراحت می‌شوید نه
          کارهایی که انجام داده‌اید، پس طناب قایق‌تان را از ساحل باز کنید و از
          ساحل امن خود به سوی آب‌های آزاد برانید و خطر کنید. جستجو کنید، رویا
          بسازید و کشف کنید.ُ زهرا عاشق رضاست و رضا گاهی خنگ میشود و نمیفهمد و
          زهرااا عاشقتهههههههه :()
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
