from flask import abort, Blueprint, json, jsonify, request, Response
from jinja2.filters import do_filesizeformat
from .extensions import d
from .models import Application
import datetime
import json

api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/applications')
def api_applications():
    # containers = {x['Id'][:12]: x for x in d.containers()}
    return json.dumps([x.serialize for x in Application.query.all()])


@api.route('/images')
def api_images():
    data_images = []
    for image in d.images():
        if 'Repository' in image:
            data_images.append({
                'repository': image['Repository'],
                'created': datetime.datetime.fromtimestamp(image['Created']).isoformat(),
                'created_timestamp': image['Created'],
                'tag': image['Tag'],
                'virtual_size': do_filesizeformat(image['VirtualSize']),
                'image_id': image['Id'],
                'size': do_filesizeformat(image['Size'])
            })
    return Response(json.dumps(data_images), 200, mimetype='application/json')


@api.route('/register', methods=['POST'])
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


@api.route('/start/<int:app_id>', methods=['POST'])
def start_application(app_id):
    application = Application.query.get(app_id)
    if application is None:
        return jsonify, 404
    try:
        application = d.start(application.container)
    except Exception, e:
        return jsonify(error=e), 500
    return jsonify(), 200


@api.route('/stop/<int:app_id>', methods=['POST'])
def stop_application(app_id):
    application = Application.query.get(app_id)
    if application is None:
        return jsonify, 404
    try:
        application = d.stop(application.container)
    except Exception, e:
        return jsonify(error=str(e)), 500
    return jsonify(), 200


@api.route('/restart/<int:app_id>', methods=['POST'])
def restart_application(app_id):
    application = Application.query.get(app_id)
    if application is None:
        return jsonify, 404
    try:
        application.stop()
    except Exception, e:
        return jsonify(error=str(e)), 500
    try:
        application.start()
    except Exception, e:
        return jsonify(error=str(e)), 500
    return jsonify(application.serialize), 200
