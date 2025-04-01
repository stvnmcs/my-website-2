// const projects = [
//     {
//         title: "Project Title 1",
//         description: "Short description of the project.",
//         image: "images/project1.jpg",
//         link: "https://github.com/yourusername/project1"
//     },
//     {
//         title: "Project Title 2",
//         description: "Brief summary of this project.",
//         image: "images/project2.jpg",
//         link: "https://github.com/yourusername/project2"
//     },
//     {
//         title: "Project Title 3",
//         description: "A few words about this project.",
//         image: "images/project3.jpg",
//         link: "https://github.com/yourusername/project3"
//     }
// ];

// const projectContainer = document.querySelector('.projects-container');

// projects.forEach(project => {
//     const projectElement = document.createElement('div');
//     projectElement.classList.add('project');
//     projectElement.innerHTML = `
//         <img src="${project.image}" alt="${project.title}">
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         <a href="${project.link}" class="btn" target="_blank">View Project</a>
//     `;
//     projectContainer.appendChild(projectElement);
// });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let formStatus = document.getElementById("form-status");

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "#28a745";
            formStatus.style.display = "block";
            form.reset();
        } else {
            throw new Error("Submission failed");
        }
    } catch (error) {
        formStatus.textContent = "Oops! Something went wrong. Please try again.";
        formStatus.style.color = "#ff3333";
        formStatus.style.display = "block";
    }

    setTimeout(() => {
        formStatus.style.display = "none";
    }, 5000);
});


document.getElementById("year").textContent = new Date().getFullYear();


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrollPercentage + "%";
});
