// npx prisma db seed == command to seeding the database
// import {gramedia} from '../data/gramedia';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// const buku_gramedia = {
//     create : {
//         title : "Mommyclopedia: 78 Resep MPASI",
//         author : "dr. Meta Hanindita, Sp.A",
//         image : "https://cdn.gramedia.com/uploads/items/9786020643250_Mommyclopedia_5_78_Resep_MAPASI_C_1_4-1.jpg",
//         year : 2022,
//         synopsis : "Bagi Moms yang masih memiliki bayi atau balita, pasti tahu pasti betapa pentingnya fase MPASI (makanan pendamping ASI)",
//         categories :{
//             create : {
//                 categoriesId : {
//                     create :{
//                         name : "recipe"
//                     }
//                 }
//             }
//         }
//     }
// }


async function main(){
    // await prisma.publisher.deleteMany()
    
    
    // ------------------

    // const getElex: object | null = await prisma.publisher.delete({
    //     where: {
    //       email : "redaksi@elex.media"
    //     },
    //   })

    // console.log(getElex);

    //----------------


    
}

const addPublisher = async () => {
    
const gramedia = {
        name : "gramedia",
        address : "jakarta",
        phone : "0829034009089",
        email : "pr@kompasgramedia.com",
        image : "https://www.gramedia.com/assets/gramedia-icon-2.png",
        // books : buku_gramedia
    }
const mediakita = {
        name : "mediakita",
        address : "jakarta",
        phone : "08290424011",
        email : "naskah@mediakita.com",
        image : "https://mediakita.com/wp-content/uploads/2019/07/logo-mediakita-kecil.png",
       
    }
const noura_pub = {
        name : "Noura Publishing",
        address : "jakarta",
        phone : "(021) 78880556",
        email : "@noura.mizan.com",
        image : "https://nourabooks.co.id/wp-content/uploads/2020/08/noura-white-logo-e1604548519969.png",
       
    }
const elex_pub = {
        name : "Elex Media Komputindo",
        address : "jakarta",
        phone : "(021) 78880556",
        email : "redaksi@elex.media",
        image : "https://elexmedia.id/img/logo-elexmedia-komputindo.png",
       
    }
const gagas_pub = {
        name : "Gagas Media",
        address : "jakarta",
        phone : "(021) 78883030",
        email : "redaksi@gagasmedia.net",
        image : "https://gagasmedia.net/wp-content/uploads/2019/05/logo-gagasmedia.png",
       
    }

const blindeye_pub = {
        name : "Blind Eye Books",
        address :"Seattle, US",
        phone : "(360) 715-9117",
        email : "editor@blindeyebooks.com.",
        image : "https://images.squarespace-cdn.com/content/v1/57ac18303e00be8a638f3f57/1470896408998-LCJYKYO4R78FJ12SK6JW/logo-banner800.jpg?format=1000w",
       
    }

const publishers = [elex_pub, gagas_pub, noura_pub, mediakita, gramedia, blindeye_pub]

    const publisher = await prisma.publisher.createMany({
        data : publishers
    })

    console.log(publisher);
}

main().catch( e => {
    console.error(e.message)
}).finally(async () => {
    await prisma.$disconnect()
})

// will disconneted as soon as your program finishes running