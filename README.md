# Tech Stack
1. NextJS
2. ReactJS
3. TypeScript
4. Tailwindcss
5. Flowbite - for blocks 
6. React Icons - for Icons 
7. Resend - a SaaS based Email service provider
8. React-Emails - a template library to send custom emails
9. Zod - for server side form validation
10. React Hot Toast - to show messages


# Setup
git init
git add .
git commit -m "final commit"
# Link remote repo to our local repo
git remote add origin https://github.com/safak/next-social.git
# Create a new branch & switch
git checkout -b "completed"
git push -u origin completed
# To download a specific branch to local computer
git clone --single-branch -b "completed" https://github.com/safak/next-social.git .

# Pull the latest changes from the remote branch (to integrate any changes that have been made on GitHub):
git pull origin main
git push -u origin main

git pull --rebase origin main
git push -u origin main

git push -u origin main --force

npm i resend
npm i @react-email/components


npm install react-hot-toast