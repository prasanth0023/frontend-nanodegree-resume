var bio = {
    "name": "Prasanth",
    "role": "Web Developer",
    "contacts": {
        "mobile": "8012847092",
        "email": "prasanthpayne@gmail.com",
        "github": "prasanth0023",
        "twitter": "@prasanth",
        "location": "neyveli",
    },
    "welcomeMessage": "Hello World",
    "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
    "bioPic": "images/me.jpg"
};
bio.display = function() {

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedBio = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedBio);
    $("#header").append(HTMLskillsStart);
    for(var i=0;i < bio.skills.length > 0;i++) {

        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }
    $("#topContacts ,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

};
bio.display();


var work = {
    "jobs": [{
        "employer": "RMD",
        "title": "Student Trainer",
        "location": "chennai",
        "dates": "2016",
        "description": "The role of a trainer is to develop a competency and skill sets in an individual to perform his/her effectively and efficiently in the work place. The trainer should communicate to the trainees about what is expected out of training in a simple and professional way"
    }, {
        "employer": "ATECS",
        "title": "Project Manager",
        "location": "banglore",
        "dates": "in progress",
        "description": "As the project manager, your job is to plan, budget, oversee and document all aspects of the specific project you are working on. Project managers may work closely with upper management to make sure that the scope and direction of each project is on schedule, as well as other departments for support."

    }]
};

function displayWork() {


    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);


        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

var education = {
    "schools": [{
        "name": "RMD college",
        "location": "chennai",
        "degree": "masters",
        "majors": ["CSS"],
        "dates": 2013,
        "url": "http://example.com"
    }, {
        "name": "RM college",
        "location": "banglore",
        "degree": "mtech",
        "majors": ["sass"],
        "dates": 2014,
        "url": "http://xample.com"
    }],


    "onlineCourses": [{
        "title": "JavaScript syntax",
        "school": "udacity",
        "dates": 2015,
        "url": "http://www.udacity.com"
    }]
}
;
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var formatttedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formatttedTitleSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }

};
education.display();


var projects = {
    "projects": [{
            "title": "Clap switch",
            "dates": "september",
            "description": " Here is a Hobby Circuit for electronics hobbyists that can switch on & off a light, Fan, Radio etc., by the sound of clap. The sound of clap is received by a small microphone that is shown biased by resistor R1 in the circuit. The microphone changes sound wave in to electrical wave, which is further amplified by Q1. Transistor Q1 is used as common emitter circuit to amplify weak signals received by the microphone. Amplified output from the collector of transistor Q1 is  feed to the Bistable Multivibrator circuit also known as flip-flop circuit.",
            "images": ["images/Clap_Switch.gif"]


        }

    ]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

            for (var j=0 ;j<  projects.projects[i].images.length;j++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));


            }


    }
};
projects.display();



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
