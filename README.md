# mytasks
trail
# steps to deploy a react app on github pages
example: this repo --> https://brightlight-sun.github.io/mytasks/

1) create git repo in github
2) open react app in vs code terminal
3) 

   > npm install gh-pages --save-dev
     
4) In the package.json file in react app add these lines before "build": "vite build",
   
  -  "predeploy": "npm run build",
  -  "deploy": "gh-pages -d dist",
    
5) In the vite.config.js file add this line before plugins: [react()],

  -   base: "/REPO_NAME_ONLY", (not link)
    
6) open terminal again
7) 

   > git init
   > git add .
   > git commit -m "first commit"
   > git branch -M main
     
9)

    > git remote add origin https://github.com/<username>/<rep Name>.git

10)   

    > npm run deploy
    (published)

9) go to github repository --> settings > pages > deployed link will be created there after few mins
10) share that link wherever required
