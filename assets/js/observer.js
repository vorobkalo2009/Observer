const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

const lastElementObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  createNewCard();
  lastElementObserver.unobserve(lastCard.target);
  lastElementObserver.observe(document.querySelector('.card:last-child'));
});

lastElementObserver.observe(document.querySelector('.card:last-child'));

cards.forEach(card => {
  observer.observe(card);
});

function createNewCard() {
  for (let index = 0; index <= 10; index++) {
    const card = document.createElement('div');
    card.textContent = 'NEW';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
}