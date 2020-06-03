set -e
vuepress build docs
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Pmp-Solutions/PmpTeamMate-docs master:gh-pages
cd -