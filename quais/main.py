from flask import Flask, render_template
import docker

app = Flask(__name__)


@app.route("/")
def quais():
    d = docker.Client(base_url='http://10.0.42.1:4243', version='1.3')
    containers = [c for c in d.containers()]
    return render_template('quais.html', containers=containers)


@app.template_filter('cut')
def cut_filter(s, at):
    return s[:at]