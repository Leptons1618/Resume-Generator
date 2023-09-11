function addNewField0() {
    // Add new field code in Education Qualifications
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let edOb = document.getElementById('ed');
    let edAddButtonOb = document.getElementById('edAddButton');

    edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewField1() {
    // Add new field code in Technical Skills
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let skillOb = document.getElementById('skill');
    let skillAddButtonOb = document.getElementById('skillAddButton');

    skillOb.insertBefore(newNode, skillAddButtonOb);
}

function addNewField2() {
    // Add new field code in Projects
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let projOb = document.getElementById('proj');
    let projAddButtonOb = document.getElementById('projAddButton');

    projOb.insertBefore(newNode, projAddButtonOb);
}

function addNewField3() {
    // Add new field code in Certifications
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('ceField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let ceOb = document.getElementById('ce');
    let ceAddButtonOb = document.getElementById('ceAddButton');

    ceOb.insertBefore(newNode, ceAddButtonOb);
}

function nextPage() {
    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('template-selection').style.display = 'block';
}

function prevPage() {
    window.location.reload(); 
}

function selectTemplate(template) {
    // Collect user data here (similar to generateResume function)
    const imgField = document.getElementById('imgField');
    const name = document.getElementById('nameField').value;
    const address = document.getElementById('addressField').value;
    const contact = document.getElementById('contactField').value;
    const email = document.getElementById('emailField').value;
    const linkedin = document.getElementById('linkedinField').value;
    const github = document.getElementById('gitField').value;
    const leetcode = document.getElementById('lcField').value;
    const portfolio = document.getElementById('ptField').value;
    const educationFields = document.querySelectorAll('.edField');
    const skillsFields = document.querySelectorAll('.skillField');
    const projectsFields = document.querySelectorAll('.projField');
    const certificationsFields = document.querySelectorAll('.ceField');

    // Encode collected data for URL
    const encodedName = encodeURIComponent(name);
    const encodedAddress = encodeURIComponent(address);
    const encodedContact = encodeURIComponent(contact);
    const encodedEmail = encodeURIComponent(email);
    const encodedLinkedin = encodeURIComponent(linkedin);
    const encodedGithub = encodeURIComponent(github);
    const encodedLeetcode = encodeURIComponent(leetcode);
    const encodedPortfolio = encodeURIComponent(portfolio);
    const encodedEducation = Array.from(educationFields).map(field => encodeURIComponent(field.value)).join('|');
    const encodedSkills = Array.from(skillsFields).map(field => encodeURIComponent(field.value)).join('|');
    const encodedProjects = Array.from(projectsFields).map(field => encodeURIComponent(field.value)).join('|');
    const encodedCertifications = Array.from(certificationsFields).map(field => encodeURIComponent(field.value)).join('|');

    // Check if an image was selected
    let encodedImg = 'default-logo.png';
    if (imgField.files.length > 0) {
        const image = imgField.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            encodedImg = encodeURIComponent(event.target.result);
            redirectToTemplate(template, encodedImg, encodedName, encodedAddress, encodedContact, encodedEmail, encodedLinkedin, encodedGithub, encodedLeetcode, encodedPortfolio, encodedEducation, encodedSkills, encodedProjects, encodedCertifications);
        };
        reader.readAsDataURL(image);
    } else {
        redirectToTemplate(template, encodedImg, encodedName, encodedAddress, encodedContact, encodedEmail, encodedLinkedin, encodedGithub, encodedLeetcode, encodedPortfolio, encodedEducation, encodedSkills, encodedProjects, encodedCertifications);
    }
}

function redirectToTemplate(template, img, name, address, contact, email, linkedin, github, leetcode, portfolio, education, skills, projects, certifications) {
    // Construct the URL with parameters
    let templateURL;
    if (template === 'template1') {
        templateURL = 'Templates/template1.html';
    } else if (template === 'template2') {
        templateURL = 'Templates/template2.html';
    }

    const url = `${templateURL}?img=${img}&name=${name}&address=${address}&contact=${contact}&email=${email}&linkedin=${linkedin}&github=${github}&leetcode=${leetcode}&portfolio=${portfolio}&education=${education}&skills=${skills}&projects=${projects}&certifications=${certifications}`;

    // Redirect to the selected template page with user data
    window.location.href = url;
}


function generatePDF() {
    window.print();
}

