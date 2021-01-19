if [ -z $1 ];then
parame="update"
else
parame=$1
fi

echo -e "\n== commit code =="
git add .
git commit -m "${parame}"
echo -e "== commit end ==\n"

echo "== Github =="
git push github master
echo -e "== Github end ==\n"

echo "== Gitee =="
git push gitee master
echo -e "== Gitee end ==\n"
