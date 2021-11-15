const article = document.getElementById("article");

let pageNumber = document.getElementById("selectpage");

let url = "https://rickandmortyapi.com/api/character/?page=";

pageNumber.addEventListener("change", (e) => {
  url =
    "https://rickandmortyapi.com/api/character/?page=" +
    parseInt(e.target.value);
  ChangeValue();
  Get();
});

const ChangeValue = () => {
  const images = document.querySelectorAll(".image");

  const names = document.querySelectorAll(".name");

  const sections = document.querySelectorAll(".section");

  for (const key of sections) {
    key.remove();
  }

  for (const key of images) {
    key.remove();
  }

  for (const key of names) {
    key.remove();
  }
};

const Get = () => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.results);
      const fragment = document.createDocumentFragment();

      console.log(url);

      for (const key of res.results) {
        const section = document.createElement("section");

        section.classList.add(
          "col",
          "col-md-3",
          "m-3",
          "text-center",
          "section"
        );

        const name = document.createElement("h2");

        name.textContent = key.name;

        name.classList.add("name");

        const image = document.createElement("img");

        image.classList.add("image");

        image.src = key.image;

        section.append(image);
        section.append(name);
        fragment.appendChild(section);
      }
      article.appendChild(fragment);
    });
};

Get();
