import React from "react";

// a basic form
const Subscribe = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value,
    });

  return (
    <div className={className} style={style}>
      {status === "Отправляется" && (
        <div style={{ color: "blue" }}>Отправляется...</div>
      )}
      {status === "Ошибка" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "Успешно" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="selectorgroup">
        <input
          className="selector2"
          ref={(node) => (input = node)}
          type="email"
          placeholder="Ваша электронная почта"
        />
        <button onClick={submit} className="selector3">
          Подписаться
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
