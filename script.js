// --- Mobile Navigation ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// --- Terminal Logic ---
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalWindow = document.getElementById('terminalWindow');

// Command definitions
const commands = {
    'help': 'Available commands: <br> - <span class="cmd-highlight">about</span>: Who is Max?<br> - <span class="cmd-highlight">skills</span>: List technical skills<br> - <span class="cmd-highlight">projects</span>: View my work<br> - <span class="cmd-highlight">contact</span>: Email me<br> - <span class="cmd-highlight">clear</span>: Clear terminal',
    'about': 'Max Ochieng. Physics/Chemistry Teacher & Volleyball Coach turned Developer. <br> Trained by PLP & Safaricom S-Hook. <br> Focused on Secure Management Systems.',
    'skills': '>> Frontend: React, Tailwind, HTML/CSS <br> >> Backend: Node.js, Python, Django <br> >> Security: Ethical Hacking (Cisco), Network Scanning',
    'projects': '1. Hospital Management System (Live) <br> 2. School Management System (In Progress) <br> 3. Network Vuln Scanner (Python)',
    'contact': 'Email: maxoundo@gmail.com',
    'ls': 'about.txt  skills.json  projects_list.md  contact_info.txt', // Easter egg for techies
    'whoami': 'root@max-portfolio' // Easter egg
};

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        
        // 1. Create the user's entered line
        const historyLine = document.createElement('div');
        historyLine.innerHTML = `<span class="prompt">max@portfolio:~$</span> ${this.value}`;
        terminalOutput.appendChild(historyLine);

        // 2. Process command
        if (input === 'clear') {
            terminalOutput.innerHTML = '';
        } else if (commands[input]) {
            const responseLine = document.createElement('div');
            responseLine.innerHTML = commands[input];
            responseLine.style.marginBottom = '10px';
            responseLine.style.color = '#ccc'; // Standard response color
            terminalOutput.appendChild(responseLine);
        } else if (input !== '') {
            const errorLine = document.createElement('div');
            errorLine.innerHTML = `Command not found: ${input}. Type 'help' for options.`;
            errorLine.className = 'output-error';
            terminalOutput.appendChild(errorLine);
        }

        // 3. Clear input and scroll to bottom
        this.value = '';
        terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }
});

// Focus on input when clicking the terminal window
terminalWindow.addEventListener('click', () => {
    terminalInput.focus();
});