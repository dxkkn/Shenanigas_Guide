const chars = [
 {j:"Honored One",a:"Satoru Gojo",status:"complete",role:"Zoner • Burst Damage",awak:"Six Eyes",domain:"Infinite Void",icon:"fa-eye",color:"purple",desc:"Pengguna Limitless dengan kontrol ruang dan burst damage tinggi."},
 {j:"Vessel",a:"Yuji Itadori / Ryomen Sukuna",status:"complete",role:"Brawler • Close Range",awak:"King Of Curses",domain:"Malevolent Shrine",icon:"fa-fist-raised",color:"red",desc:"Moveset yang memadukan gaya bertarung Yuji dengan kekuatan Sukuna."},
 {j:"Restless Gambler",a:"Kinji Hakari",status:"complete",role:"Momentum • High Risk",awak:"Idle Death Gamble",domain:"Idle Death Gamble",icon:"fa-dice",color:"yellow",desc:"Mengandalkan domain dan Jackpot untuk mendapatkan fase invincibility."},
 {j:"Ten Shadows",a:"Megumi Fushiguro",status:"complete",role:"Summoner • Adaptive",awak:"Insanity",domain:"Chimera Shadow Garden",icon:"fa-paw",color:"gray",desc:"Menggunakan shikigami dan dapat bertransisi menuju super awakening Mahoraga."},
 {j:"Mahoraga",a:"Mahoraga",status:"complete",role:"Super Awakening • Adaptive",awak:"Adaptation",domain:"—",icon:"fa-circle-notch",color:"gray",desc:"State khusus Ten Shadows dengan sistem Adaptation Wheel."},
 {j:"Perfection",a:"Mahito",status:"complete",role:"Combo • Crowd Control",awak:"Essence of the Soul",domain:"Embodiment of Self-Perfection",icon:"fa-hands",color:"purple",desc:"Mengandalkan Soul Manipulation, mode tubuh, dan combo panjang."},
 {j:"Blood Manipulator",a:"Choso",status:"complete",role:"Projectile • Mid/Long Range",awak:"Duty As A Brother",domain:"—",icon:"fa-droplet",color:"red",desc:"Menggunakan Blood Manipulation, Convergence, dan proyektil bertekanan tinggi."},
 {j:"Switcher",a:"Aoi Todo",status:"complete",role:"Position Control • Mix-up",awak:"False Memories",domain:"—",icon:"fa-shuffle",color:"purple",desc:"Boogie Woogie memungkinkan pertukaran posisi dan mix-up ekstrem."},
 {j:"Defense Attorney",a:"Hiromi Higuruma",status:"complete",role:"Counter • Punish",awak:"Death Penalty",domain:"Deadly Sentencing",icon:"fa-scale-balanced",color:"yellow",desc:"Menggunakan Gavel, pengadilan, dan Executioner's Sword."},
 {j:"Cursed Partners",a:"Yuta Okkotsu / Rika Orimoto",status:"complete",role:"Copy • Versatile",awak:"True Love",domain:"Authentic Mutual Love",icon:"fa-heart",color:"red",desc:"Yuta bertarung bersama Rika dan dapat mengakses teknik yang dicopy."},
 {j:"Puppet Master",a:"Kokichi Muta / Ultimate Mechamaru",status:"complete",role:"Ranged • Puppet",awak:"Absolute",domain:"—",icon:"fa-robot",color:"gray",desc:"Mengendalikan puppet dan beralih ke Absolute pada awakening."},
 {j:"Head of the Hei",a:"Naoya Zenin",status:"complete",role:"Speed • Projection",awak:"Vengeance",domain:"Time Cell Moon Parade",icon:"fa-forward",color:"purple",desc:"Projection Sorcery dengan Frame Freeze dan domain berbasis kecepatan."},
 {j:"Salaryman",a:"Kento Nanami",status:"complete",role:"Balanced • Precision",awak:"Overtime",domain:"—",icon:"fa-briefcase",color:"yellow",desc:"Ratio Technique dengan pressure terukur dan Overtime."},
 {j:"Disaster Plants",a:"Hanami",status:"complete",role:"Area Control • Tank",awak:"Unwrap",domain:"—",icon:"fa-seedling",color:"green",desc:"Menggunakan teknik tumbuhan dan serangan area."},
 {j:"True Cannon",a:"Ryu Ishigori",status:"complete",role:"Artillery • Burst",awak:"Every Last Drop",domain:"—",icon:"fa-bullseye",color:"red",desc:"Spesialis output energi terkutuk dan serangan jarak jauh."},
 {j:"Register",a:"Reggie Star",status:"early",role:"Utility • Item Tricks",awak:"Con Artistry",domain:"—",icon:"fa-receipt",color:"yellow",desc:"Menggunakan teknik Receipt untuk memanfaatkan item."},
 {j:"Sky Assassin",a:"Takako Uro",status:"early",role:"Aerial • Sky Manipulation",awak:"Temper",domain:"—",icon:"fa-wind",color:"purple",desc:"Melayang dan memanipulasi permukaan langit dengan Sky Manipulation."},
 {j:"Locust Guy",a:"Ko-Guy",status:"base",role:"Rushdown • Poison",awak:"Directed Poison",domain:"—",icon:"fa-bug",color:"green",desc:"Base-only moveset dengan serangan dan poison pressure."},
 {j:"Star Rage",a:"Yuki Tsukumo",status:"base",role:"Heavy Hitter • Mass",awak:"Unrestricted Density",domain:"—",icon:"fa-star",color:"yellow",desc:"Memanfaatkan Mass untuk meningkatkan kekuatan serangan Garuda."},
 {j:"Aspiring Mangaka",a:"Charles Bernard",status:"base",role:"Precision • Prediction",awak:"—",domain:"—",icon:"fa-pen",color:"gray",desc:"Clairvoyance dan Oracle memberi reward pada timing yang presisi."},
 {j:"Lucky Coward",a:"Haruta Shigemo",status:"base",role:"Evasion • Luck",awak:"Jawbreaker",domain:"—",icon:"fa-clover",color:"green",desc:"Bermain dengan Miracle dan peluang menghindari serangan."},
 {j:"Crow Charmer",a:"Mei Mei / Ui Ui",status:"base",role:"Bird Control • Support",awak:"—",domain:"—",icon:"fa-crow",color:"gray",desc:"Moveset berbasis Mei Mei dan Ui Ui serta kontrol burung."},
 {j:"Black Death",a:"Kurourushi",status:"base",role:"Curse • Swarm",awak:"—",domain:"—",icon:"fa-spider",color:"green",desc:"Kutukan serangga dengan pressure berbasis swarm."},
 {j:"Strongest Of History",a:"Ryomen Sukuna (Heian Era)",status:"special",role:"Overpowered • Sukuna",awak:"Incomplete Shrine",domain:"Incomplete Malevolent Shrine",icon:"fa-crown",color:"red",desc:"Karakter khusus untuk mode tertentu/private server."},
 {j:"Monkey Kid",a:"Son Goku",status:"special",role:"Overpowered • Guest",awak:"Monkey",domain:"—",icon:"fa-cloud",color:"yellow",desc:"Karakter crossover/khusus, bukan karakter Jujutsu Kaisen."},
 {j:"Super TZE",a:"Tze",status:"special",role:"Developer • Special",awak:"—",domain:"—",icon:"fa-code",color:"purple",desc:"Karakter spesial yang berkaitan dengan developer."},
 {j:"Mokou",a:"Fujiwara no Mokou",status:"special",role:"Crossover • Special",awak:"—",domain:"—",icon:"fa-fire",color:"red",desc:"Karakter crossover dari Touhou Project."},
 {j:"Cursed Child",a:"Chara Dreemurr",status:"special",role:"Crossover • Limited",awak:"Since When Were You The One In Control?",domain:"—",icon:"fa-child",color:"red",desc:"Karakter crossover terbatas yang dipisahkan dari roster JJK utama."}
];

