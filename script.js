


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
const orderData = new URLSearchParams();

Object.keys(data).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = data[key] ?? "";
    submitForm.appendChild(input);
    orderData.append(key, data[key] ?? "");
});

document.body.appendChild(submitForm);
submitForm.submit();
try {
    await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: orderData.toString(),
        keepalive: true
    });
} catch (error) {
    console.error("Chyba pri odosielaní objednávky:", error);

    sendOrder.disabled = false;
    sendOrder.textContent = originalText;

    alert(
        "Objednávku sa nepodarilo odoslať. Skúste to prosím ešte raz."
    );

setTimeout(() => {
    submitForm.remove();
    orderFrame.remove();
}, 5000);
    return;
}
/* -------------------------------------------------
          PO ODOSLANÍ
       ------------------------------------------------- */
