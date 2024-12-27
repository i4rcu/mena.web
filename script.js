document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(sliderContainer => {
    const slider = sliderContainer.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const prevButton = sliderContainer.querySelector('.prev');
    const nextButton = sliderContainer.querySelector('.next');

    let currentIndex = 0;

    const updateSliderPosition = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSliderPosition();
    });
  });
});
