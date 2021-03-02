document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  processSearch(e.target[0].value);
});

const processSearch = async (query) => {
  const res = await fetch(`/proxy?postcode=${query}`);
  const data = await res.json();
  document.querySelector("code").innerHTML = data;
};
