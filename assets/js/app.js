/* ==========================================
   ENTERPRISE QUESTION BANK (160+ Questions)
========================================== */
const generatePracticeBank = () => {
    let b = [];
    const add = (c, q, d) => b.push({id: 'q'+b.length, cat: c, q: q, diff: d});
    
    // HR & Behavioral (40)
    const hr = ["Tell me about yourself.", "Why should we hire you?", "What are your greatest strengths?", "What is your biggest weakness?", "Where do you see yourself in 5 years?", "Why do you want to leave your current job?", "Describe a time you failed.", "How do you handle conflict with a coworker?", "Tell me about a time you showed leadership.", "How do you prioritize tasks under pressure?", "Describe a difficult decision you made.", "What motivates you?", "How do you handle negative feedback?", "Tell me about a time you went above and beyond.", "Describe your ideal work environment.", "How do you deal with ambiguity?", "Tell me about a time you disagreed with a manager.", "What is your greatest professional achievement?", "How do you stay updated in your industry?", "What makes you unique?", "Tell me about a time you missed a deadline.", "Describe a situation where you had to adapt quickly.", "How do you handle working with difficult personalities?", "What is your management style?", "Tell me about a time you persuaded someone.", "Describe a project that required tight collaboration.", "How do you define success?", "What is the most difficult challenge you've faced?", "Tell me about a time you took a calculated risk.", "How do you ensure diversity and inclusion in your team?", "Describe a time you had to learn a new skill quickly.", "Tell me about a time you mentored someone.", "How do you handle a toxic team environment?", "What are your salary expectations?", "Are you willing to relocate?", "Tell me about a time you made an unpopular decision.", "How do you balance multiple projects?", "Describe a time you solved a problem creatively.", "What do you do outside of work?", "Do you have any questions for us?"];
    hr.forEach((q,i) => add('HR', q, i<15?'Beginner':(i<30?'Intermediate':'Advanced')));

    // Technical Core (40)
    const tech = ["Explain Object-Oriented Programming concepts.", "What is the difference between an abstract class and an interface?", "Explain RESTful API principles.", "What are microservices vs monolithic architecture?", "How does DNS work?", "What is CI/CD?", "Explain the concept of containerization (Docker).", "What is the difference between SQL and NoSQL?", "Explain database indexing.", "What is a transaction and ACID properties?", "Describe the OSI model.", "What is the difference between TCP and UDP?", "Explain multi-threading vs multi-processing.", "What is a memory leak?", "How do you handle state management in frontend?", "Explain the Virtual DOM.", "What are WebSockets?", "What is OAuth 2.0?", "Explain Cross-Site Scripting (XSS).", "What is CSRF?", "How do you optimize a slow web application?", "Explain hashing vs encryption.", "What is a Load Balancer?", "Describe Big O notation.", "What is a deadlock?", "Explain garbage collection.", "What are Design Patterns? Name three.", "Explain the MVC pattern.", "What is an ORM?", "Explain horizontal vs vertical scaling.", "What is a CDN?", "Explain serverless computing.", "What is Git rebase vs merge?", "How do you resolve merge conflicts?", "What is the CAP theorem?", "Explain Event-Driven Architecture.", "What is a reverse proxy?", "How does HTTPS work?", "Explain WebAssembly.", "What are Progressive Web Apps (PWAs)?"];
    tech.forEach((q,i) => add('Technical', q, i<15?'Beginner':(i<30?'Intermediate':'Advanced')));

    // Coding & DSA (40)
    const dsa = ["Reverse a string without using built-in methods.", "Find the missing number in a given integer array.", "Check if a string is a palindrome.", "Implement FizzBuzz.", "Find the two numbers that add up to a target (Two Sum).", "Implement a binary search.", "Merge two sorted arrays.", "Find the first non-repeating character in a string.", "Implement a linked list.", "Detect a cycle in a linked list.", "Reverse a linked list.", "Find the middle of a linked list.", "Implement a stack using queues.", "Check for balanced parentheses.", "Implement a queue using stacks.", "Traverse a binary tree (Inorder, Preorder, Postorder).", "Find the maximum depth of a binary tree.", "Invert a binary tree.", "Check if a binary tree is a Binary Search Tree (BST).", "Find the Lowest Common Ancestor in a BST.", "Implement Breadth-First Search (BFS) on a graph.", "Implement Depth-First Search (DFS) on a graph.", "Find the shortest path in an unweighted graph.", "Detect a cycle in a directed graph.", "Explain Dijkstra's Algorithm.", "Implement Merge Sort.", "Implement Quick Sort.", "Find the Kth largest element in an array.", "Solve the Climbing Stairs problem (DP).", "Solve the Coin Change problem.", "Find the Longest Common Subsequence.", "Find the Longest Increasing Subsequence.", "Solve the Knapsack problem.", "Find the contiguous subarray with the largest sum (Kadane's).", "Rotate an array by K steps.", "Group anagrams from a list of strings.", "Find the longest substring without repeating characters.", "Implement a Trie (Prefix Tree).", "Solve the N-Queens problem.", "Design an LRU Cache."];
    dsa.forEach((q,i) => add('Coding', q, i<15?'Beginner':(i<30?'Intermediate':'Advanced')));

    // Company Specific (40)
    const comp = ["(Google) Describe a time you showed 'Googlyness'.", "(Google) How would you design YouTube?", "(Google) Estimate the number of tennis balls in a Boeing 747.", "(Google) Describe a complex system you built.", "(Amazon) Give an example of 'Customer Obsession'.", "(Amazon) Tell me about a time you 'Disagreed and Committed'.", "(Amazon) Describe a situation showing 'Ownership'.", "(Amazon) How do you 'Dive Deep' into a problem?", "(Meta) How would you design Instagram's feed?", "(Meta) Move fast and break things - tell me a time you did this.", "(Meta) How do you prioritize feature requests?", "(Meta) Design a real-time chat system like Messenger.", "(Microsoft) How would you design Microsoft Teams?", "(Microsoft) Tell me about a time you collaborated across boundaries.", "(Microsoft) How do you foster an inclusive environment?", "(Apple) Describe a time you obsessed over a detail.", "(Apple) How do you balance aesthetics with functionality?", "(Netflix) How do you handle radical candor?", "(Netflix) Design Netflix's recommendation engine.", "(Uber) Design a ride-sharing dispatch system.", "(Uber) How do you handle surge pricing logic?", "(Stripe) Design a payment gateway API.", "(Stripe) How do you ensure high availability and security?", "(Airbnb) Design a booking system.", "(Airbnb) How do you handle overbooking conflicts?", "(Tesla) How would you process telemetry data from millions of cars?", "(Spotify) Design a music streaming service.", "(TCS) Explain the SDLC lifecycle.", "(Infosys) What are the core OOPs concepts with real-world examples?", "(Accenture) How do you manage client expectations?", "(Deloitte) Describe a time you analyzed complex data for a client.", "(JPMorgan) What is a distributed ledger?", "(Goldman Sachs) Design a low-latency trading system.", "(Adobe) How do you implement infinite undo/redo?", "(Flipkart) Design an e-commerce cart system.", "(Atlassian) How would you improve Jira?", "(Slack) Design a real-time notification service.", "(Zoom) How do you handle video streaming latency?", "(Salesforce) Explain multi-tenant architecture.", "(Oracle) Write a complex SQL query with window functions."];
    comp.forEach((q,i) => add('Company', q, i<20?'Intermediate':'Advanced'));

    return b;
};

