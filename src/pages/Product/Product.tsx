import React from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  return (
    <div className="py-6 m-6 shadow-md">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="w-full">
              <img
                className="rounded-lg w-full"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div>
              <button className="text-white bg-blue-500 rounded mt-4 p-2 cursor-pointer hover:bg-blue-600">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
          <div className="col-span-8 leading-9">
            <h2>عنوان محصول : عنبیه چشم </h2>
            <p>قیمت محصول : 2500 تومان</p>

            <p className="line-clamp-3">
              بیست سال بعد شما از کارهایی که انجام نداده‌اید ناراحت می‌شوید نه
              کارهایی که انجام داده‌اید، پس طناب قایق‌تان را از ساحل باز کنید و
              از ساحل امن خود به سوی آب‌های آزاد برانید و خطر کنید. جستجو کنید،
              رویا بسازید و کشف کنید.ُ زهرا عاشق رضاست و رضا گاهی خنگ میشود و
              نمیفهمد و زهرااا عاشقتهههههههه :() بیست سال بعد شما از کارهایی که
              انجام نداده‌اید ناراحت می‌شوید نه کارهایی که انجام داده‌اید، پس
              طناب قایق‌تان را از ساحل باز کنید و از ساحل امن خود به سوی آب‌های
              آزاد برانید و خطر کنید. جستجو کنید، رویا بسازید و کشف کنید.ُ زهرا
              عاشق رضاست و رضا گاهی خنگ میشود و نمیفهمد و زهرااا عاشقتهههههههه
              :() بیست سال بعد شما از کارهایی که انجام نداده‌اید ناراحت می‌شوید
              نه کارهایی که انجام داده‌اید، پس طناب قایق‌تان را از ساحل باز کنید
              و از ساحل امن خود به سوی آب‌های آزاد برانید و خطر کنید. جستجو
              کنید، رویا بسازید و کشف کنید.ُ زهرا عاشق رضاست و رضا گاهی خنگ
              میشود و نمیفهمد و زهرااا عاشقتهههههههه :()
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
