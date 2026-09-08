const productsDiv = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const orderForm = document.getElementById("orderForm");
const sendOrder = document.getElementById("sendOrder");

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxh7g7B8eW97umJ7zZYTGAIW6UNC7vSro-KoTu8UNqSpYmBLMBfUFYG647OV9tRXLIA4w/exec";

let cart = [];


/* =========================================================
   FACEBOOK ÁNO / NIE
========================================================= */

function toggleFacebookName() {

    const selected =
        document.querySelector(
            'input[name="facebookOrder"]:checked'
        );

    const facebookGroup =
        document.getElementById(
            "facebookNameGroup"
        );

    const facebookInput =
        document.getElementById(
            "facebook"
        );


    if (
        !selected ||
        !facebookGroup ||
        !facebookInput
    ) {

        return;

    }


    if (
        selected.value === "ANO"
    ) {

        facebookGroup.style.display =
            "block";

        facebookInput.required =
            true;

    } else {

        facebookGroup.style.display =
            "none";

        facebookInput.required =
            false;

        facebookInput.value =
            "";

    }

}


/* =========================================================
   CENA
========================================================= */

function formatPrice(price) {

    return (
        price
            .toFixed(2)
            .replace(".", ",") +
        " €"
    );

}


/* =========================================================
   KOŠÍK
========================================================= */

function getCartItem(name) {

    return cart.find(
        item =>
            item.name === name
    );

}


function getTotal() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            item.price *
            item.quantity,
        0
    );

}


/* =========================================================
   KONTROLA BEZLAKTÓZOVÝCH PRODUKTOV
========================================================= */

function hasLactoseFreeProducts() {

    return cart.some(
        item => {

            return (
                item.name.startsWith(
                    "BEZLAKTÓZOVÉ -"
                ) ||
                item.name.startsWith(
                    "BEZLEPKOVÉ + BEZLAKTÓZOVÉ -"
                )
            );

        }
    );

}


/* =========================================================
   MLIEKO
========================================================= */

function updateMilkField() {

    const milkGroup =
        document.getElementById(
            "milkGroup"
        );

    const milk =
        document.getElementById(
            "milk"
        );


    if (
        !milkGroup ||
        !milk
    ) {

        return;

    }


    if (
        hasLactoseFreeProducts()
    ) {

        milkGroup.style.display =
            "";

        milk.required =
            true;

    } else {

        milkGroup.style.display =
            "none";

        milk.required =
            false;

        milk.value =
            "";

        toggleOtherMilk();

    }

}


/* =========================================================
   INÉ MLIEKO
========================================================= */

function toggleOtherMilk() {

    const milk =
        document.getElementById(
            "milk"
        );

    const otherGroup =
        document.getElementById(
            "otherMilkGroup"
        );

    const otherInput =
        document.getElementById(
            "otherMilk"
        );


    if (
        !milk ||
        !otherGroup ||
        !otherInput
    ) {

        return;

    }


    if (
        milk.value === "INE"
    ) {

        otherGroup.style.display =
            "";

        otherInput.required =
            true;

    } else {

        otherGroup.style.display =
            "none";

        otherInput.required =
            false;

        otherInput.value =
            "";

    }

}


/* =========================================================
   VYKRESLENIE PRODUKTOV
========================================================= */