const PRACTICE_BANK = generatePracticeBank();

/* ==========================================
   CORE STATE & DB 
========================================== */
const initDB = () => {
    let db = localStorage.getItem('iai_v3_users');
    if(!db) {
        db = {
            "demo@interviewai.com": {
                name: "Demo User", pass: "demo123",
                interviews: [], negotiations: [], gds: [], practiced: [], xp: 0, level: 1, streak: 1, lastActive: new Date().toDateString()
            }
        };
        localStorage.setItem('iai_v3_users', JSON.stringify(db));
    }
    return JSON.parse(localStorage.getItem('iai_v3_users'));
};

const DB = {
  get users(){ return initDB(); },
  save(u){ localStorage.setItem('iai_v3_users', JSON.stringify(u)) }
};

let S = { 
    user: null, 
    role: 'Software Engineer',
    targetCompany: 'Google',
    iv: null, questions: [], sessionQuestions: [], answers: [], feedbacks: [], qIdx: 0, timerInterval: null, elapsed: 0,
    negRound: 0, negHistory: [], targetSalary: 0, currentOffer: 0,
    gdTopic: '', gdHistory: [], gdInterval: null, gdRound: 0,
    camStream: null, camInterval: null
};

/* ==========================================
   ROUTING & ANIMATION
========================================== */
function go(screen, pillEl = null) {
  // Check auth for protected routes
  const authedRoutes = ['dashboard','setup','interview','company','salary','gd','bodycoach','replay','practice'];
  if(authedRoutes.includes(screen) && !S.user) {
      screen = 'login';
  }

  document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
  });
  
  const target = document.getElementById('screen-'+screen);
  if(target) target.classList.add('active');
  
  const nav = document.getElementById('topnav');
  nav.style.display = authedRoutes.includes(screen) ? 'flex' : 'none';
  
  if (pillEl) {
    document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));
    pillEl.classList.add('active');
  }

  if (authedRoutes.includes(screen) && S.user) {
      updateNavXP();
      if(screen === 'dashboard') refreshDash();
      if(screen === 'replay') loadReplays();
      if(screen === 'practice') renderPracticeBank();
  }
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function updateNavXP() {
  const u = DB.users[S.user];
  if(!u) return;
  const xpNeeded = u.level * 200;
  document.getElementById('xp-fill').style.width = Math.round(((u.xp||0) % xpNeeded) / xpNeeded * 100) + '%';
  document.getElementById('level-badge').textContent = 'Lv ' + (u.level||1);
  document.getElementById('nav-avatar').textContent = u.name.substring(0,2).toUpperCase();
}

