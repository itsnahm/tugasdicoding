
  function hello() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "Hai! Selamat datang di sini! Salam kenal!";
    } else {
      text = "Hai " + person + "! Selamat datang di blog ini!";
    }
    document.getElementById("demo").innerHTML = text;
  }
