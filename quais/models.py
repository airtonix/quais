from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    container = db.Column(db.String(12))
    env = db.Column(db.Text())
    commit = db.Column(db.String(40))
    vhost = db.Column(db.String(128))

    def __init__(self, **kwargs):
        for (key, value) in kwargs.items():
            setattr(self, key, value)

    def __repr__(self):
        return '<Application %r>' % self.name

    def update(self, data):
        for (key, value) in data.items():
            setattr(self, key, value)
        db.session.add(self)
        db.session.commit()