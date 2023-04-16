from flask import Flask, render_template, request, url_for, redirect
import pickle
from src.RandomForestModel import RandomForestModel
app = Flask(__name__)
model = RandomForestModel.randomForestModel

@app.route("/")
def Root():
    return render_template('index.html')

@app.route("/predictor")
def predictor():
    return render_template("predictor.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/survived")
def survived():
    return render_template('survived.html')

@app.route("/didnot")
def didnot():
    return render_template('didnot.html')    

@app.route("/predictor", methods=['POST'])
def submit():
    pclass = int(request.form.get('pclass'))
    age = int(request.form.get('age'))
    parch = int(request.form.get('parch'))
    sibsp = int(request.form.get('sibsp'))
    fare = float(request.form.get('fare'))
    male = True if str(request.form.get('sex'))=='Male' else False
    survived = model.predict([[pclass, age, parch, sibsp, fare, male]])
    survived = survived[0]
    if survived == 1:
        return redirect(url_for('survived'))
    else:
        return redirect(url_for('didnot'))

if __name__ == "__main__":
    app.run(debug=True)
    
