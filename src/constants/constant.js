import memuzin from "../assets/images/memuzinposter.png";
import damdadelivar from "../assets/images/damdadelivar.png";
import tomris from "../assets/images/tomris.png";
import about1 from "../assets/images/about-1.png"
import about2 from "../assets/images/about-2.png"
import about3 from "../assets/images/about-3.png"
import about4 from "../assets/images/about-4.png"
import about5 from "../assets/images/about-5.png"
import about6 from "../assets/images/about-6.png"
import tomrisImage from "../assets/images/tomris/aksam_gazetesi.PNG"
// import tomrisImage2 from "../assets/images/tomris/anayurt_gazetesi.PNG"
import tomrisImage3 from "../assets/images/tomris/yazili_basin.JPG"
import tomrisImage4 from "../assets/images/tomris/yazili_basin_2.JPG"
import tomrisImage5 from "../assets/images/tomris/yazili_basin_3.JPG"
import damdaImage from "../assets/images/damdadelivar/damda.png"
import damdaImage2 from "../assets/images/damdadelivar/damda2.jpg"
import damdaImage3 from "../assets/images/damdadelivar/damda3.png"
import damdaImage4 from "../assets/images/damdadelivar/damda4.png"
import damdaImage5 from "../assets/images/damdadelivar/damda5.jpeg"
import damdaImage6 from "../assets/images/damdadelivar/damda6.png"
import memuzinImage from "../assets/images/memuzin/memuzin.jpg"
import memuzinImage2 from "../assets/images/memuzin/memuzin2.jpeg"
import memuzinImage3 from "../assets/images/memuzin/memuzin3.jpg"
import memuzinImage4 from "../assets/images/memuzin/memuzin4.jpg"
import memuzinImage5 from "../assets/images/memuzin/memuzin5.JPG"
import memuzinImage6 from "../assets/images/memuzin/memuzin6.jpg"
import memuzinImage7 from "../assets/images/memuzin/memuzin7.jpg"
import memuzinImage8 from "../assets/images/memuzin/memuzin8.jpg"
import memuzinImage9 from "../assets/images/memuzin/memuzin9.jpg"

export const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/about-us',
    name: 'About Us',
  },
  {
    path: '/contact-with-us',
    name: 'Contact With Us',
  }
];

export const teamMembers = [
  {
    icon: '/src/assets/images/ph_film-slate.svg',
    name: 'Dara Kutlay',
    description: "Kariyerine Ankara Halk Tiyatrosu’nda oyuncu olarak başlayan Mehmet Dara Kutlay, Hürriyet Çocuk Kulübü’nde çocuk oyunlarında yönetmenlik yaptı. Ankara Komedi Tiyatrosu’nun kuruculuğunun yanı sıra, TRT Ankara Televizyonu’nda Film Seslendirme Sanatçısı olarak görev aldı. Oyunculuk ve Tiyatronun ardından Avrupa’da yayın yapan birçok TV kanalında sayısız projede yapımcı ve yönetmen olarak çalıştı. Mehmet Dara Kutlay, 2020 yılında Rain Media’yı kurdu."
  },
  {
    icon: '/src/assets/images/ph_film-slate.svg',
    name: 'Zelal Sever',
    description: 'PR ve Reklamcılık lisans eğitiminin ardından İstanbul Üniversitesi’nde İşletme Yönetimi yüksek lisansını, UCLA Extension’da Business Communications üzerine eğitim programını tamamladı. Eğitim hayatına devam ederken medya, iletişim ve turizm sektörlerinde faaliyet yürüten yerli ve yabancı birçok şirkete Marka Yöneticisi ve Proje İletişim Koordinatörü olarak görev aldı. 2020 yılında Rain’in kuruluşunda yer alan Zelal Sever şirketin Proje Yöneticisi olarak görevini yürütüyor.'
  }
]

export const footerLinks = [
  {
    name: 'Menü',
    links: [
      {
        name: 'Anasayfa',
        to: "/"
      },
      {
        name: 'Biz Kimiz',
        to: "/about"
      },
      {
        name: 'Projeler',
        to: "/projects"
      },
      {
        name: 'İletişim',
        to: "/contact"
      }
    ]
  },
  {
    name: 'Linkler',
    links: [
      {
        name: 'Etkinlikler',
        to: "/"
      },
      {
        name: 'Bilet Al',
        to: "/"
      },
      {
        name: 'Gizlilik Hatası',
        to: "/"
      }
    ]
  },

]

