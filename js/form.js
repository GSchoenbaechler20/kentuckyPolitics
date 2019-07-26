// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Horizontal Row
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Name Field
namelabel.innerHTML = "Your Name";
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("class", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // E-mail Field
emaillabel.innerHTML = "Your Email";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("class", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Textarea
messagelabel.innerHTML = "Your Message";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("class", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("class", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