/* ==========================================
   AUTH LOGIC
========================================== */
function doLogin() {
  const users = DB.users;
  const e = document.getElementById('le').value.trim();
  const p = document.getElementById('lp').value;
  const err = document.getElementById('lerr');
  
  if (!e || !p) { err.textContent='Please fill all fields'; err.style.display='block'; return; }
  if (!users[e] || users[e].pass !== p) { err.textContent='Invalid credentials'; err.style.display='block'; return; }
  
  // Handle Remember Me
  if (document.getElementById('remember').checked) {
      localStorage.setItem('iai_remember', JSON.stringify({e, p}));
  } else {
      localStorage.removeItem('iai_remember');
  }

  err.style.display='none'; 
  S.user = e; 
  checkStreak();
  go('dashboard', document.querySelectorAll('.nav-pill')[0]);
}

function doSignup() {
    const users = DB.users;
    const n = document.getElementById('sn_name').value.trim();
    const e = document.getElementById('sn_email').value.trim();
    const p1 = document.getElementById('sn_pass').value;
    const p2 = document.getElementById('sn_pass2').value;
    const err = document.getElementById('serr');

    if(!n || !e || !p1 || !p2) { err.textContent='Please fill all fields'; err.style.display='block'; return; }
    if(p1 !== p2) { err.textContent='Passwords do not match'; err.style.display='block'; return; }
    if(users[e]) { err.textContent='Email already exists'; err.style.display='block'; return; }

    users[e] = {
        name: n, pass: p1,
        interviews: [], negotiations: [], gds: [], practiced: [], xp: 0, level: 1, streak: 1, lastActive: new Date().toDateString()
    };
    DB.save(users);
    
    // Handle Remember Me
    if (document.getElementById('remember-signup').checked) {
        localStorage.setItem('iai_remember', JSON.stringify({e: e, p: p1}));
    }

    err.style.display='none';
    S.user = e;
    go('dashboard', document.querySelectorAll('.nav-pill')[0]);
}

function logout() { S.user = null; if(S.camStream) stopBodyCoach(); go('landing'); }

function checkStreak() {
    const users = DB.users;
    const u = users[S.user];
    const today = new Date().toDateString();
    if(u.lastActive !== today) {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if(u.lastActive === yesterday.toDateString()) {
            u.streak = (u.streak || 0) + 1;
        } else {
            u.streak = 1;
        }
        u.lastActive = today;
        DB.save(users);
    }
}

function gainXP(amount) {
  const users = DB.users, u = users[S.user];
  u.xp = (u.xp||0) + amount;
  if (u.xp >= u.level * 200) { u.level++; alert('🎉 LEVEL UP! You reached Level ' + u.level); }
  DB.save(users); updateNavXP();
}

/* ==========================================
   DASHBOARD
========================================== */
function refreshDash() {
  const u = DB.users[S.user];
  document.getElementById('dash-name').textContent = 'Welcome, ' + u.name.split(' ')[0];
  const xpNeeded = u.level * 200, xpInLevel = u.xp % xpNeeded;
  document.getElementById('dash-level').textContent = 'Level ' + u.level;
  document.getElementById('dash-xp-txt').textContent = xpInLevel + ' / ' + xpNeeded + ' XP';
  document.getElementById('dash-xp-fill').style.width = Math.round(xpInLevel/xpNeeded*100) + '%';
  
  const ivs = u.interviews || [];
  const negs = u.negotiations || [];
  document.getElementById('ds-total').textContent = ivs.length + negs.length + (u.gds?.length||0);
  document.getElementById('ds-streak').textContent = u.streak || 1;
  document.getElementById('ds-practiced').textContent = u.practiced?.length || 0;
  document.getElementById('ds-gd').textContent = u.gds?.length || 0;
  document.getElementById('ds-body').textContent = Math.floor((u.xp || 0) / 100); 
  
  if (ivs.length) {
    document.getElementById('ds-avg').textContent = Math.round(ivs.reduce((a,b)=>a+b.overall,0)/ivs.length) + '%';
    const rlist = document.getElementById('recent-list');
    rlist.innerHTML = ivs.slice(-4).reverse().map(iv => `
      <div class="surface row" style="transition:var(--transition-fast); cursor:pointer;" onmouseover="this.style.borderColor='var(--p)'" onmouseout="this.style.borderColor='var(--color-border)'">
        <div class="spacer">
            <div style="font-size:14px;font-weight:600;">${iv.role}</div>
            <div style="font-size:12px;color:var(--color-text-sub);">${iv.type} • ${iv.date}</div>
        </div>
        <div class="badge ${iv.overall>=70?'badge-green':'badge-amber'}">${iv.overall}%</div>
      </div>
    `).join('');
  }
  if(negs.length) {
      document.getElementById('ds-neg').textContent = '$' + Math.round(negs[negs.length-1].finalOffer/1000) + 'k';
  }
}

