# Titanic-Survivors
### The gateway to machine learning models and deployment of the same using Python Flask on local hosted server. `http://127.0.0.1.5000`
___
`Author: Malginisus`
`Date: 24th of March 2023`
`Update: 17th of April 2023`
___
# Title: "Predicting Titanic Passenger Survival with Machine Learning"
### Side-note: This repository does not have `RandomForest.pkl` because it was too big (~2GB to be specific). But, on running the jupyter notebook the said file can be generated.

# Requirements
1. Python ~ 3.9.0
2. Packages   
    a. pip   
    b. scikit learn   
    c. pandas   
    d. numpy   
    e. pickle   
    
# Datasets
### The dataset used here is obviously not uploaded again as it is drawn from KAGGLE. So here's the link. https://www.kaggle.com/code/dmilla/introduction-to-decision-trees-titanic-dataset/input (great, dataset). The dataset did not need any cleaning (I suppose, might have just called one function `dropna` called that's it).

# MODELS
### 1. Logistic Regression
Simple go to model with binary result (survived or not)
### 2. Random Forest Classifier
Another binary result produced here.

# NEXT STEP
---
##### SIDENOTE: the rfc might have to be refined as i suspect it might have been overfitted. I rather put it down as future scope and brilliant people who clone this repository might improve it further.
---
### Deployment
THE website is made specifically for this purpose to be catered. And here would the screenshots that are of it running I suppose ( I know they are not pretty ).

![Screenshot (12)](https://user-images.githubusercontent.com/113347377/232338367-7565313e-7fe7-46c7-9981-59d9f74eefdf.png)
![Screenshot (13)](https://user-images.githubusercontent.com/113347377/232338439-8bdd703e-744f-4e9d-afeb-cd0d3b494fd5.png)


# CONCLUSION
I might visit back this project after learning a better framework like ReactJS or NextJS or any popular at your time. And major prospect would be to improve UI and improve the model. (As I suspect it biases towards Passenger Class and Fare for survivalability, but I rather digress and state its just how the world works).
