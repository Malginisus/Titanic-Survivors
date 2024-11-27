from flask import Flask, jsonify, request
import pickle
from flask_cors import CORS

PORT = 5000
app = Flask(__name__)
CORS(app)
model = pickle.load(open('./model.pkl', 'rb'))

@app.route('/', methods=['POST'])
def predict():
    try:
        data = request.json
        age = int(data['age'])
        fare = int(data['fare'])
        sex = int(data['sex'])
        sibsp = int(data['sibsp'])
        parch = int(data['parch'])
        pclass = int(data['pclass'])
        prediction = model.predict([[age, fare, sex, sibsp, parch, pclass]])
        return jsonify({'Survived': int(prediction[0])}), 200
    except KeyError as e:
        return jsonify({"Error": f"Missing key: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"Error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
