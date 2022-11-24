const gramedia = {
    name : "gramedia",
    address : "jakarta",
    phone : "0829034009089",
    email : "pr@kompasgramedia.com",
    image : "https://www.gramedia.com/assets/gramedia-icon-2.png",
    books : {
        create : {
            title : "Mommyclopedia: 78 Resep MPASI",
            author : "dr. Meta Hanindita, Sp.A",
            image : "https://cdn.gramedia.com/uploads/items/9786020643250_Mommyclopedia_5_78_Resep_MAPASI_C_1_4-1.jpg",
            year : 2022,
            synopsis : "Bagi Moms yang masih memiliki bayi atau balita, pasti tahu pasti betapa pentingnya fase MPASI (makanan pendamping ASI)",
            categories :{
                create : {
                    categoriesId : {
                        create :{
                            name : "recipe"
                        }
                    }
                }
            }
        }
    }
}

module.exports = {
    gramedia
}