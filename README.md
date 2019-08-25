# RouteSafer

## Demo
https://youtu.be/zO_2NxpAYOk

## Inspiration

Toronto being one of the busiest cities in the world, is faced with tremendous amounts of traffic, whether it is pedestrians, commuters, bikers or drivers. With these comes an increased risk of crashes, and accidents, making methods of safe travel an ever-pressing issue, not only for those in Toronto, but for all people living in Metropolitan areas. This led us to explore possible solutions to such a problem, as we believe that all accidents should be tackled proactively, emphasizing on prevention rather than attempting to better deal with the after effects. Hence, we devised an innovative solution for this problem, which at its core is utilizing machine learning to predict routes/streets that are likely to be dangerous, and advises you on which route to take wherever you want to go. 

## What it does

Leveraging AI technology, RouteSafer provides safer alternatives to Google Map routes and aims to reduce automotive collisions in cities. Using machine learning algorithms such as k-nearest neighbours, RouteSafer analyzes over 20 years of collision data and uses over 11 parameters to make an intelligent estimate about the safety of a route, and ensure the user arrives safe.

## How I built it

The path to implement RouteSafer starts with developing rough architecture that shows different modules of the project being independently built and at the same time being able to interact with each other in an efficient way. We divided the project into 3 different segments of UI, Backend and AI handled by Sherley, Shane & Hanz and Tanvir respectively.

The product leverages extensive API usage for different and diverse purposes including Google map API, AWS API and Kaggle API. Technologies involve React.js for front end, Flask for web services and Python for Machine Learning along with AWS to deploy it on the cloud.

The dataset ‘KSI’ was downloaded from Kaggle and has records from 2014 to 2018 on major accidents that took place in the city of Toronto. The dataset required a good amount of preprocessing because of its inconsistency, the techniques involving OneHotEncoder, Dimensionality reduction, Filling null or None values and also data featuring. This made sure that the data is consistent for all future challenges.

The Machine Learning usage gives the project a smart way to solve our problem, the use of K-Means clustering gave our dataset the feature to extract the risk level while driving on a particular street. The Google API feature gets us different routes and the model helps to give it a risk feature hence making your travel route safer.

## Challenges I ran into

One of the first challenges that we ran into as a team was learning how to properly integrate the Google Maps API polyline, and accurately converting the compressed string into numerical values expressing longitudes and latitudes. We finally solved this first challenge through lots of research, and even more stackoverflow searches 🙂 

Furthermore, another challenge we ran into was the implementation/construction of our machine learning based REST API, as there were many different parts/models that we had to "glue" together, whether it was through http POST and GET requests, or some other form of communication protocol.

We faced many challenges throughout these two days, but we were able to push through thanks to the help of the mentors and lots of caffeine!

## Accomplishments that I'm proud of

The thing that we were most proud of was the fact that we reached all of our initial expectations, and beyond with regards to the product build. At the end of the two days we were left with a deployable product, that had gone through end to end testing and was ready for production. Given the limited time for development, we were very pleased with our performance and the resulting project we built. We were especially proud when we tested the service, and found that the results matched our intuition. 

## What I learned

Working on RouteSafer has helped each one of us gain soft skills and technical skills. Some of us had no prior experience with technologies on our stack and working together helped to share the knowledge like the use of React.js and Machine Learning. The guidance provided on AWS gave us all insights to the big and great world of cloud computing using the world’s leading cloud computing provider. Apart from technical skills leveraging the skill of team work and communication was something we all benefitted from, and will take with us in the future.

## What's next for RouteSafer

Moving forward we see RouteSafer expanding to other large cities like New York, Boston, and Vancouver. Car accidents are a pressing issue in all metropolitan areas, and we want RouteSafer there to prevent them. If one day RouteSafer could be fully integrated into Google Maps, and could be provided on any global route, our goal would be achieved. 

In addition, we aim to expand our coverage by using Google Places data alongside collision data collected by various police forces. Google Places data will further enhance our model and allow us to better serve our customers. 

Finally, we see RouteSafer partnering with a number of large insurance companies that would like to use the service to better protect their customers, provide lower premiums, and cut costs on claims. Partnering with a large insurance company would also give RouteSafer the ability to train and vastly improve its model. 

To summarize, we want RouteSafer to grow and keep drivers safe across the Globe!
