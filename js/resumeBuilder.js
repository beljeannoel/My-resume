/*
This is empty on purpose! Your code to build the resume will go here.
 */
//
 // $("#main").append("Belinda Jean-noel");
 // var email ="cameron@udacity.com";
 // var newEmail= email.replace ("udacity", "gmail");
 // console.log(email);
 // console.log(newEmail);

var name ="Belinda Jean-noel";
var role= "Web Developer";
 var formattedName= HTMLheaderName.replace("%data%", name);
 var formattedRole= HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var bio= {

          "name":"Belinda JEAN-NOEL", "role":"Web Developer",
          "contacts":{
            "mobile":"305-240-7587",
            "email":"beljeannoel@gmail.com",
            "github":"beljeannoel",
            "twitter":"@bellajean",
            "location":"Miami, FL ",

          },
             "WelcomeMessage":"Welcome to Belinda's Resume Page",
             "skills":["Java","JavaScript", "HTML", "PHP", "SQL Database", "type over 60 WPM"],
             "bioPic":"images/belinda old.jpg"
  };
  $("#main").append(bio.name);

var work = {
        "jobs":[
          {"title":"Office Administrator",
        "employer":"Toussaint Consulting Services Inc",

        "dates":"2013-Present",
        "location":"Miami, FL",
         "description":"Provide consultation while completing applications, briefs, translations, and other documents necessary for an immigration status update/change"
        },
        {"title":"Technical Support Agent",
        "employer":"Alpines Acces/Sykes Inc",
        "dates":"Sept 2010-Sept 2013",
        "location":"Headquater in Denver, FL",
         "description":"Provided customer support for a gaming and cell phone company to provide support with system/phone troubleshooting, networking, billing, created and set up new accounts, and answered questions related to their accounts."
        }

      ]

}
var education = {
	"schools": [{

			"name": "CTU-Online",
			"dates": 2012,
			"degree": "Master",
			"major": ["Computer Science", "English"],
			"city": "Silver Springs, CO",
      "url":"www.ufl.edu"
		}, {

			"name": "University of Florida",
			"dates": 2010,
			"degree": "Bachelor",
			"major": ["CSE", "Mathematics"],
			"city": "Gainesville, FL",
        "url":"www.CTUonline.edu"
		}


	]
}


var projects={

  "projects": [
    {
      "title": "My Resume",
      "dates": "Nov 2016-Present",
      "description": "Created a webpage with HTML, CSS, and JavaScript to update my resume and other important information about me",
       "images": ["www.yahoo.com", "www.gmail.com", "www.hotmail.com"]
    },

    {
      "title": "My Family Tree",
      "dates": "Oct 2016-Nov 2016",
      "description": "Created a webpage with HTML, CSS, and JavaScript for a  family tree of mine that is editable for any user, where they can add family members and add their location that can be displayed on a map",
       "images": ["www.yahoo.com", "www.gmail.com", "www.hotmail.com"]
    },
    {
      "title": "Bella's Wedding Invites",
      "dates": "Aug 2016-Sep 2016",
      "description": "Created a webpage with HTML, CSS, PHP, and JavaScriptto provide wedding invitations personalized templates where users can add their details on the template through a form that is rendered to the template, then they can print it out",
       "images": ["www.yahoo.com", "www.gmail.com", "www.hotmail.com"]
    }
  ]
}

if(bio.skills.length>0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}
function displayWork(){
  for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDate= HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDate);
      var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

  }

}

function inName(name) {
    var finalName = name;
    // Your code goes here!
    var names=finalName.split(" ");
    names[0]=names[0].toLowerCase();
    names[1]= names[1].toUpperCase();
    names[0]=names[0].slice(0,1).toUpperCase() + names[0].slice(1);
    finalName= names.join(" ");


    // Don't delete this line!
    return finalName;
}

$('#main').append(internationalizeButton);

displayWork();

//displaying the view for the projects
projects.display=function(){
  for (project in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLworkEmployer.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLworkTitle.replace("%data%", projects.projects[project].dates);
      var formattedDescriptions = HTMLworkTitle.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescriptions);
      if(projects.projects[project].images.length>0){
        for(image in projects.projects[project].images){
          var formattedImages = HTMLworkTitle.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
        }
      }



  }
}

projects.display();

// work contains
//
//   jobs: array of objects with
//        employer: string
//        title: string
//        location: string
//        dates: string (Can be 'in progress')
//        description: string
//   display: function taking no parameters