export const socialIcons = [
  {
    name: 'Sosyal Medya',
    links: [
      {
        name: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="16.608" stroke="#828282" strokeWidth="0.785"></circle>
          <g clipPath="url(#clip0_2256_789)">
            <path fill="#828282"
                  d="M14.947 24.584v-7.117h-1.87v-2.563h1.87v-2.189c0-1.72 1.104-3.3 3.648-3.3 1.03 0 1.792.1 1.792.1l-.06 2.393s-.777-.008-1.624-.008c-.918 0-1.065.426-1.065 1.133v1.87H20.4l-.12 2.564h-2.642v7.117h-2.691z"></path>
          </g>
          <defs>
            <clipPath id="clip0_2256_789">
              <path fill="#fff" d="M0 0H7.323V15.169H0z" transform="translate(13.077 9.415)"></path>
            </clipPath>
          </defs>
        </svg>,
        to: "https://www.facebook.com/"
      },
      {
        name: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="16.608" stroke="#828282" strokeWidth="0.785"></circle>
          <g clipPath="url(#clip0_2256_785)">
            <path fill="#828282"
                  d="M22.829 13.567a4.88 4.88 0 01-1.4.384c.51-.305.89-.784 1.072-1.349a4.862 4.862 0 01-1.548.591 2.438 2.438 0 00-4.152 2.223 6.92 6.92 0 01-5.022-2.546 2.436 2.436 0 00-.042 2.375c.189.354.462.656.796.879a2.43 2.43 0 01-1.104-.305v.031a2.438 2.438 0 001.955 2.39 2.454 2.454 0 01-1.1.041 2.44 2.44 0 002.276 1.692 4.889 4.889 0 01-3.608 1.01 6.89 6.89 0 003.734 1.094c4.483 0 6.934-3.713 6.934-6.933 0-.104-.003-.21-.008-.314a4.954 4.954 0 001.216-1.261v-.002z"></path>
          </g>
          <defs>
            <clipPath id="clip0_2256_785">
              <path fill="#fff" d="M0 0H12.554V12.554H0z" transform="translate(10.461 10.985)"></path>
            </clipPath>
          </defs>
        </svg>,
        to: "https://twitter.com/rainmediaorg"
      },
      {
        name: <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          viewBox="0 0 34 34"
        >
          <circle
            cx="17"
            cy="17"
            r="16.608"
            stroke="#828282"
            strokeWidth="0.785"
          ></circle>
          <path
            fill="#828282"
            d="M17.5 15.547a1.957 1.957 0 00-1.952 1.953c0 1.075.877 1.953 1.952 1.953a1.957 1.957 0 001.953-1.953 1.957 1.957 0 00-1.953-1.953zm5.857 1.953c0-.809.007-1.61-.038-2.417-.046-.938-.26-1.77-.945-2.455-.687-.687-1.518-.9-2.455-.945-.809-.045-1.61-.038-2.417-.038-.809 0-1.61-.007-2.417.038-.938.046-1.77.26-2.455.945-.687.687-.9 1.518-.945 2.455-.045.809-.038 1.61-.038 2.417 0 .807-.007 1.61.038 2.417.045.937.26 1.77.945 2.455.687.687 1.517.9 2.455.945.808.045 1.61.038 2.417.038.809 0 1.61.007 2.417-.038.937-.046 1.77-.26 2.455-.945.687-.687.9-1.518.945-2.455.047-.807.038-1.609.038-2.417zM17.5 20.504a3 3 0 01-3.004-3.004 3 3 0 013.004-3.004 3 3 0 013.005 3.004 3 3 0 01-3.005 3.004zm3.128-5.43a.7.7 0 11-.002-1.402.7.7 0 01.002 1.402z"
          ></path>
        </svg>,
        to: "https://www.instagram.com/"
      },
      {
        name: <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          viewBox="0 0 34 34"
        >
          <circle
            cx="17"
            cy="17"
            r="16.608"
            stroke="#828282"
            strokeWidth="0.785"
          ></circle>
          <g clipPath="url(#clip0_2256_511)">
            <path
              fill="#828282"
              d="M23.688 14.067a1.74 1.74 0 00-.479-.794 1.905 1.905 0 00-.836-.464c-1.174-.31-5.876-.31-5.876-.31-1.96-.021-3.92.077-5.87.295-.313.087-.6.25-.835.475a1.81 1.81 0 00-.487.797A18.18 18.18 0 009 17.5c-.007 1.15.095 2.3.305 3.434.086.3.253.572.485.793.232.22.52.38.838.464 1.19.309 5.869.309 5.869.309a47.985 47.985 0 005.876-.294c.313-.08.601-.24.836-.464.228-.216.394-.49.478-.793.216-1.132.32-2.283.313-3.435a16.612 16.612 0 00-.312-3.448zm-8.686 5.573v-4.28l3.912 2.14-3.912 2.14z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2256_511">
              <path
                fill="#fff"
                d="M0 0H15V15H0z"
                transform="translate(9 10)"
              ></path>
            </clipPath>
          </defs>
        </svg>,
        to: "https://www.youtube.com/channel/UCj1Vnm5LI_kjB9-7EGPpYWQ"
      }
    ]
  }
]

