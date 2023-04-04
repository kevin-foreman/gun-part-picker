[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Pew Professional

## Description
This application is a full stack React project, with Docker running PostgreSQL to house the database, Express handling the server, and the routes to the custom API, and Node to handle library management, and framework.
This application allows users to select from dynamic lists to select parts to build a custom AR. On first load of the page, the database presents users with all previously stored builds, and identifies them by their unique ID in the database. Users can click on the stored builds to expand them, and see what parts make up each build.
Users are presented with a part selector drop-down, and they can select each part of a custom AR. Once they click on the part, they are presented with another dynamic drop-down, containing a list of brands or manufacturers of the selected part. After selecting the manufacturer, the user is presented with a dynamic submit part button, and upon clicking the submit button, the selected part is added to the page so the user can track the build as it comes together. After selecting all 9 parts (we'll talk more in future dev improvements), the user gets the dynamic submit entire build button. Upon clicking that button, the build is stored in the database and added to the list of previous builds.
