// Hamburger Menu Toggle
// Initialize navigation behavior when DOM is ready and guard for missing elements
function initNavigation() {
    const hamBtn = document.querySelector('#ham-btn');
    const navBar = document.querySelector('#nav-bar');

    if (!hamBtn || !navBar) {
        // Nothing to do if elements are missing
        return;
    }

    // Toggle open/close on click
    hamBtn.addEventListener('click', () => {
        // using 'active' works with .hamburger.active span
        // this changes the 3 lines to an X using a transform rule in css
        hamBtn.classList.toggle('active'); // toggles button state of the hamburger

        // OTHERWISE - using 'open' works with .hamburger.before
        // this changes the content from 3 lines to X 
       // hamBtn.classList.toggle('open'); // toggles button state of the hamburger
        navBar.classList.toggle('open'); // toggles visibility of navigation links

        // update aria-expanded
        const expanded = hamBtn.getAttribute('aria-expanded') === 'true' || false;
        hamBtn.setAttribute('aria-expanded', String(!expanded));
    });

    // Close the menu with Escape for keyboard users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            if (navBar.classList.contains('open')) {
                navBar.classList.remove('open');
                hamBtn.classList.remove('open');
                hamBtn.setAttribute('aria-expanded', 'false');
                hamBtn.focus();
            }
        }
    });
}

// If the script is deferred or placed after DOM, init now; otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}