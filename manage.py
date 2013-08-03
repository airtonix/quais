from flask.ext.script import Flask, Server, Manager
from quais.app import app

manager = Manager(app)

@manager.command
def run():
    app.run(host='0.0.0.0', port=8080, debug=True)


@manager.command
def create_db():
    db.init_app(app)
    db.create_all()


if __name__ == "__main__":
    manager.run()