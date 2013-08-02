from flask.ext.script import Server, Manager
from quais.main import app

manager = Manager(app)

@manager.command
def run():
    app.run(host='0.0.0.0', port=8080, debug=True)

if __name__ == "__main__":
    manager.run()