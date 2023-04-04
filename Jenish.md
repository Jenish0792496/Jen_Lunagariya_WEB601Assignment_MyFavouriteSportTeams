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

************
Assignment-6
************

Move my content array out of my ContentList and into its own file called
contentDb.ts in the helper-files folder

Created a service and name it with my themed content type in the name, followed by the word
Service (ex. If my theme is food, I would call it FoodService). Added a function to this service
that would retrieve the content array from the contentDb file and return it using the obserable
pattern. Invoked this services function in my ContentList in order to retrieve my array of
data and used it to fix my ContentList component so it displayed the content just as it did
before.

Added another method to my new service that returns an individual item from the content array
in the contentDb file, given an id number that is provided, also using the observable
pattern. Used this to add a single ContentCard item to the top of my AppComponent at
an id number of your choosing. Gave this single content item a box-shadow using css defined
as part of the ContentCard components style definitions. Only this content card
have a box-shadow applied to it.

Added the ability to transmit messages to your application the way outlined at this link.
Added my new AppMessages component to the AppComponent component
I styled my messages component however I like
Use my messages service to add a message saying "Content array loaded!" in the
new service whenever the content array is retrieved
Use my messages service to add a message saying "Content Item at id:
idNumberHere" in the new service whenever a single content item at a specific id was
retrieved, where I replaced idNumberHere with the id that was used.

In my AppComponent, added an input where the user can specify an id
number, and a button that, when clicked, would use the new service to retrieve and display a
single ContentCard on the page. If anything other than a number is entered, or a number
outside of the array bounds is entered (which you must check the array length dynamically, not
hard code it in!), display a message using your message service saying an some kind of
error occured.
Uploaded my completed project to your github account, in the same repository as my did
previously, this time on a new branch called Assignment 6.


************
Assignment-7
************

Used my completed assignment 6 as a base line

Changed the version in your package.json to 0.0.7.

Converted my application to use the simulated server discussed in class instead of the
contentDb.ts file system for storing and retrieving the content.

Modified my content interface to accept null id values.

Created a new component called ModifyContentComponent. Added the
ModifyContentComponent to the top of your ContentList.

In the html of the ModifyContentComponent, added in the necessary inputs for each field of
your Content, EXCLUDING the id, and added a button below the inputs, with text on the button
indicating it was for adding content to the list. When a user clicks the button, add a new 'Content'
item to the simulated server database using the http service inside of your content service
and clear all the input fields.

Ensured that the id number for the content is automatically being set by the simulated server,
not manually by the front end code. I also ensured that the id number of new content
starts after the highest id number I already have set on your content (ex. if you have 7
content items in the array you're using for the simulated server, with id's 0 through 6, the first
new content item's id should be 7, followed by 8, etc).

Used the message service you created in assignment 6 to display a message after content is
successfully added to the ContentList. Made sure that the new item is displayed on the
page, even with the pipes applied.

In my ModifyContentComponent, added a field for the Content id
value. If the user does not enter a value in the id field, when they click the button the new
content should be added to the list normally (i.e. the id field gets ignored entirely and the
content gets added normally as described in the assignment). If the user does enter a valid id
number value, and if content exists at that id number, change the existing add content
button's text to indicate they will be updating the content instead of adding new content. When
the button is clicked, update the existing Content on the simulated server with the values
provided in the remaining input boxes using the appropriate http method. Once the content
is updated successfully on the simulated server, use the message service to display a
message that the content was successfully updated, change the button text back to what it
originally was, and clear all the input fields. Made sure that the Content-List is updated
with the new data as well.

**************
**************
Assignment-8
**************
**************

change the version of package.json to 0.0.8

Added a custom angular material theme into my assignment using a colour scheme of grey and blue.
