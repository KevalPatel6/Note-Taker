# Note-Taker   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a repository for a note-taker application that can be used to write and save notes. The application was created in order to allow users to write and save notes to organize thoughts or to keep track of daily tasks that need to be completed. The application was created from starter code that was provided, but the back end functionality was built from scratch using Express.js to handle all API requests to the server. As a software developer, from creating this application, I was able to solidify my understanding of backend processes by creating a backend server using JavaScript that would be able to handle all fetch requests and respond appropriately. This includes the ability to serve up all the files when the user goes from one URL to another and the ability to process GET, POST, DELETE fetches when the user interacts with the application. 

## Usage

In order to use this application, you will need to follow the link to the deployed application [here]. Then, the user will need to click on the 'Get Started' button which will take them to the notes page. From here, the user can type in a 'Note Title' and body text for a note, which will then reveal a save icon in the navigation bar. Clicking the save icon will save the note title to the side. The user can then click on the note to reveal the body text or click on the 'Trash Can' icon to delete the note. On the backend side, each click is handling a fetch request and rerouting to the appropriate URL to respond with the correct data. For example, when the user clicks on the save icon then the server is handling a POST request from the localhost:3001/api/notes URL. At the same time, the server is handling a GET request to be able to display the note that was just created onto the page. 

## License

MIT License

Copyright (c) [2023] [Keval Patel]
        
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you would like to reach out to me with any questions, you can email me directly at: [randomemail@gmail.com](mailto:randomemail@gmail.com)

Also, you can visit my github profile page [here](https://github.com/KevalPatel6).