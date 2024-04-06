from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
    try:
        data = request.json
        return jsonify(data)
    except Exception as e:
        return jsonify({"Error": str(e)}), 400

if __name__=="__main__":
    app.run(debug=True)
    