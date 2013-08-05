from .extensions import d, db


class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    container = db.Column(db.String(12))
    env = db.Column(db.Text())
    commit = db.Column(db.String(40))
    vhost = db.Column(db.String(128))
    image = db.Column(db.String(128))
    port = db.Column(db.Integer)

    def __init__(self, **kwargs):
        for (key, value) in kwargs.items():
            setattr(self, key, value)

    def __repr__(self):
        return '<Application %r>' % self.name

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'id': self.id,
            'name': self.name,
            'container': self.container,
            'env': self.env,
            'commit': self.commit,
            'vhost': self.vhost,
            'image': self.image,
            'port': self.port,
            'status': 'started'
        }

    def update(self, data):
        for (key, value) in data.items():
            setattr(self, key, value)
        db.session.add(self)
        db.session.commit()

    def start(self):
        try:
            application = d.start(self.container)
        except Exception, e:
            raise e
        print(application)
        return application

    def stop(self):
        try:
            application = d.stop(self.container)
        except Exception, e:
            raise e
        return application
