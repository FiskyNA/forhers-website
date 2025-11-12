// ========== CONFIG ==========
const ENDING_TEXT = "So… will you be mine?";
const CONFESSIONS = [
  // ENGLISH (soft)
  "You make ordinary moments feel like something I want to keep forever.",
  "Silence around you sounds softer than any song I've heard.",
  "I like the way you smile at things only you notice.",
  "Being around you turns small days into something warm.",
  "I never planned to care this much, but here I am.",
  "If I had one wish, it would be more time with you.",
  "You make my worst days a little easier to carry.",
  "There's a quiet kind of joy that happens when I see you.",
  "It's not dramatic — I just think about you, often.",
  "I like you, simply and loudly in my quiet pockets.",

  // ENGLISH (flirty)
  "If flirting were a sport, I'd be playing for you.",
  "You keep stealing my attention — I don't want it back.",
  "You look like a 'stay a little longer' kind of person.",
  "I tried to be cool. I failed. Hello, I like you.",
  "Do you believe in sparks? Because every time, there's one.",

  // HINGLISH / HINDI (soft)
  "Tere bina sab kuch adhoora lagta hai.",
  "Tumhari hassi mere din ki sabse pyaari roshni hai.",
  "Bas tumhara saath chahiye — zyada nahi, bas itna.",
  "Main jitna sochta tha, tum utni acchi nikli.",
  "Tere saath kaafi hai — baaki sab thoda kam lagta hai.",
  "Tumhe dekh kar lagta hai, sab theek ho jayega.",
  "Mujhe tumse milke har choti cheez khamosh si lagti hai.",
  "Tum ho to waqt ruk sa jata hai, bas ek pal ke liye.",
  "Tumhari baatein seedhi hain, par dil ko choo jaati hain.",
  "Har lamha tumhein yaad karna, mujhe ajeeb achha lagta hai.",

  // HINGLISH (funny)
  "Tum meri battery ho — low ho to dikkat hai, full ho to sab smooth.",
  "Main tumhare liye notification on rakhunga — promise.",
  "Tumhare jokes pe hansne ka alag hi status update hota hai.",
  "Main tumhe chocolate nahi, kabhi kabhi wifi bhi dunga.",
  "Tum ho to mera playlist bhi better lagta hai.",

  // GUJARATI (soft)
  "તમે મારો દિવસ મીઠો બનાવી દીધો છો.",
  "તમારી સ્મિત મારા મનને શાંત કરે છે.",
  "તમારા સાથ ઉપરાંત બધું અધુરું લાગે છે.",
  "હજુ સુધીના બધા દિવસો ખાસ ન હતા — તમારાથી વિના.",
  "તમારા માટે દિલ માં એક નરમ આસમાન છે.",

  // MIXED / HINGLISH (cute)
  "You + me = small awkward jokes and big smiles.",
  "Woh tumhari baat, woh tumhari aankhon ka noor — main dooba rehta hu.",
  "Tame mara favourite human cho. (Translation: You're my favourite human.)",
  "Kabhi kabhi lagta hai tum mere liye hi ho — aur ache lagte ho.",
  "Main tumse seedha nahi bolta — isliye ye page banaya.",

  // FUN / FLIRTY (mixed)
  "If kisses were raindrops, I'd send you a storm.",
  "Tumhara pass hona mera favourite background setting hai.",
  "Main tumhe 'me time' nahi chhodunga — I'm serious.",
  "Tumhare saath coffee? Or kabhi kabhi pizza and late-night talks?",
  "Gujarati me: Hu tamne chokkas game chhu — (I definitely like you).",

  // DEEP / POETIC (english + hindi)
  "Some words don't need answers — they just need to be felt.",
  "Main tumse is tarah baat karna chahta hu, jaise hawa ped ko.",
  "You make the little spaces in my day feel like home.",
  "Tumhari ek muskurahat meri subah ko perfect kar deti hai.",
  "Life feels a little softer when you're somewhere nearby.",

  // LIGHT & PLAYFUL
  "Tum mera favorite notification ho — kabhi mute mat karna.",
  "I may be awkward, but my feelings are genuine.",
  "If we were a movie, I'd press replay again and again.",
  "Tum game me bhi mine ho, real life me bhi mine ho.",
  "I promise to laugh at your dad jokes (mostly).",

  // FRIENDLY-CONFESSIONAL (gentle)
  "I value our talks and want them to be more than just chats.",
  "You bring out the parts of me that like staying up late and making plans.",
  "A friendship with potential feels like a good book — I want the next chapter.",
  "Tum ek suraksha jaisi baat ho — aur main waha rehna chahta hu.",
  "I like you for many small reasons that add up.",

  // HINDI (funny)
  "Tum meri Wifi ho — bina tumhare connection drop ho jata hai.",
  "Tumhari smile dekh ke password bhi strong ho jata hai.",
  "Kabhi main bhool jaun to tum yaad dila dena — tumhara naam main hamesha yaad rakhoonga.",
  "Tum ho toh life me thoda extra masala aa jata hai — ache tareeke se.",
  "Tumse baat karke hi din ki energy mil jati hai.",

  // GUJARATI (funny & sweet)
  "શું તમે મારા साथ થોડી મીઠી મીઠી વાતો કરશો? (Will you chat sweetly with me?)",
  "તમારી આ હાસ્યબંધને હું ક્યારેય ચૂકીશ નહિ.",
  "હુતમને ગમુ છું — સાધા અને મીઠા શબ્દોમાં.",
  "તમારી સાથે હોઈએ તો સમય ઉડ્ડી જાય છે.",

  // MIXED ROMANTIC (more lines)
  "I like the person you are when you think no one is watching.",
  "Tere bina, coffee ka taste adhoora lagta hai.",
  "When you laugh, I decide my day is saved.",
  "Bas tum hi ho jo mujhe settle kar deta hai.",
  "Tame mara sapna nathi — tame mara hakikat cho. (You're not a dream — you're my reality)",

  // MORE LINES (to reach 100+)
  "I keep small notes of things you said that made me smile.",
  "Tumhara haath thamna chahunga, agar tum bhi chaaho.",
  "I think you're secretly the best part of my boring days.",
  "Tere saath ka ek plan hi mere liye bahut hai.",
  "Mujhe tumhara dimaag bhi bohot pasand hai, bas soch lena.",
  "A simple 'how are you' from you changes my mood.",
  "Tere jokes pe haste hue main guilty proud feel karta hu.",
  "Tame mara saathe hovo to khushi male chhe.",
  "Tumhare saath kisi bhi jagah coffee special lagti hai.",
  "You are my favorite hello and my hardest goodbye.",
  "Kuch log lifeline hote hain—tum mera wo hi ho.",
  "I want to make you feel safe, seen and valued.",
  "Main tumhari choti choti khushiyo ka witness banna chahta hu.",
  "Mujhe tumhare saath hoke khud pe garv hota hai.",
  "Tame mane smile karavo chho — ane te javab nathi.",
  "When I say 'I like you', it's with a calm heart.",
  "Tumhari simplicity mujhe sabse zyada attract karti hai.",
  "Tame mara dil ni dhadkan cho.",
  "You glow in ways I didn't know people could glow.",
  "Tum meri favourite notification ho — bas silent nahi karna.",
  "I could get lost in your eyes and not mind the map.",
  "Main tumhe choonkane ke liye koi line nahi dhoondunga — seedha bata raha hu.",
  "Tumse milke hi din me color aa jata hai.",
  "Tame mara sathe hu to feel safe lage chhe.",
  "You make me want to be a better person, quietly.",
  "Teri baton ka ek effect hai — smile stuck reh jaati hai.",
  "I like you, and I like that I can say it in small ways.",
  "Tum mere liye ek achhi aadat ho gayi ho.",
  "Tame maja ma hasavo chho ane mara dil khil jay chhe.",
  "I keep replaying small conversations with you — they feel important.",
  "Tumhara naam mere phone ka favourite hai.",
  "I think of you in the in-between moments — the coffee, the pause, the walk.",
  "Tame mara man nu sukh cho.",
  "If you give me one chance, I will spend it wisely.",
  "Main tumhare sath ordinary cheezon ko special banana chahta hu.",
  "You fit into my plans more easily than I expected.",
  "Tumse baatein kar ke waqt ka pata hi nahi chalta.",
  "Gujarati: Hu tamne ghanu game chhu — simple rite.",
  "You make me believe in small happy chances.",
  "Main tumhare saath rehan ko tayyar hu, chhote chhote plans se.",
  "Tumhara hona, mere din ke liye ek acha surprise hai.",
  "Tame mara dil ne chain aapo cho.",
  "I like you — not because you are perfect, but because you are honestly you.",
  "Tumhari simple aadatein meri favorites hain.",
  "Tere saath choti si walk, meri favorite activity ban chuki hai.",
  "You made the word 'home' softer in my head.",
  "Teri ek muskan se mera mood upgrade ho jata hai.",
  "Tame mane khyal rakho — ane hu pan rakhis.",
  "My feelings are not loud, but they are steady.",
  "Tum mere liye ek khubsurat ajnabee se, ek pyare insaan ban gaye ho.",
  "Agar tum saath ho, sab kuch manageable lagta hai.",
  "Main tumhe har roz ek nayi choti si khushi dena chahta hu.",
  "Tame mara saath hovo ane mara din savar jae.",
  "You make small promises feel meaningful.",
  "Tum mere liye ek comfortable silence ho.",
  "I like you for your small daily details.",
  "Tame mara sapna nathi — tame mara ek achhi shuruaat cho."
];

