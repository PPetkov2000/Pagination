const projects = [
  {
    title: "Project One",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Two",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Three",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Four",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Five",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Six",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Seven",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Eight",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    imageUrl: "http://placehold.it/700x400",
  },
  {
    title: "Project Nine",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.",
    imageUrl: "http://placehold.it/700x400",
  },
]

function main() {
  const row = document.getElementById("row")
  const pageItemsEl = document.getElementById("page-items")
  const pageItemPrev = document.getElementById("page-item-prev")
  const pageItemNext = document.getElementById("page-item-next")

  if (
    row == null ||
    pageItemsEl == null ||
    pageItemPrev == null ||
    pageItemNext == null
  ) {
    console.log("Missing DOM elements!")
    return
  }

  const projectsPerPage = 3
  const pagesCount = Math.ceil(projects.length / projectsPerPage)

  let currentPage = 1

  for (let i = 1; i <= pagesCount; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")

    li.classList.add("page-item")
    a.classList.add("page-link")

    a.href = "#"
    a.textContent = i

    li.appendChild(a)
    pageItemsEl.appendChild(li)

    li.addEventListener("click", function (e) {
      currentPage = Number(e.target.textContent)
      renderProjects(currentPage)
    })
  }

  function renderProjects(currentPage) {
    row.innerHTML = ""

    if (currentPage <= 1) {
      pageItemPrev.style.display = "none"
    } else {
      pageItemPrev.style.display = "block"
    }

    if (currentPage >= pagesCount) {
      pageItemNext.style.display = "none"
    } else {
      pageItemNext.style.display = "block"
    }

    const currentProjects = getProjects(currentPage, projectsPerPage, projects)

    currentProjects.forEach((project) => {
      row.innerHTML += `
        <div class="col-lg-4 col-sm-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src=${project.imageUrl} alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">${project.title}</a>
              </h4>
              <p class="card-text">${project.text}</p>
            </div>
          </div>
        </div>
      `
    })
  }

  function getProjects(currentPage, projectsPerPage, projects) {
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = projects.slice(
      indexOfFirstProject,
      indexOfLastProject
    )
    return currentProjects
  }

  pageItemPrev.addEventListener("click", function () {
    currentPage = currentPage - 1
    renderProjects(currentPage)
  })

  pageItemNext.addEventListener("click", function () {
    currentPage = currentPage + 1
    renderProjects(currentPage)
  })

  renderProjects(currentPage)
}

document.addEventListener("DOMContentLoaded", main)