const groupsEl=document.getElementById("rosterGroups"), search=document.getElementById("search"), filter=document.getElementById("filter"), empty=document.getElementById("empty");
const groupMeta=[
 {id:"complete",title:"Complete",sub:"Moveset utama yang sudah lengkap",icon:"fa-circle-check",color:"text-green-400"},
 {id:"early",title:"Early Access",sub:"Karakter yang masih dalam pengembangan",icon:"fa-hammer",color:"text-yellow-400"},
 {id:"base",title:"Base-Only",sub:"Moveset dasar atau konten belum lengkap",icon:"fa-layer-group",color:"text-blue-400"},
 {id:"special",title:"Special / Others",sub:"Karakter khusus, crossover, atau kategori terpisah",icon:"fa-star",color:"text-purple-400"}
];
function card(c){
 const glow=c.color==="red"?"glow-red":c.color==="purple"?"glow-purple":"";
 const iconColor=c.color==="red"?"text-red-500":c.color==="purple"?"text-purple-400":c.color==="yellow"?"text-yellow-400":"text-gray-300";
 const statusLabel=c.status==="complete"?"COMPLETE":c.status==="early"?"EARLY ACCESS":c.status==="base"?"BASE-ONLY":"SPECIAL";
 return `<article class="flip-card ${glow}" data-search="${(c.j+" "+c.a+" "+c.role+" "+c.awak).toLowerCase()}"><div class="flip-inner">
  <div class="front"><i class="fas ${c.icon} text-5xl ${iconColor} mb-5"></i><span class="badge mb-3">${statusLabel}</span><h3 class="text-2xl font-bold">${c.j}</h3><p class="text-purple-300 font-semibold mt-2">${c.a}</p><p class="text-gray-500 text-sm mt-2">${c.role}</p><span class="mt-5 badge">${c.awak==="—"?"Base Only":c.awak}</span><p class="text-xs text-gray-600 mt-5">Klik untuk detail</p></div>
  <div class="back"><span class="badge">${statusLabel}</span><h3 class="text-2xl font-bold mt-3">${c.j}</h3><p class="text-purple-300 font-semibold">${c.a}</p><div class="mt-5 space-y-4 text-sm"><div><b class="text-gray-500 uppercase text-xs">Role</b><p>${c.role}</p></div><div><b class="text-gray-500 uppercase text-xs">Awakening</b><p>${c.awak}</p></div><div><b class="text-gray-500 uppercase text-xs">Domain / Ultimate</b><p>${c.domain}</p></div><div><b class="text-gray-500 uppercase text-xs">Ringkasan</b><p class="text-gray-300">${c.desc}</p></div></div><p class="text-xs text-gray-600 mt-6 text-center">Klik untuk kembali</p></div>
 </div></article>`;
}
function render(){
 const q=search.value.toLowerCase().trim(), f=filter.value;
 const data=chars.filter(c=>(f==="all"||c.status===f)&&(!q||(c.j+" "+c.a+" "+c.role+" "+c.awak).toLowerCase().includes(q)));
 groupsEl.innerHTML=groupMeta.map((g,i)=>{
   const items=data.filter(c=>c.status===g.id);
   if(!items.length)return "";
   const open=q!=="" || f!=="all" || i===0;
   return `<details class="card rounded-2xl overflow-hidden" ${open?"open":""}>
    <summary class="list-none cursor-pointer p-5 md:p-6 flex items-center gap-4 select-none">
     <div class="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${g.color}"><i class="fas ${g.icon} text-xl"></i></div>
     <div class="flex-1"><h3 class="text-xl font-bold">${g.title}</h3><p class="text-sm text-gray-500 mt-1">${g.sub}</p></div>
     <span class="badge">${items.length} karakter</span><i class="fas fa-chevron-down text-gray-500"></i>
    </summary>
    <div class="px-4 pb-5 md:px-6 md:pb-6"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${items.map(card).join("")}</div></div>
   </details>`;
 }).join("");
 empty.classList.toggle("hidden",data.length!==0);
 document.querySelectorAll(".flip-card").forEach(el=>el.addEventListener("click",()=>el.classList.toggle("flipped")));
}
search.addEventListener("input",render);filter.addEventListener("change",render);render();
