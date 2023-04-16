import pickle
class RandomForestModel:
    file = open('.\RandomForest.pkl', 'rb')
    randomForestModel = pickle.load(file)