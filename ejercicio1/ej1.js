const divCompanies = document.getElementById('companies');
const selectedArea = document.getElementById('selected');
const inputFilter = document.getElementById('search');

DATA.forEach(company => {
  console.log(company);
  const divCompany = document.createElement('div');
  divCompany.classList.add('company');
  const h1 = document.createElement('h1');
  h1.textContent = company.company;  
  divCompany.append(h1);
  const logo = document.createElement('img');
  logo.src = 'img/' + company.logo;
  logo.alt = 'Logo de ' + company.company;
  logo.setAttribute("onclick", "addEmployees(this)");
  divCompany.append(logo);
  divCompany.append(document.createElement('hr'));
  console.log(company.employees);
  company.employees.forEach(emp => {
    const divEmp = document.createElement('div');
    divEmp.classList.add('employee');
    divEmp.dataset.mail = emp.mail;
    const h1Emp = document.createElement('h1');
    h1Emp.textContent = emp.fullname;
    divEmp.append(h1Emp);
    divEmp.setAttribute("onclick", "selectEmployee(this)");
    divCompany.append(divEmp);
  });
  
  divCompanies.append(divCompany);
});

function selectEmployee(divEmp) {
  console.log('Estoy aqui', divEmp);
  selectedArea.append(divEmp);
}

function sendMail() {
  console.log("sending mails...");
  [...selectedArea.children].forEach(emp => console.log(emp.dataset.mail));
}

function addEmployees(logo) {
  console.log(logo.parentElement);
  const divCompany = logo.parentElement;
  [...selectedArea.children].forEach(emp => divCompany.append(emp));
}

function filterEmployees() {
  const employees = document.querySelectorAll('div.employee');
  employees.forEach(emp => {
    if (emp.textContent.toLocaleLowerCase().includes(inputFilter.value.toLocaleLowerCase())) {
      emp.classList.remove('hidden');
    } else {
      emp.classList.add('hidden');
    }
  })

}