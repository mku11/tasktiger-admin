# debug web admin
# use redis database
# listen to all interfaces (including external!)
# remove -b option to allow only connections from localhost
python3 -m debugpy --listen :5679 ./start_server.py -b 0.0.0.0