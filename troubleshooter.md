I got the same error in the past when I seeded my database with entries using Date.now(), which returns a number timestamp, for the fields createdAt and updatedAt:

To fix that, change it to new Date() which is going to return a date string.

https://stackoverflow.com/questions/37153846/sequelize-crashing-on-any-find-query

https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object/38483660