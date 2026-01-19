function orderFood() {

  let foodPromise = new Promise((resolve, reject) => {
    let onTime = Math.random() > 0.5; // real life uncertainty

    setTimeout(() => {
      if (onTime) {
        resolve("✅ Food delivered on time!");
      } else {
        reject("❌ Sorry! Delivery is late.");
      }
    }, 1500);
  });

  foodPromise
    .then((msg) => {
      document.getElementById("result").innerText = msg;
      document.getElementById("result").style.color = "green";
    })
    .catch((err) => {
      document.getElementById("result").innerText = err;
      document.getElementById("result").style.color = "red";
    });
}
