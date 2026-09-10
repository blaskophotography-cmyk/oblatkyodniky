


      /* -------------------------------------------------
/* -------------------------------------------------
 /* -------------------------------------------------
  ODOSLANIE OBJEDNÁVKY
------------------------------------------------- */

const orderFrame = document.createElement("iframe");
orderFrame.name = "orderSubmitFrame";
orderFrame.style.display = "none";
document.body.appendChild(orderFrame);

const submitForm = document.createElement("form");
submitForm.method = "POST";
submitForm.action = SCRIPT_URL;
submitForm.target = "orderSubmitFrame";
submitForm.style.display = "none";

Object.keys(data).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = data[key] ?? "";
    submitForm.appendChild(input);
});

document.body.appendChild(submitForm);
submitForm.submit();

/* -------------------------------------------------
  PO ODOSLANÍ
------------------------------------------------- */
