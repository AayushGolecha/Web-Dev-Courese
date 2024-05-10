const scrollbar = document.querySelector('.scrollbar');
const thumb = scrollbar.querySelector('.scrollbar-thumb');

scrollbar.addEventListener('scroll', () => {
  const scrollPercentage = scrollbar.scrollTop / (scrollbar.scrollHeight - scrollbar.clientHeight);
  const thumbPosition = scrollPercentage * (scrollbar.clientHeight - thumb.clientHeight);
  thumb.style.transform = `translateY(${thumbPosition}px)`;
});
