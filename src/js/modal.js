(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-location-open]"),
    closeModalBtn: document.querySelector("[data-modal-location-close]"),
    modal: document.querySelector("[data-modal-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-franchise-open]"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-open]"),
    openModalBtnMob: document.querySelector("[data-modal-buy-open-mob]"),
    closeModalBtn: document.querySelector("[data-modal-buy-close]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBtnMob.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-ingredients1-open]"),
    openModalBtn2: document.querySelector("[data-modal-ingredients2-open]"),
    openModalBtn3: document.querySelector("[data-modal-ingredients3-open]"),
    openModalBtn4: document.querySelector("[data-modal-ingredients4-open]"),
    
    closeModalBtn: document.querySelector("[data-modal-ingredients-close]"),
    modal: document.querySelector("[data-modal-ingredients]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.openModalBtn4.addEventListener("click", toggleModal);

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