function renderProducts() {

    productsDiv.innerHTML =
        "";

    const grouped = {};


    products.forEach(
        category => {

            if (
                !grouped[
                    category.category
                ]
            ) {

                grouped[
                    category.category
                ] = [];

            }


            grouped[
                category.category
            ].push(
                category
            );

        }
    );


    Object.keys(
        grouped
    ).forEach(
        categoryName => {

            const categoryElement =
                document.createElement(
                    "div"
                );

            categoryElement.className =
                "category";


            /* =================================================
               HLAVNÁ KATEGÓRIA
            ================================================= */

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "categoryTitle";


            title.innerHTML = `

                <div class="categoryLeft">

                    <div class="categoryName">
                        ${categoryName}
                    </div>

                </div>

                <div class="categoryArrow">
                    ↓
                </div>

            `;


            /* =================================================
               OBSAH
            ================================================= */

            const content =
                document.createElement(
                    "div"
                );

            content.className =
                "categoryContent";


            const contentInner =
                document.createElement(
                    "div"
                );

            contentInner.className =
                "categoryContentInner";


            grouped[
                categoryName
            ].forEach(
                subcategory => {


                    /* =========================================
                       PODKATEGÓRIA
                    ========================================= */

                    const subcategoryBox =
                        document.createElement(
                            "div"
                        );

                    subcategoryBox.className =
                        "subcategoryBox";


                    const subcategoryTitle =
                        document.createElement(
                            "div"
                        );

                    subcategoryTitle.className =
                        "subcategoryTitle";


                    subcategoryTitle.innerHTML = `

                        <div>

                            <strong>
                                ${subcategory.type}
                            </strong>

                            <span>
                                ${subcategory.pack}
                            </span>

                        </div>

                    `;


                    subcategoryBox.appendChild(
                        subcategoryTitle
                    );


                    /* =========================================
                       PRODUKTY
                    ========================================= */

                    const productsList =
                        document.createElement(
                            "div"
                        );

                    productsList.className =
                        "productsList";


                    subcategory.items.forEach(
                        product => {

                            const productRow =
                                document.createElement(
                                    "div"
                                );

                            productRow.className =
                                "productRow";


                            /* INFORMÁCIE */

                            const productInfo =
                                document.createElement(
                                    "div"
                                );

                            productInfo.className =
                                "productInfo";


                            const productName =
                                document.createElement(
                                    "div"
                                );

                            productName.className =
                                "productName";

                            productName.textContent =
                                product.name;


                            const productPrice =
                                document.createElement(
                                    "div"
                                );

                            productPrice.className =
                                "productPrice";

                            productPrice.textContent =
                                formatPrice(
                                    product.price
                                );


                            productInfo.appendChild(
                                productName
                            );

                            productInfo.appendChild(
                                productPrice
                            );


                            /* PRAVÁ STRANA */

                            const productRight =
                                document.createElement(
                                    "div"
                                );

                            productRight.className =
                                "productRight";


                            const quantityBox =
                                document.createElement(
                                    "div"
                                );

                            quantityBox.className =
                                "quantityBox";


                            const minusButton =
                                document.createElement(
                                    "button"
                                );

                            minusButton.type =
                                "button";

                            minusButton.className =
                                "quantityButton";

                            minusButton.textContent =
                                "−";


                            const quantityValue =
                                document.createElement(
                                    "span"
                                );

                            quantityValue.className =
                                "quantityValue";

                            quantityValue.textContent =
                                "0";


                            const plusButton =
                                document.createElement(
                                    "button"
                                );

                            plusButton.type =
                                "button";

                            plusButton.className =
                                "quantityButton";

                            plusButton.textContent =
                                "+";


                            quantityBox.appendChild(
                                minusButton
                            );

                            quantityBox.appendChild(
                                quantityValue
                            );

                            quantityBox.appendChild(
                                plusButton
                            );


                            /* NÁZOV PRODUKTU */

                            const cartName =
                                categoryName +
                                " - " +
                                subcategory.type +
                                " - " +
                                product.name;


                            function updateQuantity() {

                                const item =
                                    getCartItem(
                                        cartName
                                    );


                                quantityValue.textContent =
                                    item
                                        ? item.quantity
                                        : "0";

                            }


                            /* PLUS */

                            plusButton.addEventListener(
                                "click",
                                () => {

                                    addToCart(
                                        cartName,
                                        product.price
                                    );

                                    updateQuantity();

                                }
                            );


                            /* MÍNUS */

                            minusButton.addEventListener(
                                "click",
                                () => {

                                    removeFromCart(
                                        cartName
                                    );

                                    updateQuantity();

                                }
                            );


                            /* PRIDAŤ */

                            const addButton =
                                document.createElement(
                                    "button"
                                );

                            addButton.type =
                                "button";

                            addButton.className =
                                "addButton";

                            addButton.textContent =
                                "Pridať do objednávky";


                            addButton.addEventListener(
                                "click",
                                () => {

                                    addToCart(
                                        cartName,
                                        product.price
                                    );

                                    updateQuantity();


                                    addButton.textContent =
                                        "Pridané";


                                    setTimeout(
                                        () => {

                                            addButton.textContent =
                                                "Pridať do objednávky";

                                        },
                                        900
                                    );

                                }
                            );


                            productRight.appendChild(
                                quantityBox
                            );

                            productRight.appendChild(
                                addButton
                            );


                            productRow.appendChild(
                                productInfo
                            );

                            productRow.appendChild(
                                productRight
                            );


                            productsList.appendChild(
                                productRow
                            );

                        }
                    );


                    subcategoryBox.appendChild(
                        productsList
                    );


                    contentInner.appendChild(
                        subcategoryBox
                    );

                }
            );


            content.appendChild(
                contentInner
            );


            /* =================================================
               OTVÁRANIE KATEGÓRIE
            ================================================= */

            title.addEventListener(
                "click",
                () => {

                    const isOpen =
                        categoryElement.classList.contains(
                            "open"
                        );


                    document
                        .querySelectorAll(
                            ".category.open"
                        )
                        .forEach(
                            openCategory => {

                                openCategory.classList.remove(
                                    "open"
                                );

                            }
                        );


                    if (!isOpen) {

                        categoryElement.classList.add(
                            "open"
                        );

                    }

                }
            );


            categoryElement.appendChild(
                title
            );


            categoryElement.appendChild(
                content
            );


            productsDiv.appendChild(
                categoryElement
            );

        }
    );

}


