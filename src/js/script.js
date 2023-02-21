const repositorios = document.querySelector(".projects");
const link = "https://api.github.com/users/christiandoramo/repos";
function getGithubApi() {
  fetch(link).then(async (resposta) => {
    if (!resposta.ok) {
      throw new Error(resposta.status);
    }

    let data = await resposta.json();
    console.log(data);
    data.map((item) => {
      let projeto = document.createElement("div");
      projeto.innerHTML = `
      <div class="project">
            <div>
              <i class="fa-regular fa-folder"></i>
              <span class="nome-projeto">${item.name}</span>
            </div>
            <div>
              <span class="texto-descricao">${item.description}</span>
            </div>
            <div>
              <div class="dados">
                <div class="stars">
                  <i class="fa-regular fa-star"></i>
                  <span class="qte-stars">${item.stargazers_count}</span>
                </div>
                <div class="branches">
                  <i class="fa-solid fa-code-branch"></i>
                  <span class="qte-branches">${item.forks_count}</span>
                </div>
              </div>
              <div class="linguagem">
                <span class="circle"></span>
                <span class="nome-linguagem">${item.language}</span>
              </div>
            </div>
          </div>
      `;
      repositorios.appendChild(projeto);
    });
  });
}
getGithubApi();
