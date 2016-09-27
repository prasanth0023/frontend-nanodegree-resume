
var bio={
  "name":"prasanth",
  "role":"web Developer",
  "contacts":{
    "mobile":"8012847092",
    "email":"prasanthpayne@gmail.com",
    "github":"prasanth0023",
    "twitter":"@prasanth",
    "location":"neyveli",
  },
  "welcomeMessage":"hello world",
  "skills":["awesomeness","delivering things","cryogenic sleep","saving the universe"],
  "bioPic":"images/fry.jpg"
}
var work={
  "jobs":[
    {
    "employer":"RMD",
    "title":"Student Trainer",
    "location":"rsgsrgtsr",
    "dates":"2016",
    "description":"The role of a trainer is to develop a competency and skill sets in an individual to perform his/her effectively and efficiently in the work place. The trainer should communicate to the trainees about what is expected out of training in a simple and professional way"
  },
  {
    "employer":"ATECS",
  "title":"Project Manager",
  "location":"rsgtsr",
  "dates":"in progress",
  "description":"As the project manager, your job is to plan, budget, oversee and document all aspects of the specific project you are working on. Project managers may work closely with upper management to make sure that the scope and direction of each project is on schedule, as well as other departments for support."

}
]
}






var education ={
  "schools":[
    {
      "name":"rmd college",
     "location":"chennai",
     "degree":"masters",
     "majors":["cs"],
     "dates":2013,
     "url":"http://example.com"
    },
    {
      "name":"rm college",
     "location":"hennai",
     "degree":"msters",
     "majors":["cas"],
     "dates":2014,
     "url":"http://xample.com"
    }
  ],


"onlineCourse":[
  {
    "title":"JavaScript syntax",
    "school":"udacity",
    "dates":2015,
    "url":"http://www.udacity.com"
  }
]
}
var project ={};

project.Dates="27 sept";
project.Title="animal cards";
project.Description="animal trading cards using html and css";
project.Images="images/fry.jpg";

var formattedBio = HTMLheaderName.replace("%data%","Prasanth");
$("#header").append(formattedBio);
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSKill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSKill);
var formattedSKill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSKill);
var formattedSKill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSKill);
var formattedSKill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSKill);
}
function displayWork() {


for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);


var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
displayWork();
