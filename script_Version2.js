// Array of all your .jfif images in the repo
const images = [
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/16102b7f-efc4-4a09-995a-8130076c08c0.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/21e114c9-ed50-4b72-b237-f8bbea266f62.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/25ea315b-5be1-437a-87b-b5b100cdbc3.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/39c1a381-5eca-427b-8029-0brefe7d808ea.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/76ce0f11-9ab9-44f3-8cd8-0e20134269c0.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/85090b96-3de9-4867-8188-53c05864900d.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/8abf96c6-3e39-49c4-8a10-d4b9930d19e9.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/94507461-eb6d-46d4-8ec5-c7ef4e25fd8d.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/e11b3f1a-db68-4ca8-a1a9-4335bd1145c2.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/e2259865-3e79-48ec-9dc1-c53c0c077f44.jfif",
  "https://raw.githubusercontent.com/ajisashi08/O.O/main/fb5773a4-908f-4bf0-8bc4-af420c3ab1a6.jfif"
];

// This function shows a random image with fade-in/fade-out effect
function showFadeImage() {
  // Create the image element if it doesn't exist
  let fadeImage = document.getElementById('fadeImage');
  if (!fadeImage) {
    fadeImage = document.createElement('img');
    fadeImage.id = 'fadeImage';
    fadeImage.className = 'fade-image';
    document.body.appendChild(fadeImage);
  }

  // Pick a random image (or cycle through them)
  const imgIdx = Math.floor(Math.random() * images.length);
  fadeImage.src = images[imgIdx];

  // Fade in
  fadeImage.style.opacity = '1';
  fadeImage.style.transition = 'opacity 1s';

  // Fade out after 3 seconds
  setTimeout(() => {
    fadeImage.style.opacity = '0';
  }, 3000);
}

// Example: Attach to a button with id="clickBtn"
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('clickBtn');
  if (btn) {
    btn.addEventListener('click', showFadeImage);
  }
});