# Ordners

## Objective:

Mimic a physical (paper) document ordners system for a domestic household.
***
 ## Why:
 Bills and documents from e.g. your insurance company are no longer provided on paper. Folders in an email client can very quickly become cluttered. 

 ***
## Solution
* Show a grid of "Ordners" on the screen. 
* The Ordner grid will have a filterbar.
* The user can click on a Ordner to look in to it.
* The user can CRUD Ordners.
* The user can CRUD Main documents ( emails )
* The user can CRUD Attachments ( PDF, img )

***
## How:
* Download the email and attachments ( "save as" function in the email client ) to a download folder.
<<<<<<< HEAD
* In the upload view of the app the user selects the email and attachment.
* Also in the upload view, the user selects or creates the Ordner and Tab where the documents should be "stored".
=======
* In the upload view of the app selects the email and attachment.
* Also in the upload view, the user selects or creates the ordner and Tab where the documents should be "stored".
>>>>>>> 72856c8cce75f748712e2a956df085bada182655
* The email will be converted to PDF, so that they can be displayed later, and store them in a disk folder.
* The database registers which Ordner and Tab belongs to which upload.

***

## Tech:
| Cat.         |Name           | Link                                     |
|:---          | :-----------  |:-------                                  |
| BA Framework | Express       | http://expressjs.com/                    |
| ORM          | Sequelize     | https://sequelize.org/master/            |
| CLI          | Sequelize-cli | https://github.com/sequelize/cli         |
| Uploader     | Multer        | https://github.com/expressjs/multer      |
| Converter    | Eml-parser    | https://github.com/ankit1329/Eml-Parser  |
| FA Framwork  | Reactjs       | https://reactjs.org/                     |
| Styling      | Material-UI   | https://material-ui.com/                 |
|              |               |                                          |

