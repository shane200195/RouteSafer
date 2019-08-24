import flask
from flask import render_template, Flask, request, jsonify
from flask_cors import CORS
import requests
import polyline

app = Flask(__name__, template_folder="templates-flask-test")
CORS(app)

#setting the mode
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

@app.route("/")
def start():
   return render_template('index.html')

@app.route("/test", methods=["POST"])
def test():
    from data_processing import analysis
    polylines = []
    Lat_and_Lng = []
    origin = request.get_json(force=True)['locations'][0]
    destination = request.get_json(force=True)['locations'][1]
    test = requests.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyCHttcfy83akWGX0yXCX53DnrVN1anZFEM&alternatives=true").json()
    routes = test['routes']
    #print(len(Lat_and_Lng[4]))

    for route in routes:
        each_route = []
        for leg in route['legs']:
            for steps in leg['steps']:
                each_route += polyline.decode(steps['polyline']['points'])
                #print(polyline.decode(steps['polyline']['points']))
        Lat_and_Lng.append(each_route)

    #maybe the original Lat_and_Lng are being mixed up
    print(len(Lat_and_Lng[0]))
    print(len(analysis(Lat_and_Lng)[0]))
    #return jsonify({'polyline' : Lat_and_Lng})
    return jsonify({'polyline' : analysis(Lat_and_Lng)})

#setting debug to true
if __name__ == "__main__":
    app.run(host = '0.0.0.0')

#http://100.64.196.194:5000/test