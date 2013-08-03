import os
import docker
from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()

d = 'foo'

try:
    docker_host = os.getenv('DOCKER_HOST', None)
    if docker_host is None:
        raise EnvironmentError(
            'Could not find DOCKER_HOST environment variable')
    else:
        d = docker.Client(base_url=docker_host)
except EnvironmentError, e:
    raise e
