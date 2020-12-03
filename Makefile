#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development
user = skon


all:  PutHTML


PutHTML:
	cp cookie.html /var/www/html/class/softdev/$(user)/cookie/
	cp cookie.css /var/www/html/class/softdev/$(user)/cookie/
	cp cookie.js /var/www/html/class/softdev/$(user)/cookie/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(user)/pi/
