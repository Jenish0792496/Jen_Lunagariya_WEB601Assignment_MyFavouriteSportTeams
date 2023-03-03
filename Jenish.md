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

Assignment 4:
updated pakage.json virson from 0.0.3 to 0.0.4

n my Content-Card, i added , if the imgURL is not set, display a default image on the card
instead , using either *ngIf or *ngSwitch. In my
Content-List component, added or edited some elements to my array of Content so i
have at least 1 item with no imgUrl set.

Created an attribute directive called Hover-Affect. Applied this attribute directive to my
type in my Content-Card, and use it to add an underline to the type when a user
hovers over the type, and remove the underline when they hover away from the type.
Use the same directive to bold the individual tags when a user hovers over one, and
removes the bold when they hover away. 

*************
assignment-5
*************

changed the version of package.json to 0.05

Added a component to my application called CreateContent and added this component to
the top of my ContentList.

In this new component, added an input field for all the necessary fields to make a piece of
content, including the ID, followed by a button.added this, When the button is clicked, send the new
content item up from the CreateContent component to the ContentList using the
promise pattern.
also, added When the new piece of content is successfully sent from the
CreateContent component using that pattern, the resolved promise should invoke a
success function that will add a message to the console saying the addition is successful,
along with the title of the content, and the input fields in the CreateContent's html file
should be cleared of their current values.

also, added a function When the ContentList receives the new content
item, displayed the new item on the ContentList using my preexisting *ngFor's that still
have the pipes operating on them.

If the content fails to be added , the resulting rejected promise should display an error message, in bolded
red text, under the submit button stating that the content failed to be added. When the content
is successfully submitted after a failed attempt, the error message should also be cleared.
