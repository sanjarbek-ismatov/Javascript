const callBtn = document.getElementById("call");

function count() {
  const startTime = Date.now();
  let i = 0;
  do {
    i++;
  } while (i % 1e6 != 0);
  if (i === 1e9)
    alert(
      "Hey bro, I've just finished it within " + (Date.now() - startTime) + "ms"
    );
  else {
    console.log(i);
    setTimeout(count);
  }
}

callBtn.onclick = function () {
  count();
};
