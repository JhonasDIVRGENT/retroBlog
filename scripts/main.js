        // Visit counter with localStorage
        let visits = localStorage.getItem('visitCount') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visitCount', visits);
        document.getElementById('visit-counter').textContent = visits;

        // Light/Dark mode toggle
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
            localStorage.setItem('theme', theme);
        });