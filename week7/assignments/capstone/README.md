# FSW-123 CAPSTONE PROJECT

I created this project with React and Express to use youtube API with the ability to search for music videos, add videos to a play list. When you click on a video thumnail the video opens up in a new window. To use the youtube API I apllied and obtained an API key which aloowed me to use the API data base From Youtube.

## Libraries and tools used

- React
- ExpressJS
- Node
- Axios
- Youtube API
- Morgan
- Nodemon
- HTML
- CSS
- VS Code for coding the project
- Postman for testing the backend
- Chrome browser for testing the frontend

## Folders/Files

**Folder: Client (React files)**
    - package.json
    - src>index.js
    - src>App.js
    - src>App.css
    - src>components>addbutton.js
    - src>components>musicVideos.js
    - src>components>player.js
    - src>components>playList.js
    - src>components>search.js
    - src>components>videoData.js
    - src>components>videoItem.js
    - src>components>videoList.js

**Folder: Server (Express files)**
    - server.js
    - routes>artist.js
    - routes>genre.js
    - routes>title.js

## Steps to run the program
1. Install Node
2. Have a program to view the code (example: VS Code)
3. Clone the repository to your computer
4. Open the folder where you cloned the repository
5. Run npm install nodemon
6. Open the server folder
7. Run npm install express
8. Run npm install axios
9. Run npm install morgan
10. Run nodemon server.js (to start the backend)
11. in your code program open the client folder
12. Run npm istall react-scripts
13. Run npm install axios
14. Run nodemon start (starts program in the browser) 

## Challenges

I ran into many challenges while making this project. As the errors and walls came up I worked on them one by one. 

1. Obtaining an API key to use Youtube API data base
2. Getting my search bar to actueally bring up what I was searching for.
    - I worked through this challenge by trial and error with hardcoding to being able to actually enter text into the search box. Once that was figured out I then worked on my onSubmit to populate the list.
3. Once I was able to get the video list to populate the videos were not opening in a new window. 
    - This challenge I did a google search on how to open the videos in a popup window. There were numerous examples which I tried a bunch of them until I got one that worked for what I was wanting.
4. My current challenge is populating a playlist by adding videos to it I have an edit and delete button on the playlist items but I have not figured out how to make the videos play from the playlist itself.
    - This challenge is still pending
5. Using two different databases for the app
    - This challenge I had som minor errors in my code as I went through the backend I found an error in my delete method and my put method now my page uses two different backends. I used Youtube for my videos and then used exrpess for my songlist.
