# Note Taker Starter Code

#### [DeployedCode](https://peaceful-hollows-59652.herokuapp.com/) 

### Sumary

For this week's project, I have created a server-based site that takes notes. When we go to the URL, a request is made to the heroku server to serve our data to the browser, as HTML. The data served to the browser contains all of the extant notes in a JSON, which is then displayed in the browser via HTML. Afterwards, we can enter text into an input field on our screen, and a 'save' icon will automatically appear in the navbar when we do so. When we click on the 'save' icon, the browser makes a post request to the server, with the text we just typed as the body. We also save a numerical index to the request parameters; this is used to delete specific notes that we select.

If there happens to be non-placeholder text, ie right after clicking on a note in the left hand side, and you want to write a completely new note instead, you may just click upon the
pen icon in the navbar, and the text will reset ready for you input.

### Usage
- to create a note, simply click on the text inputs and enter a title, and text, then press the pen icon in the navbar
- to edit a note, click on it in the left hand side list, then move over to the text inputs and edit away
- to delete a note, click on the corresponding bin icon, in the left hand side list

### Resources Used
Chapter 11 of the reading materials is basically a step by step instruction for this project
AskBCS for tips concerning POST methods

