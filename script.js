'use strict';

const dice = document.getElementById('dice');

const adviceContainer = document.querySelector('#box');

const renderAdvice = function (data) {
  const html = `
    <h1 class="heading">ADVICE <span class='hash' id="hash">#${data.slip.id}</span></h1>
      <p class="advice" id="advice">'${data.slip.advice}' </p>
      <img src="/images/pattern-divider-mobile.svg" alt="divider" class="divider">
    `;
  adviceContainer.innerHTML = html;
};

async function adviceGenerator() {
  const res = await fetch('https://api.adviceslip.com/advice');

  const data = await res.json();
  renderAdvice(data);
}

dice.addEventListener('click', adviceGenerator);

adviceGenerator();
