// Your code here
document.querySelector("input[value='Search']").addEventListener("click",async function (e) {   
    e.preventDefault();  
    
    let searchUser = document.querySelector("#githubuser").value;
    let response = await fetch("https://api.github.com/users/" + searchUser);    
   
    if (response.ok) {
        let user = await response.json();

        let tableBody = document.querySelector("tbody");
        let row = document.createElement("tr");
        
        let login = document.createElement("td");
        login.innerText=user.login;
        row.appendChild(login);

        let avatar = document.createElement("td");
        let image = document.createElement("img");
        image.src=user.avatar_url;
        avatar.appendChild(image);
        row.appendChild(avatar);

        let bio = document.createElement("td");
        bio.innerText=user.bio;
        row.appendChild(bio);

        let HTMLURL = document.createElement("td");
        let link = document.createElement("a");
        link.href=user.html_url;
        link.innerText=user.html_url;
        HTMLURL.appendChild(link);
        row.appendChild(HTMLURL);

        tableBody.appendChild(row);
    } else {
        alert("User not found!");
    }


});