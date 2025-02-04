import { memo, useState } from "react";
import "./ContactEditor.css";
import { useContext } from "react";
import { ContactsDispatchContext } from "../App";

const ContactEditor = () => {
  const { handleAddContact } = useContext(ContactsDispatchContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert("이름과 이메일 모두 입력하세요");
      return;
    }
    handleAddContact(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="이름 ..."
        />
        <input
          className="contact"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default memo(ContactEditor);
