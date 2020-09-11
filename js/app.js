
function sendTweet() {
   let tweetTitle = document.getElementById("title-input").value;
   let tweetBody = document.getElementById("body-input").value;
   let tweetData = {
      title: tweetTitle,
      body: tweetBody,
      userId: 1
   };
   let ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
         console.log(JSON.parse(this.responseText));
         document.getElementById("target_status").innerHTML = "Success";
      }
      else if (this.readyState != 4) {
         document.getElementById("target_status").innerHTML = "Loading";
      }
      else {
         document.getElementById("target_status").innerHTML = "Error";
      }
   }
   ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
   ajax.setRequestHeader("Content-Type", "application/json");
   ajax.send(JSON.stringify(tweetData));
}
let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);


fetch("https://jsonplaceholder.typicode.com/posts/1", {
   method: "PATCH", body: JSON.stringify({ completed: true }),
   headers: { "Content-Type": "application/json; charset = UTF - 8" }
}).then(response => response.json()).then(json => console.log(json))


fetch("https://jsonplaceholder.typicode.com/posts/1", {
   method: "DELETE",
}).then(response => response.json()).then(json => console.log(json))


const logBtn = document.getElementById("btn");
logBtn.addEventListener('click', fetchData);

async function fetchData() {

   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();

   data.forEach(obj => {
      Object.entries(obj).forEach(([title, body]) => {
         console.log(`${title} ${body}`);

         document.getElementById("tweet-logs").innerHTML = JSON.stringify(data);
      });
      console.log("==========================");
   });
}



// class tweetsLog {
//    content;

//    getNewTweets(html_target) {
//       let myTweets = this;
//       let ajax = new XMLHttpRequest();
//       ajax.onreadystatechange = function () {

//          if (this.readyState == 4 && this.status == 200) {
//             myTweets.content = JSON.parse(this.responseText);
//             console.log(this.responseText);

//             let tweets_element = document.getElementById(html_target);
//             tweets_element.innerText = myTweets.content;
//          }
//          else if (this.readyState != 4) {
//             document.getElementById(html_target).innerHTML = "Processing";
//          }
//          else {
//             document.getElementById(html_target).innerHTML = "Something Went Wrong";
//          }
//       }
//       ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//       ajax.send();
//    }
// }
// document.getElementById("btn").addEventListener("click", function () {
//    let myTweets = new tweetsLog();
//    myTweets.getNewTweets("tweet-logs");
// });