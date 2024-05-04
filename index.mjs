// API - bu internetdagi dasturiy ilovalar o'rtasidagi aloqani ta'minlovchi texnologiya.
// API "Application Programming Interface". 

// Backend dasturchi sifatida mening mas'uliyatim server tomonidagi ilovalarni yaratish.

// API turlari REST, GrapthQL, gRPC, SOAP, WebSockets kabi turli xil API turlari ammo ularning eng mashhuri va bu REST API.

// CRUD API nima?
// Veb-ishlab chiqishda CRUD operatsiyalari backend tizimlarining noni va sariyog'idir.
// CRUD - Create("Yaratish"), Read("O'qish"), Update("Yangilash"), Delete("O'chirish").

// CRUD 
// Bu erda CRUD operatsiyalari bilan bog'liq to'rtta asosiy HTTP usullarining qisqacha ko'rinishi:

// GET : Serverdan ma'lumotlarni o'qish yoki olish uchun ishlatiladi.
// POST : Serverda yangi ma'lumotlarni yaratish uchun ishlatiladi.
// PUT : Serverdagi mavjud ma'lumotlarni yangilash uchun ishlatiladi.
// DELETE : Serverdan ma'lumotlarni o'chirish uchun ishlatiladi.


// NODE JS NIMA ?:
// Node.js JavaScript kodini brauzerdan tashqarida bajarish uchun ochiq manbali va platformalararo ish vaqti muhitidir. 

// Nima uchun NODE ?:
// 1. Bu backend yaratish uchun eng mashhur variantlardan biridir
// 2. Siz JavaScript-ni butun stekingiz bo'ylab yozishingiz mumkin, bu esa frontend dasturchisidan backend ishlab chiqaruvchisiga va aksincha o'tishni osonlashtiradi.
// 3. Bu ilovalarni oson masshtablash imkonini beradi, bu uni keng ko'lamli professional loyihalar uchun yaxshi tanlov qiladi.
// 4. Bu tez va bloklanmaydi. Buning sababi Node.js ning asinxron hodisaga asoslangan tabiati.
// 5. Node.js jonli hamjamiyat va paketlar va kutubxonalarning boy ekotizimiga ega.




// Express nima ?:
// Express - bu Node.js uchun tezkor, noaniq va minimalist veb-backend yoki server tomonidagi veb-ramka. Asosan, bu sizga API-laringizni xohlagancha, kamroq kod bilan yaratish imkoniyatini beradi.
// Bu Node.js ustiga qurilgan ramka bo'lib, u sizga osonlik bilan Backend yaratish imkonini beradi. To'liq stekli ilovalarni yaratish uchun siz Express-dan React, Angular yoki Vue kabi frontend ramkalar bilan birgalikda foydalanishingiz mumkin.

// Nima uchun sizga ekspress kerak?
// Bu Node.js yordamida veb-ilovalarni yaratishni ancha osonlashtiradi.
// Bu juda yengil, tez va bepul.
// U server tomonidan ko'rsatilgan ilovalar uchun ham, API/Mikroservislar uchun ham qo'llaniladi.
// Bu eng mashhur tugun.
// Bu sizga so'rovlar va javoblar ustidan to'liq nazorat qilish imkonini beradi.



// Rivojlanish muhitini qanday sozlash kerak
// API yaratishga kirishishdan oldin mahalliy kompyuteringizda asosiy serverni yaratish jarayonini ko'rib chiqamiz.

// Quyidagi qadamlarni bajarish kerak:

// 1-qadam - Katalog yaratish
// Kompyuteringizda katalog/papka yarating. Jildni kod muharririda oching

// 2-qadam – index.js faylini yarating
// Ushbu buyruq yordamida papka ichida index.js faylini yarating :

// touch index.js

// 3-qadam – NPMni ishga tushiring
// Terminalingizda ushbu buyruqni ishga tushirish orqali NPM ni papka ichida ishga tushiring:

// npm init -y
// Buyruq standart qiymatlarga ega package.json faylini yaratadi .

// 5-qadam - Express-ni o'rnating
// Express.js-ni o'rnatish uchun quyidagi buyruqdan foydalaning



// Node.js va Express yordamida CRUD Restful API uchun serverni qanday sozlash mumkin
// CRUD tinch API yaratish uchun avvalo serveringizni sozlashingiz kerak. Buni quyidagi amallarni bajarish orqali qilishingiz mumkin:

// CRUD tinch API yaratish uchun avvalo serveringizni sozlashingiz kerak. Buni quyidagi amallarni bajarish orqali qilishingiz mumkin:

// 1-qadam – Server dastur kodini index.js fayliga yozing

// Asosan, server kodi quyidagicha ko'rinadi:



// Mana pastdagi kod uchun tushuntirish:

// Birinchi qatorda biz expresso'rnatgan Express modulidan import qildik.
// Ekspres bilan birga keladi bodyParserva u bizga kiruvchi POST so'rovini qabul qilish imkonini beradi.
// appKeyinchalik, ob'ekt yordamida biz yaratdik express.
// Keyin ilova uchun portni belgilab oldik – u 5000 ga o‘rnatildi (agar siz ushbu portdan foydalanishda xatolik yuzaga kelsa, port hozirda boshqa ilova tomonidan foydalanilayotgan bo‘lishi mumkin, shuning uchun siz portingizni o‘zgartirishingiz yoki boshqasini to‘xtatishingiz mumkin. ilova portdan foydalanishdan).
// Keyinchalik, JSON ma'lumotlari ilovada ishlatilishini aniqladik.
// U yaratilgandan so'ng, biz ilovamiz kiruvchi so'rovlarni tinglash uchun listenusuldan foydalandik. appUsul ikkita narsani qabul qiladi: PORT , bu erda biz mijozimiz tomonidan so'rovlarni tinglaymiz va serverimiz o'rnatilganda ishga tushadigan qayta qo'ng'iroq qilish funktsiyasi.


// 3-qadam - Nodemonni o'rnating (ixtiyoriy)
// Ayni paytda, istalgan vaqtda server faylingizga o'zgartirishlar kiritsangiz, o'zgartirishlaringiz aks etishi uchun serverni qayta ishga tushirishingiz kerak bo'ladi (siz sinab ko'rishingiz va ko'rishingiz mumkin). Shunday qilib, ushbu muammoni hal qilish uchun siz Nodemon-dan foydalanishingiz mumkin. Uni o'rnatish uchun buyruqni bajaring:

// Nodemondan foydalanish uchun package.json faylingizga oʻting va skriptni oʻrnating. Buning o'rniga boshlang'ich skriptingizni almashtiring:



import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('[GET ROUTE')
  res.send('Solomat')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