export const projects = [
  {
    id: 1,
    slug: "memuzin",
    name: "Memuzin",
    image: memuzin,
    width: 200,
  },
  {
    id: 2,
    slug: "damdadelivar",
    name: "Damda deLi var",
    image: damdadelivar,
    width: 200,
  },
  {
    id: 3,
    slug: "tomris",
    name: "Tomris",
    image: tomris,
    width: 200,
  },
];

export const contents = [
  {
    name: "memuzin",
    poster: memuzin,
    slogan: "",
    description: `Mem û Zîn Operası, 17. yüzyılda Ehmedê Xanî tarafından kaleme alınan ve Kürt edebiyatında önemli bir yere sahip olan trajik aşk destanı "Mem û Zîn"in operaya dönüştürülmüş bir yorumudur. Bu eser, kimi evrensel temalarıyla Shakespeare'in "Romeo ve Juliet" hikayesine benzerlikler gösterir; aşkın saf gücünü, tutkunun derinliğini, feodal toplum yapısının getirdiği zorlukları ve adaletsizliklerin gölgesindeki direnci merkezine alır.
      Kürt kültürüne ve tarihine dair derin bir anlayış sunan bu eser; aşkın, aile ve toplumsal baskıların gölgesinde nasıl bir yol izlediğini, tutkunun ve fedakarlığın sınırlarını ve bu sınırların aşk uğruna nasıl zorlandığını irdeler. Operanın, bu efsanevi hikayeyi sahnelemesi, hem Kürt kültürünün evrenselliğini vurgulamakta hem de aşkın ve insan ruhunun kırılganlığının, farklı kültürlerde ve zaman dilimlerinde nasıl benzer temalarla işlendiğini göstermektedir.
      Mem û Zîn Operası, yalnızca dünyada sahnelenen ilk Kürtçe opera olmasıyla değil, aynı zamanda kültürümüzün köklü geçmişini, değerli edebiyatını ve dinamik kültürel yapısını evrensel bir platforma taşıma kapasitesiyle dikkat çeker. Kürt dilinin ritmik ve melodik zenginliklerini tüm dünyaya sunarak, kültürel çeşitliliği ve dilsel derinliği vurgulayan bu eser, tüm dünyada sanatseverlerin ilgisini çekme potansiyeline sahiptir.`,
    highlight: "",
    summary: `Mem û Zîn Operası, 17. yüzyılda Ehmedê Xanî tarafından kaleme alınan ve Kürt edebiyatında önemli bir yere sahip olan trajik aşk destanı "Mem û Zîn"in operaya dönüştürülmüş bir yorumudur. Bu eser, kimi evrensel temalarıyla Shakespeare'in "Romeo ve Juliet" hikayesine benzerlikler gösterir; aşkın saf gücünü, tutkunun derinliğini, feodal toplum yapısının getirdiği zorlukları ve adaletsizliklerin gölgesindeki direnci merkezine alır.
      Kürt kültürüne ve tarihine dair derin bir anlayış sunan bu eser; aşkın, aile ve toplumsal baskıların gölgesinde nasıl bir yol izlediğini, tutkunun ve fedakarlığın sınırlarını ve bu sınırların aşk uğruna nasıl zorlandığını irdeler. Operanın, bu efsanevi hikayeyi sahnelemesi, hem Kürt kültürünün evrenselliğini vurgulamakta hem de aşkın ve insan ruhunun kırılganlığının, farklı kültürlerde ve zaman dilimlerinde nasıl benzer temalarla işlendiğini göstermektedir.
      Mem û Zîn Operası, yalnızca dünyada sahnelenen ilk Kürtçe opera olmasıyla değil, aynı zamanda kültürümüzün köklü geçmişini, değerli edebiyatını ve dinamik kültürel yapısını evrensel bir platforma taşıma kapasitesiyle dikkat çeker. Kürt dilinin ritmik ve melodik zenginliklerini tüm dünyaya sunarak, kültürel çeşitliliği ve dilsel derinliği vurgulayan bu eser, tüm dünyada sanatseverlerin ilgisini çekme potansiyeline sahiptir.`,
    gallery: [
      {
        src: [memuzinImage,memuzinImage2,memuzinImage3,memuzinImage4,memuzinImage5,memuzinImage6,memuzinImage7,memuzinImage8,memuzinImage9],
        alt: ''
      }
    ]
  },
  {
    name: "tomris",
    poster: tomris,
    slogan: "Yalnızlığımdır Özgürlüğümün Bedeli",
    description: 'Parlak zekasına rağmen duygusal karmaşaları ile mücadele eden akıl hastanesindeki bir kadının kendini Türk edebiyat dünyasının kendine özgü, cesur, güçlü ve özgür kalemlerinden Tomris Uyar’da aramasını konu edinen tek kişilik tiyatro oyunu “Tomris"',
    highlight: "Tarihin karanlık sayfalarında kaybolan bir kadının hikayesi.",
    summary: "Bu bir kadın hikayesidir… Ama sadece kadınlarla ilgili değildir.Türk edebiyat dünyasının kendine özgü, cesur, güçlü ve özgür kalemlerinden Tomris Uyar’ın yaşamından ilhamla kaleme alınan oyunda; akıl hastanesindeki bir kadının kendini Tomris Uyar’da arayışı anlatılıyor.Oyun boyunca parlak zekasına şahit olduğumuz akıl hastanesindeki sözde “Tomris Uyar”; ilişki, aşk, evlilik kavramlarını Tomris Uyar’ın hayatından kesitlerle sorgularken kadına ve kadının toplumdaki yerine dair çok önemli mesajlar da veriyor.",
     gallery: [
      {
        src: [tomrisImage,tomrisImage3,tomrisImage4,tomrisImage5],
        alt: ''
      }
    ]
  },
  {
    name: "damdadelivar",
    poster: damdadelivar,
    slogan: "Damda Deli Var",
    summary: `“Damda Deli Var" Müzikali, Orostopontopolis adında kurgusal bir ülkede yaşanan politik, ekonomik ve sosyal olayları mizahi bir dille sahneye taşıyor. Aziz Nesin'in aynı adlı eserinden esinlenen bu iki perdelik müzikli oyun, damdaki bir delinin muhtarlıktan imparatorluğa kadar yükselme cüretini ele alarak, ince esprilerle harmanlanmış eleştirilerle izleyicisini hem güldürüyor hem de düşündürüyor.`,
    description: `“Damda Deli Var" Müzikali, Orostopontopolis adında kurgusal bir ülkede yaşanan politik, ekonomik ve sosyal olayları mizahi bir dille sahneye taşıyor. Aziz Nesin'in aynı adlı eserinden esinlenen bu iki perdelik müzikli oyun, damdaki bir delinin muhtarlıktan imparatorluğa kadar yükselme cüretini ele alarak, ince esprilerle harmanlanmış eleştirilerle izleyicisini hem güldürüyor hem de düşündürüyor.`,
     gallery: [
      {
        src: [damdaImage,damdaImage2,damdaImage3,damdaImage4,damdaImage5,damdaImage6],
        alt: ''
      }
    ]
  }
]

