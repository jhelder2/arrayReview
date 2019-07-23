(() => {
  console.log('linked');

  let textContainer = document.querySelector(".text-container"),
      arrayButton = document.querySelector("button");
      bioButtons = document.querySelectorAll(".bio-buttons button")

  const dataContainer = ["This ", "is ", "some ", "text "];
  const newContainer = ["This", "Is", "A", "Join", "method", "Result"];
  const johnAndMike = ["Hi, I'm John Doe", "Hello, I am Mike Smith"]

  function showBioInfo(){
    arrayIndex = this.dataset.arrayref;
    textContainer.textContent = johnAndMike[arrayIndex];
  };

  function joinArray(){
    textContainer.textContent = newContainer.join(" ")
  }

  dataContainer.forEach((word, index) => {
    textContainer.textContent =+ word;
    console.log(index);
  });

//for each (create a var of 0, if var is less than dataContainer.length then do; incease var by 1)
  for (let i=0; i<dataContainer.length; i++) {
    console.log(i, dataContainer[i]);

    //append the array contents to the paragraph tag
    textContainer.textContent += dataContainer[i];
  };

  textContainer.textContent += "I just added this with script";

  arrayButton.addEventListener('click', joinArray)

  bioButtons.forEach(button => button.addEventListener('click', showBioInfo));

})();
