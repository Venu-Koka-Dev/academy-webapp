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