find . -name *.json | xargs grep '"type": "link"' -l | xargs sed -i '' -E "s/\"type\": \"link\"/'type': 'link',\
'blablabla': 'ololo',/"
