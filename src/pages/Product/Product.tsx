import React from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

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
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              />
            </div>
            <div>
              
              <Button variant="primary" className=" rounded w-full mt-4 p-2 cursor-pointer ">
              افزودن به سبد خرید
              </Button>
            </div>
          </div>
          <div className="col-span-8 leading-9">
            <h2>عنوان محصول : عنبیه چشم </h2>
            <p>قیمت محصول : 2500 تومان</p>

            <p className="">
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
