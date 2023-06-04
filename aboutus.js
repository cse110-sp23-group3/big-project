/* points to the file that stores the team profiles in JSON format
   File format guide:
   [
      {
        "profileSrc": "profile.webp",
        "name": "Test Name",
        "role": "Test Role",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.",
        "profilePos": "left"
      },
      {
        "profileSrc": "profile.webp",
        "name": "Test Name 2",
        "role": "Test Role 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.",
        "profilePos": "right"
      },
      {
        "profileSrc": "profile.webp",
        "name": "Test Name 3",
        "role": "Test Role",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.",
        "profilePos": "left"
      },
      {
        "profileSrc": "profile.webp",
        "name": "Test Name 4",
        "role": "Test Role",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.",
        "profilePos": "right"
      }
    ]

 */
const TEAM_PROFILE_PATH = "aboutprofiles.json";

window.addEventListener('DOMContentLoaded', init);

/**
 * The main function that runs on this page
 */
async function init() {
  let teamProfiles = await loadProfiles(TEAM_PROFILE_PATH)
  addProfilesToPage(teamProfiles);
}

/**
 * @description Reads in the profiles from the JSON file.
 * @param {string} filename - the name of the file that stores the profiles
 * @returns {Promise<Array<Object>>} The data from the JSON file
 */
function loadProfiles(filename) {
  return fetch(filename).then(function(response) {
    return response.json();
  });
}

/**
 * @description Adds the profiles to the About Us page
 * @param {Array<Object>>} teamProfiles 
 */
function addProfilesToPage(teamProfiles) {
  const aboutHolder = document.getElementById("about-column");
  for (let i = 0; i < teamProfiles.length; i++) {
    let card = document.createElement('about-card');
    card.data = teamProfiles[i];
    aboutHolder.append(card);
    console.log(aboutHolder.children);
  }
}
