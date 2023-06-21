function incrementNumber(count1, count2, count3, count4) {
    const headEl1 = document.getElementById("head1");
    const headEl2 = document.getElementById("head2");
    const headEl3 = document.getElementById("head3");
    const headEl4 = document.getElementById("head4");
  
    const increment = 1; // Artış miktarı
  
    const duration = 3000; // Animasyon süresi (ms)
  
    const startTime = performance.now(); // Animasyonun başlangıç zamanı
  
    function updateNumbers(timestamp) {
      const elapsedTime = timestamp - startTime;
  
      const progress = Math.min(1, elapsedTime / duration);
  
      const currentValue1 = Math.floor(count1 + progress * (28 - count1));
      const currentValue2 = Math.floor(count2 + progress * (1000 - count2));
      const currentValue3 = Math.floor(count3 + progress * (7 - count3));
      const currentValue4 = Math.floor(count4 + progress * (100 - count4));
  
      headEl1.textContent = currentValue1;
      headEl2.textContent = currentValue2 + " +";
      headEl3.textContent = currentValue3 + " +";
      headEl4.textContent = currentValue4;
  
      if (progress < 1) {
        requestAnimationFrame(updateNumbers);
      }
    }
  
    requestAnimationFrame(updateNumbers);
  }
  
  incrementNumber(0, 0, 0, 0);
  
          // ABOUT Slider
  
  var slides = document.getElementsByClassName('vision-card');
  var buttons = document.getElementsByClassName('about-vision');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var buttonIndex = Array.from(buttons).indexOf(this);
      goToSlide(buttonIndex);
      changeButtonColor(buttonIndex);
    });
  }
  
  function goToSlide(slideIndex) {
    const currentSlide = document.querySelector('.active');
    currentSlide.classList.remove('active');
    slides[slideIndex].classList.add('active');
  }
  function changeButtonColor(buttonIndex) {
    var currentButton = document.querySelector('.active-btn');
    currentButton.classList.remove('active-btn');
    buttons[buttonIndex].classList.add('active-btn');
  }
  
  
  