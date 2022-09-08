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