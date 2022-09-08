(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtnOrder: document.querySelector('[data-menu-close-order]'),
    menu: document.querySelector('[data-menu]'),
    
    closeMenuBtnHome: document.querySelector('[data-menu-close-home]'),
    closeMenuBtnAdvantages: document.querySelector('[data-menu-close-advantages]'),
    closeMenuBtnProducts: document.querySelector('[data-menu-close-products]'),
    closeMenuBtnContacts: document.querySelector('[data-menu-close-contacts]'),
  };
  
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtnOrder.addEventListener('click', toggleModal);
  
  refs.closeMenuBtnHome.addEventListener('click', toggleModal);
  refs.closeMenuBtnAdvantages.addEventListener('click', toggleModal);
  refs.closeMenuBtnProducts.addEventListener('click', toggleModal);
  refs.closeMenuBtnContacts.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();