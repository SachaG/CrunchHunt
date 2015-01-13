## About

### What Is This?

CrunchHunt lists the top [TechCrunch](http://techcrunch.com) posts of each day, ranked by popularity (a bit like [Product Hunt](http://producthunt.com)). 

It was built on top of [Telescope](http://telesc.pe), a free open-source app that makes it very easy to create your own communities, as a cool way to showcase what Telescope can do. You can [read more about the process here](http://www.telesc.pe/blog/making-of-crunchhunt/).

Note that CrunchHunt is not affiliated with either TechCrunch or Product Hunt. 

### Technical Details

CrunchHunt is based on [Telescope](http://telesc.pe), an open-source app which uses the [Meteor](http://meteor.com) JavaScript framework. 

It uses Telescope's RSS feed parsing feature to automatically import TechCrunch articles, then ranks them based on their share count.

It's hosted on [Digital Ocean](http://digitalocean.com) (server) and [Compose](http://compose.io) (database), and also uses [Embedly](embed.ly) to generate link thumbnails and [Kimono Labs](https://www.kimonolabs.com/) to retrieve shares counts for each link. 

Real-time performance metrics are provided by [Kadira](https://kadira.io/).

### 