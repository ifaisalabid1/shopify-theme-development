document.querySelectorAll('.header__inline-menu--hover details').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.setAttribute('open', true);
  });
  dropdown.addEventListener('mouseleave', () => {
    dropdown.removeAttribute('open');
  });
});
