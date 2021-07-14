//Manager card html
const managerCardGenerator = (manager) => {
  return `
    <!-- Manager -->
    <div class="card">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${manager.name}</p>
                <p class="title is-4"><span class="iconify" data-icon="ph:coffee-fill" data-inline="false"></span> Manager</p>
            </div>
        </div>
        <div class='main-content'>
            <div class="content">
                <p><b>ID: </b>${manager.id}</p>
            </div>
            <div class="content">
                <p><b>Email: </b><a href="mailto:${manager.email}">${manager.email}</a></p>
            </div>
            <div class="content">
                <p><b>Office number: </b>${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};
//Engineer card html
const engineerCardGenerator = (engineer) => {
  return `
    <!-- Engineer -->
    <div class="card">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${engineer.name}</p>
                <p class="title is-4"><span class="iconify" data-icon="fa-solid:glasses" data-inline="false"></span>  Engineer</p>
            </div>
        </div>
        <div class='main-content'>
            <div class="content">
                <p><b>ID: </b>${engineer.id}</p>
            </div>
            <div class="content">
                <p><b>Email: </b><a href="mailto:${engineer.email}">${engineer.email}</a></p>
            </div>
            <div class="content">
                <p><b>GitHub: </b><a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};
//Intern card html
const internCardGenerator = (intern) => {
  return `
    <!-- Intern -->
    <div class="card">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${intern.name}</p>
                <p class="title is-4"><span class="iconify" data-icon="fa-solid:user-graduate" data-inline="false"></span> Intern</p>
            </div>
        </div>
        <div class='main-content'>
            <div class="content">
                <p><b>ID: </b>${intern.id}</p>
            </div>
            <div class="content">
                <p><b>Email: </b><a href="mailto:${intern.email}">${intern.email}</a></p>
            </div>
            <div class="content">
                <p><b>School: </b>${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};
//create html skeleton
const cardsGenerator = (cards) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <header>
            <section class="hero is-danger">
                <div class="hero-body">
                    <p class="title">My Team</p>
                </div>
            </section>
        </header>
        <main>
            <section id='box-container'>
                <!-- Manager, Engineer, and Intern cards are rendered here -->
                ${cards}
            </section>
        </main>
        <footer>
        </footer>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        <script src="scripts.js"></script>
    </body>
    </html>   
    `;
};

//function that loops through data and appends cards into html
const htmlGenerator = (data) => {
  let cardsArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    switch (role) {
      case "Manager":
        const managerCard = managerCardGenerator(employee);
        cardsArray.push(managerCard);
        break;
      case "Engineer":
        const engineerCard = engineerCardGenerator(employee);
        cardsArray.push(engineerCard);
        break;
      case "Intern":
        const internCard = internCardGenerator(employee);
        cardsArray.push(internCard);
        break;
      default:
        console.log("Error created in switch statement");
    }
  }
  const employeeCards = cardsArray.join("");
  const generateTeam = cardsGenerator(employeeCards);
  return generateTeam;
};

module.exports = htmlGenerator;
