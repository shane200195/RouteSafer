import flask
from flask import render_template, Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder="templates-flask-test")
CORS(app)

#setting the mode
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

@app.route("/")
def start():
    return render_template("index.html")

@app.route("/test", methods=["POST"])
def test():
    val = request.get_json(force=True)['location']
    print(val)
    return "Hello"

#setting debug to true
if __name__ == "__main__":
    app.run(host = '0.0.0.0')

#http://100.64.196.194:5000/test