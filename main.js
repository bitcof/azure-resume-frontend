window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApiUrl =
  "https://azureresumefuncappleo.azurewebsites.net/api/get_resume_count?code=4FadTb_oOeT1lDa60Rx-ma39Wq3vHKyzfVZYbDIcuTbVAzFuxRHhLw%3D%3D";
const localFunctionApi = "";

const getVisitCount = () => {
  let count = 30;

  if (!functionApiUrl) {
    document.getElementById("counter").innerText = count;
    return count;
  }

  fetch(functionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
