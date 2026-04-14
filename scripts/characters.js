'use strict';

// ===================== CHARACTER ROSTER =====================

const CHARACTERS = [
  {
    name: 'Edward Elric',
    image: 'assets/characters/edwardelric.png',
    rankings: { speed: 80, strength: 72, intelligence: 90, combat: 88, power: 82, durability: 72 },
  },
  {
    name: 'Goku',
    image: 'assets/characters/goku.png',
    rankings: { speed: 95, strength: 98, intelligence: 60, combat: 97, power: 99, durability: 90 },
  },
  {
    name: 'Naruto Uzumaki',
    image: 'assets/characters/narutouzumaki.png',
    rankings: { speed: 95, strength: 92, intelligence: 72, combat: 96, power: 98, durability: 93 },
  },
  {
    name: 'Monkey D. Luffy',
    image: 'assets/characters/luffy.png',
    rankings: { speed: 85, strength: 88, intelligence: 55, combat: 90, power: 87, durability: 92 },
  },
  {
    name: 'Light Yagami',
    image: 'assets/characters/lightyagami.png',
    rankings: { speed: 50, strength: 30, intelligence: 100, combat: 30, power: 70, durability: 40 },
  },
  {
    name: 'Spike Spiegel',
    image: 'assets/characters/spikespiegel.png',
    rankings: { speed: 82, strength: 70, intelligence: 80, combat: 90, power: 60, durability: 72 },
  },
  {
    name: 'Lelouch vi Britannia',
    image: 'assets/characters/lelouch.png',
    rankings: { speed: 45, strength: 25, intelligence: 99, combat: 35, power: 80, durability: 35 },
  },
  {
    name: 'Gon Freecss',
    image: 'assets/characters/gonfreecss.png',
    rankings: { speed: 88, strength: 85, intelligence: 60, combat: 88, power: 90, durability: 82 },
  },
  {
    name: 'Levi Ackerman',
    image: 'assets/characters/leviackerman.png',
    rankings: { speed: 95, strength: 78, intelligence: 82, combat: 99, power: 75, durability: 78 },
  },
  {
    name: 'Saitama',
    image: 'assets/characters/saitama.png',
    rankings: { speed: 99, strength: 100, intelligence: 55, combat: 90, power: 100, durability: 100 },
  },
  {
    name: 'Izuku Midoriya',
    image: 'assets/characters/izukumidoriya.png',
    rankings: { speed: 85, strength: 88, intelligence: 85, combat: 87, power: 88, durability: 80 },
  },
  {
    name: 'Tanjiro Kamado',
    image: 'assets/characters/tanjirokamado.png',
    rankings: { speed: 82, strength: 75, intelligence: 72, combat: 88, power: 82, durability: 80 },
  },
  {
    name: 'Yuji Itadori',
    image: 'assets/characters/yujiitadori.png',
    rankings: { speed: 88, strength: 90, intelligence: 65, combat: 90, power: 85, durability: 90 },
  },
  {
    name: 'Eren Yeager',
    image: 'assets/characters/erenyeager.png',
    rankings: { speed: 70, strength: 92, intelligence: 75, combat: 82, power: 90, durability: 88 },
  },
  {
    name: 'Ichigo Kurosaki',
    image: 'assets/characters/ichigokurosaki.png',
    rankings: { speed: 90, strength: 85, intelligence: 70, combat: 90, power: 92, durability: 85 },
  },
  {
    name: 'Vegeta',
    image: 'assets/characters/vegeta.png',
    rankings: { speed: 92, strength: 95, intelligence: 72, combat: 95, power: 96, durability: 88 },
  },
  {
    name: 'Sasuke Uchiha',
    image: 'assets/characters/sasukeuchiha.png',
    rankings: { speed: 93, strength: 80, intelligence: 93, combat: 96, power: 96, durability: 82 },
  },
  {
    name: 'Roronoa Zoro',
    image: 'assets/characters/roronoazoro.png',
    rankings: { speed: 82, strength: 88, intelligence: 65, combat: 95, power: 85, durability: 85 },
  },
  {
    name: 'L Lawliet',
    image: 'assets/characters/llawliet.png',
    rankings: { speed: 40, strength: 30, intelligence: 100, combat: 25, power: 30, durability: 40 },
  },
  {
    name: 'Killua Zoldyck',
    image: 'assets/characters/killuazoldyck.png',
    rankings: { speed: 95, strength: 75, intelligence: 85, combat: 92, power: 82, durability: 75 },
  },
  {
    name: 'Shigeo Kageyama',
    image: 'assets/characters/shigeokageyama.png',
    rankings: { speed: 70, strength: 60, intelligence: 55, combat: 65, power: 100, durability: 80 },
  },
  {
    name: 'Ken Kaneki',
    image: 'assets/characters/kenkaneki.png',
    rankings: { speed: 85, strength: 80, intelligence: 78, combat: 85, power: 85, durability: 88 },
  },
  {
    name: 'Guts',
    image: 'assets/characters/guts.png',
    rankings: { speed: 80, strength: 95, intelligence: 65, combat: 97, power: 75, durability: 88 },
  },
  {
    name: 'Thorfinn',
    image: 'assets/characters/thorfinn.png',
    rankings: { speed: 85, strength: 80, intelligence: 70, combat: 95, power: 60, durability: 78 },
  },
  {
    name: 'Giorno Giovanna',
    image: 'assets/characters/giornogiovanna.png',
    rankings: { speed: 75, strength: 65, intelligence: 88, combat: 80, power: 95, durability: 70 },
  },
  {
    name: 'Rimuru Tempest',
    image: 'assets/characters/rimurutempest.png',
    rankings: { speed: 85, strength: 80, intelligence: 95, combat: 82, power: 98, durability: 90 },
  },
  {
    name: 'Ainz Ooal Gown',
    image: 'assets/characters/ainzooalgown.png',
    rankings: { speed: 70, strength: 70, intelligence: 98, combat: 75, power: 99, durability: 88 },
  },
  {
    name: 'Denji',
    image: 'assets/characters/denji.png',
    rankings: { speed: 72, strength: 85, intelligence: 40, combat: 80, power: 78, durability: 90 },
  },
  {
    name: 'Frieren',
    image: 'assets/characters/frieren.png',
    rankings: { speed: 75, strength: 55, intelligence: 95, combat: 72, power: 98, durability: 70 },
  },
  {
    name: 'Kiyotaka Ayanokoji',
    image: 'assets/characters/kiyotakaayanokoji.png',
    rankings: { speed: 78, strength: 75, intelligence: 100, combat: 82, power: 45, durability: 70 },
  },
  {
    name: 'Meliodas',
    image: 'assets/characters/meliodas.png',
    rankings: { speed: 90, strength: 92, intelligence: 72, combat: 95, power: 95, durability: 90 },
  },
  {
    name: 'Vash the Stampede',
    image: 'assets/characters/vashthestampede.png',
    rankings: { speed: 92, strength: 65, intelligence: 80, combat: 88, power: 80, durability: 72 },
  },
  {
    name: 'Yusuke Urameshi',
    image: 'assets/characters/yusukeurameshi.png',
    rankings: { speed: 85, strength: 82, intelligence: 60, combat: 90, power: 88, durability: 82 },
  },
  {
    name: 'Himura Kenshin',
    image: 'assets/characters/himurakenshin.png',
    rankings: { speed: 95, strength: 70, intelligence: 80, combat: 98, power: 72, durability: 70 },
  },
  {
    name: 'Mugen',
    image: 'assets/characters/mugen.png',
    rankings: { speed: 85, strength: 78, intelligence: 55, combat: 95, power: 65, durability: 78 },
  },
  {
    name: 'Major Motoko Kusanagi',
    image: 'assets/characters/motokokusanagi.png',
    rankings: { speed: 80, strength: 72, intelligence: 97, combat: 90, power: 75, durability: 75 },
  },
  {
    name: 'Kirito',
    image: 'assets/characters/kirito.png',
    rankings: { speed: 88, strength: 75, intelligence: 80, combat: 90, power: 82, durability: 78 },
  },
  {
    name: 'Natsu Dragneel',
    image: 'assets/characters/natsudragneel.png',
    rankings: { speed: 82, strength: 85, intelligence: 45, combat: 85, power: 88, durability: 85 },
  },
  {
    name: 'Asta',
    image: 'assets/characters/asta.png',
    rankings: { speed: 85, strength: 85, intelligence: 50, combat: 88, power: 80, durability: 85 },
  },
  {
    name: 'Roy Mustang',
    image: 'assets/characters/roymustang.png',
    rankings: { speed: 65, strength: 55, intelligence: 90, combat: 75, power: 88, durability: 62 },
  },
  {
    name: 'Itachi Uchiha',
    image: 'assets/characters/itachiuchiha.png',
    rankings: { speed: 93, strength: 70, intelligence: 99, combat: 97, power: 93, durability: 72 },
  },
  {
    name: 'Gohan',
    image: 'assets/characters/gohan.png',
    rankings: { speed: 88, strength: 92, intelligence: 80, combat: 88, power: 92, durability: 85 },
  },
  {
    name: 'Hisoka',
    image: 'assets/characters/hisoka.png',
    rankings: { speed: 90, strength: 80, intelligence: 90, combat: 95, power: 88, durability: 78 },
  },
  {
    name: 'Homura Akemi',
    image: 'assets/characters/homuraakemi.png',
    rankings: { speed: 85, strength: 50, intelligence: 90, combat: 75, power: 95, durability: 65 },
  },
  {
    name: 'Madoka Kaname',
    image: 'assets/characters/madokakaname.png',
    rankings: { speed: 60, strength: 40, intelligence: 72, combat: 45, power: 100, durability: 55 },
  },
  {
    name: 'Subaru Natsuki',
    image: 'assets/characters/subarunatsuki.png',
    rankings: { speed: 55, strength: 40, intelligence: 75, combat: 40, power: 35, durability: 65 },
  },
  {
    name: 'Rem',
    image: 'assets/characters/rem.png',
    rankings: { speed: 78, strength: 75, intelligence: 70, combat: 82, power: 80, durability: 75 },
  },
  {
    name: 'Kazuma Satou',
    image: 'assets/characters/kazumasatou.png',
    rankings: { speed: 50, strength: 35, intelligence: 80, combat: 55, power: 45, durability: 50 },
  },
  {
    name: 'Megumin',
    image: 'assets/characters/megumin.png',
    rankings: { speed: 40, strength: 25, intelligence: 78, combat: 30, power: 98, durability: 30 },
  },
  {
    name: 'Emma',
    image: 'assets/characters/emma.png',
    rankings: { speed: 65, strength: 50, intelligence: 82, combat: 50, power: 40, durability: 60 },
  },
  {
    name: 'Koro-sensei',
    image: 'assets/characters/korosensei.png',
    rankings: { speed: 100, strength: 75, intelligence: 99, combat: 88, power: 80, durability: 72 },
  },
  {
    name: 'Alucard',
    image: 'assets/characters/alucard.png',
    rankings: { speed: 85, strength: 88, intelligence: 85, combat: 90, power: 98, durability: 98 },
  },
  {
    name: 'Revy',
    image: 'assets/characters/revy.png',
    rankings: { speed: 80, strength: 65, intelligence: 65, combat: 88, power: 58, durability: 68 },
  },
  {
    name: 'Akame',
    image: 'assets/characters/akame.png',
    rankings: { speed: 90, strength: 72, intelligence: 70, combat: 92, power: 85, durability: 72 },
  },
  {
    name: 'Artoria Pendragon',
    image: 'assets/characters/artoriapendragon.png',
    rankings: { speed: 88, strength: 88, intelligence: 82, combat: 95, power: 90, durability: 85 },
  },
  {
    name: 'Kiritsugu Emiya',
    image: 'assets/characters/kiritsugu.png',
    rankings: { speed: 85, strength: 65, intelligence: 90, combat: 88, power: 72, durability: 65 },
  },
  {
    name: 'Gilgamesh',
    image: 'assets/characters/gilgamesh.png',
    rankings: { speed: 85, strength: 85, intelligence: 85, combat: 88, power: 99, durability: 88 },
  },
  {
    name: 'Inuyasha',
    image: 'assets/characters/inuyasha.png',
    rankings: { speed: 88, strength: 85, intelligence: 60, combat: 88, power: 85, durability: 85 },
  },
  {
    name: 'Usagi Tsukino',
    image: 'assets/characters/usagitsukino.png',
    rankings: { speed: 55, strength: 40, intelligence: 55, combat: 45, power: 90, durability: 60 },
  },
  {
    name: 'Violet Evergarden',
    image: 'assets/characters/violetevergarden.png',
    rankings: { speed: 78, strength: 75, intelligence: 82, combat: 80, power: 55, durability: 70 },
  },
  {
    name: 'Clare',
    image: 'assets/characters/clare.png',
    rankings: { speed: 85, strength: 78, intelligence: 72, combat: 90, power: 80, durability: 78 },
  },
  {
    name: 'Ryuk',
    image: 'assets/characters/ryuk.png',
    rankings: { speed: 70, strength: 60, intelligence: 88, combat: 50, power: 90, durability: 80 },
  },
  {
    name: 'Mikasa Ackerman',
    image: 'assets/characters/mikasaackerman.png',
    rankings: { speed: 90, strength: 82, intelligence: 72, combat: 95, power: 75, durability: 78 },
  },
  {
    name: 'Alphonse Elric',
    image: 'assets/characters/alphonseelric.png',
    rankings: { speed: 72, strength: 85, intelligence: 85, combat: 82, power: 78, durability: 92 },
  },
  {
    name: 'Naofumi Iwatani',
    image: 'assets/characters/naofumiiwatani.png',
    rankings: { speed: 60, strength: 65, intelligence: 78, combat: 75, power: 72, durability: 98 },
  },
  {
    name: 'Bell Cranel',
    image: 'assets/characters/bellcranel.png',
    rankings: { speed: 90, strength: 65, intelligence: 65, combat: 80, power: 78, durability: 70 },
  },
  {
    name: 'Loid Forger',
    image: 'assets/characters/loidforger.png',
    rankings: { speed: 82, strength: 75, intelligence: 95, combat: 90, power: 60, durability: 72 },
  },
  {
    name: 'Riko',
    image: 'assets/characters/riko.png',
    rankings: { speed: 60, strength: 40, intelligence: 82, combat: 35, power: 38, durability: 55 },
  },
  {
    name: 'Taiga Aisaka',
    image: 'assets/characters/taigaaisaka.png',
    rankings: { speed: 65, strength: 55, intelligence: 65, combat: 65, power: 40, durability: 55 },
  },
  {
    name: 'Kousei Arima',
    image: 'assets/characters/kouseiarima.png',
    rankings: { speed: 45, strength: 35, intelligence: 80, combat: 20, power: 30, durability: 42 },
  },
  {
    name: 'Sebastian Michaelis',
    image: 'assets/characters/sebastianmichaelis.png',
    rankings: { speed: 92, strength: 88, intelligence: 92, combat: 92, power: 88, durability: 88 },
  },
  {
    name: 'Ciel Phantomhive',
    image: 'assets/characters/cielphantomhive.png',
    rankings: { speed: 50, strength: 35, intelligence: 88, combat: 50, power: 55, durability: 48 },
  },
  {
    name: 'Tohru Honda',
    image: 'assets/characters/tohruhonda.png',
    rankings: { speed: 50, strength: 40, intelligence: 65, combat: 35, power: 38, durability: 52 },
  },
  {
    name: 'Nana Osaki',
    image: 'assets/characters/nanaosaki.png',
    rankings: { speed: 45, strength: 40, intelligence: 70, combat: 35, power: 35, durability: 48 },
  },
  {
    name: 'Tomoya Okazaki',
    image: 'assets/characters/tomoyaokazaki.png',
    rankings: { speed: 45, strength: 40, intelligence: 72, combat: 30, power: 32, durability: 45 },
  },
  {
    name: 'Rika Furude',
    image: 'assets/characters/rikafurude.png',
    rankings: { speed: 48, strength: 30, intelligence: 85, combat: 30, power: 75, durability: 50 },
  },
  {
    name: 'Oreki Houtarou',
    image: 'assets/characters/orekihoutarou.png',
    rankings: { speed: 40, strength: 38, intelligence: 96, combat: 25, power: 30, durability: 42 },
  },
  {
    name: 'Shiroe',
    image: 'assets/characters/shiroe.png',
    rankings: { speed: 50, strength: 35, intelligence: 96, combat: 55, power: 75, durability: 45 },
  },
  {
    name: 'Yuno Gasai',
    image: 'assets/characters/yunogasai.png',
    rankings: { speed: 65, strength: 50, intelligence: 72, combat: 70, power: 82, durability: 60 },
  },
  {
    name: 'Aqua',
    image: 'assets/characters/aqua.png',
    rankings: { speed: 65, strength: 40, intelligence: 35, combat: 45, power: 85, durability: 55 },
  },
  {
    name: 'Darkness',
    image: 'assets/characters/darkness.png',
    rankings: { speed: 45, strength: 72, intelligence: 50, combat: 60, power: 40, durability: 98 },
  },
  {
    name: 'Takemichi Hanagaki',
    image: 'assets/characters/takemichihanagaki.png',
    rankings: { speed: 45, strength: 42, intelligence: 55, combat: 42, power: 35, durability: 85 },
  },
  {
    name: 'Mikey',
    image: 'assets/characters/mikey.png',
    rankings: { speed: 88, strength: 80, intelligence: 70, combat: 95, power: 72, durability: 78 },
  },
  {
    name: 'Lucy',
    image: 'assets/characters/lucy.png',
    rankings: { speed: 78, strength: 80, intelligence: 60, combat: 78, power: 90, durability: 72 },
  },
  {
    name: 'Rin Tohsaka',
    image: 'assets/characters/rintohsaka.png',
    rankings: { speed: 72, strength: 60, intelligence: 88, combat: 75, power: 82, durability: 65 },
  },
  {
    name: 'Seiya Ryuuguuin',
    image: 'assets/characters/seiaryuuguuin.png',
    rankings: { speed: 90, strength: 85, intelligence: 88, combat: 90, power: 85, durability: 88 },
  },
  {
    name: 'Dio Brando',
    image: 'assets/characters/diobrando.png',
    rankings: { speed: 90, strength: 90, intelligence: 92, combat: 92, power: 92, durability: 88 },
  },
  {
    name: 'Joseph Joestar',
    image: 'assets/characters/josephjoestar.png',
    rankings: { speed: 80, strength: 78, intelligence: 88, combat: 85, power: 80, durability: 78 },
  },
  {
    name: 'Jotaro Kujo',
    image: 'assets/characters/jotarokujo.png',
    rankings: { speed: 88, strength: 82, intelligence: 82, combat: 92, power: 90, durability: 82 },
  },
  {
    name: 'Yoichi Isagi',
    image: 'assets/characters/yoichiisagi.png',
    rankings: { speed: 82, strength: 70, intelligence: 90, combat: 72, power: 65, durability: 68 },
  },
  {
    name: 'Shouto Todoroki',
    image: 'assets/characters/shoututodoroki.png',
    rankings: { speed: 82, strength: 80, intelligence: 80, combat: 85, power: 90, durability: 82 },
  },
  {
    name: 'Toga Himiko',
    image: 'assets/characters/togahimiko.png',
    rankings: { speed: 80, strength: 55, intelligence: 70, combat: 78, power: 72, durability: 65 },
  },
  {
    name: 'Shinji Ikari',
    image: 'assets/characters/shinjiikari.png',
    rankings: { speed: 65, strength: 55, intelligence: 70, combat: 65, power: 80, durability: 65 },
  },
  {
    name: 'Rei Ayanami',
    image: 'assets/characters/reiayanami.png',
    rankings: { speed: 62, strength: 52, intelligence: 72, combat: 60, power: 82, durability: 68 },
  },
  {
    name: 'Asuka Langley',
    image: 'assets/characters/asukalangley.png',
    rankings: { speed: 70, strength: 60, intelligence: 80, combat: 70, power: 82, durability: 70 },
  },
  {
    name: 'Okabe Rintaro',
    image: 'assets/characters/okaberin.png',
    rankings: { speed: 42, strength: 35, intelligence: 96, combat: 28, power: 50, durability: 45 },
  },
  {
    name: 'Emiya Shirou',
    image: 'assets/characters/emiyashirou.png',
    rankings: { speed: 72, strength: 65, intelligence: 78, combat: 80, power: 78, durability: 70 },
  },
  {
    name: 'Kanao Tsuyuri',
    image: 'assets/characters/kanaotsuuyuri.png',
    rankings: { speed: 92, strength: 68, intelligence: 75, combat: 90, power: 78, durability: 72 },
  },
  // ── Dragon Ball ──
  {
    name: 'Piccolo',
    image: 'assets/characters/piccolo.png',
    rankings: { speed: 85, strength: 88, intelligence: 80, combat: 90, power: 88, durability: 85 },
  },
  {
    name: 'Frieza',
    image: 'assets/characters/frieza.png',
    rankings: { speed: 92, strength: 92, intelligence: 80, combat: 90, power: 96, durability: 88 },
  },
  {
    name: 'Cell',
    image: 'assets/characters/cell.png',
    rankings: { speed: 90, strength: 92, intelligence: 85, combat: 92, power: 95, durability: 92 },
  },
  {
    name: 'Beerus',
    image: 'assets/characters/beerus.png',
    rankings: { speed: 97, strength: 97, intelligence: 80, combat: 95, power: 99, durability: 97 },
  },
  {
    name: 'Broly',
    image: 'assets/characters/broly.png',
    rankings: { speed: 90, strength: 99, intelligence: 40, combat: 88, power: 99, durability: 98 },
  },
  {
    name: 'Future Trunks',
    image: 'assets/characters/futuretrunks.png',
    rankings: { speed: 88, strength: 88, intelligence: 78, combat: 90, power: 90, durability: 85 },
  },
  {
    name: 'Bardock',
    image: 'assets/characters/bardock.png',
    rankings: { speed: 80, strength: 80, intelligence: 65, combat: 85, power: 82, durability: 80 },
  },
  {
    name: 'Jiren',
    image: 'assets/characters/jiren.png',
    rankings: { speed: 95, strength: 98, intelligence: 72, combat: 97, power: 99, durability: 98 },
  },
  {
    name: 'Zamasu',
    image: 'assets/characters/zamasu.png',
    rankings: { speed: 88, strength: 88, intelligence: 88, combat: 90, power: 97, durability: 95 },
  },
  {
    name: 'Gotenks',
    image: 'assets/characters/gotenks.png',
    rankings: { speed: 92, strength: 90, intelligence: 50, combat: 85, power: 92, durability: 82 },
  },
  // ── Naruto ──
  {
    name: 'Kakashi Hatake',
    image: 'assets/characters/kakashihatake.png',
    rankings: { speed: 92, strength: 73, intelligence: 97, combat: 97, power: 90, durability: 78 },
  },
  {
    name: 'Minato Namikaze',
    image: 'assets/characters/minatonamikaze.png',
    rankings: { speed: 99, strength: 74, intelligence: 93, combat: 96, power: 92, durability: 74 },
  },
  {
    name: 'Jiraiya',
    image: 'assets/characters/jiraiya.png',
    rankings: { speed: 80, strength: 83, intelligence: 90, combat: 93, power: 94, durability: 82 },
  },
  {
    name: 'Orochimaru',
    image: 'assets/characters/orochimaru.png',
    rankings: { speed: 82, strength: 72, intelligence: 98, combat: 88, power: 92, durability: 88 },
  },
  {
    name: 'Pain',
    image: 'assets/characters/pain.png',
    rankings: { speed: 82, strength: 85, intelligence: 93, combat: 93, power: 98, durability: 85 },
  },
  {
    name: 'Gaara',
    image: 'assets/characters/gaara.png',
    rankings: { speed: 75, strength: 78, intelligence: 84, combat: 86, power: 93, durability: 93 },
  },
  {
    name: 'Rock Lee',
    image: 'assets/characters/rocklee.png',
    rankings: { speed: 97, strength: 93, intelligence: 55, combat: 96, power: 62, durability: 82 },
  },
  {
    name: 'Hinata Hyuga',
    image: 'assets/characters/hinatahyuga.png',
    rankings: { speed: 82, strength: 70, intelligence: 76, combat: 83, power: 82, durability: 73 },
  },
  {
    name: 'Sakura Haruno',
    image: 'assets/characters/sakuraharuno.png',
    rankings: { speed: 75, strength: 95, intelligence: 87, combat: 87, power: 83, durability: 85 },
  },
  {
    name: 'Shikamaru Nara',
    image: 'assets/characters/shikamarunara.png',
    rankings: { speed: 60, strength: 55, intelligence: 99, combat: 70, power: 65, durability: 60 },
  },
  {
    name: 'Neji Hyuga',
    image: 'assets/characters/nejihyuga.png',
    rankings: { speed: 88, strength: 72, intelligence: 85, combat: 92, power: 80, durability: 74 },
  },
  {
    name: 'Tsunade',
    image: 'assets/characters/tsunade.png',
    rankings: { speed: 75, strength: 97, intelligence: 92, combat: 90, power: 88, durability: 95 },
  },
  // ── One Piece ──
  {
    name: 'Sanji',
    image: 'assets/characters/sanji.png',
    rankings: { speed: 90, strength: 85, intelligence: 72, combat: 92, power: 82, durability: 82 },
  },
  {
    name: 'Nami',
    image: 'assets/characters/nami.png',
    rankings: { speed: 72, strength: 50, intelligence: 88, combat: 68, power: 70, durability: 58 },
  },
  {
    name: 'Nico Robin',
    image: 'assets/characters/nicorobin.png',
    rankings: { speed: 72, strength: 70, intelligence: 90, combat: 80, power: 78, durability: 68 },
  },
  {
    name: 'Shanks',
    image: 'assets/characters/shanks.png',
    rankings: { speed: 90, strength: 92, intelligence: 88, combat: 97, power: 95, durability: 90 },
  },
  {
    name: 'Whitebeard',
    image: 'assets/characters/whitebeard.png',
    rankings: { speed: 78, strength: 99, intelligence: 80, combat: 95, power: 98, durability: 96 },
  },
  {
    name: 'Portgas D. Ace',
    image: 'assets/characters/ace.png',
    rankings: { speed: 88, strength: 80, intelligence: 70, combat: 88, power: 90, durability: 78 },
  },
  {
    name: 'Blackbeard',
    image: 'assets/characters/blackbeard.png',
    rankings: { speed: 65, strength: 88, intelligence: 78, combat: 85, power: 98, durability: 92 },
  },
  {
    name: 'Kaido',
    image: 'assets/characters/kaido.png',
    rankings: { speed: 80, strength: 99, intelligence: 72, combat: 95, power: 99, durability: 100 },
  },
  {
    name: 'Boa Hancock',
    image: 'assets/characters/boahancock.png',
    rankings: { speed: 85, strength: 80, intelligence: 75, combat: 88, power: 90, durability: 78 },
  },
  {
    name: 'Doflamingo',
    image: 'assets/characters/doflamingo.png',
    rankings: { speed: 88, strength: 85, intelligence: 88, combat: 90, power: 90, durability: 85 },
  },
  {
    name: 'Gol D. Roger',
    image: 'assets/characters/goldroger.png',
    rankings: { speed: 90, strength: 95, intelligence: 90, combat: 98, power: 97, durability: 92 },
  },
  {
    name: 'Big Mom',
    image: 'assets/characters/bigmom.png',
    rankings: { speed: 75, strength: 97, intelligence: 75, combat: 90, power: 97, durability: 98 },
  },
  // ── Bleach ──
  {
    name: 'Rukia Kuchiki',
    image: 'assets/characters/rukiakuchiki.png',
    rankings: { speed: 82, strength: 68, intelligence: 78, combat: 82, power: 80, durability: 70 },
  },
  {
    name: 'Aizen Sosuke',
    image: 'assets/characters/aizensosuke.png',
    rankings: { speed: 92, strength: 85, intelligence: 99, combat: 95, power: 98, durability: 90 },
  },
  {
    name: 'Kisuke Urahara',
    image: 'assets/characters/kisukeurahara.png',
    rankings: { speed: 90, strength: 75, intelligence: 99, combat: 95, power: 88, durability: 78 },
  },
  {
    name: 'Yoruichi Shihoin',
    image: 'assets/characters/yoruichishihoin.png',
    rankings: { speed: 98, strength: 78, intelligence: 88, combat: 97, power: 82, durability: 78 },
  },
  {
    name: 'Byakuya Kuchiki',
    image: 'assets/characters/byakuyakuchiki.png',
    rankings: { speed: 92, strength: 75, intelligence: 85, combat: 92, power: 90, durability: 78 },
  },
  {
    name: 'Grimmjow Jaegerjaquez',
    image: 'assets/characters/grimmjow.png',
    rankings: { speed: 92, strength: 85, intelligence: 65, combat: 92, power: 88, durability: 85 },
  },
  {
    name: 'Toshiro Hitsugaya',
    image: 'assets/characters/toshirohitsugaya.png',
    rankings: { speed: 90, strength: 72, intelligence: 82, combat: 88, power: 88, durability: 75 },
  },
  {
    name: 'Ulquiorra Cifer',
    image: 'assets/characters/ulquiorra.png',
    rankings: { speed: 92, strength: 85, intelligence: 85, combat: 92, power: 95, durability: 88 },
  },
  // ── My Hero Academia ──
  {
    name: 'All Might',
    image: 'assets/characters/allmight.png',
    rankings: { speed: 92, strength: 100, intelligence: 80, combat: 97, power: 99, durability: 92 },
  },
  {
    name: 'Bakugo Katsuki',
    image: 'assets/characters/bakugokatsuki.png',
    rankings: { speed: 88, strength: 85, intelligence: 80, combat: 90, power: 88, durability: 82 },
  },
  {
    name: 'Uraraka Ochaco',
    image: 'assets/characters/urarakaochaco.png',
    rankings: { speed: 78, strength: 68, intelligence: 75, combat: 78, power: 72, durability: 70 },
  },
  {
    name: 'Tomura Shigaraki',
    image: 'assets/characters/tomurashigaraki.png',
    rankings: { speed: 78, strength: 78, intelligence: 80, combat: 82, power: 95, durability: 82 },
  },
  {
    name: 'Hawks',
    image: 'assets/characters/hawks.png',
    rankings: { speed: 97, strength: 70, intelligence: 85, combat: 88, power: 82, durability: 70 },
  },
  {
    name: 'Endeavor',
    image: 'assets/characters/endeavor.png',
    rankings: { speed: 80, strength: 85, intelligence: 78, combat: 88, power: 92, durability: 85 },
  },
  {
    name: 'Kirishima Eijiro',
    image: 'assets/characters/kirishimaeijiro.png',
    rankings: { speed: 72, strength: 82, intelligence: 60, combat: 82, power: 70, durability: 95 },
  },
  {
    name: 'Aizawa Shouta',
    image: 'assets/characters/aizawashouta.png',
    rankings: { speed: 80, strength: 68, intelligence: 90, combat: 88, power: 55, durability: 70 },
  },
  // ── Attack on Titan ──
  {
    name: 'Armin Arlert',
    image: 'assets/characters/arminarlert.png',
    rankings: { speed: 65, strength: 60, intelligence: 98, combat: 65, power: 85, durability: 65 },
  },
  {
    name: 'Hange Zoe',
    image: 'assets/characters/hangezoe.png',
    rankings: { speed: 72, strength: 65, intelligence: 92, combat: 75, power: 68, durability: 68 },
  },
  {
    name: 'Erwin Smith',
    image: 'assets/characters/erwinsmith.png',
    rankings: { speed: 70, strength: 72, intelligence: 97, combat: 80, power: 62, durability: 75 },
  },
  {
    name: 'Reiner Braun',
    image: 'assets/characters/reinerbraun.png',
    rankings: { speed: 70, strength: 92, intelligence: 72, combat: 82, power: 88, durability: 97 },
  },
  {
    name: 'Berthold Fubar',
    image: 'assets/characters/bertholdfubar.png',
    rankings: { speed: 68, strength: 88, intelligence: 65, combat: 72, power: 92, durability: 92 },
  },
  // ── Hunter x Hunter ──
  {
    name: 'Kurapika',
    image: 'assets/characters/kurapika.png',
    rankings: { speed: 85, strength: 72, intelligence: 90, combat: 88, power: 88, durability: 72 },
  },
  {
    name: 'Leorio',
    image: 'assets/characters/leorio.png',
    rankings: { speed: 60, strength: 65, intelligence: 85, combat: 62, power: 58, durability: 65 },
  },
  {
    name: 'Meruem',
    image: 'assets/characters/meruem.png',
    rankings: { speed: 97, strength: 97, intelligence: 99, combat: 99, power: 99, durability: 97 },
  },
  {
    name: 'Neferpitou',
    image: 'assets/characters/neferpitou.png',
    rankings: { speed: 95, strength: 92, intelligence: 88, combat: 97, power: 92, durability: 90 },
  },
  {
    name: 'Illumi Zoldyck',
    image: 'assets/characters/illumizoldyck.png',
    rankings: { speed: 90, strength: 80, intelligence: 90, combat: 92, power: 88, durability: 80 },
  },
  {
    name: 'Chrollo Lucilfer',
    image: 'assets/characters/chrolo.png',
    rankings: { speed: 88, strength: 78, intelligence: 95, combat: 92, power: 92, durability: 80 },
  },
  // ── JoJo's Bizarre Adventure ──
  {
    name: 'Josuke Higashikata',
    image: 'assets/characters/josukehigashikata.png',
    rankings: { speed: 80, strength: 78, intelligence: 75, combat: 82, power: 88, durability: 90 },
  },
  {
    name: 'Jonathan Joestar',
    image: 'assets/characters/jonathanjoestar.png',
    rankings: { speed: 75, strength: 85, intelligence: 75, combat: 82, power: 80, durability: 82 },
  },
  {
    name: 'Johnny Joestar',
    image: 'assets/characters/johnnyjoestar.png',
    rankings: { speed: 72, strength: 65, intelligence: 80, combat: 78, power: 92, durability: 72 },
  },
  {
    name: 'Yoshikage Kira',
    image: 'assets/characters/yoshikagekira.png',
    rankings: { speed: 72, strength: 60, intelligence: 82, combat: 72, power: 90, durability: 65 },
  },
  {
    name: 'Bruno Bucciarati',
    image: 'assets/characters/brunobucciarati.png',
    rankings: { speed: 80, strength: 75, intelligence: 82, combat: 85, power: 82, durability: 78 },
  },
  {
    name: 'Diavolo',
    image: 'assets/characters/diavolo.png',
    rankings: { speed: 90, strength: 82, intelligence: 88, combat: 90, power: 95, durability: 85 },
  },
  {
    name: 'Gyro Zeppeli',
    image: 'assets/characters/gyrozeppeli.png',
    rankings: { speed: 82, strength: 78, intelligence: 85, combat: 88, power: 85, durability: 78 },
  },
  // ── Demon Slayer ──
  {
    name: 'Zenitsu Agatsuma',
    image: 'assets/characters/zenitsuagatsuma.png',
    rankings: { speed: 95, strength: 70, intelligence: 55, combat: 82, power: 80, durability: 65 },
  },
  {
    name: 'Inosuke Hashibira',
    image: 'assets/characters/inosukehashibira.png',
    rankings: { speed: 85, strength: 82, intelligence: 40, combat: 85, power: 75, durability: 82 },
  },
  {
    name: 'Nezuko Kamado',
    image: 'assets/characters/nezukokamado.png',
    rankings: { speed: 85, strength: 80, intelligence: 55, combat: 80, power: 85, durability: 85 },
  },
  {
    name: 'Rengoku Kyojuro',
    image: 'assets/characters/rengokyojuro.png',
    rankings: { speed: 90, strength: 82, intelligence: 75, combat: 95, power: 85, durability: 80 },
  },
  {
    name: 'Tengen Uzui',
    image: 'assets/characters/tengenuzui.png',
    rankings: { speed: 92, strength: 82, intelligence: 72, combat: 92, power: 80, durability: 82 },
  },
  {
    name: 'Muzan Kibutsuji',
    image: 'assets/characters/muzankibutsuji.png',
    rankings: { speed: 95, strength: 90, intelligence: 90, combat: 92, power: 98, durability: 95 },
  },
  {
    name: 'Shinobu Kocho',
    image: 'assets/characters/shinobukocho.png',
    rankings: { speed: 95, strength: 50, intelligence: 90, combat: 88, power: 78, durability: 60 },
  },
  {
    name: 'Akaza',
    image: 'assets/characters/akaza.png',
    rankings: { speed: 95, strength: 92, intelligence: 72, combat: 97, power: 90, durability: 92 },
  },
  {
    name: 'Yoriichi Tsugikuni',
    image: 'assets/characters/yoriichiTsugikuni.png',
    rankings: { speed: 99, strength: 88, intelligence: 85, combat: 100, power: 97, durability: 88 },
  },
  {
    name: 'Kokushibo',
    image: 'assets/characters/kokushibo.png',
    rankings: { speed: 97, strength: 92, intelligence: 85, combat: 98, power: 95, durability: 92 },
  },
  // ── Jujutsu Kaisen ──
  {
    name: 'Satoru Gojo',
    image: 'assets/characters/satorugojo.png',
    rankings: { speed: 98, strength: 88, intelligence: 95, combat: 98, power: 100, durability: 95 },
  },
  {
    name: 'Ryomen Sukuna',
    image: 'assets/characters/ryomensukuna.png',
    rankings: { speed: 97, strength: 95, intelligence: 90, combat: 99, power: 99, durability: 95 },
  },
  {
    name: 'Megumi Fushiguro',
    image: 'assets/characters/megumifushiguro.png',
    rankings: { speed: 82, strength: 72, intelligence: 85, combat: 85, power: 85, durability: 75 },
  },
  {
    name: 'Nobara Kugisaki',
    image: 'assets/characters/nobarakugisaki.png',
    rankings: { speed: 78, strength: 68, intelligence: 75, combat: 80, power: 80, durability: 72 },
  },
  {
    name: 'Nanami Kento',
    image: 'assets/characters/nanamiKento.png',
    rankings: { speed: 78, strength: 78, intelligence: 88, combat: 90, power: 78, durability: 80 },
  },
  {
    name: 'Aoi Todo',
    image: 'assets/characters/aoitodo.png',
    rankings: { speed: 90, strength: 90, intelligence: 72, combat: 92, power: 82, durability: 88 },
  },
  // ── Fullmetal Alchemist: Brotherhood ──
  {
    name: 'Winry Rockbell',
    image: 'assets/characters/winryrockbell.png',
    rankings: { speed: 50, strength: 45, intelligence: 88, combat: 40, power: 35, durability: 50 },
  },
  {
    name: 'Riza Hawkeye',
    image: 'assets/characters/rizahawkeye.png',
    rankings: { speed: 72, strength: 60, intelligence: 85, combat: 80, power: 58, durability: 68 },
  },
  {
    name: 'Greed',
    image: 'assets/characters/greed.png',
    rankings: { speed: 80, strength: 82, intelligence: 72, combat: 82, power: 75, durability: 98 },
  },
  {
    name: 'King Bradley',
    image: 'assets/characters/kingbradley.png',
    rankings: { speed: 97, strength: 82, intelligence: 88, combat: 99, power: 80, durability: 85 },
  },
  // ── Seven Deadly Sins ──
  {
    name: 'Ban',
    image: 'assets/characters/ban.png',
    rankings: { speed: 88, strength: 88, intelligence: 65, combat: 88, power: 85, durability: 100 },
  },
  {
    name: 'King',
    image: 'assets/characters/king7ds.png',
    rankings: { speed: 75, strength: 65, intelligence: 80, combat: 78, power: 90, durability: 72 },
  },
  {
    name: 'Escanor',
    image: 'assets/characters/escanor.png',
    rankings: { speed: 85, strength: 100, intelligence: 72, combat: 92, power: 100, durability: 95 },
  },
  {
    name: 'Merlin',
    image: 'assets/characters/merlin.png',
    rankings: { speed: 72, strength: 55, intelligence: 99, combat: 72, power: 98, durability: 70 },
  },
  {
    name: 'Diane',
    image: 'assets/characters/diane.png',
    rankings: { speed: 70, strength: 92, intelligence: 65, combat: 80, power: 82, durability: 88 },
  },
  // ── Black Clover ──
  {
    name: 'Yami Sukehiro',
    image: 'assets/characters/yamisukehiro.png',
    rankings: { speed: 88, strength: 88, intelligence: 72, combat: 95, power: 90, durability: 85 },
  },
  {
    name: 'Julius Novachrono',
    image: 'assets/characters/juliusnovachrono.png',
    rankings: { speed: 99, strength: 70, intelligence: 90, combat: 88, power: 98, durability: 78 },
  },
  {
    name: 'Noelle Silva',
    image: 'assets/characters/noellesilva.png',
    rankings: { speed: 78, strength: 72, intelligence: 68, combat: 78, power: 88, durability: 75 },
  },
  {
    name: 'Luck Voltia',
    image: 'assets/characters/luckvoltia.png',
    rankings: { speed: 95, strength: 72, intelligence: 55, combat: 88, power: 82, durability: 72 },
  },
  // ── One Punch Man ──
  {
    name: 'Genos',
    image: 'assets/characters/genos.png',
    rankings: { speed: 90, strength: 88, intelligence: 80, combat: 88, power: 90, durability: 80 },
  },
  {
    name: 'Garou',
    image: 'assets/characters/garou.png',
    rankings: { speed: 92, strength: 88, intelligence: 80, combat: 97, power: 90, durability: 88 },
  },
  {
    name: 'Boros',
    image: 'assets/characters/boros.png',
    rankings: { speed: 95, strength: 95, intelligence: 72, combat: 92, power: 98, durability: 95 },
  },
  {
    name: 'Tatsumaki',
    image: 'assets/characters/tatsumaki.png',
    rankings: { speed: 85, strength: 50, intelligence: 80, combat: 80, power: 98, durability: 72 },
  },
  {
    name: 'Bang',
    image: 'assets/characters/bang.png',
    rankings: { speed: 88, strength: 80, intelligence: 80, combat: 98, power: 72, durability: 80 },
  },
  {
    name: 'King (OPM)',
    image: 'assets/characters/kingopm.png',
    rankings: { speed: 30, strength: 20, intelligence: 60, combat: 15, power: 20, durability: 30 },
  },
  {
    name: 'Speed-o-Sound Sonic',
    image: 'assets/characters/sonic.png',
    rankings: { speed: 97, strength: 65, intelligence: 65, combat: 85, power: 68, durability: 65 },
  },
  // ── Mob Psycho 100 ──
  {
    name: 'Reigen Arataka',
    image: 'assets/characters/reigenarataka.png',
    rankings: { speed: 55, strength: 45, intelligence: 80, combat: 50, power: 30, durability: 50 },
  },
  {
    name: 'Teruki Hanazawa',
    image: 'assets/characters/terukihanazawa.png',
    rankings: { speed: 78, strength: 60, intelligence: 72, combat: 72, power: 85, durability: 68 },
  },
  {
    name: 'Dimple',
    image: 'assets/characters/dimple.png',
    rankings: { speed: 75, strength: 45, intelligence: 70, combat: 60, power: 80, durability: 55 },
  },
  // ── Re:Zero ──
  {
    name: 'Emilia',
    image: 'assets/characters/emilia.png',
    rankings: { speed: 78, strength: 65, intelligence: 72, combat: 72, power: 88, durability: 72 },
  },
  {
    name: 'Beatrice',
    image: 'assets/characters/beatrice.png',
    rankings: { speed: 70, strength: 45, intelligence: 90, combat: 65, power: 90, durability: 65 },
  },
  {
    name: 'Wilhelm van Astrea',
    image: 'assets/characters/wilhelmvanastrea.png',
    rankings: { speed: 92, strength: 82, intelligence: 78, combat: 97, power: 72, durability: 78 },
  },
  {
    name: 'Garfiel Tinsel',
    image: 'assets/characters/garfieltinsel.png',
    rankings: { speed: 85, strength: 90, intelligence: 58, combat: 88, power: 82, durability: 88 },
  },
  {
    name: 'Ram',
    image: 'assets/characters/ram.png',
    rankings: { speed: 78, strength: 70, intelligence: 72, combat: 80, power: 78, durability: 70 },
  },
  // ── KonoSuba ──
  {
    name: 'Wiz',
    image: 'assets/characters/wiz.png',
    rankings: { speed: 60, strength: 45, intelligence: 82, combat: 55, power: 85, durability: 58 },
  },
  // ── Overlord ──
  {
    name: 'Albedo',
    image: 'assets/characters/albedo.png',
    rankings: { speed: 85, strength: 90, intelligence: 88, combat: 90, power: 88, durability: 98 },
  },
  {
    name: 'Shalltear Bloodfallen',
    image: 'assets/characters/shalltear.png',
    rankings: { speed: 92, strength: 88, intelligence: 82, combat: 92, power: 90, durability: 92 },
  },
  {
    name: 'Demiurge',
    image: 'assets/characters/demiurge.png',
    rankings: { speed: 80, strength: 75, intelligence: 99, combat: 85, power: 88, durability: 82 },
  },
  {
    name: 'Cocytus',
    image: 'assets/characters/cocytus.png',
    rankings: { speed: 85, strength: 92, intelligence: 75, combat: 95, power: 85, durability: 95 },
  },
  // ── Sword Art Online ──
  {
    name: 'Asuna Yuuki',
    image: 'assets/characters/asunayuuki.png',
    rankings: { speed: 90, strength: 72, intelligence: 82, combat: 92, power: 78, durability: 72 },
  },
  {
    name: 'Alice Zuberg',
    image: 'assets/characters/alicezuberg.png',
    rankings: { speed: 85, strength: 80, intelligence: 80, combat: 88, power: 85, durability: 82 },
  },
  {
    name: 'Sinon',
    image: 'assets/characters/sinon.png',
    rankings: { speed: 82, strength: 60, intelligence: 82, combat: 80, power: 75, durability: 65 },
  },
  {
    name: 'Eugeo',
    image: 'assets/characters/eugeo.png',
    rankings: { speed: 82, strength: 75, intelligence: 78, combat: 85, power: 82, durability: 78 },
  },
  // ── That Time I Got Reincarnated as a Slime ──
  {
    name: 'Milim Nava',
    image: 'assets/characters/milimnava.png',
    rankings: { speed: 97, strength: 97, intelligence: 72, combat: 95, power: 99, durability: 97 },
  },
  {
    name: 'Shion',
    image: 'assets/characters/shion.png',
    rankings: { speed: 85, strength: 88, intelligence: 60, combat: 88, power: 80, durability: 85 },
  },
  {
    name: 'Benimaru',
    image: 'assets/characters/benimaru.png',
    rankings: { speed: 90, strength: 82, intelligence: 72, combat: 92, power: 88, durability: 82 },
  },
  {
    name: 'Shuna',
    image: 'assets/characters/shuna.png',
    rankings: { speed: 72, strength: 58, intelligence: 80, combat: 70, power: 82, durability: 68 },
  },
  // ── Danmachi ──
  {
    name: 'Hestia',
    image: 'assets/characters/hestia.png',
    rankings: { speed: 60, strength: 48, intelligence: 72, combat: 55, power: 70, durability: 58 },
  },
  {
    name: 'Aiz Wallenstein',
    image: 'assets/characters/aizwallenstein.png',
    rankings: { speed: 95, strength: 85, intelligence: 70, combat: 97, power: 88, durability: 85 },
  },
  {
    name: 'Ryuu Lion',
    image: 'assets/characters/ryuulion.png',
    rankings: { speed: 90, strength: 78, intelligence: 75, combat: 92, power: 82, durability: 78 },
  },
  // ── Date a Live ──
  {
    name: 'Kurumi Tokisaki',
    image: 'assets/characters/kurumitokisaki.png',
    rankings: { speed: 88, strength: 68, intelligence: 85, combat: 85, power: 95, durability: 72 },
  },
  {
    name: 'Tohka Yatogami',
    image: 'assets/characters/tohkayatogami.png',
    rankings: { speed: 85, strength: 88, intelligence: 55, combat: 85, power: 90, durability: 85 },
  },
  {
    name: 'Origami Tobiichi',
    image: 'assets/characters/origamitobiichi.png',
    rankings: { speed: 88, strength: 72, intelligence: 82, combat: 88, power: 82, durability: 72 },
  },
  {
    name: 'Shido Itsuka',
    image: 'assets/characters/shidoitsuka.png',
    rankings: { speed: 65, strength: 55, intelligence: 78, combat: 60, power: 70, durability: 65 },
  },
  // ── The Promised Neverland ──
  {
    name: 'Norman',
    image: 'assets/characters/norman.png',
    rankings: { speed: 65, strength: 48, intelligence: 100, combat: 52, power: 42, durability: 55 },
  },
  {
    name: 'Ray',
    image: 'assets/characters/ray.png',
    rankings: { speed: 62, strength: 50, intelligence: 98, combat: 55, power: 40, durability: 58 },
  },
  // ── Assassination Classroom ──
  {
    name: 'Nagisa Shiota',
    image: 'assets/characters/nagisashiota.png',
    rankings: { speed: 82, strength: 58, intelligence: 80, combat: 88, power: 50, durability: 60 },
  },
  {
    name: 'Karma Akabane',
    image: 'assets/characters/karmaakabane.png',
    rankings: { speed: 80, strength: 75, intelligence: 90, combat: 88, power: 60, durability: 72 },
  },
  {
    name: 'Kaede Kayano',
    image: 'assets/characters/kaedekayano.png',
    rankings: { speed: 75, strength: 60, intelligence: 78, combat: 80, power: 72, durability: 65 },
  },
  // ── Tokyo Ghoul ──
  {
    name: 'Touka Kirishima',
    image: 'assets/characters/toukakirishima.png',
    rankings: { speed: 85, strength: 78, intelligence: 72, combat: 85, power: 80, durability: 78 },
  },
  {
    name: 'Juuzou Suzuya',
    image: 'assets/characters/juuzousuzuya.png',
    rankings: { speed: 90, strength: 72, intelligence: 65, combat: 90, power: 72, durability: 75 },
  },
  {
    name: 'Arima Kishou',
    image: 'assets/characters/arimakishou.png',
    rankings: { speed: 95, strength: 85, intelligence: 90, combat: 98, power: 88, durability: 85 },
  },
  {
    name: 'Eto Yoshimura',
    image: 'assets/characters/etoyoshimura.png',
    rankings: { speed: 85, strength: 85, intelligence: 88, combat: 88, power: 92, durability: 88 },
  },
  // ── Kill la Kill ──
  {
    name: 'Ryuko Matoi',
    image: 'assets/characters/ryukomatoi.png',
    rankings: { speed: 88, strength: 85, intelligence: 68, combat: 90, power: 88, durability: 88 },
  },
  {
    name: 'Satsuki Kiryuin',
    image: 'assets/characters/satsukikiryuin.png',
    rankings: { speed: 85, strength: 80, intelligence: 90, combat: 92, power: 85, durability: 85 },
  },
  // ── Durarara!! ──
  {
    name: 'Shizuo Heiwajima',
    image: 'assets/characters/shizuoheiwajima.png',
    rankings: { speed: 88, strength: 99, intelligence: 45, combat: 85, power: 85, durability: 92 },
  },
  {
    name: 'Izaya Orihara',
    image: 'assets/characters/izayaorihara.png',
    rankings: { speed: 85, strength: 58, intelligence: 97, combat: 80, power: 60, durability: 65 },
  },
  {
    name: 'Celty Sturluson',
    image: 'assets/characters/celtysturluson.png',
    rankings: { speed: 90, strength: 82, intelligence: 78, combat: 85, power: 85, durability: 85 },
  },
  // ── A Certain Magical Index / Railgun ──
  {
    name: 'Accelerator',
    image: 'assets/characters/accelerator.png',
    rankings: { speed: 95, strength: 88, intelligence: 92, combat: 92, power: 99, durability: 99 },
  },
  {
    name: 'Mikoto Misaka',
    image: 'assets/characters/mikotomisaka.png',
    rankings: { speed: 85, strength: 68, intelligence: 88, combat: 82, power: 90, durability: 75 },
  },
  {
    name: 'Touma Kamijou',
    image: 'assets/characters/toumaKamijou.png',
    rankings: { speed: 72, strength: 65, intelligence: 78, combat: 80, power: 75, durability: 80 },
  },
  // ── The Melancholy of Haruhi Suzumiya ──
  {
    name: 'Haruhi Suzumiya',
    image: 'assets/characters/haruhisuzumiya.png',
    rankings: { speed: 60, strength: 55, intelligence: 78, combat: 55, power: 100, durability: 60 },
  },
  {
    name: 'Yuki Nagato',
    image: 'assets/characters/yukinagato.png',
    rankings: { speed: 70, strength: 58, intelligence: 99, combat: 65, power: 95, durability: 68 },
  },
  // ── Angel Beats! ──
  {
    name: 'Kanade Tachibana',
    image: 'assets/characters/kanadetachibana.png',
    rankings: { speed: 88, strength: 72, intelligence: 90, combat: 90, power: 82, durability: 78 },
  },
  {
    name: 'Otonashi Yuzuru',
    image: 'assets/characters/otonashiyuzuru.png',
    rankings: { speed: 55, strength: 50, intelligence: 72, combat: 50, power: 38, durability: 55 },
  },
  // ── Noragami ──
  {
    name: 'Yato',
    image: 'assets/characters/yato.png',
    rankings: { speed: 92, strength: 75, intelligence: 72, combat: 90, power: 80, durability: 75 },
  },
  {
    name: 'Bishamon',
    image: 'assets/characters/bishamon.png',
    rankings: { speed: 88, strength: 82, intelligence: 78, combat: 90, power: 85, durability: 82 },
  },
  // ── Akame ga Kill ──
  {
    name: 'Tatsumi',
    image: 'assets/characters/tatsumi.png',
    rankings: { speed: 85, strength: 82, intelligence: 65, combat: 88, power: 82, durability: 82 },
  },
  {
    name: 'Leone',
    image: 'assets/characters/leone.png',
    rankings: { speed: 85, strength: 85, intelligence: 60, combat: 85, power: 80, durability: 88 },
  },
  {
    name: 'Mine',
    image: 'assets/characters/mine.png',
    rankings: { speed: 72, strength: 55, intelligence: 75, combat: 72, power: 88, durability: 60 },
  },
  {
    name: 'Esdeath',
    image: 'assets/characters/esdeath.png',
    rankings: { speed: 95, strength: 90, intelligence: 88, combat: 97, power: 95, durability: 90 },
  },
  // ── Puella Magi Madoka Magica ──
  {
    name: 'Kyoko Sakura',
    image: 'assets/characters/kyokosakura.png',
    rankings: { speed: 82, strength: 78, intelligence: 68, combat: 82, power: 82, durability: 80 },
  },
  {
    name: 'Sayaka Miki',
    image: 'assets/characters/sayakamiki.png',
    rankings: { speed: 80, strength: 72, intelligence: 65, combat: 80, power: 80, durability: 85 },
  },
  {
    name: 'Mami Tomoe',
    image: 'assets/characters/mamitomoe.png',
    rankings: { speed: 78, strength: 65, intelligence: 78, combat: 80, power: 82, durability: 68 },
  },
  // ── Studio Ghibli ──
  {
    name: 'Ashitaka',
    image: 'assets/characters/ashitaka.png',
    rankings: { speed: 82, strength: 88, intelligence: 78, combat: 85, power: 78, durability: 82 },
  },
  {
    name: 'San',
    image: 'assets/characters/san.png',
    rankings: { speed: 85, strength: 80, intelligence: 68, combat: 85, power: 72, durability: 80 },
  },
  {
    name: 'Chihiro',
    image: 'assets/characters/chihiro.png',
    rankings: { speed: 55, strength: 38, intelligence: 65, combat: 30, power: 40, durability: 52 },
  },
  {
    name: 'Haku',
    image: 'assets/characters/haku.png',
    rankings: { speed: 85, strength: 70, intelligence: 80, combat: 75, power: 85, durability: 75 },
  },
  {
    name: 'Howl',
    image: 'assets/characters/howl.png',
    rankings: { speed: 80, strength: 65, intelligence: 88, combat: 72, power: 90, durability: 72 },
  },
  // ── Trigun ──
  {
    name: 'Nicholas D. Wolfwood',
    image: 'assets/characters/wolfwood.png',
    rankings: { speed: 80, strength: 78, intelligence: 72, combat: 88, power: 72, durability: 80 },
  },
  {
    name: 'Meryl Stryfe',
    image: 'assets/characters/merylstryfe.png',
    rankings: { speed: 68, strength: 52, intelligence: 72, combat: 65, power: 55, durability: 62 },
  },
  // ── Cowboy Bebop ──
  {
    name: 'Faye Valentine',
    image: 'assets/characters/fayevalentine.png',
    rankings: { speed: 78, strength: 60, intelligence: 75, combat: 78, power: 58, durability: 65 },
  },
  {
    name: 'Jet Black',
    image: 'assets/characters/jetblack.png',
    rankings: { speed: 65, strength: 78, intelligence: 80, combat: 75, power: 60, durability: 78 },
  },
  {
    name: 'Edward Wong',
    image: 'assets/characters/edwardwong.png',
    rankings: { speed: 70, strength: 32, intelligence: 95, combat: 35, power: 45, durability: 40 },
  },
  // ── Berserk ──
  {
    name: 'Griffith',
    image: 'assets/characters/griffith.png',
    rankings: { speed: 92, strength: 85, intelligence: 95, combat: 97, power: 95, durability: 90 },
  },
  {
    name: 'Casca',
    image: 'assets/characters/casca.png',
    rankings: { speed: 82, strength: 72, intelligence: 75, combat: 85, power: 65, durability: 75 },
  },
  // ── Toradora ──
  {
    name: 'Ryuuji Takasu',
    image: 'assets/characters/ryuujitakasu.png',
    rankings: { speed: 52, strength: 48, intelligence: 70, combat: 45, power: 35, durability: 50 },
  },
  {
    name: 'Minori Kushieda',
    image: 'assets/characters/minorikushieda.png',
    rankings: { speed: 70, strength: 58, intelligence: 65, combat: 55, power: 38, durability: 58 },
  },
  // ── Your Lie in April ──
  {
    name: 'Kaori Miyazono',
    image: 'assets/characters/kaorimiyazono.png',
    rankings: { speed: 50, strength: 38, intelligence: 80, combat: 25, power: 32, durability: 40 },
  },
  {
    name: 'Tsubaki Sawabe',
    image: 'assets/characters/tsubakisawabe.png',
    rankings: { speed: 65, strength: 55, intelligence: 65, combat: 50, power: 32, durability: 58 },
  },
  // ── A Silent Voice ──
  {
    name: 'Shoya Ishida',
    image: 'assets/characters/shoyaishida.png',
    rankings: { speed: 55, strength: 50, intelligence: 70, combat: 48, power: 32, durability: 52 },
  },
  {
    name: 'Shoko Nishimiya',
    image: 'assets/characters/shokonishimiya.png',
    rankings: { speed: 48, strength: 35, intelligence: 68, combat: 28, power: 28, durability: 45 },
  },
  // ── AnoHana ──
  {
    name: 'Meiko Honma',
    image: 'assets/characters/meikohonma.png',
    rankings: { speed: 45, strength: 32, intelligence: 60, combat: 22, power: 55, durability: 40 },
  },
  // ── Hyouka ──
  {
    name: 'Chitanda Eru',
    image: 'assets/characters/chitandaeru.png',
    rankings: { speed: 48, strength: 35, intelligence: 88, combat: 22, power: 28, durability: 42 },
  },
  // ── My Teen Romantic Comedy SNAFU ──
  {
    name: 'Hikigaya Hachiman',
    image: 'assets/characters/hikigayahachiman.png',
    rankings: { speed: 45, strength: 40, intelligence: 95, combat: 38, power: 30, durability: 48 },
  },
  {
    name: 'Yukinoshita Yukino',
    image: 'assets/characters/yukinoshitayukino.png',
    rankings: { speed: 48, strength: 38, intelligence: 96, combat: 35, power: 30, durability: 45 },
  },
  {
    name: 'Yui Yuigahama',
    image: 'assets/characters/yuiyuigahama.png',
    rankings: { speed: 52, strength: 42, intelligence: 65, combat: 38, power: 30, durability: 50 },
  },
  // ── Spice and Wolf ──
  {
    name: 'Holo',
    image: 'assets/characters/holo.png',
    rankings: { speed: 80, strength: 85, intelligence: 95, combat: 78, power: 88, durability: 82 },
  },
  {
    name: 'Lawrence Kraft',
    image: 'assets/characters/lawrencekraft.png',
    rankings: { speed: 55, strength: 52, intelligence: 88, combat: 45, power: 35, durability: 52 },
  },
  // ── Seraph of the End ──
  {
    name: 'Yuichiro Hyakuya',
    image: 'assets/characters/yuichirohyakuya.png',
    rankings: { speed: 88, strength: 82, intelligence: 62, combat: 88, power: 88, durability: 82 },
  },
  {
    name: 'Mikaela Hyakuya',
    image: 'assets/characters/mikaelahyakuya.png',
    rankings: { speed: 90, strength: 85, intelligence: 72, combat: 88, power: 88, durability: 85 },
  },
  // ── No Game No Life ──
  {
    name: 'Shiro',
    image: 'assets/characters/shiro.png',
    rankings: { speed: 42, strength: 28, intelligence: 100, combat: 28, power: 60, durability: 35 },
  },
  // ── Spy x Family ──
  {
    name: 'Anya Forger',
    image: 'assets/characters/anyaforger.png',
    rankings: { speed: 45, strength: 35, intelligence: 65, combat: 35, power: 55, durability: 45 },
  },
  // ── Ouran High School Host Club ──
  {
    name: 'Haruhi Fujioka',
    image: 'assets/characters/haruhifujioka.png',
    rankings: { speed: 50, strength: 42, intelligence: 85, combat: 38, power: 32, durability: 48 },
  },
  {
    name: 'Tamaki Suoh',
    image: 'assets/characters/tamakisuoh.png',
    rankings: { speed: 55, strength: 50, intelligence: 68, combat: 45, power: 35, durability: 52 },
  },
  // ── Future Diary ──
  {
    name: 'Yukiteru Amano',
    image: 'assets/characters/yukiteruamano.png',
    rankings: { speed: 48, strength: 38, intelligence: 65, combat: 40, power: 72, durability: 48 },
  },
  // ── Tokyo Revengers ──
  {
    name: 'Draken',
    image: 'assets/characters/draken.png',
    rankings: { speed: 82, strength: 88, intelligence: 72, combat: 92, power: 70, durability: 85 },
  },
  // ── Black Lagoon ──
  {
    name: 'Dutch',
    image: 'assets/characters/dutch.png',
    rankings: { speed: 65, strength: 75, intelligence: 80, combat: 78, power: 60, durability: 75 },
  },
  // ── Log Horizon ──
  {
    name: 'Akatsuki',
    image: 'assets/characters/akatsuki.png',
    rankings: { speed: 92, strength: 65, intelligence: 72, combat: 88, power: 68, durability: 65 },
  },
  // ── Chainsaw Man ──
  {
    name: 'Power',
    image: 'assets/characters/power.png',
    rankings: { speed: 78, strength: 88, intelligence: 40, combat: 82, power: 82, durability: 85 },
  },
  // ── Blue Lock ──
  {
    name: 'Bachira Meguru',
    image: 'assets/characters/bachirameguru.png',
    rankings: { speed: 88, strength: 65, intelligence: 80, combat: 70, power: 62, durability: 62 },
  },
  // ── Oshi no Ko ──
  {
    name: 'Ai Hoshino',
    image: 'assets/characters/aihoshino.png',
    rankings: { speed: 55, strength: 38, intelligence: 78, combat: 30, power: 42, durability: 48 },
  },
  // ── Baki ──
  {
    name: 'Yujiro Hanma',
    image: 'assets/characters/yujirohanma.png',
    rankings: { speed: 97, strength: 100, intelligence: 85, combat: 100, power: 95, durability: 99 },
  },
  {
    name: 'Baki Hanma',
    image: 'assets/characters/bakihanma.png',
    rankings: { speed: 95, strength: 88, intelligence: 80, combat: 97, power: 85, durability: 90 },
  },
  {
    name: 'Musashi Miyamoto',
    image: 'assets/characters/musashimiyamoto.png',
    rankings: { speed: 96, strength: 78, intelligence: 88, combat: 99, power: 75, durability: 78 },
  },
  {
    name: 'Pickle',
    image: 'assets/characters/pickle.png',
    rankings: { speed: 85, strength: 99, intelligence: 10, combat: 88, power: 82, durability: 98 },
  },
  {
    name: 'Jack Hanma',
    image: 'assets/characters/jackhanma.png',
    rankings: { speed: 78, strength: 95, intelligence: 60, combat: 88, power: 80, durability: 92 },
  },
  {
    name: 'Biscuit Oliva',
    image: 'assets/characters/oliva.png',
    rankings: { speed: 65, strength: 97, intelligence: 72, combat: 85, power: 85, durability: 95 },
  },
  {
    name: 'Doppo Orochi',
    image: 'assets/characters/doppoorochi.png',
    rankings: { speed: 85, strength: 80, intelligence: 78, combat: 95, power: 72, durability: 80 },
  },
  {
    name: 'Retsu Kaioh',
    image: 'assets/characters/retsukaioh.png',
    rankings: { speed: 88, strength: 78, intelligence: 82, combat: 95, power: 75, durability: 80 },
  },
  // ── Monster ──
  {
    name: 'Johan Liebert',
    image: 'assets/characters/johanliebert.png',
    rankings: { speed: 55, strength: 55, intelligence: 100, combat: 60, power: 78, durability: 55 },
  },
  {
    name: 'Kenzou Tenma',
    image: 'assets/characters/kenzoutenma.png',
    rankings: { speed: 50, strength: 45, intelligence: 90, combat: 45, power: 35, durability: 55 },
  },
  {
    name: 'Nina Fortner',
    image: 'assets/characters/ninafortner.png',
    rankings: { speed: 58, strength: 48, intelligence: 82, combat: 50, power: 40, durability: 52 },
  },
  // ── Dr. Stone ──
  {
    name: 'Senku Ishigami',
    image: 'assets/characters/senkuishigami.png',
    rankings: { speed: 45, strength: 35, intelligence: 100, combat: 30, power: 55, durability: 42 },
  },
  {
    name: 'Tsukasa Shishio',
    image: 'assets/characters/tsukasashishio.png',
    rankings: { speed: 88, strength: 93, intelligence: 75, combat: 92, power: 72, durability: 88 },
  },
  {
    name: 'Chrome',
    image: 'assets/characters/chrome.png',
    rankings: { speed: 55, strength: 50, intelligence: 82, combat: 55, power: 45, durability: 58 },
  },
  // ── Cyberpunk Edgerunners ──
  {
    name: 'David Martinez',
    image: 'assets/characters/davidmartinez.png',
    rankings: { speed: 97, strength: 90, intelligence: 72, combat: 90, power: 85, durability: 88 },
  },
  {
    name: 'Adam Smasher',
    image: 'assets/characters/adamsmasher.png',
    rankings: { speed: 85, strength: 97, intelligence: 72, combat: 92, power: 90, durability: 99 },
  },
  {
    name: 'Lucy',
    image: 'assets/characters/lucy_edgerunners.png',
    rankings: { speed: 72, strength: 55, intelligence: 95, combat: 68, power: 85, durability: 58 },
  },
  {
    name: 'Maine',
    image: 'assets/characters/maine.png',
    rankings: { speed: 65, strength: 92, intelligence: 62, combat: 85, power: 80, durability: 92 },
  },
  // ── Fire Force ──
  {
    name: 'Shinra Kusakabe',
    image: 'assets/characters/shinrakusakabe.png',
    rankings: { speed: 96, strength: 80, intelligence: 68, combat: 90, power: 92, durability: 82 },
  },
  {
    name: 'Sho Kusakabe',
    image: 'assets/characters/shokusakabe.png',
    rankings: { speed: 99, strength: 72, intelligence: 75, combat: 88, power: 95, durability: 72 },
  },
  {
    name: 'Benimaru Shinmon',
    image: 'assets/characters/benimarushinmon.png',
    rankings: { speed: 92, strength: 85, intelligence: 78, combat: 95, power: 93, durability: 85 },
  },
  {
    name: 'Joker',
    image: 'assets/characters/joker_fireforce.png',
    rankings: { speed: 90, strength: 75, intelligence: 88, combat: 90, power: 85, durability: 78 },
  },
  {
    name: 'Leonard Burns',
    image: 'assets/characters/leonardburns.png',
    rankings: { speed: 78, strength: 85, intelligence: 80, combat: 90, power: 88, durability: 90 },
  },
  // ── Solo Leveling ──
  {
    name: 'Sung Jinwoo',
    image: 'assets/characters/sungjinwoo.png',
    rankings: { speed: 97, strength: 96, intelligence: 85, combat: 98, power: 99, durability: 95 },
  },
  {
    name: 'Cha Hae-In',
    image: 'assets/characters/chahaein.png',
    rankings: { speed: 90, strength: 85, intelligence: 80, combat: 92, power: 85, durability: 80 },
  },
  {
    name: 'Thomas Andre',
    image: 'assets/characters/thomasandre.png',
    rankings: { speed: 78, strength: 99, intelligence: 65, combat: 90, power: 92, durability: 99 },
  },
  {
    name: 'Goto Ryuji',
    image: 'assets/characters/gotoryuji.png',
    rankings: { speed: 88, strength: 88, intelligence: 80, combat: 92, power: 88, durability: 85 },
  },
  {
    name: 'Sung Ilhwan',
    image: 'assets/characters/sungilhwan.png',
    rankings: { speed: 88, strength: 90, intelligence: 78, combat: 92, power: 90, durability: 88 },
  },
];

// ===================== CHARACTER SELECTION =====================

/**
 * Randomly pick `count` unique characters for a round.
 * Uses a Fisher-Yates shuffle on a copy and slices the first `count` entries.
 * @param {number} count - Number of characters to pick (equals number of players).
 * @returns {object[]} Array of character objects.
 */
function pickRoundCharacters(count) {
  const shuffled = [...CHARACTERS];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
