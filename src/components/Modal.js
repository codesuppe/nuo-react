import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PortalModal = ({ index, isOpen, onClose, modaldata }) => {
  //Formvalidation

  const onSubmit = (data) => console.log(data);

  const schema = yup.object().shape({
    name: yup.string().required("Please write your name..."),
    email: yup
      .string()
      .required("Type your email here...")
      .email("Invalid email format"),

    message: yup.string().required("Please write a message here..."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //formvalidation end

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="closeModal">
        <div>
          <img src={modaldata.pages.closer} alt="closer" onClick={onClose} />
        </div>
      </div>

      <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>
            Send <span>{modaldata.pages.contactnames[index]}</span> a message
          </h1>
        </div>

        <input
          type="text"
          className="name"
          placeholder="Name"
          {...register("name")}
        />
        <p id="name-error">{errors.name?.message}</p>
        <input
          type="email"
          className="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          {...register("message")}
        />
        <p>{errors.message?.message}</p>

        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>,
    document.querySelector(".homeTxt")
  );
};
export default PortalModal;
