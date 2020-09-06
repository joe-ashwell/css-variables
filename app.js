const inputs = document.querySelectorAll('.controls input');
const sliders = document.querySelectorAll('.controls input[type="range"]');

const bgImage = document.querySelector('div.bg-image');
const bgImageH2 = document.querySelector('h2.bg-image');

function whatIsTheUpdate() {

  // Default to nothing if there is no unit
  const unit = this.dataset.unit || "";
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)

  if (this.name === 'image-url') {
    bgImage.style.backgroundImage = `url(${this.value})`;
  } else if (this.name === 'text-input') {
    bgImageH2.innerHTML = this.value;
  }

}

inputs.forEach(input => input.addEventListener('change', whatIsTheUpdate));
sliders.forEach(slider => slider.addEventListener('mousemove', whatIsTheUpdate));
