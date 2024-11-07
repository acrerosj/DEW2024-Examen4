const inputTitle = document.querySelector('input[name="title"]');
const inputTime = document.querySelector('input[name="time"]');

function createMeter() {
  const p = document.createElement("p");
  const spanTitle = document.createElement("span");
  spanTitle.textContent = inputTitle.value;

  const meter = document.createElement('meter');
  let time = inputTime.value;
  meter.value = time * 10;
  meter.min = 0;
  meter.max = time * 10;
  meter.optimum = time * 10;
  meter.high = time * 10 / 2;
  meter.low = time * 10 /4;
  
  const spanCount = document.createElement('span');
  spanCount.textContent = time;
  
  p.append(spanTitle, meter, spanCount);
  document.querySelector("main").append(p);
  
  let idInterval = setInterval(reduceTime, 100, meter, spanCount);
  meter.dataset.id = idInterval;
  meter.setAttribute("onclick", "clearInterval("+idInterval+")");
}

function reduceTime(meter, spanCount, idInterval) {
  meter.value--;
  spanCount.textContent = Math.ceil(meter.value / 10);
  if (meter.value ==0 ) {
    clearInterval(meter.dataset.id);
  }
}