// ========== UI & Flow ==========
const form = document.getElementById('infoForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const displayName = document.getElementById('displayName');
const displayKnown = document.getElementById('displayKnown');
const typingEl = document.getElementById('typing');
const controls = document.getElementById('finalControls') || document.getElementById('finalControls');
const acceptBtn = document.getElementById('acceptBtn');
const laterBtn = document.getElementById('laterBtn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalCelebrate = document.getElementById('modalCelebrate');

let herName = '';
let nickname = '';
let known = '';
let chosenLine = '';
let typingIndex = 0;
let charIndex = 0;
let typingTimer = null;
let lineQueue = [];

// Helper: pick many random confessions to sequence (3-6 lines)
function pickLines() {
  const count = 3 + Math.floor(Math.random() * 4); // 3 to 6 lines
  const copy = CONFESSIONS.slice();
  const picked = [];
  for (let i = 0; i < count && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(idx, 1)[0]);
  }
  return picked;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  herName = document.getElementById('herName').value.trim() || 'you';
  nickname = document.getElementById('nickname').value.trim() || '';
  known = document.getElementById('known').value.trim() || 'a while';

  displayName.textContent = nickname || herName;
  displayKnown.textContent = known;

  // prepare confession sequence
  lineQueue = pickLines();
  chosenLine = lineQueue[lineQueue.length - 1]; // record last shown line as the "chosen" for backend
  // show step2
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
  controls.style.display = 'none';
  startSequence();
});

