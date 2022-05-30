#Stationery Dreams Store README

# Description
Stationery Dreams is an online store featuring Asian stationery items galore! Every person's dream items will be featured here. Created using the MERN stack.


## Routes for products
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/products/ | index of products |
GET | /api/v1/products/:id | show page for selected product |
GET | /api/v1/product/new | page to add product |
POST | /api/v1/product/ | add a product |
GET | /api/v1/product/:id/edit | page to edit a product |
PUT | /api/v1/product/:id | edit/update a product |
DELETE | /api/v1/product/:id | delete a product |

## Future implementations
Although I was able to attempt creating routes for an actual shopping cart view page, so that items added to cart using the "ADD OTO CART" button would push the products to the page, I didn't have enough time to test and get the functionality to work. I plan to continue testing this after the project deadline. I would also like to format the products and buttons on the main page better so that the images are in a Grid --- add extra CSS.
