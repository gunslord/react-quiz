import { useState, useRef } from "react";

const OrderEditor = () => {
  const [orderForm, setOrderForm] = useState({
    menu: "족발",
    address: "",
    request: "",
  });

  const isBlankRef = useRef();

  const onChangeOrderForm = (e) => {
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (isBlankRef.current.value === "") {
      isBlankRef.current.focus();
      return;
    }
    alert(
      `주문이 완료되었습니다 메뉴: ${orderForm.menu}, 주소: ${orderForm.address}, 요청사항: ${orderForm.request}`
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          name="menu"
          onChange={onChangeOrderForm}
          value={orderForm.menu}
          style={{ width: 300, padding: 5 }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          name="address"
          ref={isBlankRef}
          onChange={onChangeOrderForm}
          value={orderForm.address}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          onChange={onChangeOrderForm}
          value={orderForm.request}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
