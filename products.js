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