/* ==========================================
   DYNAMIC INTERVIEW LOGIC
========================================== */
function startInterviewSequence() {
  const type = document.getElementById('iv-type').value;
  const diff = document.getElementById('exp').value;
  S.iv = { role: S.role, type: type, level: diff, count: parseInt(document.getElementById('qct').value) };
  S.questions=[]; S.answers=[]; S.feedbacks=[]; S.qIdx=0;
  
  // Filter bank based on selection
  let pool = PRACTICE_BANK.filter(q => {
      let matchCat = true;
      let matchDiff = true;
      if(type.includes('Technical')) matchCat = (q.cat === 'Technical' || q.cat === 'Coding');
      else if(type.includes('HR')) matchCat = (q.cat === 'HR');
      
      if(diff.includes('Beginner')) matchDiff = (q.diff === 'Beginner');
      else if(diff.includes('Advanced')) matchDiff = (q.diff === 'Advanced');
      else matchDiff = (q.diff === 'Intermediate' || q.diff === 'Beginner'); 
      
      return matchCat && matchDiff;
  });

  // Fallback if pool is too small
  if(pool.length < S.iv.count) pool = [...PRACTICE_BANK];

  // Shuffle & pick
  pool.sort(() => 0.5 - Math.random());
  S.sessionQuestions = pool.slice(0, S.iv.count).map(q => q.q);

  // If custom role, inject role specific prefix into first question
  if(document.getElementById('custom-role').value) {
      S.sessionQuestions[0] = `As a ${S.role}, ` + S.sessionQuestions[0].charAt(0).toLowerCase() + S.sessionQuestions[0].slice(1);
  }

  go('interview');
  document.getElementById('chat-box').innerHTML='';
  document.getElementById('ans-input').value='';
  document.getElementById('fb-panel').classList.add('hidden');
  document.getElementById('iv-meta').innerHTML = `<i class="ti ti-microphone"></i> ${S.iv.role} • ${diff.split(' ')[0]}`;
  loadQ(0);
}

function addBubble(containerId, sender, text, type='ai') {
  const box=document.getElementById(containerId);
  let styleClass = type==='user' ? 'bubble-user' : (type==='peer' ? 'bubble-peer' : 'bubble-ai');
  let align = type==='user' ? 'align-self:flex-end;text-align:right;' : 'align-self:flex-start;';
  box.innerHTML += `<div class="col" style="${align} max-width:80%; margin-bottom:8px;"><div style="font-size:12px;color:var(--color-text-sub);margin-bottom:2px;font-weight:600;">${sender}</div><div class="bubble ${styleClass}" style="max-width:100%;">${text}</div></div>`;
  box.scrollTop=box.scrollHeight;
}

function loadQ(idx) {
  document.getElementById('iv-qprog').textContent='Q '+(idx+1)+'/'+S.iv.count;
  document.getElementById('ans-input').value='';
  document.getElementById('fb-panel').classList.add('hidden');
  
  S.questions[idx] = S.sessionQuestions[idx];
  addBubble('chat-box', 'AI System', S.questions[idx], 'ai');
}

function submitAns() {
  const ans=document.getElementById('ans-input').value.trim();
  if(!ans) return;
  S.answers[S.qIdx]=ans; addBubble('chat-box', 'You', ans, 'user');
  
  setTimeout(()=>{
      const sc = Math.floor(65+Math.random()*25);
      S.feedbacks[S.qIdx] = {score: sc, text: "Good conceptual overview. To improve, try using the STAR method and support your point with a specific, quantifiable metric."};
      addBubble('chat-box', 'AI Evaluator', "Response recorded.", 'ai');
      document.getElementById('fb-panel').classList.remove('hidden');
      document.getElementById('fb-text').innerHTML = `<strong>Score: ${sc}/100</strong><br>${S.feedbacks[S.qIdx].text}`;
      document.getElementById('next-btn').innerHTML = S.qIdx>=S.iv.count-1 ? '<i class="ti ti-flag"></i> Finish Interview' : 'Next Question <i class="ti ti-arrow-right"></i>';
      document.getElementById('chat-box').scrollTop=document.getElementById('chat-box').scrollHeight;
  }, 800);
}

