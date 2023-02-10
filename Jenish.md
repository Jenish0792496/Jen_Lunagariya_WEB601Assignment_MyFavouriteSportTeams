# Jen_Lunagariya_WEB601Assignment_MyFavouriteSportTeams

created new angular application named jen_Lunagariya_MyFavouriteSportTeam
Seted the version of my application to 0.0.1 in the package.json. Add the ability to run the
following from the terminal in your project:

npm run-script generatecomponent to generate a component

npm run-script generatepipe to generate a pipe

npm run-script generatedirective to generate a directive

Added a folder inside of your app folder called helper-files

Add a file to the helper-files folder called content-interface.ts

Inside of this new file, define an interface called Content with the following
parameters:
id as a number title as a string
description as a string
creator as a string
imgURL as an optional string
type as an optional string
tags as an optional array of strings 

commit to git

generated a new component called content-card using npm run-script generatecomponent

now assignment 2 start from here

generated a new component content-lit using ng generate component Content-list

defined an array of 6 content items

Using an ngFor directive in my Content-list's html file, display 5 Content-card's
by passing in the values from my Content array

commited to git

Content-card's should be display the Content passed into it as follows:

Each Content-card tag has a 1 pixel border applied to it

The title should be in a header tag

The image, description, creator, type and tags are visible inside of the box. Styles and
positioning of these elements are your choice, so long as they're in the card. (Hint:
remember that your tags is an array)

Clicking on the image displays the Content's id and title in the console
Add any necessary padding, and margins as you see fit

The first content card displayed should have a black solid border of 2 pixels around it

added this in my content card and content list so it will work as asked by proffesor

finally in my app root component i removed my content card from the html
file and added content list to html so it will display the result as proffesor asked.

finally comit to git


assignment -3

change the version in my pacakage.json to 0.03

added new content of array on my content items and added pipe named contentFilter.pipe.ts
update content items with some with out the type

created pipe named contentFilter.pipe.ts and added single optional paramter
to filter an array of content with returning only that has its type equal to string passed to the pipe.

edited content-list.component.html file for displaying seperate list

added css for the lists's Content-Card's differently from using different font
so thats why anyone can find the differnce between color styling from
one card with a certain type versus one with another type.

added ability on my content-list component and input field at that very top of
the page

added the button that when  clicked it will dsiplay a message about whether a content
item exists with that title or not.

commited to git