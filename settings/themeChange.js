const themes = [
	'theme-light',
	'theme-dark',
	'theme-raspberry',
	'theme-cherry-blossom'
];

export { themes }

var currentTheme = localStorage.getItem('theme') || themes[0];

function applyTheme(theme) {
	document.body.classList.remove(...themes);  // Remove all theme classes
	document.body.classList.add(theme);  // Add the selected theme
	localStorage.setItem('theme', theme);  // Store the selected theme in localStorage
}

applyTheme(currentTheme);

const themeItems = document.querySelectorAll('.theme-item');
themeItems.forEach(item => {
  item.addEventListener('click', () => {
	console.log("clicked!");
    const selectedTheme = item.classList[1];  // The second class is the theme class
    applyTheme(selectedTheme);
  });
});