function nextQ() { 
    if(S.qIdx>=S.iv.count-1) {
        const overall = Math.round(S.feedbacks.reduce((a,b)=>a+b.score,0)/S.feedbacks.length);
        const users=DB.users;
        users[S.user].interviews.push({role:S.iv.role, type: S.iv.type, overall, date:new Date().toLocaleDateString(), qa: S.questions.map((q,i)=>({q,a:S.answers[i]})) });
        DB.save(users); gainXP(50);
        alert('Simulation Complete! Overall Score: ' + overall + '%');
        go('dashboard');
    } else { 
        S.qIdx++; loadQ(S.qIdx); 
    } 
}

/* ==========================================
   FEATURE: PRACTICE BANK
========================================== */
function renderPracticeBank() {
    const sTerm = document.getElementById('pb-search').value.toLowerCase();
    const cFilter = document.getElementById('pb-cat').value;
    const dFilter = document.getElementById('pb-diff').value;
    const list = document.getElementById('pb-list');
    const u = DB.users[S.user];
    const practiced = u.practiced || [];

    document.getElementById('pb-count').textContent = practiced.length;

    let html = '';
    let count = 0;

    PRACTICE_BANK.forEach(q => {
        if(cFilter !== 'All' && q.cat !== cFilter) return;
        if(dFilter !== 'All' && q.diff !== dFilter) return;
        if(sTerm && !q.q.toLowerCase().includes(sTerm)) return;
        
        count++;
        const isDone = practiced.includes(q.id);
        const badgeCol = q.diff==='Beginner'?'badge-teal':(q.diff==='Advanced'?'badge-red':'badge-amber');

        html += `
            <div class="q-item">
                <div class="col" style="flex:1;">
                    <div class="row" style="margin-bottom:4px;">
                        <span class="badge ${badgeCol}">${q.diff}</span>
                        <span class="badge badge-gray">${q.cat}</span>
                    </div>
                    <div style="font-weight:500; font-size:15px;">${q.q}</div>
                </div>
                <button class="btn btn-sm ${isDone?'btn-ghost':'btn-primary'}" onclick="markPracticed('${q.id}', this)">
                    <i class="ti ${isDone?'ti-check':'ti-pencil'}"></i> ${isDone?'Done':'Practice'}
                </button>
            </div>
        `;
    });

    list.innerHTML = html || '<div class="text-center text-muted" style="padding: 2rem;">No questions match your criteria.</div>';
}

function markPracticed(id, btn) {
    const users = DB.users;
    const u = users[S.user];
    u.practiced = u.practiced || [];
    
    if(!u.practiced.includes(id)) {
        u.practiced.push(id);
        DB.save(users);
        btn.className = 'btn btn-sm btn-ghost';
        btn.innerHTML = '<i class="ti ti-check"></i> Done';
        document.getElementById('pb-count').textContent = u.practiced.length;
        gainXP(5);
    }
}

/* ==========================================
   FEATURE: COMPANY PREP
========================================== */
function selectCompany(comp, el) {
    S.targetCompany = comp;
    document.getElementById('custom-company').value = '';
    document.querySelectorAll('.company-card').forEach(c=>c.classList.remove('sel'));
    el.classList.add('sel');
}

