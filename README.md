# RouteSafer

## Inspiration

Toronto being one of the busiest cities in the world, is faced with tremendous amounts of traffic, whether it is pedestrians, commuters, bikers or drivers. With these comes an increased risk of crashes, and accidents, making methods of safe travel an ever-pressing issue, not only for those in Toronto, but for all people living in Metropolitan areas. This led us to explore possible solutions to such a problem, as we believe that all accidents should be tackled proactively, emphasizing on prevention rather than attempting to better deal with the after effects. Hence, we devised an innovative solution for this problem, which at its core is utilizing machine learning to predict routes/streets that are likely to be dangerous, and advises you on which route to take wherever you want to go. 

## What it does

Leveraging AI technology, RouteSafe provides safer alternatives to Google Map routes and aims to reduce automotive collisions in cities. Using machine learning algorithms such as k-nearest neighbours, RouteSafe analyzes over 20 years of collision data and uses over 11 parameters to make an intelligent estimate about the safety of a route, and ensure the user arrives safe.

## How I built it

## Challenges I ran into

One of the first challenges that we ran into as a team was learning how to properly integrate the Google Maps API polyline, and accurately converting the compressed string into numerical values expressing longitudes and latitudes. We finally solved this first challenge through lots of research, and even more stackoverflow searches 🙂 

Furthermore, another challenge we ran into was the implementation/construction of our machine learning based REST API, as there were many different parts/models that we had to "glue" together, whether it was through http POST and GET requests, or some other form of communication protocol.

We faced many challenges throughout these two days, but we were able to push through thanks to the help of the mentors and lots of caffeine!

## Accomplishments that I'm proud of

The thing that we were most proud of was the fact that we reached all of our initial expectations, and beyond with regards to the product build. At the end of the two days we were left with a deployable product, that had gone through end to end testing and was ready for production. Given the limited time for development, we were very pleased with our performance and the resulting project we built. We were especially proud when we tested the service, and found that the results matched our intuition. 

## What I learned



## What's next for RouteSafer

Moving forward we see RouteSafe expanding to other large cities like New York, Boston, and Vancouver. Car accidents are a pressing issue in all metropolitan areas, and we want RouteSafe there to prevent them. If one day RouteSafe could be fully integrated into Google Maps, and could be provided on any global route, our goal would be achieved. 

In addition, we aim to expand our coverage by using Google Places data alongside collision data collected by various police forces. Google Places data will further enhance our model and allow us to better serve our customers. 

Finally, we see RouteSafe partnering with a number of large insurance companies that would like to use the service to better protect their customers, provide lower premiums, and cut costs on claims. Partnering with a large insurance company would also give RouteSafe the ability to train and vastly improve its model. 

To summarize, we want RouteSafe to grow and keep drivers safe across the Globe!