function startSequence() {
  typingIndex = 0;
  showNextLine();
}

function showNextLine() {
  if (typingIndex >= lineQueue.length) {
    // all lines shown, show controls
    controls.style.display = 'flex';
    return;
  }
  const line = lineQueue[typingIndex];
  typeOut(line, () => {
    typingIndex++;
    // short pause before next line
    setTimeout(showNextLine, 700 + Math.random() * 600);
  });
}

function typeOut(line, cb) {
  charIndex = 0;
  typingEl.textContent = '';
  const chars = Array.from(line);
  function step() {
    if (charIndex <= chars.length) {
      typingEl.textContent = chars.slice(0, charIndex).join('');
      charIndex++;
      const delay = 25 + Math.random() * 45;
      typingTimer = setTimeout(step, delay);
    } else {
      clearTimeout(typingTimer);
      cb && cb();
    }
  }
  step();
}

// Buttons
acceptBtn && acceptBtn.addEventListener('click', () => {
  showModal("She said yes?", "You clicked Accept. Sending response...");
  sendResponse("Yes");
  startConfetti(3000);
});
laterBtn && laterBtn.addEventListener('click', () => {
  showModal("Take your time", "You clicked Maybe later. Sending response...");
  sendResponse("Maybe later");
});

function showModal(title, body) {
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.classList.remove('hidden');
}

modalClose && modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});
modalCelebrate && modalCelebrate.addEventListener('click', () => {
  modal.classList.add('hidden');
  startConfetti(3500);
});

// Confetti (simple)
function startConfetti(duration = 2500) {
  const canvas = document.getElementById('confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.display = 'block';
  const pieces = [];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      vy: 2 + Math.random() * 6,
      w: 6 + Math.random() * 8,
      h: 10 + Math.random() * 10,
      rot: Math.random() * 360,
      spin: Math.random() > 0.5 ? 1 : -1
    });
  }
  let start = performance.now();
  function frame(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      p.y += p.vy;
      p.rot += p.spin * 6;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = `hsl(${Math.floor((p.x + p.y) % 360)},70%,60%)`;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (now - start < duration) requestAnimationFrame(frame);
    else canvas.style.display = 'none';
  }
  requestAnimationFrame(frame);
}

// Backend: send result (best-effort, no retry UI)
function sendResponse(choice) {
  const payload = {
    name: herName,
    nickname,
    known,
    choice,
    chosenLine,
    timestamp: new Date().toISOString()
  };
  // fire-and-forget
  fetch('/respond', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch((err) => {
    // fail silently; optionally you can show a small warning
    console.warn('Failed sending response', err);
  });
}