function generateCompanyPrep() {
    const btn = document.getElementById('btn-gen-prep');
    btn.innerHTML = '<i class="ti ti-loader ti-spin"></i> Generating Strategy...';
    
    setTimeout(()=>{
        btn.innerHTML = '<i class="ti ti-wand"></i> Generate Prep Strategy';
        const out = document.getElementById('company-output');
        
        let content = '';
        const c = S.targetCompany;

        if(c==='Google') {
            content = `<div class="surface"><strong>Process (4-5 Rounds)</strong><ul style="margin-left:20px;font-size:14px;color:var(--color-text-sub);margin-top:4px;"><li>1x Phone Screen (Data Structures)</li><li>3x Coding Rounds (Focus on Graph/DP)</li><li>1x "Googlyness" Behavioral Round</li></ul></div><div class="surface"><strong>Focus:</strong> Big-O complexity, scalable design.</div>`;
        } else if(c==='Amazon') {
            content = `<div class="surface"><strong>Process (Loop)</strong><ul style="margin-left:20px;font-size:14px;color:var(--color-text-sub);margin-top:4px;"><li>1x Online Assessment (OA)</li><li>4x Onsite Loop (Coding + Behavioral)</li><li>Bar Raiser Round included</li></ul></div><div class="surface"><strong>Focus:</strong> 14 Leadership Principles. STAR method answers required.</div>`;
        } else if(c==='Meta') {
            content = `<div class="surface"><strong>Process (Jedi/Ninja)</strong><ul style="margin-left:20px;font-size:14px;color:var(--color-text-sub);margin-top:4px;"><li>Screening (Leetcode Mediums)</li><li>2x Coding (Ninja)</li><li>1x System Design (Pirate)</li><li>1x Behavioral (Jedi)</li></ul></div><div class="surface"><strong>Focus:</strong> Speed, execution, standard algorithms.</div>`;
        } else {
            content = `<div class="surface"><strong>Estimated Process for ${c}</strong><ul style="margin-left:20px;font-size:14px;color:var(--color-text-sub);margin-top:4px;"><li>Recruiter Screen</li><li>Technical Take-home or Live pair programming</li><li>Culture Fit / Architecture</li></ul></div><div class="surface"><strong>General Focus:</strong> Product thinking, shipping speed, cultural alignment with ${c}'s core values.</div>`;
        }

        out.innerHTML = `<div class="card"><h3 style="margin-bottom:1rem;font-size:20px;">Strategy Playbook: ${c}</h3><div class="col" style="gap:16px;">${content}</div><button class="btn btn-primary btn-full" style="margin-top:1.5rem;" onclick="S.role='${c} Engineer'; go('setup', document.querySelectorAll('.nav-pill')[1]);">Start Mock Interview for ${c}</button></div>`;
        out.classList.remove('hidden');
    }, 1000);
}

/* ==========================================
   FEATURE: SALARY NEGOTIATION
========================================== */
function startNegotiation() {
    S.targetSalary = parseInt(document.getElementById('sal-target').value);
    S.currentOffer = parseInt(document.getElementById('sal-offer').value);
    S.negRound = 0; S.negHistory = [];
    document.getElementById('sal-setup').classList.add('hidden');
    document.getElementById('sal-active').classList.remove('hidden');
    document.getElementById('sal-report').classList.add('hidden');
    document.getElementById('sal-target-disp').textContent = S.targetSalary.toLocaleString();
    document.getElementById('sal-chat-box').innerHTML = '';
    
    let initialPrompt = `Hi! We're thrilled to offer you the role. The base salary we've approved is $${S.currentOffer.toLocaleString()}. How does that sound?`;
    S.negHistory.push({r:'ai', t:initialPrompt});
    addBubble('sal-chat-box', 'Recruiter Sarah', initialPrompt, 'ai');
}

function submitNegotiation() {
    const input = document.getElementById('sal-input');
    const text = input.value.trim();
    if(!text) return;
    
    S.negHistory.push({r:'user', t:text});
    addBubble('sal-chat-box', 'You', text, 'user');
    input.value = '';
    S.negRound++;

    setTimeout(()=>{
        let response = "";
        let end = false;
        let finalOffer = S.currentOffer;

        if(text.toLowerCase().includes('accept') || text.toLowerCase().includes('sounds good')) {
            response = "Fantastic! We'll send the paperwork over immediately.";
            end = true;
        } else if (S.negRound === 1) {
            let bump = Math.floor((S.targetSalary - S.currentOffer) * 0.4);
            finalOffer = S.currentOffer + bump;
            S.currentOffer = finalOffer;
            response = `I understand you're looking for more. We have a strict band, but I checked with the team and we can bump it to $${finalOffer.toLocaleString()}. That's our maximum base.`;
        } else if (S.negRound === 2) {
            response = `We really want you on board, but we can't move the base higher than $${S.currentOffer.toLocaleString()}. We could potentially offer a $10,000 signing bonus. What do you say?`;
            S.currentOffer += 10000;
        } else {
            response = `I'm afraid that's our absolute best and final offer. We hope you'll accept!`;
            end = true;
        }

        S.negHistory.push({r:'ai', t:response});
        addBubble('sal-chat-box', 'Recruiter Sarah', response, 'ai');

        if(end || S.negRound >= 3) {
            setTimeout(() => finishNegotiation(S.currentOffer), 2000);
        }
    }, 1200);
}

