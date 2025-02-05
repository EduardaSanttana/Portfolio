function retrieveRepos() {
    const user = 'EduardaSanttana';
    const container = document.getElementById("posts");

    // Exibindo o repositório fixo
    container.insertAdjacentHTML("beforeend", `
        <div class="post">
            <a class="postLink" href="https://github.com/EduardaSanttana/TCC-campezan" target="_blank">TCC - Campezan</a>
        </div>
    `);

    // Buscando os repositórios via API GitHub
    axios.get(`https://api.github.com/users/${user}/repos`).then((result) => {
        let { data } = result;

        data.forEach(element => {
            if (element.name !== "TCC-campezan") { 
                container.insertAdjacentHTML("beforeend", `
                    <div class="post">
                        <a class="postLink" href="${element.html_url}" target="_blank">${element.full_name}</a>
                    </div>
                `);
            }
        });
    }).catch(error => console.error("Erro ao buscar repositórios:", error));
}

function showHome() {
    document.getElementById("main").style.display = 'grid';
    document.getElementById("profile").style.display = 'none';
}
