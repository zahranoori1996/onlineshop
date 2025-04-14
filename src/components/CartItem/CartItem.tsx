import Button from "../Button/Button"


function CartItem() {
  return (
    <div className="flex gap-3 shadow p-5 mt-4 rounded-md bg-[#d9f0fb]">
      <img className="w-25 rounded "
      src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"/>
      <div className="flex flex-col gap-2">
      <h3>عنوان محصول </h3>
      <h3>قیمت 27000 تومان</h3>
      <div className="flex items-center gap-2">
        <Button variant="primary" className=" rounded px-2 cursor-pointer "> + </Button>
        <span>2</span>
        <Button variant="primary" className=" rounded px-2 cursor-pointer "> - </Button>
        <Button variant="danger" className=" rounded px-2 cursor-pointer ">Remove</Button>
      </div>
      </div>
    </div>
  )
}

export default CartItem
