# //COMPOSE SCRIPT (if needed, this will delete all local images and volumes)//
# sudo docker-compose down -v --rmi local

# //SCRIPTS//
# containers delete
sudo stop icarusfront
sudo docker rm icarusfront
sudo stop icarusback
sudo docker rm icarusback
sudo stop icarusdb
sudo docker rm icarusdb

# images delete
sudo docker rmi icarusfrontimg:1
sudo docker rmi icarusbackimg:1
sudo docker rmi mysql

# volumes delete
sudo docker stop icaro-data
sudo docker rm icaro-data
