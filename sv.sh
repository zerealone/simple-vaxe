VERSION=$(node -p "require('./package.json').dependencies.simple-vaxe.replace('^', '')")
cmd=$1
RED='\033[0;31m'
GREEN='\033[0;32m'
B_GREEN='\033[42m'
B_BLACK='\033[40m'
NC='\033[0m'
if [ "$1" == 'help' ]
then
  if [ "$2" == '' ]
  then
    echo 'sv <command>'
    echo
    echo List:
    echo
    echo -e "${B_BLACK}help <cmd>${NC} Search for help on <cmd>"
    echo -e "${B_BLACK}version${NC}    Current version and updates"
  elif [ "$2" == 'version' ]
  then
    echo 'Shows your current version of the package. If there is a new version and you are still on the old version, you will get an option to upgrade to the new version.'
  else
    echo -e "${RED}Error:${NC} Simple-Vaxe command does not exist."
  fi
elif [ "$1" == 'version' ]
then
  NOW_VERSION=`node -pe 'JSON.parse(process.argv[1]).version' "$(curl -s https://registry.npmjs.org/simple-vaxe/latest)"`
  echo $VERSION
  if [ $VERSION != $NOW_VERSION ]
  then
    echo -e 'There is a new version!' "${RED}$VERSION${NC} -> ${GREEN}$NOW_VERSION${NC}"
    echo 'Would you like to update your version? (y/n)'
    read -n1 input
    echo
    if [ "$input" == 'y' ]
    then
      bash -lic "npm i simple-vaxe"
      clear
      echo -e "${B_GREEN}Success:${NC} The version has been updated." "${GREEN}$NOW_VERSION${NC}"
    elif [ "$input" == 'n' ]
    then
      echo The package remains at version $VERSION.
    else
      echo No suitable input received.
      echo The package remains at version $VERSION.
    fi
  fi
else
  echo -e "${RED}Error:${NC} Simple-Vaxe command does not exist."
  echo -e "Run ${B_BLACK}sv help${NC} for help."
fi