function finishNegotiation(finalAmt) {
    document.getElementById('sal-active').classList.add('hidden');
    const out = document.getElementById('sal-report');
    
    const diff = finalAmt - parseInt(document.getElementById('sal-offer').value);
    const success = finalAmt >= S.targetSalary ? 'Excellent' : (diff > 0 ? 'Good' : 'Needs Practice');
    
    out.innerHTML = `
        <h3 style="font-size:20px;margin-bottom:1.5rem;">Negotiation Results</h3>
        <div class="grid-2" style="gap:16px;margin-bottom:1.5rem;">
            <div class="metric"><div class="metric-num" style="color:var(--p);">$${finalAmt.toLocaleString()}</div><div class="metric-lbl">Final Total Value</div></div>
            <div class="metric"><div class="metric-num" style="color:var(--g-success);">+$${diff.toLocaleString()}</div><div class="metric-lbl">Value Added via Negotiation</div></div>
        </div>
        <div class="surface">
            <strong>AI Coach Feedback:</strong> ${success}. You handled the pushback well. In the future, explicitly mentioning competing offers or specific market data points can help push past the "strict band" objection.
        </div>
        <button class="btn btn-primary btn-full" style="margin-top:1.5rem;" onclick="go('dashboard')">Finish & Return to Dashboard</button>
    `;
    out.classList.remove('hidden');

    const users=DB.users;
    users[S.user].negotiations = users[S.user].negotiations || [];
    users[S.user].negotiations.push({finalOffer: finalAmt, increase: diff, date: new Date().toLocaleDateString()});
    DB.save(users); gainXP(60);
}

/* ==========================================
   FEATURE: GD SIMULATOR
========================================== */
function startGD() {
    S.gdTopic = document.getElementById('gd-topic').value;
    document.getElementById('gd-setup').classList.add('hidden');
    document.getElementById('gd-active').classList.remove('hidden');
    document.getElementById('gd-report').classList.add('hidden');
    document.getElementById('gd-topic-disp').textContent = S.gdTopic;
    document.getElementById('gd-chat-box').innerHTML = '';
    S.gdRound = 0; S.gdHistory = [];

    addBubble('gd-chat-box', 'System Moderator', `Topic: ${S.gdTopic}. The floor is open.`, 'ai');
    
    setTimeout(()=> {
        const text = "I think this is a highly relevant topic. In my view, the core issue revolves around productivity versus collaboration.";
        addBubble('gd-chat-box', 'Alex (AI)', text, 'peer');
        S.gdHistory.push({r:'peer1', t:text});
    }, 2000);
    
    S.gdInterval = setInterval(gdAiTurn, 8000);
}

function gdAiTurn() {
    if(document.getElementById('gd-active').classList.contains('hidden')) return clearInterval(S.gdInterval);
    const peers = ['Jamie (AI)', 'Taylor (AI)', 'Alex (AI)'];
    const p = peers[Math.floor(Math.random()*peers.length)];
    const responses = [
        "I agree with that point, but we also have to consider the economic impact.",
        "That's true, however, statistics show a different trend over the last year.",
        "Could you elaborate on why you think that's the primary driver?",
        "I see it differently. The main bottleneck is actually infrastructure."
    ];
    const text = responses[Math.floor(Math.random()*responses.length)];
    addBubble('gd-chat-box', p, text, 'peer');
    S.gdHistory.push({r:p, t:text});
    S.gdRound++;
}

function submitGD() {
    const input = document.getElementById('gd-input');
    const text = input.value.trim();
    if(!text) return;
    addBubble('gd-chat-box', 'You', text, 'user');
    S.gdHistory.push({r:'user', t:text});
    input.value = '';
}

function endGD() {
    clearInterval(S.gdInterval);
    document.getElementById('gd-active').classList.add('hidden');
    const out = document.getElementById('gd-report');
    
    let userEntries = S.gdHistory.filter(x=>x.r==='user').length;
    let score = Math.min(100, userEntries * 25);
    
    out.innerHTML = `
        <h3 style="font-size:20px;margin-bottom:1.5rem;">GD Performance Report</h3>
        <div class="grid-2" style="gap:16px;margin-bottom:1.5rem;">
            <div class="metric"><div class="metric-num" style="color:var(--p);">${score}%</div><div class="metric-lbl">Participation Score</div></div>
            <div class="metric"><div class="metric-num" style="color:var(--t);">${userEntries}</div><div class="metric-lbl">Total Contributions</div></div>
        </div>
        <div class="surface" style="border-left:4px solid var(--p);">
            <strong>Analysis:</strong> ${userEntries > 2 ? 'Great active participation and leadership demonstrated.' : 'You were a bit quiet. Try to interject with "Adding to what Jamie said..." to take the floor gracefully.'}
        </div>
        <button class="btn btn-primary btn-full" style="margin-top:1.5rem;" onclick="go('dashboard')">Back to Dashboard</button>
    `;
    out.classList.remove('hidden');
    
    const users=DB.users;
    users[S.user].gds = users[S.user].gds || [];
    users[S.user].gds.push({topic: S.gdTopic, score: score});
    DB.save(users); gainXP(40);
}

