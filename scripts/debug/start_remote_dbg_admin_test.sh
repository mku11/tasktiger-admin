# debug web admin
# use test redis db 7
# listen to all interfaces (including external!)
# remove -b option to allow only connections from localhost
python3 -m debugpy --listen :5679 ./start_server.py -n 7 -b 0.0.0.0
