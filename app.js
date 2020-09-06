const inputs = document.querySelectorAll('.controls input');

const bgImage = document.querySelector('div.bg-image');

function whatIsTheUpdate() {

  // Default to nothing if there is no unit
  const unit = this.dataset.unit || "";
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)

  if (this.name === 'image-url') {
    bgImage.style.backgroundImage = `url(${this.value})`;
  }

}

function updateImage() {

  bgImage.style.backgroundImage = `url(${this.value})`;

}

inputs.forEach(input => input.addEventListener('change', whatIsTheUpdate));
inputs.forEach(input => input.addEventListener('mousemove', whatIsTheUpdate));