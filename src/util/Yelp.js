const apiKey = 'wnH3zhKJFvMk-51Q6XsKOypA_maDMiOLR4XlXSNge_M7uCStAFtzwtN38zTbJFwiLsocQTbTK2CC162BNjzzzFIs8nZNM_UpVMTn93-4muXQFXZj07OIg3g91G6RW3Yx';
export const yelp = {
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {
        Authorization: `Bearer ${apiKey}`}}).then(response => {
          return response.json()
        }).then(jsonResponse => {
          if(jsonResponse.businesses){
            jsonResponse.businesses.map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.city,
                zipCode: business.location.zip_code,
                category:business.categories.alias,
                rating: business.rating,
                reviewCount: business.review_count
              };
            })
          }
        });
  }
};



/*
Throughout the rest of this project, we will use the fetch() browser API to make our requests.

Since fetch() is a browser API, older browsers may not support it.
To increase the accessibilty of Ravenous to a wider audience of users,
 we'll need to add a fetch() polyfill to support older browsers.

Within the Ravenous directory in your terminal,
run npm install whatwg-fetch --save to install the whatwg-fetch polyfill and add it to your package.json file.


Your fetch() will currently not function correctly due to CORS restrictions.

We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

Prepend the URL path you passed to the first argument in fetch() with the following:

https://cors-anywhere.herokuapp.com/

*/
