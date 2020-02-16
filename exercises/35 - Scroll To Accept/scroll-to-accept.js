const terms = document.querySelector('.terms-and-conditions');

terms.addEventListener('scroll', function (e) {
  console.log(e.currentTarget.scrollTop);
  console.log(e.currentTarget.scrollHeight);
});
