subject = "LEON LEON";
let content = `
  <div class="list">
    <span class="icon">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <ul>
      <li><a class="frist" href="#Services">Services</a></li>
      <li><a href="#Portfolio">Portfolio</a></li>
      <li><a href="#About">About</a></li>
      <li><a class="last" href="#Contacts">Contacts</a></li>
    </ul>
  </div>
  `;
window.onload = function () {

  document.write("<h1>", subject, "</h1>");
  document.querySelector("h1").style.color = "Red";
  console.error(subject);
  console.table(["hesham", "mohamed", "abdelhamid"]);
  console.log(typeof "hesham abdelhamid");
  console.log(typeof 5);
  console.log(typeof true);
  console.log(typeof 5.5);
  console.log(typeof [50, 40, 40]);
  console.log(typeof { heshma: 50, mohamed: 40, abdelhamid: 40 });
  console.log(typeof undefined);
  console.log(typeof null);
  document.write(content);

};

