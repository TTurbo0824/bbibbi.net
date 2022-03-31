const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      // 한 번 화면에 등장하고 난 뒤에는 사라지지 않고 그대로 유지되도록 설정 = observer에서 제거
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1
  }
);

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector('.card:last-child'));
  },
  {
    // 컨테이너의 margin의 조절
    // 양수로 설정할 경우 타겟 요소를 pre-load가기에 유리
    rootMargin: '100px'
  }
);

lastCardObserver.observe(document.querySelector('.card:last-child'));

cards.forEach((card) => {
  observer.observe(card);
});

const loadNewCards = () => {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'New Card';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
};
