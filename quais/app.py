from flask import Flask, render_template
from .extensions import db
from .api import api


def create_app():
    app = Flask(__name__)
    configure_db(app)
    app.register_blueprint(api)
    return app


def configure_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
    db.init_app(app)


app = create_app()


@app.route('/')
def quais():
    return render_template('quais.html')


@app.template_filter('cut')
def cut_filter(s, at):
    try:
        return s[:at]
    except:
        return s
