  //show and hide dropdown list item on button click
//   function show_hide() {
//     var click = document.getElementById("list-items");
//     var btn = document.querySelector(".menu-button");
//     if (click.style.display === "none") {
//        click.style.display = "block";
//        btn.innerHTML = '<i class="fa-solid fa-bars fa-rotate-90 fa-2xl" style="color: #42a7ea;"></i>';
//        click.classList.add('anim');
//     } else {
//        click.style.display = "none";
//        btn.innerHTML = '<i class="fa-solid fa-bars fa-2xl" style="color: #42a7ea;"></i>';
//     }
   
//  }

var btn1 = document.querySelector(".menu-button");
btn1.addEventListener('click', () => {
    var click = document.getElementById("list-items");
    if (click.style.display === "none" || click.style.display === "") {
        click.style.display = "block";
        btn1.innerHTML = '<i class="fa-solid fa-bars fa-rotate-90 fa-2xl" style="color: #42a7ea;"></i>';
        click.classList.add('anim');
    } else {
        click.style.display = "none";
        btn1.innerHTML = '<i class="fa-solid fa-bars fa-2xl" style="color: #42a7ea;"></i>';
    }
});



 const cursor = document.getElementsByClassName('typed')[0]; // Access the first element with the class 'typed'

window.onload = function () {
  setTimeout(function () {
    cursor.classList.remove('show'); // Use "remove" instead of "removeClass"
  }, 3100); // Change the delay to 3000 milliseconds (3 seconds)
};

const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupContainer = document.getElementById('imageUploadPopup');
const uploadForm = document.getElementById('uploadForm');
const categoryCheckboxes = document.querySelectorAll('[name="category"]');

  
    // Function to show the popup
    function showPopup() {
      popupContainer.style.display = 'block';
    }

    // Function to close the popup
    function close() {
      popupContainer.style.display = 'none';
    }

    function showFileName(event) {
      const input = event.target;
      const label = document.getElementById("fileInputLabel");
      const discardBtn = document.getElementById("discardBtn");
    
      if (input.files.length > 0) {
        label.textContent = input.files[0].name;
        discardBtn.style.display = "inline-block";
      } else {
        label.textContent = "Click here to choose your image";
        discardBtn.style.display = "none";
      }
    }
    
    function discardFile() {
      const input = document.getElementById("imageInput");
      const label = document.getElementById("fileInputLabel");
      const discardBtn = document.getElementById("discardBtn");
    
      input.value = ""; // Reset the input value
      label.textContent = "Click here to choose your image";
      discardBtn.style.display = "none";
    }
    

     // Check if at least one checkbox is checked before submitting the form
   function checkFormBeforeSubmit(event) {
    let isChecked = false;
    categoryCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      event.preventDefault();
      alert('Please select at least one category.');
    }
  }
  // Uncheck other checkboxes when a checkbox is checked
  function uncheckOtherCheckboxes(checkedCheckbox) {
    categoryCheckboxes.forEach((checkbox) => {
      if (checkbox !== checkedCheckbox) {
        checkbox.checked = false;
      }
    });
  }

    // Show the popup when the "Show Popup" button is clicked
    showPopupBtn.addEventListener('click', showPopup);

    // Close the popup when the "Close" button is clicked
    closePopupBtn.addEventListener('click', close);

    // Check the form before submitting
    uploadForm.addEventListener('submit', checkFormBeforeSubmit);

    // Add event listeners to checkboxes to handle their behavior
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
          uncheckOtherCheckboxes(event.target);
        }
      });
    });  
    
document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const fullscreenModal = document.querySelector(".fullscreen-modal");
  const closeBtn = document.querySelector(".close-btn");
  const fullscreenImage = document.querySelector(".fullscreen-image");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentImageIndex = 0;

  // Click event listener for each image in the grid
  gridItems.forEach((item, index) => {
      item.addEventListener("click", function () {
          const imgSrc = this.getAttribute("src");
          fullscreenImage.setAttribute("src", imgSrc);
          currentImageIndex = index;
          fullscreenModal.style.display = "block";
      });
  });

  // Click event listener for the close button
  closeBtn.addEventListener("click", function () {
      fullscreenModal.style.display = "none";
  });

  // Click event listener for the previous button
  prevBtn.addEventListener("click", function () {
      currentImageIndex = (currentImageIndex - 1 + gridItems.length) % gridItems.length;
      const prevImageSrc = gridItems[currentImageIndex].getAttribute("src");
      fullscreenImage.setAttribute("src", prevImageSrc);
  });

  // Click event listener for the next button
  nextBtn.addEventListener("click", function () {
      currentImageIndex = (currentImageIndex + 1) % gridItems.length;
      const nextImageSrc = gridItems[currentImageIndex].getAttribute("src");
      fullscreenImage.setAttribute("src", nextImageSrc);
  });

  // Click event listener for the fullscreen modal to detect left/right clicks
  fullscreenModal.addEventListener("click", function (event) {
      const windowWidth = window.innerWidth;
      const clickX = event.clientX;

      if (clickX < windowWidth / 2) {
          // Left half of the screen clicked
          currentImageIndex = (currentImageIndex - 1 + gridItems.length) % gridItems.length;
          const prevImageSrc = gridItems[currentImageIndex].getAttribute("src");
          fullscreenImage.setAttribute("src", prevImageSrc);
      } else {
          // Right half of the screen clicked
          currentImageIndex = (currentImageIndex + 1) % gridItems.length;
          const nextImageSrc = gridItems[currentImageIndex].getAttribute("src");
          fullscreenImage.setAttribute("src", nextImageSrc);
      }
  });
});

