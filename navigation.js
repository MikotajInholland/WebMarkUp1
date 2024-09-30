
  const buttons = document.querySelectorAll('.main-nav button');

  buttons.forEach(function(button) {  // Step 1: forEach opened
    button.addEventListener('click', function(event) {  // Step 2: addEventListener opened
      const buttonText = event.target.textContent;
      switch (buttonText) {  // Step 3: switch opened
        case 'Home':
          window.location.href = './index.html';
          break;
        case 'Essential Components':
          window.location.href = './essential-components.html';
          break;
        case 'Comparing Components':
          window.location.href = './comparing-components.html';
          break;
        case 'Assembling the Computer':
          window.location.href = './assembling-computer.html';
          break;
        case 'Troubleshooting':
          window.location.href = './troubleshooting.html';
          break;
        case 'Contact and FAQs':
         window.location.href = './contact.html';
          break;
        default:
          console.log('No case found for this button.');
          break;
      }  
    });  
  }); 

