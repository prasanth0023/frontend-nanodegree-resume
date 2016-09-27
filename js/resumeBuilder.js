
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
bio.display=function(){
var formattedBiopic = HTMLbioPic.replace("%data%","images/me.jpg");
$("#header").append(formattedBiopic);
var formattedBio = HTMLheaderName.replace("%data%","Prasanth");
$("#header").append(formattedBio);
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedRole);
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
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
bio.display();
var work={
  "jobs":[
    {
    "employer":"RMD",
    "title":"Student Trainer",
    "location":"chennai",
    "dates":"2016",
    "description":"The role of a trainer is to develop a competency and skill sets in an individual to perform his/her effectively and efficiently in the work place. The trainer should communicate to the trainees about what is expected out of training in a simple and professional way"
  },
  {
    "employer":"ATECS",
  "title":"Project Manager",
  "location":"banglore",
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

var projects ={
         "projects":[
           {
             "title":"birds",
            "dates":"september",
           "description":" Here is a Hobby Circuit for electronics hobbyists that can switch on & off a light, Fan, Radio etc., by the sound of clap. The sound of clap is received by a small microphone that is shown biased by resistor R1 in the circuit. The microphone changes sound wave in to electrical wave, which is further amplified by Q1. Transistor Q1 is used as common emitter circuit to amplify weak signals received by the microphone. Amplified output from the collector of transistor Q1 is  feed to the Bistable Multivibrator circuit also known as flip-flop circuit.",
           "images": ["images/Clap-Switch-2.png"]


         }

         ]
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
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);
projects.display = function()
 {
   for(project in projects.projects){
     $("#projects").append(HTMLprojectStart);

     var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
     $(".project-entry:last").append(formattedTitle);
     var formattedDates =HTMLprojectDates.replace("%data%",projects.projects[project].dates);
     $(".project-entry:last").append(formattedDates);

     var formattedDescription =HTMLprojectDescription.replace("%data%",projects.projects[project].description);
     $(".project-entry:last").append(formattedDescription);
     if(projects.projects[project].images.length > 0){
       for(image in projects.projects[project].images){
         var formattedImage =HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
         $(".project-entry:last").append(formattedImage);

       }
     }

   }
 }
 projects.display();
 $("#mapDiv").append(googleMap);