// Function to show the Sign In Popup
function showSignInPopup() {
  document.getElementById('signInPopup').style.display = 'block';
}

// Function to close the Sign In Popup
function closePopup() {
  document.getElementById('signInPopup').style.display = 'none';
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('passwordInput');
  const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  const eyeIcon = document.querySelector('.signin-eye');
  if (passwordInput.type === 'password'&& confirmPasswordInput.type === 'password') {
    passwordInput.type = 'text';
    confirmPasswordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    confirmPasswordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}
const passwordField = document.getElementById('passwords');
const eyeIcon = document.querySelector('.login-eye');

eyeIcon.addEventListener('click', () => {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});

// Function to handle Sign In button click
function signIn() {
  // Add your Sign In logic here
  const profilePhoto = document.querySelector('#profile-photo');
  const afterLoginName = document.querySelector('.after-login-name');
  const offLoginButton = document.querySelector('.btn');
  const offSingInButton = document.querySelector('.signup');
  const offSign2Button = document.querySelector('.sign2');
  const shortLogin = document.querySelector('.short-login');
  const loginWelcome = document.querySelector('.login-welcome');
  const welcomeText = document.querySelector('.welcome-text');
  const phoneNo = document.getElementById('phoneNoInput').value;
  
  welcomeText.innerText = `Welcome to Photo Gallery, ${phoneNo}!`;
  afterLoginName.innerText = `${phoneNo}`;
  profilePhoto.style.display = 'block';
  afterLoginName.style.display = 'block';
  offLoginButton.style.display = 'none';
  offSingInButton.style.display = 'none';
  offSign2Button.style.display = 'none';
  loginWelcome.style.display = 'block';
  shortLogin.innerText = 'LOG OUT';

  setTimeout(() => {
    loginWelcome.style.display = 'none';
  }, 3000); // Display for 3 seconds
  closePopup();
  
}

// Function to show the Login Page
function showLoginPage() {
  document.getElementById('loginPage').style.display = 'block';
}

// Function to close the Login Page
function closeLoginPage() {
  document.getElementById('loginPage').style.display = 'none';
}

const ShortLogin = document.querySelector('.short-login');
ShortLogin.addEventListener('click',()=>{
  
  showLoginPage();
  closePopup();
})

// Function to handle Login button click
function login() {
  // Add your Login logic here
  const profilePhoto = document.querySelector('#profile-photo');
  const afterLoginName = document.querySelector('.after-login-name');
  const offLoginButton = document.querySelector('.btn');
  const offSignInButton = document.querySelector('.signup');
  const offSign2Button = document.querySelector('.sign2');
  const shortLogin = document.querySelector('.short-login');
  const loginWelcome = document.querySelector('.login-welcome');
  profilePhoto.style.display = 'block';
  afterLoginName.style.display = 'block';
  offLoginButton.style.display = 'none';
  offSignInButton.style.display = 'none';
  offSign2Button.style.display = 'none';
  loginWelcome.style.display = 'block';
  shortLogin.innerText = 'LOG OUT';
  shortLogin.addEventListener('click',()=>{
    logout();

  })
  setTimeout(() => {
    loginWelcome.style.display = 'none';
  }, 3000); // Display for 3 seconds


  closeLoginPage();
}
const profilePhoto = document.querySelector('#profile-photo');
profilePhoto.addEventListener('click', () => {
  const logoutDiv = document.querySelector('.logout');
  const Triangle = document.getElementById('triangle');
  
  if (logoutDiv.style.display === 'none' && Triangle.style.display === 'none') {
    logoutDiv.style.display = 'block';
    Triangle.style.display = 'block';
  } else {
    logoutDiv.style.display = 'none';
    Triangle.style.display = 'none';
  }
});

function logout(){
  const profilePhoto = document.querySelector('#profile-photo');
  const afterLoginName = document.querySelector('.after-login-name');
  const offLoginButton = document.querySelector('.btn');
  const offSignInButton = document.querySelector('.signup');
  const offSign2Button = document.querySelector('.sign2');
  const shortLogin = document.querySelector('.short-login');
  const loginWelcome = document.querySelector('.login-welcome');
  const logoutDiv = document.querySelector('.logout');
  const Triangle = document.getElementById('triangle');
  logoutDiv.style.display = 'none';
  Triangle.style.display = 'none';
  profilePhoto.style.display = 'none';
  afterLoginName.style.display = 'none';
  offLoginButton.style.display = 'inline';
  offSignInButton.style.display = 'inline';
  offSign2Button.style.display = 'inline';
  loginWelcome.style.display = 'none';
  shortLogin.innerText = 'LOG IN';
  closeLoginPage();

}

const logoutDiv = document.querySelector('.logout');
logoutDiv.addEventListener('click',()=>{
  logout();
})


// Login page transition animation
const loginElements = document.querySelector('.email');
const logintext = document.querySelector('.text');
  loginElements.addEventListener('click',()=>{
    loginElements.classList.add('clicked')
    logintext.classList.add('clicked')
    loginpass.classList.remove('clicked')
    passtext.classList.remove('clicked')
    loginEye.classList.remove('clicked')
  })
const loginpass = document.querySelector('.password');
const passtext = document.querySelector('#text2');
const loginEye = document.querySelector('.login-eye');
  loginpass.addEventListener('click',()=>{
    loginpass.classList.add('clicked')
    passtext.classList.add('clicked')
    loginEye.classList.add('clicked')
    loginElements.classList.remove('clicked')
    logintext.classList.remove('clicked')
  })
const btn = document.querySelector('.btns');
  btn.addEventListener('click', () => {
  btn.classList.add('btnclicked');
  setTimeout(function(){
  btn.classList.remove('btnclicked');},100);
});

//signup page transition animation
const phone = document.querySelector('.phone');
const phoneInput = document.querySelector('.phone-input');
const gmail = document.querySelector('.gmail');
const gmailInput = document.querySelector('.gmail-input');
const newPassword = document.querySelector('.new-password');
const passwordInput = document.querySelector('.password-input');
const confirmPassword = document.querySelector('.confirm-password');
const confirmInput = document.querySelector('.confirm-input');
const signInEye = document.querySelector('.signin-eye');
phoneInput.addEventListener('click',()=>{
  phone.classList.add('clicked')
  phoneInput.classList.add('clicked')
  gmail.classList.remove('clicked')
  gmailInput.classList.remove('clicked')
  newPassword.classList.remove('clicked')
  passwordInput.classList.remove('clicked')
  confirmPassword.classList.remove('clicked')
  confirmInput.classList.remove('clicked')
  signInEye.classList.remove('clicked')
})
gmailInput.addEventListener('click',()=>{
  phone.classList.remove('clicked')
  phoneInput.classList.remove('clicked')
  gmail.classList.add('clicked')
  gmailInput.classList.add('clicked')
  newPassword.classList.remove('clicked')
  passwordInput.classList.remove('clicked')
  confirmPassword.classList.remove('clicked')
  confirmInput.classList.remove('clicked')
  signInEye.classList.remove('clicked')
})
passwordInput.addEventListener('click',()=>{
  phone.classList.remove('clicked')
  phoneInput.classList.remove('clicked')
  gmail.classList.remove('clicked')
  gmailInput.classList.remove('clicked')
  newPassword.classList.add('clicked')
  passwordInput.classList.add('clicked')
  confirmPassword.classList.remove('clicked')
  confirmInput.classList.remove('clicked')
  signInEye.classList.remove('clicked')
})
confirmInput.addEventListener('click',()=>{
  phone.classList.remove('clicked')
  phoneInput.classList.remove('clicked')
  gmail.classList.remove('clicked')
  gmailInput.classList.remove('clicked')
  newPassword.classList.remove('clicked')
  passwordInput.classList.remove('clicked')
  confirmPassword.classList.add('clicked')
  confirmInput.classList.add('clicked')
  signInEye.classList.add('clicked')
})
// to remove all the transition
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (
      !targetElement.classList.contains('email') &&
      !targetElement.classList.contains('password')&&
      !targetElement.classList.contains('phone-input')&&
      !targetElement.classList.contains('gmail-input')&&
      !targetElement.classList.contains('password-input')&&
      !targetElement.classList.contains('confirm-input')&&
      !targetElement.classList.contains('signin-eye')&&
      !targetElement.classList.contains('login-eye')
    ) {
      loginElements.classList.remove('clicked');
      logintext.classList.remove('clicked');
      loginpass.classList.remove('clicked');
      passtext.classList.remove('clicked');
      loginEye.classList.remove('clicked');
      phone.classList.remove('clicked')
      phoneInput.classList.remove('clicked')
      gmail.classList.remove('clicked')
      gmailInput.classList.remove('clicked')
      newPassword.classList.remove('clicked')
      passwordInput.classList.remove('clicked')
      confirmPassword.classList.remove('clicked')
      confirmInput.classList.remove('clicked')
      signInEye.classList.remove('clicked')
    }
  });  

  const showMore = document.querySelector('.show-more');
  const showIcon = document.querySelector('.show-icon');
  const trend = document.querySelector('.trending');

  showMore.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(trend);
    const overflow = computedStyle.overflow;

    if (overflow === 'hidden') {
      showIcon.classList.add('rotat');
      trend.classList.add('more');
    } else {
      trend.classList.remove('more');
      showIcon.classList.remove('rotat');
    }
  });

 