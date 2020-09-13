////////////////////////////////////////////////////////////////////////////////

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
         document.getElementById("target_status").innerHTML = "Success!";
      }
      else if (this.readyState != 4) {
         document.getElementById("target_status").innerHTML = "Loading!";
      }
      else {
         document.getElementById("target_status").innerHTML = "Error!";
      }
   }
   ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
   ajax.setRequestHeader("Content-Type", "application/json");
   ajax.send(JSON.stringify(tweetData));
}
let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);

////////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/posts/1", {
   method: "PATCH", body: JSON.stringify({ completed: true }),
   headers: { "Content-Type": "application/json; charset = UTF - 8" }
}).then(response => response.json()).then(json => console.log(json))

////////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/posts/1", {
   method: "DELETE",
}).then(response => response.json()).then(json => console.log(json))

////////////////////////////////////////////////////////////////////////////////

const logBtn = document.getElementById("btn");
logBtn.addEventListener('click', fetchData);

async function fetchData() {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();
   console.log(data);
   data.forEach(obj => {
      let tweet = document.createElement("div");
      let tweet_title = document.createElement("h4");
      let tweet_body = document.createElement("p");
      tweet_title.innerText = "Subject: " + obj.title;
      tweet_body.innerText = "Content: " + obj.body;
      tweet.appendChild(tweet_title);
      tweet.appendChild(tweet_body);
      document.getElementById("tweet-logs").appendChild(tweet);
   });
}

////////////////////////////////////////////////////////////////////////////////