export const aboutUsSliderItems = [
  {
    imgSrc: about1
  },
  {
    imgSrc: about2
  },
  {
    imgSrc: about3
  },
  {
    imgSrc: about4
  },
  {
    imgSrc: about5
  },
  {
    imgSrc: about6
  }
]

export const aboutUsTextContent = [
  {
    heading: "Rain Media",
    description: " Rain Media, sanatın büyüsünü seyircilerine taşıma misyonuyla yola çıkan; farkını yaratıcılık, tutku ve cesaret ile sergileyen, her projede sıradanın ötesine geçmeyi hedefleyen, izleyicilerine farklı ve akılda kalıcı deneyimler sunmak için yenilikçi yaklaşımlar benimseyen genç ve dinamik bir medya şirketidir."
  }
]

export const projectGalleryImages = [
  {
    projectName: "memuzin",
    projectImages: [memuzinImage,memuzinImage2,memuzinImage3,memuzinImage4,memuzinImage5,memuzinImage6,memuzinImage7,memuzinImage8,memuzinImage9]
  },
  {
    projectName: "damdadelivar",
    projectImages: [damdaImage,damdaImage2,damdaImage3,damdaImage4,damdaImage5,damdaImage6]
  },
  {
    projectName: "tomris",
    projectImages: [tomrisImage,tomrisImage2,tomrisImage3,tomrisImage4,tomrisImage5]
  }
]