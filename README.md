# reserve-my-life
I want to lend out my bedroom and car to appropiate users

# Devepmnent Docs are at
https://github.com/posix4e/example-app
 - This uses gcloud for deployment to staging you will need gcloud installed


If you run the frontend only, it will automatically point to the backend in staging.
 If you need to modify the testing database you will want to use the built in nginx
which mimicks staging/production on port 8000. Note you cannot run both at the same 
time due to bad port choices on my part.


