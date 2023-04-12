// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the form element
var form = document.getElementById('myForm');

// Listen for form submission events
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission action

  // Get the form data
  var name = form.elements['name'].value;
  var email = form.elements['email'].value;
  var rano = form.elements['rano'].value;
  var department = form.elements['department'].value;
  var tenth_percentage = form.elements['10th_percentage'].value;
  var twelfth_percentage = form.elements['12th_percentage'].value;
  var current_cgpa = form.elements['current_cgpa'].value;
  var num_repositories = form.elements['repo'].value;
  var frequency_of_contribution = form.elements['freq'].value;
  var projects_done_for_community = form.elements['comm'].value;
  var num_collaborations = form.elements['collab'].value;
  var num_badges_earned = form.elements['badges'].value;
  var num_questions_done = form.elements['questions'].value;

  // Save the form data to the database
  database.ref('applications').push({
    name: name,
    email: email,
    rano: rano,
    department: department,
    tenth_percentage: tenth_percentage,
    twelfth_percentage: twelfth_percentage,
    current_cgpa: current_cgpa,
    num_repositories: num_repositories,
    frequency_of_contribution: frequency_of_contribution,
    projects_done_for_community: projects_done_for_community,
    num_collaborations: num_collaborations,
    num_badges_earned: num_badges_earned,
    num_questions_done: num_questions_done
  });

  // Reset the form
  form.reset();
});
