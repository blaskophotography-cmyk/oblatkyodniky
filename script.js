const productsDiv = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const orderForm = document.getElementById("orderForm");
const sendOrder = document.getElementById("sendOrder");

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxh7g7B8eW97umJ7zZYTGAIW6UNC7vSro-KoTu8UNqSpYmBLMBfUFYG647OV9tRXLIA4w/exec";

const products = [

    /* =====================================================
       1. SLADKÉ
    ===================================================== */

    {
        category: "SLADKÉ",
        type: "Sladké ploché",
        pack: "20 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 3.00 },
            { name: "Orechové", price: 4.00 },
            { name: "Vanilkové", price: 3.50 },
            { name: "Škoricové", price: 3.50 }
        ]
    },

    /* =====================================================
       2. TRUBIČKY
    ===================================================== */

    {
        category: "TRUBIČKY",
        type: "Sladké trubičky",
        pack: "15 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 3.00 },
            { name: "Orechové", price: 4.00 },
            { name: "Vanilkové", price: 3.50 },
            { name: "Škoricové", price: 3.50 }
        ]
    },

    /* =====================================================
       3. SLANÉ
    ===================================================== */

    {
        category: "SLANÉ",
        type: "Slané",
        pack: "50 ks / bal",
        items: [
            { name: "Slané / Bez príchute", price: 2.50 },
            { name: "Bryndzové", price: 3.50 },
            { name: "Rascové", price: 3.00 },
            { name: "Cesnakové", price: 3.00 }
        ]
    },

    /* =====================================================
       4. BEZLAKTÓZOVÉ
    ===================================================== */

    {
        category: "BEZLAKTÓZOVÉ",
        type: "Ploché",
        pack: "20 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "BEZLAKTÓZOVÉ",
        type: "Trubičky",
        pack: "15 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "BEZLAKTÓZOVÉ",
        type: "Slané",
        pack: "50 ks / bal",
        items: [
            { name: "Slané / Bez príchute", price: 3.50 },
            { name: "Cesnakové", price: 4.50 },
            { name: "S rascou", price: 4.50 }
        ]
    },

    /* =====================================================
       5. BEZLEPKOVÉ
    ===================================================== */

    {
        category: "BEZLEPKOVÉ",
        type: "Ploché",
        pack: "20 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "BEZLEPKOVÉ",
        type: "Trubičky",
        pack: "15 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "BEZLEPKOVÉ",
        type: "Slané",
        pack: "50 ks / bal",
        items: [
            { name: "Slané / Bez príchute", price: 3.50 },
            { name: "Cesnakové", price: 4.50 },
            { name: "S rascou", price: 4.50 },
            { name: "Bryndzové", price: 5.00 }
        ]
    },

    /* =====================================================
       6. BEZLEPKOVÉ + BEZLAKTÓZOVÉ
    ===================================================== */

    {
        category: "BEZLEPKOVÉ + BEZLAKTÓZOVÉ",
        type: "Ploché",
        pack: "20 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 5.00 },
            { name: "Orechové", price: 6.00 },
            { name: "Vanilkové", price: 5.50 },
            { name: "Škoricové", price: 5.50 }
        ]
    },

    {
        category: "BEZLEPKOVÉ + BEZLAKTÓZOVÉ",
        type: "Trubičky",
        pack: "15 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 5.00 },
            { name: "Orechové", price: 6.00 },
            { name: "Vanilkové", price: 5.50 },
            { name: "Škoricové", price: 5.50 }
        ]
    },

    {
        category: "BEZLEPKOVÉ + BEZLAKTÓZOVÉ",
        type: "Slané",
        pack: "50 ks / bal",
        items: [
            { name: "Slané / Bez príchute", price: 4.50 },
            { name: "S rascou", price: 5.50 },
            { name: "Cesnakové", price: 5.50 }
        ]
    },

    /* =====================================================
       7. VEGÁNSKE
    ===================================================== */

    {
        category: "VEGÁNSKE",
        type: "Ploché",
        pack: "20 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "VEGÁNSKE",
        type: "Trubičky",
        pack: "15 ks / bal",
        items: [
            { name: "Sladké / Bez príchute", price: 4.00 },
            { name: "Orechové", price: 5.00 },
            { name: "Vanilkové", price: 4.50 },
            { name: "Škoricové", price: 4.50 }
        ]
    },

    {
        category: "VEGÁNSKE",
        type: "Slané",
        pack: "50 ks / bal",
        items: [
            { name: "Slané / Bez príchute", price: 3.50 },
            { name: "S rascou", price: 4.50 },
            { name: "Cesnakové", price: 4.50 }
        ]
    }

];

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


            left.appendChild(
                name
            );

            left.appendChild(
                details
            );


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


            const deleteButton =
                document.createElement(
                    "button"
                );

            deleteButton.type =
                "button";

            deleteButton.className =
                "deleteCartButton";

            deleteButton.textContent =
                "×";


            deleteButton.addEventListener(
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
                deleteButton
            );


            cartItem.appendChild(
                left
            );

            cartItem.appendChild(
                controls
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
   FORMULÁR – ZÍSKANIE DÁT
========================================================= */

function getFormData() {

    const formData =
        new FormData(
            orderForm
        );

    const data = {};


    formData.forEach(
        (
            value,
            key
        ) => {

            data[key] =
                value;

        }
    );


    data.products =
        cart
            .map(
                item =>
                    `${item.name} × ${item.quantity}`
            )
            .join(
                "\n"
            );


    data.total =
        getTotal()
            .toFixed(2);


    return data;

}


/* =========================================================
   VALIDÁCIA OBJEDNÁVKY
========================================================= */

function validateOrder() {

    if (
        cart.length === 0
    ) {

        alert(
            "Najprv si prosím vyberte aspoň jeden produkt."
        );

        return false;

    }


    const selectedFacebook =
        document.querySelector(
            'input[name="facebookOrder"]:checked'
        );


    if (
        selectedFacebook &&
        selectedFacebook.value === "ANO"
    ) {

        const facebook =
            document.getElementById(
                "facebook"
            );


        if (
            !facebook ||
            !facebook.value.trim()
        ) {

            alert(
                "Prosím vyplňte meno na Facebooku."
            );

            facebook?.focus();

            return false;

        }

    }


    const milk =
        document.getElementById(
            "milk"
        );


    if (
        hasLactoseFreeProducts()
    ) {

        if (
            !milk ||
            !milk.value
        ) {

            alert(
                "Prosím vyberte druh mlieka."
            );

            milk?.focus();

            return false;

        }


        if (
            milk.value === "INE"
        ) {

            const otherMilk =
                document.getElementById(
                    "otherMilk"
                );


            if (
                !otherMilk ||
                !otherMilk.value.trim()
            ) {

                alert(
                    "Prosím uveďte, aké iné mlieko chcete."
                );

                otherMilk?.focus();

                return false;

            }

        }

    }


    return true;

}


/* =========================================================
   ODOŠLANNIE OBJEDNÁVKY
========================================================= */

orderForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        if (
            !validateOrder()
        ) {

            return;

        }


        const originalText =
            sendOrder.textContent;


        sendOrder.disabled =
            true;

        sendOrder.textContent =
            "Odosielam…";


        const data =
            getFormData();


        const orderData =
            new URLSearchParams();


        Object.keys(
            data
        ).forEach(
            key => {

                orderData.append(
                    key,
                    data[key] ?? ""
                );

            }
        );


        try {

            await fetch(
                SCRIPT_URL,
                {
                    method:
                        "POST",

                    mode:
                        "no-cors",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded;charset=UTF-8"
                    },

                    body:
                        orderData.toString(),

                    keepalive:
                        true
                }
            );


            alert(
                "Ďakujeme! Objednávka bola odoslaná."
            );


            cart =
                [];

            renderCart();

            updateMilkField();

            orderForm.reset();

            toggleFacebookName();

            sendOrder.disabled =
                false;

            sendOrder.textContent =
                originalText;


        } catch (error) {

            console.error(
                "Chyba pri odosielaní objednávky:",
                error
            );


            sendOrder.disabled =
                false;

            sendOrder.textContent =
                originalText;


            alert(
                "Objednávku sa nepodarilo odoslať. Skúste to prosím ešte raz."
            );


            return;

        }

    }
);


/* =========================================================
   EVENTY FORMULÁRA
========================================================= */

document
    .querySelectorAll(
        'input[name="facebookOrder"]'
    )
    .forEach(
        radio => {

            radio.addEventListener(
                "change",
                toggleFacebookName
            );

        }
    );


const milk =
    document.getElementById(
        "milk"
    );


if (milk) {

    milk.addEventListener(
        "change",
        toggleOtherMilk
    );

}


/* =========================================================
   ŠTART
========================================================= */

renderProducts();

renderCart();

toggleFacebookName();

updateMilkField();