/* ==========================================
   FEATURE: BODY LANGUAGE COACH
========================================== */
async function startBodyCoach() {
    const video = document.getElementById('webcam-video');
    const placeholder = document.getElementById('webcam-placeholder');
    const metrics = document.getElementById('video-metrics');
    const fbPanel = document.getElementById('body-feedback');
    
    document.getElementById('btn-start-cam').classList.add('hidden');
    document.getElementById('btn-stop-cam').classList.remove('hidden');

    try {
        S.camStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = S.camStream;
        video.style.display = 'block';
        placeholder.style.display = 'none';
        metrics.classList.remove('hidden');
        fbPanel.classList.remove('hidden');

        let score = 50;
        S.camInterval = setInterval(()=>{
            score = Math.max(30, Math.min(100, score + (Math.random()*10 - 4)));
            let eye = Math.min(100, score + 10);
            
            document.getElementById('metric-eye').textContent = Math.round(eye) + '%';
            document.getElementById('metric-posture').textContent = score > 60 ? 'Good' : 'Slouching';
            
            document.getElementById('body-score-fill').style.width = Math.round(score) + '%';
            document.getElementById('body-score-fill').style.background = score > 70 ? 'var(--g-success)' : (score > 40 ? 'var(--a)' : 'var(--r)');
            document.getElementById('body-score-txt').textContent = Math.round(score) + '/100';

            const tip = document.getElementById('body-coach-tip');
            if(score < 50) tip.innerHTML = "<strong style='color:var(--r)'>Tip:</strong> Sit up straight and look directly at the camera lens to simulate eye contact.";
            else if(eye < 70) tip.innerHTML = "<strong style='color:var(--a)'>Tip:</strong> Good posture, but try to maintain more consistent eye contact.";
            else tip.innerHTML = "<strong style='color:var(--g-success)'>Excellent!</strong> You look engaged, confident, and professional.";
        }, 1500);

    } catch(err) {
        alert("Camera access denied. Running in simulated fallback mode for demo purposes.");
        metrics.classList.remove('hidden');
        fbPanel.classList.remove('hidden');
    }
}

function stopBodyCoach() {
    if(S.camStream) {
        S.camStream.getTracks().forEach(track => track.stop());
        S.camStream = null;
    }
    clearInterval(S.camInterval);
    document.getElementById('webcam-video').style.display = 'none';
    document.getElementById('webcam-placeholder').style.display = 'block';
    document.getElementById('video-metrics').classList.add('hidden');
    document.getElementById('btn-start-cam').classList.remove('hidden');
    document.getElementById('btn-stop-cam').classList.add('hidden');
    document.getElementById('body-feedback').classList.add('hidden');
    gainXP(20);
}

/* ==========================================
   FEATURE: REPLAY ANALYSIS
========================================== */
function loadReplays() {
    const u = DB.users[S.user];
    const tl = document.getElementById('replay-timeline');
    if(!u.interviews || u.interviews.length === 0) {
        tl.innerHTML = '<div class="surface" style="text-align:center; padding: 3rem 1rem;">No completed interviews to analyze yet. Head to Mock Interviews to start.</div>';
        return;
    }

    tl.innerHTML = [...u.interviews].reverse().map((iv, i) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="card" style="padding:1.5rem;">
                <div class="row" style="justify-content:space-between; margin-bottom:12px;">
                    <div style="font-weight:700; font-size:16px;">${iv.role} Simulation <span style="font-weight:400; color:var(--color-text-muted); font-size:13px;">(${iv.type})</span></div>
                    <div class="badge ${iv.overall>=70?'badge-green':'badge-amber'}">${iv.overall}% Score</div>
                </div>
                <div style="font-size:13px;color:var(--color-text-sub);margin-bottom:16px;">${iv.date}</div>
                <div class="surface" style="font-size:14px; line-height:1.6;">
                    <strong style="color:var(--g-success); display:flex; align-items:center; gap:6px;"><i class="ti ti-thumb-up"></i> Strongest Moment:</strong> Clear, concise answers early on.<br>
                    <strong style="color:var(--r); display:flex; align-items:center; gap:6px; margin-top:8px;"><i class="ti ti-alert-circle"></i> Area to Improve:</strong> Deeper detail required on technical complexity.<br>
                    <button class="btn btn-sm btn-ghost" style="margin-top:12px; padding:0; color:var(--p);" onclick="alert('Full transcript modal would load here.')">View Full Transcript</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Init Check & Remember Me Handler
document.addEventListener("DOMContentLoaded", () => {
  const remembered = JSON.parse(localStorage.getItem('iai_remember'));
  if(remembered) {
      document.getElementById('le').value = remembered.e;
      document.getElementById('lp').value = remembered.p;
      document.getElementById('remember').checked = true;
  }
  if(localStorage.getItem('iai_dark')==='true'){document.body.classList.add('dark-mode');}
  go('landing');
});

function toggleDarkMode(){
 document.body.classList.toggle('dark-mode');
 localStorage.setItem('iai_dark', document.body.classList.contains('dark-mode'));
}
