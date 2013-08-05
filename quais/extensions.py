import os
import docker
from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()

try:
    if os.getenv('CI_SERVER', 'no') == 'yes':
        docker_host = 'http://127.0.0.1:4243/'
    else:
	docker_host = os.getenv('DOCKER_HOST', None)
    if docker_host is None:
        raise EnvironmentError(
            'Could not find DOCKER_HOST environment variable')
    else:
        d = docker.Client(base_url=docker_host)
except EnvironmentError, e:
    raise e
