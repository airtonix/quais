import os
from flask import abort, Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import docker
from .models import Application, db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db.init_app(app)

try:
    docker_host = os.getenv('DOCKER_HOST', None)
    if docker_host is None:
        raise EnvironmentError('Could not find DOCKER_HOST environment variable')
    else:
        d = docker.Client(base_url=docker_host)
except EnvironmentError, e:
    raise e


@app.route('/')
def quais():
    containers = {x['Id'][:12]: x for x in d.containers()}
    applications = Application.query.all()
    return render_template('quais.html', applications=applications, containers=containers)


@app.route('/register', methods=['POST'])
def register_application():
    try:
        application = Application.query.filter_by(name=request.form['name']).first()
        print(application)
        if application is None:
            application = Application()
    except:
        abort(500)
    application.update(request.form)
    return '', 200


@app.template_filter('cut')
def cut_filter(s, at):
    try:
        return s[:at]
    except:
        return s