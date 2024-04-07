from flask import Flask, jsonify, request
import pickle

app = Flask(__name__)
model = pickle.load(open('./model.pkl', 'rb'))

@app.route('/', methods=['GET'])
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
    app.run(debug=True)
