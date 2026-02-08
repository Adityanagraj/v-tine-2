const messages = [
      "Hello, My Love 🌸",
      "From the moment I met you, my world got brighter ✨",
      "You are so kind, gentle and pure 🌸",
      "Your laugh is my favorite music 🎶",
      "You are beautiful inside and out — more than words can say 💖",
      "I promise to support you, make you smile, and stand by you always ✨",
      "So... will you be mine, always? ❤️💍"
    ];

    const messagesEl = document.getElementById('messages');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const reveal = document.getElementById('reveal');
    const finalLine = document.getElementById('finalLine');
    const progressDotsEl = document.getElementById('progressDots');

    let idx = 0;
    let created = [];

    // Progress dots
    function renderProgressDots() {
      progressDotsEl.innerHTML = '';
      for (let i = 0; i < messages.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i < created.length ? ' filled' : '');
        dot.setAttribute('aria-hidden', 'true');
        progressDotsEl.appendChild(dot);
      }
    }

    // Background twinkles
    function addTwinkles() {
      const count = 18;
      for (let i = 0; i < count; i++) {
        const t = document.createElement('div');
        t.className = 'twinkle';
        t.style.left = Math.random() * 100 + '%';
        t.style.top = Math.random() * 100 + '%';
        t.style.animationDelay = Math.random() * 2 + 's';
        t.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(t);
      }
    }
    addTwinkles();

    // Tiny heart burst on button click (celebration)
    function burstHeartsNear(el) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0; i < 5; i++) {
        const h = document.createElement('div');
        h.className = 'heart burst-heart';
        h.style.left = cx + 'px';
        h.style.top = cy + 'px';
        h.style.width = '14px';
        h.style.height = '14px';
        h.style.opacity = '0.9';
        const hue = 320 + Math.random() * 40;
        h.innerHTML = `<svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg"><path d="M23.6 0c-2.9 0-4.9 1.6-6 3.1C16.3 1.6 14.3 0 11.4 0 5.1 0 0 5.4 0 11.9c0 7.6 9.6 13.1 14.5 17.1 1.9 1.3 3.7 2.4 4.9 3.2.5.3 1.2.3 1.7 0 1.2-.8 3-1.9 4.9-3.2C22.4 25 32 19.5 32 11.9 32 5.4 26.9 0 23.6 0z" fill="hsl(${hue}deg 100% 72%)"/></svg>`;
        document.body.appendChild(h);
        const angle = (i / 5) * Math.PI * 2 + Math.random();
        const dist = 40 + Math.random() * 30;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist - 20;
        h.animate([
          { transform: 'translate(-50%,-50%) scale(1)', opacity: 0.9 },
          { transform: `translate(-50%,-50%) translate(${tx}px,${ty}px) scale(0.4)`, opacity: 0 }
        ], { duration: 700, easing: 'ease-out' }).finished.then(() => h.remove());
      }
    }

    function createLine(text, delay = 0){
      const el = document.createElement('div');
      el.className = 'line';
      el.innerHTML = `<span class="emoji">${text.match(/[\p{Emoji}]/u)?.[0] || ''}</span> <span class="txt">${escapeHtml(text)}</span>`;
      messagesEl.appendChild(el);
      // show with slight delay for nice rhythm
      setTimeout(()=> el.classList.add('show'), 60 + delay);
      created.push(el);
      // scroll into view smoothly
      el.scrollIntoView({behavior:'smooth', block:'center'});
    }

    function escapeHtml(s){
      return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }

    // initialize with first message
    createLine(messages[0]);
    idx = 1;
    renderProgressDots();
    updateControls();

    nextBtn.addEventListener('click', () => {
      if (idx < messages.length) {
        burstHeartsNear(nextBtn);
        createLine(messages[idx]);
        idx++;
        renderProgressDots();
        updateControls();
        if (idx === messages.length) {
          nextBtn.textContent = "💍 Ask";
        }
      } else {
        burstHeartsNear(nextBtn);
        showReveal();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (created.length > 1){
        const last = created.pop();
        last.classList.remove('show');
        setTimeout(()=> last.remove(), 300);
        idx = Math.max(1, idx - 1);
        renderProgressDots();
        updateControls();
      }
    });

    function updateControls(){
      prevBtn.style.visibility = created.length > 1 ? 'visible' : 'hidden';
      if (idx >= messages.length) {
        nextBtn.textContent = '💍 Ask';
        nextBtn.classList.add('cta-pulse');
      } else {
        nextBtn.textContent = 'Next ➝';
        nextBtn.classList.remove('cta-pulse');
      }
    }

    // REVEAL and hearts rain
    function showReveal(){
      reveal.classList.add('show');
      reveal.setAttribute('aria-hidden','false');
      finalLine.textContent = "I LOVE YOU TOO";
      startHeartRain();
    }

    // HEART RAIN implementation
    let heartInterval = null;
    function startHeartRain(){
      // create hearts frequently for ~9 seconds, then slow
      let totalDuration = 12000; // 12s heavy
      let start = Date.now();
      heartInterval = setInterval(()=>{
        spawnHeart();
        // faster initial, then slower later
        if (Date.now() - start > totalDuration){
          clearInterval(heartInterval);
          // keep some gentle occasional hearts forever
          setInterval(spawnHeart, 900);
        }
      }, 160); // spawn every 160ms initially
    }

    function spawnHeart(){
      const heart = document.createElement('div');
      heart.className = 'heart';
      // random starting x across width
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const startX = Math.random() * vw;
      const size = 18 + Math.random() * 42; // 18 to 60 px
      const rotate = Math.random() * 360;
      const hue = 320 + Math.random()*60; // pinkish
      // set style
      heart.style.left = (startX - size/2) + 'px';
      heart.style.top = '-120px';
      heart.style.width = size + 'px';
      heart.style.height = size + 'px';
      heart.style.opacity = 0.95;

      // SVG heart (keeps it crisp)
      heart.innerHTML = `
      <svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23.6 0c-2.9 0-4.9 1.6-6 3.1C16.3 1.6 14.3 0 11.4 0 5.1 0 0 5.4 0 11.9c0 7.6 9.6 13.1 14.5 17.1 1.9 1.3 3.7 2.4 4.9 3.2.5.3 1.2.3 1.7 0 1.2-.8 3-1.9 4.9-3.2C22.4 25 32 19.5 32 11.9 32 5.4 26.9 0 23.6 0z" fill="hsl(${hue}deg 100% 72%)"/>
      </svg>
      `;

      document.body.appendChild(heart);

      // random horizontal drift and fall duration
      const drift = (Math.random() - 0.5) * 220; // -110 .. 110
      const duration = 3800 + Math.random()*3000; // 3.8s - 6.8s
      const spin = (Math.random() - 0.5) * 720; // -360 to 360 degrees

      // animate with JS for better control
      const startTime = performance.now();
      function animate(now){
        const t = (now - startTime) / duration;
        if (t >= 1){
          heart.remove();
          return;
        }
        // vertical movement
        const eased = easeOutCubic(t);
        heart.style.transform = `translate(${drift * eased}px, ${ (window.innerHeight + 200) * eased }px) rotate(${spin * eased}deg) scale(${1 - 0.15*eased})`;
        heart.style.opacity = String(1 - eased*0.95);
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);

      // cleanup safety
      setTimeout(()=> heart.remove(), duration + 8000);
    }

    function easeOutCubic(x){ return 1 - Math.pow(1 - x, 3); }

    // allow keyboard "Enter" to do Next
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') nextBtn.click();
      if (e.key === 'ArrowLeft') prevBtn.click();
    });

    // small nice welcome sparkle inside card
    setTimeout(()=> {
      const c = document.createElement('div');
      c.className = 'spark';
      c.style.left = '50%';
      c.style.top = '20%';
      document.querySelector('.card').appendChild(c);
      setTimeout(()=> c.remove(), 4200);
    }, 800);