/* =========================================================
   PRIDAŤ DO KOŠÍKA
========================================================= */

function addToCart(
    name,
    price
) {

    const existing =
        getCartItem(
            name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name:
                name,

            price:
                price,

            quantity:
                1

        });

    }


    renderCart();

    updateMilkField();

}


/* =========================================================
   ODOBRAŤ
========================================================= */

function removeFromCart(
    name
) {

    const existing =
        getCartItem(
            name
        );


    if (!existing) {

        return;

    }


    existing.quantity--;


    if (
        existing.quantity <= 0
    ) {

        cart =
            cart.filter(
                item =>
                    item.name !== name
            );

    }


    renderCart();

    updateMilkField();

}


/* =========================================================
   ODSTRÁNIŤ CELÚ POLOŽKU
========================================================= */

function deleteFromCart(
    name
) {

    cart =
        cart.filter(
            item =>
                item.name !== name
        );


    renderCart();

    updateMilkField();

}


/* =========================================================
   VYKRESLENIE KOŠÍKA
========================================================= */

function renderCart() {

    cartItems.innerHTML =
        "";


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <div class="emptyCart">

                Zatiaľ nemáte vybrané žiadne produkty.

            </div>

        `;


        totalPrice.textContent =
            "0,00 €";


        return;

    }


    cart.forEach(
        item => {

            const cartItem =
                document.createElement(
                    "div"
                );

            cartItem.className =
                "cartItem";


            const left =
                document.createElement(
                    "div"
                );


            const name =
                document.createElement(
                    "div"
                );

            name.className =
                "cartItemName";

            name.textContent =
                item.name;


            const details =
                document.createElement(
                    "div"
                );

            details.className =
                "cartItemDetails";

            details.textContent =
                formatPrice(
                    item.price
                ) +
                " / balenie";


            const controls =
                document.createElement(
                    "div"
                );

            controls.className =
                "cartControls";


            const minus =
                document.createElement(
                    "button"
                );

            minus.type =
                "button";

            minus.className =
                "qtyButton";

            minus.textContent =
                "−";


            const quantity =
                document.createElement(
                    "span"
                );

            quantity.className =
                "qtyValue";

            quantity.textContent =
                item.quantity;


            const plus =
                document.createElement(
                    "button"
                );

            plus.type =
                "button";

            plus.className =
                "qtyButton";

            plus.textContent =
                "+";


            const remove =
                document.createElement(
                    "button"
                );

            remove.type =
                "button";

            remove.className =
                "removeButton";

            remove.textContent =
                "Odstrániť";


            minus.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        item.name
                    );

                }
            );


            plus.addEventListener(
                "click",
                () => {

                    addToCart(
                        item.name,
                        item.price
                    );

                }
            );


            remove.addEventListener(
                "click",
                () => {

                    deleteFromCart(
                        item.name
                    );

                }
            );


            controls.appendChild(
                minus
            );

            controls.appendChild(
                quantity
            );

            controls.appendChild(
                plus
            );

            controls.appendChild(
                remove
            );


            left.appendChild(
                name
            );

            left.appendChild(
                details
            );

            left.appendChild(
                controls
            );


            const price =
                document.createElement(
                    "div"
                );

            price.className =
                "cartItemPrice";

            price.textContent =
                formatPrice(
                    item.price *
                    item.quantity
                );


            cartItem.appendChild(
                left
            );

            cartItem.appendChild(
                price
            );


            cartItems.appendChild(
                cartItem
            );

        }
    );


    totalPrice.textContent =
        formatPrice(
            getTotal()
        );

}


/* =========================================================
   UKONČENÉ OBJEDNÁVKY
========================================================= */

function showClosedOrders() {

    const main =
        document.querySelector(
            "main"
        );


    if (main) {

        main.style.display =
            "none";

    }


    const heroButton =
        document.querySelector(
            ".heroButton"
        );


    if (heroButton) {

        heroButton.style.display =
            "none";

    }


    if (
        document.getElementById(
            "closedOrders"
        )
    ) {

        return;

    }


    const closed =
        document.createElement(
            "section"
        );


    closed.id =
        "closedOrders";


    closed.innerHTML = `

        <div style="
            min-height:60vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:60px 20px;
            text-align:center;
        ">

            <div style="
                max-width:700px;
                margin:auto;
            ">

                <div style="
                    font-size:52px;
                    margin-bottom:20px;
                ">
                    🎄
                </div>


                <div style="
                    font-size:13px;
                    letter-spacing:2px;
                    text-transform:uppercase;
                    opacity:.65;
                    margin-bottom:15px;
                ">
                    Vianočné oblátky by Nika
                </div>


                <h2 style="
                    font-size:clamp(30px,5vw,52px);
                    margin:0 0 20px;
                ">
                    Objednávky na Vianoce 2026
                    sú ukončené
                </h2>


                <p style="
                    font-size:18px;
                    line-height:1.7;
                    opacity:.75;
                    margin:0;
                ">

                    Ďakujeme všetkým, ktorí si u nás
                    objednali vianočné oblátky.

                    <br><br>

                    Vaše objednávky teraz pripravujeme
                    a čoskoro Vás budeme kontaktovať.

                </p>

            </div>

        </div>

    `;


    const header =
        document.querySelector(
            ".hero"
        );


    if (header) {

        header.after(
            closed
        );

    } else {

        document.body.prepend(
            closed
        );

    }

}


/* =========================================================
   OTVORENÉ OBJEDNÁVKY
========================================================= */

function showOpenOrders() {

    const main =
        document.querySelector(
            "main"
        );


    if (main) {

        main.style.display =
            "";

    }


    const heroButton =
        document.querySelector(
            ".heroButton"
        );


    if (heroButton) {

        heroButton.style.display =
            "";

    }


    const closed =
        document.getElementById(
            "closedOrders"
        );


    if (closed) {

        closed.remove();

    }

}


/* =========================================================
   KONTROLA STAVU OBJEDNÁVOK
========================================================= */

function checkOrderStatus() {

    const callbackName =
        "orderStatusCallback_" +
        Date.now();


    const script =
        document.createElement(
            "script"
        );


    window[callbackName] =
        function(data) {

            if (
                data &&
                (
                    data.status ===
                        "ZATVORENÉ" ||
                    data.status ===
                        "CLOSED"
                )
            ) {

                showClosedOrders();

            } else {

                showOpenOrders();

            }


            delete window[
                callbackName
            ];


            if (
                script.parentNode
            ) {

                script.parentNode.removeChild(
                    script
                );

            }

        };


    script.src =
        SCRIPT_URL +
        "?status=orders&callback=" +
        callbackName;


    script.onerror =
        function() {

            console.error(
                "Nepodarilo sa načítať stav objednávok."
            );


            showOpenOrders();


            delete window[
                callbackName
            ];


            if (
                script.parentNode
            ) {

                script.parentNode.removeChild(
                    script
                );

            }

        };


    document.body.appendChild(
        script
    );

}


/* =========================================================
   ODOSLANIE OBJEDNÁVKY
========================================================= */

orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /* -------------------------------------------------
           KOŠÍK
        ------------------------------------------------- */

        if (
            cart.length === 0
        ) {

            alert(
                "Najprv pridajte aspoň jedno balenie."
            );

            return;

        }


        /* -------------------------------------------------
           ZÁKLADNÉ ÚDAJE
        ------------------------------------------------- */

        const name =
            document
                .getElementById(
                    "name"
                )
                .value
                .trim();


        const phone =
            document
                .getElementById(
                    "phone"
                )
                .value
                .trim();


        const street =
            document
                .getElementById(
                    "street"
                )
                .value
                .trim();


        const zip =
            document
                .getElementById(
                    "zip"
                )
                .value
                .trim();


        const city =
            document
                .getElementById(
                    "city"
                )
                .value
                .trim();


        const email =
            document
                .getElementById(
                    "email"
                )
                .value
                .trim();


        const note =
            document
                .getElementById(
                    "note"
                )
                .value
                .trim();


        /* -------------------------------------------------
           FACEBOOK
        ------------------------------------------------- */

        const facebookChoice =
            document.querySelector(
                'input[name="facebookOrder"]:checked'
            );


        const facebook =
            document
                .getElementById(
                    "facebook"
                )
                ?.value
                .trim() || "";


        if (!facebookChoice) {

            alert(
                "Vyberte, či objednávate cez Facebook."
            );

            return;

        }


        if (
            facebookChoice.value ===
                "ANO" &&
            !facebook
        ) {

            alert(
                "Ak objednávate cez Facebook, vyplňte aj meno na Facebooku."
            );

            return;

        }


        /* -------------------------------------------------
           MLIEKO
        ------------------------------------------------- */

        const milkSelect =
            document
                .getElementById(
                    "milk"
                )
                ?.value
                .trim() || "";


        const otherMilk =
            document
                .getElementById(
                    "otherMilk"
                )
                ?.value
                .trim() || "";


        let milk =
            milkSelect;


        if (
            milkSelect ===
                "INE"
        ) {

            milk =
                otherMilk;

        }


        if (
            hasLactoseFreeProducts() &&
            !milk
        ) {

            alert(
                "Vyberte prosím druh mlieka."
            );

            return;

        }


        if (
            hasLactoseFreeProducts() &&
            milkSelect === "INE" &&
            !otherMilk
        ) {

            alert(
                "Napíšte prosím, aké iné mlieko požadujete."
            );

            return;

        }


        /* -------------------------------------------------
           POVINNÉ ÚDAJE
        ------------------------------------------------- */

        if (
            !name ||
            !phone ||
            !street ||
            !zip ||
            !city
        ) {

            alert(
                "Vyplňte všetky povinné polia."
            );

            return;

        }


        /* -------------------------------------------------
           POZNÁMKA
        ------------------------------------------------- */

        let finalNote =
            note;


        if (milk) {

            finalNote =
                "Mlieko: " +
                milk +
                (
                    note
                        ? " | " + note
                        : ""
                );

        }


        /* -------------------------------------------------
           DÁTA
        ------------------------------------------------- */

        const data = {

            name:
                name,

            facebook:
                facebookChoice.value ===
                    "ANO"
                    ? facebook
                    : "NIE",

            facebookOrder:
                facebookChoice.value,

            phone:
                phone,

            street:
                street,

            zip:
                zip,

            city:
                city,

            email:
                email,

            note:
                finalNote,

            products:
                cart
                    .map(
                        item =>
                            `${item.name} x ${item.quantity}`
                    )
                    .join(" | "),

            total:
                formatPrice(
                    getTotal()
                )

        };


        /* -------------------------------------------------
           ODOSIELANIE
        ------------------------------------------------- */

        sendOrder.disabled =
            true;


        const originalText =
            sendOrder.textContent;


        sendOrder.textContent =
            "Odosielam...";


    

      /* -------------------------------------------------
   ODOSLANIE OBJEDNÁVKY
   ------------------------------------------------- */

const orderData = new URLSearchParams();

Object.keys(data).forEach(key => {
    orderData.append(key, data[key]);
});

/*
   fetch cez no-cors:
   - funguje aj z mobilu
   - Apps Script POST normálne prijme
   - nepotrebujeme čítať odpoveď servera
*/
fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: orderData.toString()
}).catch(error => {
    console.error("Chyba pri odosielaní objednávky:", error);
});

        /* -------------------------------------------------
           PO ODOSLANÍ
        ------------------------------------------------- */

        setTimeout(
            () => {

                alert(
                    "Ďakujeme za objednávku. Čoskoro Vás budeme kontaktovať."
                );


                orderForm.reset();


                cart = [];


                renderCart();

                updateMilkField();


                /* POČTY */

                document
                    .querySelectorAll(
                        ".quantityValue"
                    )
                    .forEach(
                        element => {

                            element.textContent =
                                "0";

                        }
                    );


                /* KATEGÓRIE */

                document
                    .querySelectorAll(
                        ".category.open"
                    )
                    .forEach(
                        category => {

                            category.classList.remove(
                                "open"
                            );

                        }
                    );


                /* FACEBOOK */

                const facebookGroup =
                    document.getElementById(
                        "facebookNameGroup"
                    );


                if (facebookGroup) {

                    facebookGroup.style.display =
                        "none";

                }


                const facebookInput =
                    document.getElementById(
                        "facebook"
                    );


                if (facebookInput) {

                    facebookInput.required =
                        false;

                }


                /* MLIEKO */

                const milkGroup =
                    document.getElementById(
                        "milkGroup"
                    );


                if (milkGroup) {

                    milkGroup.style.display =
                        "none";

                }


                const milkInput =
                    document.getElementById(
                        "milk"
                    );


                if (milkInput) {

                    milkInput.required =
                        false;

                    milkInput.value =
                        "";

                }


                /* INÉ MLIEKO */

                const otherMilkGroup =
                    document.getElementById(
                        "otherMilkGroup"
                    );


                if (otherMilkGroup) {

                    otherMilkGroup.style.display =
                        "none";

                }


                const otherMilkInput =
                    document.getElementById(
                        "otherMilk"
                    );


                if (otherMilkInput) {

                    otherMilkInput.required =
                        false;

                    otherMilkInput.value =
                        "";

                }


                /* TLAČIDLO */

                sendOrder.disabled =
                    false;


                sendOrder.textContent =
                    originalText;


                form.remove();

                iframe.remove();

            },
            1500
        );

    }
);


/* =========================================================
   SPUSTENIE
========================================================= */

renderProducts();

renderCart();

updateMilkField();

showOpenOrders();

checkOrderStatus();
