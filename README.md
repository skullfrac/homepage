# REACT-IONIC TEMPLATE

This project is bootstrapped with
[Create-React-App](https://github.com/facebook/create-react-app).

This is a 
- webpack
- react
- ionic 

app inside a docker container awaiting further configuration.  
To apply personal changes, initialize the docker container replace  
`package.json` and run `npm install`.


## Overview

- frontend:
```
contains the central part of the template. this structure hints at the
extensibility of the structure and docker-compose.
```

- frontend/resources:
``` 
add any files you want to load via Dockerfile here
```

- scribble(empty directory, needs to be created in `frontend`):
``` 
contents of the generated container. bound to a docker volume
```

## Useful Links:

- [Reference Template App](https://github.com/ionic-team/ionic-react-conference-app)
- [Configure your own `create-react-app`](https://auth0.com/blog/how-to-configure-create-react-app/)
- [Get started with react/ionic](https://ionicframework.com/blog/announcing-the-ionic-react-beta/)
- [Boilerplate explained](https://enappd.com/blog/whats-new-in-ionic-react-rc/87/)
- [Components/Containers Pattern](https://medium.com/@learnreact/container-components-c0e67432e005)

## Credits to:
- [Check it out](https://www.9lessons.info/2019/05/ionic-react-capacitor-mobile-applications.html)
