# Digital Cow Hut Backend
Live Link: [Digital Cow Hut](https://digital-cow-hut-phi-two.vercel.app/)
## Application Routes:
### User
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/649f12389b90b4beece8a316 (Single GET)
* api/v1/users/649f12b09b90b4beece8a319 (PATCH)
* api/v1/users/649f1a069b90b4beece8a363 (DELETE)
### Cows
* api/v1/cows (POST)
* api/v1/cows (GET)
* api/v1/cows/649f14029b90b4beece8a31f (Single GET)
* api/v1/cows/649f145c9b90b4beece8a322 (PATCH)
* api/v1/cows/649f14c19b90b4beece8a325 (DELETE)
### Pagination and Filtering routes of Cows
* api/v1/cows?page=1&limit=10
* api/v1/cows?sortBy=price&sortOrder=asc
* api/v1/cows?minPrice=4500&maxPrice=6000
* api/v1/cows?location=Chattogram
* api/v1/cows?searchTerm=Cha
### Orders
* api/v1/orders (POST)
* api/v1/orders (GET)
