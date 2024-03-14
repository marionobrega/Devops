const catImage = document.getElementById('catImage');
const newCatBtn = document.getElementById('newCatBtn');

async function getNewCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } catch (error) {
    console.error('Ocorreu um erro ao obter a imagem:', error);
  }
}

document.addEventListener('DOMContentLoaded', getNewCatImage);

newCatBtn.addEventListener('click', getNewCatImage);

