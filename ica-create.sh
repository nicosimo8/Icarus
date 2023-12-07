# //COMPOSE SCRIPT (if needed)//
# sudo docker compose up

# //SCRIPTS//
# volumes create
sudo docker volume create --name icaro-data

# build images
sudo docker pull mysql
sudo docker build -t icarusbackimg:1 ./Icarus-backend
sudo docker build -t icarusfrontimg:1 ./Icarus-front

# containers create
sudo docker create -p3306:3306 --name icarusdb --network icarusnet -e MYSQL_ROOT_PASSWORD=Dedalus.1234 -e MYSQL_USER=dedalus -e MYSQL_PASSWORD=dedalus1234 -e MYSQL_DATABASE=icaro -v icaro-data:/var/lib/mysql mysql
sudo docker create -p4000:4000 --name icarusback --network icarusnet -e PORT=4000 -e DB_HOST=icarus -e DB_PORT:3306 -e DB_USER=dedalus -e DB_PASSWORD=dedalus1234 -e DB_DATABASE=icaro icarusbackimg:1
sudo docker create -p3000:3000 --name icarusfront --network icarusnet -e REACT_APP_API_URL=https://icaro:4000 icarusfrontimg:1
