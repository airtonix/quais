import os
from flask import abort, json, jsonify, Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import docker
from .models import Application, db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db.init_app(app)

try:
    docker_host = os.getenv('DOCKER_HOST', None)
    if docker_host is None:
        raise EnvironmentError(
            'Could not find DOCKER_HOST environment variable')
    else:
        d = docker.Client(base_url=docker_host)
except EnvironmentError, e:
    raise e


@app.route('/')
def quais():
    return render_template('quais.html')


@app.route('/api/applications')
def api_applications():
    # containers = {x['Id'][:12]: x for x in d.containers()}
    applications = []
    for application in Application.query.all():
        applications.append({
            'id': application.id,
            'name': application.name,
            'container': application.container,
            'env': application.env,
            'commit': application.commit,
            'vhost': application.vhost,
            'image': application.image,
            'port': application.port
        })
    return json.dumps(applications)


@app.route('/register', methods=['POST'])
def register_application():
    try:
        application = Application.query.filter_by(
            name=request.form['name']).first()
        if application is None:
            application = Application()
    except:
        abort(500)
    application.update(request.form)
    return '', 200


@app.route('/api/start/<int:app_id>', methods=['POST'])
def start_application(app_id):
    application = Application.query.get(app_id)
    try:
        application = d.create_container(application.image, '/bin/bash -c "/start web"', detach=True, ports=[
                                         str(application.port)], environment=['PORT=' + str(application.port)])
    except Exception, e:
        return jsonify(error=e.strerror), 500
    return jsonify(), 200


@app.route('/api/stop/<int:app_id>', methods=['POST'])
def start_application(app_id):
    application = Application.query.get(app_id)
    try:
        application = d.create_container(application.image, '/bin/bash -c "/start web"', detach=True, ports=[
                                         str(application.port)], environment=['PORT=' + str(application.port)])
    except Exception, e:
        return jsonify(error=e.strerror), 500
    return jsonify(), 200


@app.route('/api/restart/<int:app_id>', methods=['POST'])
def start_application(app_id):
    application = Application.query.get(app_id)
    try:
        application = d.create_container(application.image, '/bin/bash -c "/start web"', detach=True, ports=[
                                         str(application.port)], environment=['PORT=' + str(application.port)])
    except Exception, e:
        return jsonify(error=e.strerror), 500
    return jsonify(), 200


@app.template_filter('cut')
def cut_filter(s, at):
    try:
        return s[:at]
    except:
        return s
