import { GOODS_DATA } from '@assets/GOODS_DATA';
import type { Goods } from '@assets/GOODS_DATA';

const PresentItem = () => {
  return (
    <>
      {GOODS_DATA.map((item: Goods) => (
        <div key={item.id}>
          <div className='present_rank'>
            <p></p>
          </div>
          <img src={item.imageURL} alt='' />
          <p className='brand_name'>{item.brandInfo.name}</p>
          <p className='goods_name'>{item.name}</p>
          <p className='goods_price'>{item.price.sellingPrice.toLocaleString()}원</p>
        </div>
      ))}
    </>
  );
};
//toLocaleString() 메서드는 숫자나 날짜 객체를 문자열로 변환할 때 사용
export default PresentItem;
